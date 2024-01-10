import React from 'react';
import perfil from '../img/perfil.jpeg';

// logos
import emailLogo from '../img/gmail.png';
import phoneLogo from '../img/telephone.png';

const Contact = () => {
  return (
    <div className="service mr-10 ml-10">
      <h2 className="text-3xl mr-2 ml-3 mt-2 p-2 text-left sm:text-left">Let's talk about your motivations and ideas to boost your business to the maximum.</h2>
      <h3 className="text-lg mr-2 ml-3 p-3 text-left sm:text-left">
        I am committed to the work entrusted to me and I ensure serious work that is of high quality and delivered on time. <br />
        My hourly rate is USD$20, and I always request an advance fee. With this, we start with everything to boost your ideas.
      </h3>

      {/* Información de contacto */}
      <div className="card w-full bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row sm:items-center sm:justify-evenly">
        {/* Contenido de la tarjeta */}
        <div className="card-image mb-4 sm:mb-0 sm:mr-4">
          <img src={perfil} alt="profile-picture" className="w-full h-80 object-cover rounded-t-lg" />
        </div>
        <div className="card-footer flex flex-col items-center gap-2">
          {/* Información de contacto */}
          <div className="flex items-center gap-3 text-xl">
            <img src={phoneLogo} alt="phone-icon" className="w-6 h-6" />
            <a href="tel:+642902206952">+64 29 0220 6952</a>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <img src={emailLogo} alt="email-icon" className="w-6 h-6" />
            <a href="mailto:rafael.quinterosv@gmail.com">rafael.quinterosv@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
