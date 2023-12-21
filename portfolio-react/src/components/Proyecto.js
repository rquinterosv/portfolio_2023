import React from 'react';

function Proyecto({ proyecto }) {
  if (!proyecto || !proyecto.imagen) {
    return null;
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md mb-6 p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Imagen */}
      <div className="col-span-1 md:col-span-1">
        <a href={proyecto.link}>
          <img
            className="object-cover rounded-lg w-full md:w-96 lg:w-40"
            src={proyecto.imagen}
            alt={proyecto.nombre}
          />
        </a>
      </div>

      {/* Detalles del proyecto */}
      <div className="col-span-2 md:col-span-1">
        <a href={proyecto.link} className="text-xl font-bold text-gray-900 hover:underline">
          {proyecto.nombre}
        </a>
        <p className="text-gray-700 mt-2">{proyecto.descripcion}</p>
      </div>

      {/* Logos de lenguajes */}
      <div className="col-span-3 md:col-span-1">
        <div className="flex flex-wrap mt-4">
          {proyecto.lenguajes.map((lenguaje, index) => (
            <div key={index} className="flex items-center w-1/2 mb-2">
              <img src={lenguaje.logo} alt={lenguaje.nombre} className="w-6 h-6 mr-2" />
              <span>{lenguaje.nombre}</span>
            </div>
          ))}
        </div>
        <a href={proyecto.link} className="text-blue-500 hover:underline mt-4 block">Ver más</a>
      </div>
    </div>
  );
}

export default Proyecto;
