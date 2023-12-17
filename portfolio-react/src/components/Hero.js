import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../css/hero.css'; 


const Hero = () => {
  const [text, setText] = useState(''); 
  const content = ['Hello! I\'m Rafael Quinteros']; 
  const [showIcons, setShowIcons] = useState(false);


  useEffect(() => {
    let count = 0;
    let index = 0;
    let currentText = '';
    const addText = () => {
      currentText = content[count].substring(0, index);
      setText(currentText);
      index++;
      if (index > content[count].length) {
        index = 0;
        count++;
        if (count === content.length) {
          setShowIcons(true);
          return;
        }
        setTimeout(addText, 1500); // Tiempo de espera antes de mostrar el próximo texto
      } else {
        setTimeout(addText, 100); // Tiempo entre cada letra
      }
    };
    addText();
  }, []);

  return (
    <div
    className="static overflow-hidden bg-cover bg-no-repeat p-12 text-center"
    style={{
      backgroundImage: "url('https://tecdn.b-cdn.net/img/new/slides/041.webp')",
      height: '500px',
    }}
  >
    <div
      className="static bottom-0 left-0 right-0 top-0 mt-5 h-full w-full overflow-hidden bg-fixed"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
    >
      <div className="flex flex-col h-full items-center justify-center">
        <div className="text-white">
          <h2 className="mb-4 text-4xl font-semibold">{text}</h2>
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
  </div>
);
};

export default Hero;

