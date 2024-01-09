import React from 'react';
import perfil from '../img/perfil.jpeg';

const References = () => {
  const professionals = [
    {
      name: 'Nombre Profesional 1',
      position: 'Cargo del Profesional 1',
      image: perfil,
      description: 'Descripción del Profesional 1...',
    },
    {
      name: 'Nombre Profesional 2',
      position: 'Cargo del Profesional 2',
      image: perfil,
      description: 'Descripción del Profesional 2...',
    },
    {
      name: 'Nombre Profesional 3',
      position: 'Cargo del Profesional 3',
      image: perfil,
      description: 'Descripción del Profesional 3...',
    },
    // Puedes agregar más profesionales según sea necesario
  ];

  return (
    <section
      className="rounded-md p-6 text-center shadow-lg md:p-12 md:text-left"
      style={{ backgroundImage: 'url(https://tecdn.b-cdn.net/img/Photos/Others/background2.jpg)' }}
    >
      <div className="flex justify-center">
        <div className="max-w-6xl w-full">
          {professionals.map((professional, index) => (
            <div key={index} className="m-4 block rounded-lg bg-white p-6 shadow-lg bg-neutral-800 shadow-black/20">
              <div className="md:flex md:flex-row items-center">
                <div className="mb-6 flex items-center justify-center md:mx-0 md:w-20 lg:w-40 sm:w-40">
                  <img
                    src={professional.image}
                    className="rounded-full shadow-md shadow-black/30 md:w-20 md:h-20 lg:w-32 lg:h-32 sm:w-40"
                    alt={`Imagen de ${professional.name}`}
                  />
                </div>
                <div className="md:ml-6">
                  <p className="mb-6 font-light text-neutral-300">
                    {professional.description}
                  </p>
                  <p className="mb-2 text-xl text-neutral-800 dark:text-neutral-200">
                    <span className="font-bold">{professional.name}</span> {professional.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
