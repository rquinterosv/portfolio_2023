import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setShowContent(true);
    }, 150); // Espera antes de mostrar el texto

    const iconsTimeout = setTimeout(() => {
      setShowIcons(true);
    }, 300); // Espera antes de mostrar los íconos

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(iconsTimeout);
    };
  }, []);

  return (
    <div
      className="static overflow-hidden bg-cover bg-no-repeat p-12 text-center"
      style={{
        backgroundImage: "url('https://tecdn.b-cdn.net/img/new/slides/041.webp')",
        height: '500px',
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="opacity-0 transition-opacity duration-1000 ease-in-out">
          {showContent && (
            <h2 className="mb-4 text-4xl font-semibold">
              Hello! I'm Rafael Quinteros
            </h2>
          )}
        </div>
        <div className="opacity-0 transition-opacity duration-1000 ease-in-out">
          {showIcons && (
            <div className="flex justify-center space-x-4 p-5">
              <a href="https://www.linkedin.com/your-profile" className="social-icon">
                <FaLinkedin size={30} style={{ color: 'white' }} />
              </a>
              <a href="https://github.com/your-username" className="social-icon">
                <FaGithub size={30} style={{ color: 'white' }} />
              </a>
              <a href="mailto:youremail@example.com" className="social-icon">
                <FaEnvelope size={30} style={{ color: 'white' }} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
