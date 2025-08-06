import React from 'react'
import './Header.css'

interface HeaderProps {
  onTitleClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onTitleClick }) => {
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
        <div className="logo" onClick={onTitleClick} style={{ cursor: 'pointer' }}>
          <h1>Berkshire Explorer</h1>
          <p className="tagline">Indexing decades of Buffett & Munger wisdom</p>
        </div>
        <div className="agm-notice">
          Upcoming AGM: {getNextAGMDate()}
        </div>
      </div>
    </header>
  )
}

export default Header