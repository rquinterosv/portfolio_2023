import React from 'react';
import Proyecto from '../components/Proyecto';
import datosProyecto from '../components/datosProyecto';

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Mis Proyectos</h1>
      <div className="lista-proyectos">
        {datosProyecto.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
