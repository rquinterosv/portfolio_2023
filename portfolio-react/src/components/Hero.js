import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from '../css/Hero.module.css'; 


const Hero = () => {

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 400);
  }, []);

  return (
    <div className="bg-white">
      <div className="container mx-auto pt-12 md:pt-24 px-6 text-center">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${showText ? styles['reveal-text'] : ''}`}>
          Tailwind Starter Templates - Hero Product
        </h1>
        <h2 className={`text-lg md:text-xl ${showText ? styles['reveal-text'] : ''}`}>
          This starter template contains:
        </h2>
        <p className="mt-8 mb-8">
          <a href="https://github.com/tailwindtoolbox/Hero-Product/archive/master.zip" target="_blank" rel="noopener" className="inline-block bg-teal hover:bg-teal-dark text-white text-xl font-extrabold py-3 px-5 rounded shadow hover:shadow-lg mr-4">
            Download Template
          </a>
          <a href="https://github.com/tailwindtoolbox/Hero-Product" target="_blank" rel="noopener" className="inline-block bg-grey-lightest hover:bg-black text-grey-darkest hover:text-white text-xl font-extrabold py-3 px-5 rounded shadow hover:shadow-lg">
            View on GitHub
          </a>
        </p>

        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/your-profile" className="social-icon">
            <FaLinkedin size={30} style={{ color: 'black' }} />
          </a>
          <a href="https://github.com/your-username" className="social-icon">
            <FaGithub size={30} style={{ color: 'black' }} />
          </a>
          <a href="mailto:youremail@example.com" className="social-icon">
            <FaEnvelope size={30} style={{ color: 'black' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
