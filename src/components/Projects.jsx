import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Shopping Cart',
    description: 'Built a responsive shopping cart application. Implemented product listing, cart management, quantity updates, and total price calculation with API integration. Utilized React hooks for state management and Git/GitHub for version control and collaboration.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    github: '#',
    live: '#',
    image: '/project-ecommerce-realistic.svg',
  },
  {
    title: 'Number System Converter',
    description: 'Developed a responsive number system converter that converts numbers between binary, octal, decimal, hexadecimal Numbers. Implemented real-time input handling, validation, error messages, and efficient conversion algorithms.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#',
    image: '/project-converter-realistic.svg',
  },
  {
    title: 'Recipe Finder',
    description: 'Developed a responsive recipe finder application integrating the MealDB API to fetch recipe data. Implemented search functionality, recipe details view, and dynamic rendering of meal images and instructions. Managed state with React hooks.',
    tech: ['React.js', 'HTML', 'CSS', 'MealDB API'],
    github: '#',
    live: '#',
    image: '/project-recipe-realistic.svg',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section fade-in">
      <h2 className="section-title">Some Things I've Built</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className={`project-feature hover-lift delay-1 ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="project-content">
              <p className="project-overline">Featured Project</p>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
              <ul className="project-tech-list">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link"><FaGithub /></a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="External Link"><FaExternalLinkAlt /></a>
              </div>
            </div>
            <div className="project-image">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <div className="img-wrapper">
                  <img src={project.image} alt={project.title} className="img" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
