import React from 'react';

function Proyecto({ proyecto }) {
  return (
    <div className="proyecto">
      <img src={proyecto.imagen} alt={proyecto.nombre} />
      <h3>{proyecto.nombre}</h3>
      <ul>
        {proyecto.lenguajes.map((lenguaje, index) => (
          <li key={index}>{lenguaje}</li>
        ))}
      </ul>
      <p>{proyecto.descripcion}</p>
      <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
        Ver Proyecto
      </a>
    </div>
  );
}

export default Proyecto;
