import React from 'react'
import './Header.css'

const Header: React.FC = () => {
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
            <span className="stat-value">47+</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header