import React from 'react';
import perfil from '../img/perfil.jpeg'

const AboutMe = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        {/* Imagen */}
        <div className="lg:w-1/4 lg:order-2 mb-5">
          <img
            className="rounded-full mx-auto lg:mx-0 h-48 lg:h-auto w-48 lg:w-150"
            src={perfil}
            alt="Imagen de perfil"
          />
        </div>
        {/* Texto */}
        <div className="lg:w-3/4 lg:order-1 lg:pl-12">
          <h2 className="text-3xl font-bold mb-4 text-center sm:text-left">Hello! I'm Rafael Quinteros</h2>
          <h4 className="text-xl italic  mb-4 text-center sm:text-left">Fullstack Developer & Business Engineer</h4>
          <p className="text-lg font-bold  text-center sm:text-left p-2">
            "Creativity is intelligence having fun." - Albert Einstein"
          </p>
          <p className="text-lg italic text-center sm:text-left p-2">
          My motivation lies in creating things that are disruptive. Starting my journey as a developer is just the first step to complement my experience as a commercial engineer, my social skills to negotiate with clients, and my passion for making an impact in my environment, with technology that can positively influence various segments of society today.
          </p>
          {/* Otro contenido de texto, enlaces, etc. */}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
