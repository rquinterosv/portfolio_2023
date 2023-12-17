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
      title: "Título de la tarjeta 1",
      description: "Descripción de la tarjeta 1",
      bgColor: "blue",
      imageUrl: "url_de_la_imagen_1.jpg",
      buttonLink: "/ruta-a-otra-pagina-1"
    },
    {
      title: "Título de la tarjeta 2",
      description: "Descripción de la tarjeta 2",
      bgColor: "green",
      imageUrl: "url_de_la_imagen_2.jpg",
      buttonLink: "/ruta-a-otra-pagina-2"
    },
    {
      title: "Título de la tarjeta 3",
      description: "Descripción de la tarjeta 2",
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