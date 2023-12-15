import React from 'react';

const AboutMe = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        {/* Imagen */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img
            className="rounded-full mx-auto lg:mx-0 h-48 lg:h-auto"
            src="URL_DE_LA_IMAGEN"
            alt="Imagen de perfil"
          />
        </div>
        {/* Texto */}
        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-3xl font-bold mb-4">¡Hola, soy [Tu Nombre]!</h2>
          <p className="text-lg">
            Aquí puedes escribir tu presentación o cualquier texto que desees para hablar sobre ti.
            Puedes incluir tus habilidades, experiencia, objetivos, etc.
          </p>
          {/* Otro contenido de texto, enlaces, etc. */}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
