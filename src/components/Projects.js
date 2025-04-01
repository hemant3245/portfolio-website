import React from 'react';
import './Projects.css';

const projects = [
  { id: 1, title: 'Regression Analysis', description: 'Regression Analysis' },
  { id: 2, title: 'Project 2', description: 'Portfolio Template' },
  { id: 3, title: 'Project 3', description: 'Social Media App' },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;