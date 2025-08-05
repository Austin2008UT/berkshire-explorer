import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import BookValueChart from './components/BookValueChart'
import ReportsList from './components/ReportsList'
import SubsidiaryExplorer from './components/SubsidiaryExplorer'
import { Report, Subsidiary } from './types'

function App() {
  const [activeView, setActiveView] = useState<'reports' | 'chart' | 'subsidiaries'>('reports')
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
      </nav>

      <main className="main-content">
        {loading ? (
          <div className="loading">Loading Berkshire data...</div>
        ) : (
          <>
            {activeView === 'reports' && <ReportsList reports={reports} />}
            {activeView === 'chart' && <BookValueChart reports={reports} />}
            {activeView === 'subsidiaries' && <SubsidiaryExplorer subsidiaries={subsidiaries} />}
          </>
        )}
      </main>
    </div>
  )
}

export default App