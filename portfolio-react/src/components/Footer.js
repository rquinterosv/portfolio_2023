import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center lg:text-center">
        {/* Información personal */}
        <div className="mx-auto lg:w-2/3">
          <h2 className="text-2xl font-bold mb-2">Rafael Quinteros Villablanca</h2>
          <h4 className="text-sm">
            <FaEnvelope className="inline" /> rafael.quinterosv@gmail.com <br />
            Teléfono: +642902206952 <br />
            Ubicación: Auckland, New Zealand
          </h4>
          <div className="mt-4 flex justify-center">
            <a href="enlace-a-linkedin" target="_blank" rel="noopener noreferrer" className="mx-4">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="enlace-a-github" target="_blank" rel="noopener noreferrer" className="mx-4">
              <FaGithub className="text-2xl" />
            </a>
            {/* Add more social links here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
