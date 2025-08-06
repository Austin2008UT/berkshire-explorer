import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About</h1>
        <div className="about-content">
          <p>
            The Berkshire Explorer is a not-for-profit project created and maintained by William Wolfram. 
            It's not connected to Berkshire Hathaway in any way. All trademarks and content belong to their 
            rightful owners — especially Berkshire Hathaway.
          </p>
          <p>
            Got feedback or ideas? Drop me a line at{' '}
            <a href="mailto:william@trifecta.vc">william@trifecta.vc</a>
          </p>
          <p>
            <a href="https://wwolfram.com" target="_blank" rel="noopener noreferrer">wwolfram.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About