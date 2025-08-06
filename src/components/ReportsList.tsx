import React, { useState } from 'react'
import './ReportsList.css'
import { Report } from '../types'

interface ReportsListProps {
  reports: Report[]
}

const ReportsList: React.FC<ReportsListProps> = ({ reports }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedReport, setSelectedReport] = useState<Report | null>(null)

  const filteredReports = reports.filter(report =>
    report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.year.toString().includes(searchTerm)
  )

  const sortedReports = [...filteredReports].sort((a, b) => b.year - a.year)

  return (
    <div className="reports-list">
      <div className="reports-header">
        <h2>Annual Reports Archive</h2>
        <input
          type="search"
          placeholder="Search by year or title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="reports-grid">
        {sortedReports.map(report => (
          <div key={report.id} className="report-card">
            <div className="report-year">{report.year}</div>
            <h3 className="report-title">{report.title}</h3>
            <div className="report-stats">
              {report.bookValuePerShare && (
                <div className="stat-item">
                  <span className="stat-label">Book Value/Share</span>
                  <span className="stat-value">${report.bookValuePerShare.toLocaleString()}</span>
                </div>
              )}
            </div>
            <div className="report-actions">
              {report.fileUrl.endsWith('.html') ? (
                <a 
                  href={report.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textDecoration: 'none' }}
                >
                  Read Report (HTML)
                </a>
              ) : (
                <button 
                  className="btn-primary"
                  onClick={() => setSelectedReport(report)}
                >
                  Read Report
                </button>
              )}
              {!report.fileUrl.endsWith('.html') && (
                <a 
                  href={report.fileUrl} 
                  download 
                  className="btn-secondary"
                  onClick={(e) => e.stopPropagation()}
                >
                  Download PDF
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedReport && !selectedReport.fileUrl.endsWith('.html') && (
        <div className="report-modal" onClick={() => setSelectedReport(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedReport(null)}>×</button>
            <h2>{selectedReport.year} Annual Report</h2>
            <iframe
              src={selectedReport.fileUrl}
              title={`${selectedReport.year} Annual Report`}
              className="pdf-viewer"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ReportsList