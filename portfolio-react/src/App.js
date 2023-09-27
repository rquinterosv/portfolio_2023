// src/App.js
import React from 'react';
import Proyecto from './components/Proyecto'; // Suponiendo que tienes un componente Proyecto

import proyectosData from './data/proyectos.json';

function App() {
  return (
    <div className="App">
      <h1>Mi Portafolio</h1>
      <div className="lista-proyectos">
        {proyectosData.map((proyecto) => (
          <Proyecto
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
          />
        ))}
      </div>
    </div>
  );
}

export default App;