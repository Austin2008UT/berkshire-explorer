import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>
          The Berkshire Explorer is a not-for-profit project created and maintained by William Wolfram. 
          It's not connected to Berkshire Hathaway in any way. All trademarks and content belong to their 
          rightful owners — especially Berkshire Hathaway.
        </p>
        <p className="footer-contact">
          Got feedback or ideas? Drop me a line at{' '}
          <a href="mailto:william@trifecta.vc">william@trifecta.vc</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer