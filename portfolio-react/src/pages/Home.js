// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Hero from '../components/Hero';
import Resume from '../components/Resume';

function Home() {
  return (
    <><Hero />
    <Resume /></>
  );
}

export default Home;
