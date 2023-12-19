// src/App.js
import React from 'react';
import Navbar from './components/Navbar'; // Importa tu componente Navbar
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter, Routes y Route
import Home from '../src/pages/Home';
import Portfolio from './pages/Portfolio';
import WorkExp from '../src/pages/WorkExp';
import './App.css';
import { createRoot } from 'react-dom/client';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Renderiza Navbar fuera de las rutas */}
        <div> {/* Aplica el margen superior al contenido */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workexp" element={<WorkExp />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* Rutas restantes */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
