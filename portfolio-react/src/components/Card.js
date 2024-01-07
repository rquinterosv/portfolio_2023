import React from 'react';

const Card = ({ title, subtitle, description, bgColor, imageUrl, buttonLink }) => {
  return (
    <div className={`bg-${bgColor} dark:bg-gray-800 rounded-lg p-6 text-white flex flex-col justify-between items-center text-center`}>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
        <h5 className='pb-2 italic font-bold md:text-base' style={{ color: '#EDF5E1' }}>{subtitle}</h5>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}

export default Card;