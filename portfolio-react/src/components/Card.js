import React from 'react';

const Card = ({ title, description, bgColor, imageUrl, buttonLink }) => {
  return (
    <div className={`bg-${bgColor} dark:bg-gray-800 rounded-lg p-6 text-white`}>
      <img src={imageUrl} alt={title} className="w-full mb-4 rounded-t-lg" />
      <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
      <a href={buttonLink}>
        <button className="bg-white text-black py-2 px-4 mt-4 rounded-md">
          Ver más
        </button>
      </a>
    </div>
  );
}

export default Card;
