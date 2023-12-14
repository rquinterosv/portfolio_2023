import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">Showing off my skills as a web developer!</p>

        <div className="flex justify-center space-x-4 mt-8">
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
      </div>
    </section>
  );
};

export default Hero;
