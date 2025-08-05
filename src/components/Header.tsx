import React from 'react'
import './Header.css'

const Header: React.FC = () => {
  // Calculate next AGM date (Berkshire's AGM is typically first Saturday of May)
  const getNextAGMDate = () => {
    const today = new Date()
    const currentYear = today.getFullYear()
    
    // Find first Saturday of May
    const findFirstSaturday = (year: number) => {
      const may1 = new Date(year, 4, 1) // Month is 0-indexed, so 4 = May
      const dayOfWeek = may1.getDay()
      const firstSaturday = new Date(year, 4, 1 + ((6 - dayOfWeek + 7) % 7))
      return firstSaturday
    }
    
    let agmDate = findFirstSaturday(currentYear)
    
    // If AGM has passed this year, get next year's date
    if (today > agmDate) {
      agmDate = findFirstSaturday(currentYear + 1)
    }
    
    // Format date
    return agmDate.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    })
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Berkshire Explorer</h1>
          <p className="tagline">Exploring decades of wisdom from Warren Buffett's letters</p>
        </div>
        <div className="header-stats">
          <div className="stat">
            <span className="stat-label">Years Covered</span>
            <span className="stat-value">1977-2024</span>
          </div>
          <div className="stat">
            <span className="stat-label">Annual Reports</span>
            <span className="stat-value">48</span>
          </div>
        </div>
        <div className="agm-notice">
          Upcoming AGM: {getNextAGMDate()}
        </div>
      </div>
    </header>
  )
}

export default Header