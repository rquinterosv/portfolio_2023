import React from 'react';
import Card from '../components/Card'; // Importa el componente Card

const CardList = ({ cardData }) => {
  return (
    <div className="flex flex-wrap">
      {cardData.map((card, index) => (
        <div key={index} className="w-full md:w-1/2 p-4 md:p-6" key={index}>
          <Card
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
          />
        </div>
      ))}
    </div>
  );
}

export default CardList;
