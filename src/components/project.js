import React from 'react';
import anime from '../assets/anime.png'
import hobbybox from '../assets/hobbybox.jpeg'
import weather from '../assets/weather-forecast.png'
import planner from '../assets/work-planner.png'
import yotsubaOld from '../assets/yotsubaFirst.png'
import note from '../assets/notetaker.png'

function Project() {
  const projects = [
    {
      title: 'Anime Explorer',
      imageSrc: anime,
      githubLink: 'https://prestontravis.github.io/Anime_Explorer/',
    },
    {
      title: 'HobbyBox',
      imageSrc: hobbybox,
      githubLink: 'https://hobbybox.herokuapp.com/',
    },
    {
      title: 'Track Z Weather',
      imageSrc: weather,
      githubLink: 'https://sobewon.github.io/trackZweather/',
    },
    {
      title: 'Daily Planner',
      imageSrc: planner,
      githubLink: 'https://sobewon.github.io/dailyPlanner/',
    },
    {
      title: 'Note Taker',
      imageSrc: note,
      githubLink: 'https://note-taker-jm.herokuapp.com/',
    },
    {
      title: 'My Very First HTML Page',
      imageSrc: yotsubaOld,
      githubLink: 'https://sobewon.github.io/JMPortfolio/',
    },
  ];

  return (
    <div className="project-page">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h2>{project.title}</h2>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <img src={project.imageSrc} alt={project.title} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;
