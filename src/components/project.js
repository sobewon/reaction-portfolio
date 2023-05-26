import React from 'react';
import anime from '../assets/anime.png'
import hobbybox from '../assets/hobbybox.jpeg'
import weather from '../assets/weather-forecast.png'
import planner from '../assets/work-planner.png'

function Project() {
  const projects = [
    {
      title: 'Anime',
      imageSrc: anime,
      githubLink: 'https://github.com/your_github_project_1',
    },
    {
      title: 'HobbyBox',
      imageSrc: hobbybox,
      githubLink: 'https://github.com/your_github_project_2',
    },
    {
      title: 'Weather',
      imageSrc: weather,
      githubLink: 'https://github.com/your_github_project_3',
    },
    {
      title: 'Planner',
      imageSrc: planner,
      githubLink: 'https://github.com/your_github_project_4',
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
