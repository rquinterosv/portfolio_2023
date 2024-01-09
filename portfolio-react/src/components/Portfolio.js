import React from 'react';
import Proyecto from './Proyecto';
import datosProyecto from './datosProyecto';

function Portfolio() {
  // Dividir los datos en dos filas para mostrar en dos columnas
  const proyectosPrimeraFila = datosProyecto.slice(0, 4);

  return (
    <div className="portfolio p-8">
      <h2 className="text-3xl mr-2 ml-3 mt-2 p-2 text-left sm:text-left">Projects in which I have participated</h2>
      <h3 className="text-lg mr-2 ml-3 p-3 text-left sm:text-left">Specialising in the creation of landing pages</h3>
      <div className="grid grid-cols-2 gap-12 md:grid-cols-2 sm:grid-cols-1">
        {/* Primera fila */}
        {proyectosPrimeraFila.map((proyecto, index) => (
          <div key={index} className="sm:w-full">
            {/* En dispositivos pequeños, se extenderá al ancho completo */}
            <div className="flex justify-center">
              {/* Flex para centrar */}
              <Proyecto proyecto={proyecto} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
