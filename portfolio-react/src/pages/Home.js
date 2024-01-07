import React from 'react';
import '../App.css';

import AboutMe from '../components/AboutMe';
import CardList from '../components/CardList'; 
import Service from '../components/Service';

import Footer from '../components/Footer';

// Logos Cards
import logoWork from '../img/cv.png'
import logoPortfolio from '../img/portfolio.png'
import logoHobby from '../img/hobby.png'

const Home = () => {

  const cards = [
    {
      title: "Building Landing Pages",
      subtitle: "Let's grow your business with happy consumers!",
      description: "Based on my client's requirements, I develop responsive landing pages, implementing SEO practices to enhance page visibility and integrating contact points to increase visitor interaction",
      bgColor: "blue",
      imageUrl: logoWork,
      buttonLink: "/workexp"
    },
    {
      title: "User-Centric Conversion Strategy",
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
    </div>
  );
}

export default Home;