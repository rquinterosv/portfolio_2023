import React from 'react';
import { PDFViewer} from '@react-pdf/renderer';
import '../App.css';

import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import CardList from '../components/CardList'; // Importa CardList en lugar de Card
import Footer from '../components/Footer';


const Home = () => {

  const cards = [
    {
      title: "Work Experience",
      description: "You'll be able to see my resume, which is focused on showcasing all of my work experience that I plan to use to become an increasingly experienced developer with a business-oriented vision.",
      bgColor: "blue",
      imageUrl: "url_de_la_imagen_1.jpg",
      buttonLink: "/ruta-a-otra-pagina-1"
    },
    {
      title: "Portoflio",
      description: "Here's my portfolio, showcasing some of my most dedicated projects along with the programming languages used. All these projects are for real clients, giving me the opportunity to enhance business ideas.",
      bgColor: "green",
      imageUrl: "url_de_la_imagen_2.jpg",
      buttonLink: "/ruta-a-otra-pagina-2"
    },
    {
      title: "Lifestyle",
      description: "Here, I share a glimpse of my personal life, displaying my interests and what passionately drives me in life. While brief, the purpose of this section is to demonstrate that my life isn't solely centered around work. I aim to complement my professional endeavors with the enthusiasm and motivation derived from my lifestyle.",
      bgColor: "green",
      imageUrl: "url_de_la_imagen_2.jpg",
      buttonLink: "/ruta-a-otra-pagina-2"
    },
    // Puedes agregar más objetos con datos de tarjetas si es necesario
  ];


  return (
    <div>
      <div> 
        <Hero />
      </div>
      <AboutMe />
      <CardList cardData={cards} /> {/* Usando CardList para mostrar las tarjetas */}
      <Footer />
    </div>
  );
}

export default Home;