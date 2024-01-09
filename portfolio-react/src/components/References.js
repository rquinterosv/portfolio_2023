import React from 'react';
import ivan from '../img/ivan.jpeg';
import andres from '../img/andres.jpeg';
import ale from '../img/ale.jpeg';

const References = () => {
  const professionals = [
    {
      name: 'Andrés Gallardo -',
      position: 'General Manager Desafío Latam',
      image: andres,
      description: '"We count on Rafa commitment and leadership, which helped us in the creation of different businesses and services that we are still running today in Desafío Latam. \n\nI would like to highlight his dynamism and responsibility to work autonomously, where he has shown to deliver with quality and on time the challenges we entrust him with. "',
    },
    {
      name: 'Ivan Meneses -',
      position: 'Senior Ecosystem Manager - Huawei',
      image: ivan,
      description: '"We had Rafa in technology services sales at Huawei, where he responsibly demonstrated the integration of various technologies into the client portfolio he managed.\n\nWithin his work, he demonstrated proactivity in order to attract more customers, creating projects and raising internal capital to meet the objectives entrusted to him."',
    },
    {
      name: 'Alejandro Harcha -',
      position: 'Product Manager OOH Planning',
      image: ale,
      description: '"Rafa has a strategic vision for product creation. By raising hypotheses and presenting the analysis for the continuous improvement of proposals, we manage to implement technological solutions and quantitatively demonstrate the success or learnings of our work. "',
    },
    // Puedes agregar más profesionales según sea necesario
  ];

  return (
    <section
      className="rounded-md p-6 text-center shadow-lg md:p-12 md:text-left"
      style={{ backgroundImage: 'linear-gradient(to right, #E0E0E0, #EDF5E1)' }}>
      <div className="flex justify-center">
        <div className="max-w-7xl w-full">
          {professionals.map((professional, index) => (
            <div key={index} className="m-4 block rounded-lg bg-gray-700 text-white p-6 shadow-lg">
              <div className="md:flex md:flex-row items-center">
              <div className="mb-6 flex items-center justify-center md:mx-0">
                <div className='w-40 h-40 md:w-40 md:h-40'>
                  <img
                    src={professional.image}
                    className="rounded-full shadow-md shadow-black/30 w-40 h-40 md:w-40 md:h-40"
                    alt={`Imagen de ${professional.name}`}
                  />
                </div>
              </div>
                <div className="md:ml">
                  <p className="mb-1 font-light m-3 text-lg italic text-neutral-300">
                  {professional.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-1 font-light ml-6 text-lg italic text-neutral-300">
                      {paragraph}
                    </p>
                  ))}
                  </p>
                  <p className="mb-2 text-xl text-neutral-800 dark:text-neutral-200 text-right">
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
