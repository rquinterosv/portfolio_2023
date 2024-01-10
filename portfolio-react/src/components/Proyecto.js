import React from 'react';

function Proyecto({ proyecto }) {
  if (!proyecto || !proyecto.imagen) {
    return null;
  }

  return (
    <div className="max-w-[24rem] overflow-hidden bg-white rounded-lg shadow-md mb-6">
      {/* Imagen del proyecto */}
      <div>
        <img
          src={proyecto.imagen}
          alt={proyecto.nombre}
          className="w-full h-auto"
        />
      </div>
      {/* Detalles del proyecto */}
      <div className="p-4"> 
        <h4 className="text-blue-gray text-xl font-bold">{proyecto.nombre}</h4>
        <p className="text-gray mt-3">{proyecto.descripcion}</p>
      </div>
      {/* Logos de lenguajes */}
      <div className="p-4 flex justify-center">
        <div className="flex items-center space-x-4">
          {proyecto.lenguajes.map((lenguaje, index) => (
            <div key={index}>
              <img
                src={lenguaje.logo}
                alt={lenguaje.nombre}
                className="w-8 h-8 border-2 border-white hover:z-10"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Botón para el enlace del proyecto */}
      <div className="flex justify-center pb-5"> {/* Contenedor para centrar el botón */}
        {proyecto.link && (
          <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
              Visitar Proyecto
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default Proyecto;
