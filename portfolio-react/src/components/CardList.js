import React from 'react';
import Card from '../components/Card'; // Importa el componente Card

const CardList = ({ cardData }) => {
  return (
    <div className="flex flex-wrap">
      {cardData.map((card, index) => (
        <div key={index} className="w-full md:w-1/3 p-4 md:p-6" key={index}>
          <Card
            key={index}
            title={card.title}
            description={card.description}
            bgColor={card.bgColor}
            imageUrl={card.imageUrl}
            buttonLink={card.buttonLink}
          />
        </div>
      ))}
    </div>
  );
}

export default CardList;
