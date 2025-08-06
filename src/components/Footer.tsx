import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  const version = 'v0.04'
  // Use import.meta.env for Vite instead of process.env
  const commitHash = import.meta.env.VITE_GIT_SHA || 'main'
  const shortHash = commitHash.substring(0, 7)
  
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>
          The Berkshire Explorer is a non-profit project created and maintained by William Wolfram. 
          It's not connected to Berkshire Hathaway in any way. All trademarks and content belong to their 
          rightful owners — especially Berkshire Hathaway.
        </p>
        <p className="footer-contact">
          Got feedback or ideas? Drop me a line at{' '}
          <a href="mailto:william@trifecta.vc">william@trifecta.vc</a>
        </p>
        <div className="footer-version">
          <span className="version-link">
            {version}
          </span>
          <span className="version-separator">•</span>
          <span className="build-info">
            Built with ☕ and compound interest
          </span>
          <span className="version-separator">•</span>
          <a
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            rel="noopener noreferrer"
            className="license-link"
            title="Licensed under MIT"
          >
            License: MIT
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer