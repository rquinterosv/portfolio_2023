// src/components/Navbar.js
import React from 'react';
import Proyecto from '../components/Proyecto';
import proyectosData from '../data/proyectos.json';

function About() {
  return (
    <><h1>Mi Portafolio</h1><div className="lista-proyectos">
      {proyectosData.map((proyecto) => (
        <Proyecto
          key={proyecto.id}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion} />
      ))}
    </div></>
  );
}

export default About;
