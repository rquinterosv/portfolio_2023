// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Proyecto from '../components/Proyecto';
import proyectosData from '../data/proyectos.json';
import '../App.css';

function Home() {
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

export default Home;
