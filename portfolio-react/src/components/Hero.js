import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


function Hero() {
  return (
    <div class="hero-container">
      <div class="hero-section">

        <h1>Welcome!</h1>
        <h3>I'm Rafael Quinteros</h3>
        <p>Full Stack Web Developer & Business Developer</p>

        <div>
          <a href="https://www.linkedin.com/your-profile">
            <div className="social-icon">
              <FaLinkedin size={30} style={{ color: 'white' }} />
            </div>
          </a>
          <a href="https://github.com/your-username">
            <div className="social-icon">
              <FaGithub size={30} style={{ color: 'white' }} />
            </div>
          </a>
          <a href="mailto:youremail@example.com">
            <div className="social-icon">
              <FaEnvelope size={30} style={{ color: 'white' }} />
            </div>
          </a>
        </div>

      </div>
    </div>

  );
}

export default Hero;
