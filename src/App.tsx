import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import BookValueChart from './components/BookValueChart'
import ReportsList from './components/ReportsList'
import SubsidiaryExplorer from './components/SubsidiaryExplorer'
import SECFilings from './components/SECFilings'
import Bookshelf from './components/Bookshelf'
import Videos from './components/Videos'
import Quotes from './components/Quotes'
import Footer from './components/Footer'
import { Report, Subsidiary } from './types'

function App() {
  const [activeView, setActiveView] = useState<'reports' | 'chart' | 'subsidiaries' | 'sec' | 'bookshelf' | 'videos' | 'quotes'>('reports')
  const [reports, setReports] = useState<Report[]>([])
  const [subsidiaries, setSubsidiaries] = useState<Subsidiary[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [reportsRes, subsidiariesRes] = await Promise.all([
        fetch('/api/reports'),
        fetch('/api/subsidiaries')
      ])
      
      if (reportsRes.ok) {
        const reportsData = await reportsRes.json()
        setReports(reportsData)
      }
      
      if (subsidiariesRes.ok) {
        const subsidiariesData = await subsidiariesRes.json()
        setSubsidiaries(subsidiariesData)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <Header />
      
      <nav className="main-nav">
        <button 
          className={activeView === 'reports' ? 'active' : ''}
          onClick={() => setActiveView('reports')}
        >
          Annual Reports
        </button>
        <button 
          className={activeView === 'chart' ? 'active' : ''}
          onClick={() => setActiveView('chart')}
        >
          Book Value Chart
        </button>
        <button 
          className={activeView === 'subsidiaries' ? 'active' : ''}
          onClick={() => setActiveView('subsidiaries')}
        >
          Subsidiaries
        </button>
        <button 
          className={activeView === 'sec' ? 'active' : ''}
          onClick={() => setActiveView('sec')}
        >
          SEC Filings
        </button>
        <button 
          className={activeView === 'bookshelf' ? 'active' : ''}
          onClick={() => setActiveView('bookshelf')}
        >
          Bookshelf
        </button>
        <button 
          className={activeView === 'videos' ? 'active' : ''}
          onClick={() => setActiveView('videos')}
        >
          Videos
        </button>
        <button 
          className={activeView === 'quotes' ? 'active' : ''}
          onClick={() => setActiveView('quotes')}
        >
          Quotes
        </button>
      </nav>

      <main className="main-content">
        {loading ? (
          <div className="loading">Loading Berkshire data...</div>
        ) : (
          <>
            {activeView === 'reports' && <ReportsList reports={reports} />}
            {activeView === 'chart' && <BookValueChart reports={reports} />}
            {activeView === 'subsidiaries' && <SubsidiaryExplorer subsidiaries={subsidiaries} />}
            {activeView === 'sec' && <SECFilings />}
            {activeView === 'bookshelf' && <Bookshelf />}
            {activeView === 'videos' && <Videos />}
            {activeView === 'quotes' && <Quotes />}
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App