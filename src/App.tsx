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
import About from './components/About'
import Footer from './components/Footer'
import { Report, Subsidiary } from './types'

function App() {
  const [activeView, setActiveView] = useState<'reports' | 'chart' | 'subsidiaries' | 'sec' | 'bookshelf' | 'videos' | 'quotes' | 'about'>('reports')
  const [reports, setReports] = useState<Report[]>([])
  const [subsidiaries, setSubsidiaries] = useState<Subsidiary[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [reportsRes, subsidiariesRes] = await Promise.all([
        fetch('/api/reports'),
        fetch('/api/subsidiaries')
      ])
      
      if (!reportsRes.ok) {
        console.error('Failed to fetch reports:', reportsRes.status, reportsRes.statusText)
        const text = await reportsRes.text()
        console.error('Response:', text.substring(0, 200))
        setError(`Failed to fetch reports: ${reportsRes.status}`)
      } else {
        const reportsData = await reportsRes.json()
        setReports(reportsData)
      }
      
      if (!subsidiariesRes.ok) {
        console.error('Failed to fetch subsidiaries:', subsidiariesRes.status, subsidiariesRes.statusText)
      } else {
        const subsidiariesData = await subsidiariesRes.json()
        setSubsidiaries(subsidiariesData)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      setError('Error fetching data: ' + String(error))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <Header onTitleClick={() => setActiveView('reports')} />
      
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
        <button 
          className={activeView === 'about' ? 'active' : ''}
          onClick={() => setActiveView('about')}
        >
          About
        </button>
      </nav>

      <main className="main-content">
        {loading ? (
          <div className="loading">Loading Berkshire data...</div>
        ) : error ? (
          <div className="error" style={{ color: 'red', padding: '2rem', textAlign: 'center' }}>
            {error}
            <br />
            <button onClick={() => window.location.reload()}>Reload Page</button>
          </div>
        ) : (
          <>
            {activeView === 'reports' && <ReportsList reports={reports} />}
            {activeView === 'chart' && <BookValueChart reports={reports} />}
            {activeView === 'subsidiaries' && <SubsidiaryExplorer subsidiaries={subsidiaries} />}
            {activeView === 'sec' && <SECFilings />}
            {activeView === 'bookshelf' && <Bookshelf />}
            {activeView === 'videos' && <Videos />}
            {activeView === 'quotes' && <Quotes />}
            {activeView === 'about' && <About />}
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App