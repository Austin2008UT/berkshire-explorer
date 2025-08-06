import React, { useState, useEffect } from 'react'
import './SECFilings.css'
import { SECFiling } from '../types'

const SECFilings: React.FC = () => {
  const [filings, setFilings] = useState<SECFiling[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')
  const [selectedFiling, setSelectedFiling] = useState<SECFiling | null>(null)

  useEffect(() => {
    fetchSECFilings()
  }, [])

  const fetchSECFilings = async () => {
    try {
      const response = await fetch('/api/sec-filings')
      if (response.ok) {
        const data = await response.json()
        setFilings(data)
      }
    } catch (error) {
      console.error('Error fetching SEC filings:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredFilings = filings.filter(filing => {
    if (filter === 'all') return true
    if (filter === '10-K') return filing.formType === '10-K'
    if (filter === '10-Q') return filing.formType === '10-Q'
    if (filter === '8-K') return filing.formType === '8-K'
    if (filter === 'proxy') return filing.formType === 'DEF 14A'
    return filing.formType === 'Other'
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const getFormTypeClass = (formType: string) => {
    switch (formType) {
      case '10-K': return 'form-10k'
      case '10-Q': return 'form-10q'
      case '8-K': return 'form-8k'
      case 'DEF 14A': return 'form-proxy'
      default: return 'form-other'
    }
  }

  const getFormDescription = (formType: string) => {
    switch (formType) {
      case '10-K': return 'Annual Report'
      case '10-Q': return 'Quarterly Report'
      case '8-K': return 'Current Report'
      case 'DEF 14A': return 'Proxy Statement'
      default: return 'Other Filing'
    }
  }

  if (loading) {
    return <div className="loading">Loading SEC filings...</div>
  }

  return (
    <div className="sec-filings">
      <div className="filings-header">
        <div>
          <h2>SEC Filings</h2>
          <p className="subtitle">
            Real-time access to Berkshire Hathaway's regulatory filings with the SEC
          </p>
        </div>
        <div className="filings-stats">
          <div className="stat-badge">
            <span className="stat-number">{filings.length}</span>
            <span className="stat-label">Total Filings</span>
          </div>
        </div>
      </div>

      <div className="filings-controls">
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All Filings
          </button>
          <button 
            className={filter === '10-K' ? 'active' : ''}
            onClick={() => setFilter('10-K')}
          >
            10-K (Annual)
          </button>
          <button 
            className={filter === '10-Q' ? 'active' : ''}
            onClick={() => setFilter('10-Q')}
          >
            10-Q (Quarterly)
          </button>
          <button 
            className={filter === '8-K' ? 'active' : ''}
            onClick={() => setFilter('8-K')}
          >
            8-K (Current)
          </button>
          <button 
            className={filter === 'proxy' ? 'active' : ''}
            onClick={() => setFilter('proxy')}
          >
            Proxy Statements
          </button>
        </div>
      </div>

      <div className="filings-table-container">
        <table className="filings-table">
          <thead>
            <tr>
              <th>Form Type</th>
              <th>Filing Date</th>
              <th>Period End</th>
              <th>Description</th>
              <th>Size</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredFilings.map(filing => (
              <tr key={filing.id} className="filing-row">
                <td>
                  <span className={`form-type ${getFormTypeClass(filing.formType)}`}>
                    {filing.formType}
                  </span>
                  <span className="form-desc">{getFormDescription(filing.formType)}</span>
                </td>
                <td className="date-cell">{formatDate(filing.filingDate)}</td>
                <td className="date-cell">{formatDate(filing.reportDate)}</td>
                <td className="description-cell">{filing.description}</td>
                <td className="size-cell">{filing.size}</td>
                <td className="actions-cell">
                  <button 
                    className="view-btn"
                    onClick={() => setSelectedFiling(filing)}
                  >
                    View Details
                  </button>
                  <a 
                    href={`https://www.sec.gov/edgar/browse/?CIK=1067983&owner=exclude`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn"
                  >
                    View on SEC
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedFiling && (
        <div className="filing-modal" onClick={() => setSelectedFiling(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedFiling(null)}>×</button>
            
            <div className="modal-header">
              <h2>
                <span className={`form-type ${getFormTypeClass(selectedFiling.formType)}`}>
                  {selectedFiling.formType}
                </span>
                {selectedFiling.description}
              </h2>
              <div className="filing-meta">
                <div className="meta-item">
                  <span className="meta-label">Filing Date:</span>
                  <span className="meta-value">{formatDate(selectedFiling.filingDate)}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Period End:</span>
                  <span className="meta-value">{formatDate(selectedFiling.reportDate)}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Accession Number:</span>
                  <span className="meta-value">{selectedFiling.accessionNumber}</span>
                </div>
              </div>
            </div>

            <div className="documents-section">
              <h3>Documents</h3>
              <div className="documents-list">
                {selectedFiling.documents.map((doc, index) => (
                  <div key={index} className="document-item">
                    <div className="document-info">
                      <span className="document-seq">{doc.seq}</span>
                      <div>
                        <div className="document-desc">{doc.description}</div>
                        <div className="document-type">{doc.type}</div>
                      </div>
                    </div>
                    <a 
                      href={`https://www.sec.gov/edgar/browse/?CIK=1067983&owner=exclude`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="document-link"
                    >
                      View on SEC →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="filing-footer">
              <a 
                href={`https://www.sec.gov/Archives/edgar/data/1067983/${selectedFiling.accessionNumber}/${selectedFiling.accessionNumber}-index.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="sec-link"
              >
                View on SEC EDGAR →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SECFilings