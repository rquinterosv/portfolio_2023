import React from 'react';
import '../App.css';

import AboutMe from '../components/AboutMe';
import CardList from '../components/CardList'; 
import Service from '../components/Service';
import References from '../components/References';


// Logos Cards
import logoWork from '../img/cv.png'
import logoPortfolio from '../img/portfolio.png'

const Home = () => {

  const cards = [
    {
      title: "Building Landing Pages",
      subtitle: "I help you grow your company with your new happy clients!",
      description: "Based on my client's requirements, I develop responsive landing pages, implementing SEO practices to enhance page visibility and integrating contact points, forms and social media integration to increase visitor interaction ",
      bgColor: "blue",
      imageUrl: logoWork,
      buttonLink: "/workexp"
    },
    {
      title: "User Conversion Strategy",
      subtitle: "Let's work together and increase your client conversion!",
      description: "Based on user behavior analysis on the website, I offer content advisory sessions to enhance lead interaction upon visiting the webpage. Additionally, I provide ongoing maintenance and continuous support to ensure proper page functionality.",
      bgColor: "green",
      imageUrl: logoPortfolio,
      buttonLink: "/portfolio"
    },
  ];


  return (
    <div>
      <div> 
        {/* <Hero /> */}
        {/* <Welcome /> */}
      </div>
      <AboutMe />
      <Service />
      <CardList cardData={cards} />
      <References />
    </div>
  );
}

export default Home;