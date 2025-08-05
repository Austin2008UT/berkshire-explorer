import React, { useState } from 'react'
import './SubsidiaryExplorer.css'
import { Subsidiary } from '../types'

interface SubsidiaryExplorerProps {
  subsidiaries: Subsidiary[]
}

const SubsidiaryExplorer: React.FC<SubsidiaryExplorerProps> = ({ subsidiaries }) => {
  const [selectedSubsidiary, setSelectedSubsidiary] = useState<Subsidiary | null>(null)
  const [industryFilter, setIndustryFilter] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const industries = Array.from(new Set(subsidiaries.map(s => s.industry))).sort()

  const filteredSubsidiaries = subsidiaries.filter(subsidiary => {
    const matchesIndustry = industryFilter === 'all' || subsidiary.industry === industryFilter
    const matchesSearch = subsidiary.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subsidiary.description?.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesIndustry && matchesSearch
  })

  const sortedSubsidiaries = [...filteredSubsidiaries].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="subsidiary-explorer">
      <div className="explorer-header">
        <h2>Berkshire Hathaway Subsidiaries</h2>
        <p className="subtitle">
          Explore the diverse portfolio of companies that make up Berkshire Hathaway
        </p>
      </div>

      <div className="filters">
        <input
          type="search"
          placeholder="Search subsidiaries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={industryFilter}
          onChange={(e) => setIndustryFilter(e.target.value)}
          className="industry-select"
        >
          <option value="all">All Industries</option>
          {industries.map(industry => (
            <option key={industry} value={industry}>{industry}</option>
          ))}
        </select>
      </div>

      <div className="subsidiaries-grid">
        {sortedSubsidiaries.map(subsidiary => (
          <div
            key={subsidiary.id}
            className="subsidiary-card"
            onClick={() => setSelectedSubsidiary(subsidiary)}
          >
            <h3 className="subsidiary-name">{subsidiary.name}</h3>
            <div className="subsidiary-info">
              <span className="industry-tag">{subsidiary.industry}</span>
              {subsidiary.acquisitionYear && (
                <span className="acquisition-year">Acquired {subsidiary.acquisitionYear}</span>
              )}
            </div>
            {subsidiary.description && (
              <p className="subsidiary-description">{subsidiary.description}</p>
            )}
            <div className="mentions-count">
              {subsidiary.mentions.length} mentions in annual reports
            </div>
          </div>
        ))}
      </div>

      {selectedSubsidiary && (
        <div className="subsidiary-modal" onClick={() => setSelectedSubsidiary(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedSubsidiary(null)}>×</button>
            
            <div className="modal-header">
              <h2>{selectedSubsidiary.name}</h2>
              <div className="modal-tags">
                <span className="industry-tag">{selectedSubsidiary.industry}</span>
                {selectedSubsidiary.acquisitionYear && (
                  <span className="acquisition-year">Since {selectedSubsidiary.acquisitionYear}</span>
                )}
              </div>
            </div>

            {selectedSubsidiary.description && (
              <div className="modal-description">
                <h3>About</h3>
                <p>{selectedSubsidiary.description}</p>
              </div>
            )}

            <div className="mentions-section">
              <h3>Mentions in Annual Reports ({selectedSubsidiary.mentions.length})</h3>
              <div className="mentions-list">
                {selectedSubsidiary.mentions.map((mention, index) => (
                  <div key={index} className="mention-item">
                    <div className="mention-header">
                      <span className="mention-year">{mention.reportYear}</span>
                      {mention.pageNumber && (
                        <span className="page-number">Page {mention.pageNumber}</span>
                      )}
                    </div>
                    <p className="mention-context">{mention.context}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SubsidiaryExplorer