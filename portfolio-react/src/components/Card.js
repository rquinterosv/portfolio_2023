import React from 'react';

const Card = ({ title, description, bgColor }) => {
  return (
    <div className={`bg-${bgColor} p-4 rounded-lg`}>
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
      {/* Otros elementos de la tarjeta */}
    </div>
  );
}

export default Card;
