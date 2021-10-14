import React, { useEffect } from 'react';
import '../../App.css';
import PortfolioCard from './PortfolioCard';
import img1 from '../../assets/images/Lightbulb.png';
//require('../../App.css');

export default function Portfolio(props) {
  useEffect(() => {
    document.title = 'Portfolio';
  });
  const portfolioItems = [
    {
    title: "Light Bulb",
    repo: "www.google.com",
    app: "https://desolate-harbor-35577.herokuapp.com/",
    img: img1,
    alt: "Light Bulb"
  },
  {
    title: "Light Bulb",
    repo: "www.google.com",
    app: "https://desolate-harbor-35577.herokuapp.com/",
    img: "/assets/images/Lightbulb.png",
    alt: "Light Bulb"
  },
  {
    title: "Light Bulb",
    repo: "www.google.com",
    app: "https://desolate-harbor-35577.herokuapp.com/",
    img: "/assets/images/Lightbulb.png",
    alt: "Light Bulb"
  },
  {
    title: "Light Bulb",
    repo: "www.google.com",
    app: "https://desolate-harbor-35577.herokuapp.com/",
    img: "/assets/images/Lightbulb.png",
    alt: "Light Bulb"
  },
  {
    title: "Light Bulb",
    repo: "www.google.com",
    app: "https://desolate-harbor-35577.herokuapp.com/",
    img: "/assets/images/Lightbulb.png",
    alt: "Light Bulb"
  },
  {
    title: "Light Bulb",
    repo: "www.google.com",
    app: "https://desolate-harbor-35577.herokuapp.com/",
    img: "/assets/images/Lightbulb.png",
    alt: "Light Bulb"
  },
  
]
  return (
    <div>
      <h1>Portfolio</h1>
      {portfolioItems.map((project) => (
              <PortfolioCard 
              title={project.title} 
              repo={project.repo}
              app={project.app}
              img={project.img}   
              alt={project.alt} 
              >
            </PortfolioCard>
      ))}
    </div>
  );
}
