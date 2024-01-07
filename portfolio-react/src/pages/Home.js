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
      title: "Work Experience",
      description: "You'll be able to see my resume, which is focused on showcasing all of my work experience that I plan to use to become an increasingly experienced developer with a business-oriented vision. Here you can find direct links so you can contact me and discuss future job opportunities.",
      bgColor: "blue",
      imageUrl: logoWork,
      buttonLink: "/workexp"
    },
    {
      title: "Portoflio",
      description: "Here's my portfolio, showcasing some of my most dedicated projects along with the programming languages used. All these projects are for real clients, giving me the opportunity to enhance business ideas with them and create de design of the Web App and also the logic of the user history.",
      bgColor: "green",
      imageUrl: logoPortfolio,
      buttonLink: "/portfolio"
    },
    {
      title: "Lifestyle",
      description: "Here, I share a glimpse of my personal life, displaying my interests and what passionately drives me in life. While brief, the purpose of this section is to demonstrate that my life isn't solely centered around work. I aim to complement my professional endeavors with the enthusiasm and motivation derived from my lifestyle.",
      bgColor: "green",
      imageUrl: logoHobby,
      buttonLink: "/blog"
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