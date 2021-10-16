import React, { useEffect } from "react";
//import '../../App.css';
import PortfolioCard from "./PortfolioCard";
import img1 from "../../assets/images/Lightbulb.png";
import img2 from "../../assets/images/EventFinderScreenCapture.png";
import img3 from "../../assets/images/WeatherDashboard-1.png";
import img4 from "../../assets/images/CodingQuiz.png";
import img5 from "../../assets/images/WDS.png";
//require('../../App.css');

export default function Portfolio(props) {
  useEffect(() => {
    document.title = "Portfolio";
  });
  const portfolioItems = [
    {
      title: "Light Bulb",
      repo: "www.google.com",
      app: "https://desolate-harbor-35577.herokuapp.com/",
      img: img1,
      alt: "Light Bulb",
    },
    {
      title: "Event Finder+",
      repo: "https://github.com/JHU-Project1/Project1",
      app: "https://jhu-project1.github.io/Project1/",
      img: img2,
      alt: "Event Finder+",
    },
    {
      title: "Weather Dashboard",
      repo: "https://github.com/shooters00/WeatherDashboard",
      app: "https://shooters00.github.io/WeatherDashboard/",
      img: img3,
      alt: "Weather Dashboard",
    },
    {
      title: "Coding Quiz",
      repo: "https://github.com/shooters00/Coding-Quiz",
      app: "https://shooters00.github.io/Coding-Quiz/",
      img: img4,
      alt: "Coding Quiz",
    },
    {
      title: "Work Day Scheduler",
      repo: "https://github.com/shooters00/Work-Day-Scheduler",
      app: "https://shooters00.github.io/Work-Day-Scheduler/",
      img: img5,
      alt: "Work Day Scheduler",
    },
  ];
  return (
    <div className="">
      <div className="row">
        <h1>Portfolio</h1>
      </div>
      <div className="row">
        <div className="">
          {portfolioItems.map((project) => (
            <div className="projects">
              <PortfolioCard
                title={project.title}
                repo={project.repo}
                app={project.app}
                img={project.img}
                alt={project.alt}
              ></PortfolioCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
