// src/components/Navbar.js
import React from 'react';
import { PDFViewer} from '@react-pdf/renderer';
import '../App.css';
import Pdf from '../components/Pdf';

function Home() {
  const datosCV  = {
    name: 'Rafael Quinteros Villablanca',
    role: 'Fullstack Developer & Business Engineer',
    presentation: 'Proficient in full-stack development with an engineering background in commercial management, I bring 3 years of experience as a Product Manager and 2 years as a freelance developer. Renowned for adaptability and drive, I actively seek professional challenges and embody a nomadic spirit, fueled by an insatiable curiosity for continuous tech learning.',
    email: 'rafael.quinterosv@gmail.com',
    whatsapp: '+1 236 777 7984',
    phone: '029 0220 6952',
    location: 'New Zealand',
    linkedin: 'in/rafael-quinteros/',
    github: 'github.com/rquinterosv',
    website: 'www.tusitio.com',
    experience: [
      {
        title: 'Project Coordinator',
        company: 'Grimme Fighters (Canada)',
        date: 'Jul 2023 - Oct 2023',
        description: ['Negotiated competitive electricity prices with various companies, showcasing adeptness in strategic pricing and contract negotiations.', 'Traveled extensively across the country, establishing connections and conducting negotiations, demonstrating adaptability and rapport-building skills.', 'Gained initial exposure in sales tactics and commercial engineering, laying the foundation for a career in Business Development while acquiring valuable insights into market dynamics.'],
      },
      {
        title: 'Product Manager',
        company: 'Desafío Latam (Chile)',
        date: 'Mar 2021 - Jul 2023',
        description: ['I drive product strategies that blend business goals, market needs, and technology, leading teams to deliver innovative solutions.', 'I manage the entire product journey, from concept to ongoing evolution, ensuring user-centric products aligned with market demands.', 'I facilitate seamless communication among technical, design, and business teams, ensuring everyone works cohesively towards a shared product vision.', 'Some of these projects include Women on IT, Desafío Latam Incubator, Codigo Futuro, and collaboration with several leading companies in Chile."'],
      },
      {
        title: 'Full Stack Developer',
        company: 'Desafío Latam (Chile)',
        date: 'Oct 2022 - Sept 2023',
        description: ['Web Development Introduction: HTMl/CSS, Git + Github, Bootstrap and good practice.', 'Advance CSS: Flexboxm CSS Grid and create responsive projects', 'Javascript Introduction: Proms, Arrays, Objects, Cicles, Functions, Conditions and funcional programing', 'React: Hooks, useState/Effect, Render, States, Router, useParams/Negative and good practice', 'SQL Introduction: Select, Where, Count, Javing, Joins, Creation of tables, Relation models, Postgresql', 'Backend Node/Express: NODE, EXPRESS, API REST, CORS, CRUD, JWT, Testing.'],
      },
      {
        title: 'Business Developer Manager',
        company: 'Huawei Technology Latinamerica',
        date: 'Mar 2019 - Feb 2021',
        description: ['Proficiently absorbed technological knowledge from a multinational corporation, enhancing skill sets.', 'Successfully collaborated with prestigious companies in Chile, fostering professional relationships and business growth.', 'Initiated my career transition into the IT realm, starting as a developer and immersing myself in the tech landscape to expand expertise.'],
      },
      {
        title: 'Business Developer',
        company: 'Ecom Energía (Chile)',
        date: 'Jul 20218 - Mar 2019',
        description: ['Negotiated competitive electricity prices with various companies, showcasing adeptness in strategic pricing and contract negotiations.', 'Traveled extensively across the country, establishing connections and conducting negotiations, demonstrating adaptability and rapport-building skills.', 'Gained initial exposure in sales tactics and commercial engineering, laying the foundation for a career in Business Development while acquiring valuable insights into market dynamics.'],
      },
      // Más experiencias laborales...
    ],
    education: [
      {
        degree: 'Full Stack Developer',
        institution: 'Canadian College of Technology and Business',
        date: 'Jul 2023 - Dec 2023',
      },
      {
        degree: 'FullStack Developer',
        institution: 'Bootcamp Desafio Latam (Chile)',
        date: '2021 - 2022',
      },
      {
        degree: 'Business Engineer',
        institution: 'Universidad Andres Bello (Chile)',
        date: '2013 - 2018',
      },
      // Más información educativa...
    ],
    skills: ['Habilidad 1', 'Habilidad 2', 'Habilidad 3'],
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', width: '100%' }}>
        <h1>My Resume</h1>
        <div className="pdf-container">
          <PDFViewer style={{ width: '98%', height: '70vh' }}>
            <Pdf datos={datosCV} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}

export default Home;
