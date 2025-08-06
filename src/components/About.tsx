import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About</h1>
        <div className="about-content">
          <p>
            After saving up, I bought my first BRK share in 2011 at 19. A year later, I made the first (of seven) trips to Omaha for the Annual Meeting. Buffett and Munger continue to influence how I think about decisions, integrity, and long-term thinking—they've been among my most important teachers. I'm grateful.
          </p>
          <p>
            The Berkshire Explorer is a not-for-profit project I built and maintain. It has no connection to Berkshire Hathaway. All trademarks and content belong to their rightful owners—especially Berkshire Hathaway.
          </p>
          <p>
            Say hello: <a href="mailto:william@trifecta.vc">william@trifecta.vc</a> · <a href="https://wwolfram.com" target="_blank" rel="noopener noreferrer">wwolfram.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About