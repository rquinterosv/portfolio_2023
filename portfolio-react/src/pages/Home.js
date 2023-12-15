import React from 'react';
import { PDFViewer} from '@react-pdf/renderer';
import '../App.css';

import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Card from '../components/Card';
import Footer from '../components/Footer';


const Home = () => {

  const cardsData = [
    {
      title: 'Tarjeta 1',
      description: 'Descripción de la tarjeta 1',
      bgColor: 'blue-200',
    },
    {
      title: 'Tarjeta 2',
      description: 'Descripción de la tarjeta 2',
      bgColor: 'green-200',
    },
    {
      title: 'Tarjeta 3',
      description: 'Descripción de la tarjeta 3',
      bgColor: 'yellow-200',
    },
  ];

  return (
    <div>
      <Hero />
      <AboutMe />
      <div className="flex flex-row justify-around">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            bgColor={card.bgColor}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;