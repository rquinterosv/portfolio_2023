import React from 'react';

// img
import img1 from '../img/hob1.jpg'

const Blog = () => {
  // Supongamos que tienes una lista de objetos que contienen información sobre tus hobbies
  const hobbies = [
    {
      id: 1,
      title: 'Outdoor Life',
      description: 'Amante de capturar momentos únicos a través de la lente.',
      images: [img1, img1]
    },
    {
      id: 2,
      title: 'Music',
      description: 'Explorador de senderos naturales y amante de la aventura al aire libre.',
      images: [img1, img1]

    },
    {
      id: 3,
      title: 'Adventure',
      description: 'Amante de capturar momentos únicos a través de la lente.',
      images: [img1, img1]

    },
    // Agrega más hobbies según sea necesario
  ];

  return (
    <div>
      {hobbies.map((hobby, index) => (
        <section key={index} className="bg-white dark:bg-gray-900 pt-20">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{hobby.title}</h2>
              <p className="mb-4">{hobby.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {hobby.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  className={`w-full rounded-lg ${imgIndex === 1 ? 'mt-4 lg:mt-10' : ''}`}
                  src={image}
                  alt={`Hobby ${hobby.id} image ${imgIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Blog;

