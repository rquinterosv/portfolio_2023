import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Información de contacto */}
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="text-xl font-bold mb-2">Contacto</h3>
          <p>Email: tuemail@example.com</p>
          <p>Teléfono: +1234567890</p>
          {/* Otra información de contacto */}
        </div>

        {/* Redes sociales */}
        <div className="lg:w-2/3 flex justify-center lg:justify-end space-x-4">
          <a href="URL_FACEBOOK" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square text-2xl"></i>
          </a>
          <a href="URL_TWITTER" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter-square text-2xl"></i>
          </a>
          {/* Agrega más enlaces a tus redes sociales */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
