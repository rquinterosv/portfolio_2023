// src/App.js
import React from 'react';
import Navbar from './components/Navbar'; // Importa tu componente Navbar
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter, Routes y Route
import Home from '../src/pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from '../src/pages/Contact';
import Resume from '../src/pages/Resume';
import './App.css';
import { createRoot } from 'react-dom/client';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Renderiza Navbar fuera de las rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
