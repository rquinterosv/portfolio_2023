// src/App.js
import React from 'react';
import Navbar from './components/Navbar'; // Importa tu componente Navbar
import Proyecto from './components/Proyecto';
import proyectosData from './data/proyectos.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter, Routes y Route
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Renderiza Navbar fuera de las rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
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
