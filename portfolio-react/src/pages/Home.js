// src/components/Navbar.js
import React from 'react';
import { PDFViewer} from '@react-pdf/renderer';
import '../App.css';
import Hero from '../components/Hero';
import Pdf from '../components/Pdf';

function Home() {
  const datosCV  = {
    name: 'Rafael Quinteros Villablanca',
    role: 'Fullstack Developer & Business Engineer',
    presentation: 'Proficient in full-stack development with an engineering background in commercial management, I bring 3 years of experience as a Product Manager and 2 years as a freelance developer. Renowned for adaptability and drive, I actively seek professional challenges and embody a nomadic spirit, fueled by an insatiable curiosity for continuous tech learning.',
    email: 'rafael.quinterosv@gmail.com',
    whatsapp: '+1 236 777 7984',
    phone: '029 0220 6952',
    linkedin: 'in/rafael-quinteros/',
    github: 'github.com/rquinterosv',
    website: 'www.tusitio.com',
    experience: [
      {
        title: 'Cargo',
        company: 'Empresa',
        date: 'Fecha',
        description: 'Descripción',
      },
      // Más experiencias laborales...
    ],
    education: [
      {
        degree: 'Grado',
        institution: 'Institución',
        date: 'Fecha',
      },
      // Más información educativa...
    ],
    skills: ['Habilidad 1', 'Habilidad 2', 'Habilidad 3'],
  };

  return (
    <>
      <Hero />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>My Resume</h1>
          <PDFViewer width={600} height={800}>
            <Pdf datos={datosCV} />
          </PDFViewer>
        </div>
      </div>
    </>
  );
  }

export default Home;
