import React from 'react';

const Card = ({ title, description, bgColor, imageUrl, buttonLink }) => {
  return (
    <div className={`bg-${bgColor} dark:bg-gray-800 rounded-lg p-6 text-white flex flex-col justify-between items-center text-center`} style={{ height: '350px', position: 'relative' }}>
      <div className="flex flex-col items-center justify-center">
        <div className="flex-shrink-0 mb-4">
          <img src={imageUrl} alt={title} style={{ width: '70px', height: '70px' }} className="rounded-lg" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
      <div className="self-end absolute bottom-4 right-4">
        <a href={buttonLink}>
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Ver más
          </button>
        </a>
      </div>
    </div>
  );
}

export default Card;
