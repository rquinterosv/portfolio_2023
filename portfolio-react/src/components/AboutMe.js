import React, { useState, useEffect } from 'react';
import perfil from '../img/perfil.jpeg';
import emailLogo from '../img/gmail.png';
import linkedinLogo from '../img/linkedin.png';
import githubLogo from '../img/github.png';



const AboutMe = () => {


  return (
    <section className="py-12 mt-10" style={{ backgroundImage: 'linear-gradient(to right, #E0E0E0, #EDF5E1)' }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Texto */}
        <div className="md:w-3/4 md:pr-12 order-2">
          <h2 className="text-3xl mb-2 p-1 text-center sm:text-left md:text-4xl lg:text-6xl">From Code to Consumer, Full-Stack Business-oriented</h2>
          <h3 className="text-lg mb-2 p-2 italic text-center sm:text-left lg:text-2xl">My name is Rafael Quinteros, a Full Stack web developer prepared to elevate your business with creative and innovative proposals, using my expertise in Business Development and Product Management</h3>
          
          {/* Separador */}
          <hr className="my-4 border-gray-300  w-3/4 mx-auto md:mx-0" />
          
          <p className='mb-2 italic p-2 text-center sm:text-left lg:text-xl'>Developing landing pages for various projects and tailoring client requirements for improved presentation of products or services aimed at achieving higher sales conversions.</p>
        </div>
        {/* Imagen */}
        <div className="md:w-1/4 order-1 mb-5">
          <img
            className="rounded-full mx-auto md:mx-0 h-48 md:h-auto w-48 md:w-150"
            src={perfil}
            alt="Imagen de perfil"
          />
        </div>
      </div>
      <div className="container mx-auto flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/rafael-quinteros/" className="social-icon">
          <img src={linkedinLogo} alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
        </a>
        <a href="https://github.com/rquinterosv" className="social-icon">
          <img src={githubLogo} alt="GitHub" style={{ width: '30px', height: '30px' }} />
        </a>
        <a href="mailto:rafael.quinterosv@gmail.com" className="social-icon">
          <img src={emailLogo} alt="Email" style={{ width: '30px', height: '30px' }} />
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
