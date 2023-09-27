// src/components/Proyecto.js
import React from 'react';

function Proyecto({ titulo, descripcion }) {
  return (
    <div className="proyecto">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  );
}

export default Proyecto;
