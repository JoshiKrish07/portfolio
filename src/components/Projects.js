import React from 'react';
import './Project.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project">
          <h3>Project 1</h3>
          <img src='../../project1.png' alt='Project 1' />
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <img src='../../project2.png' alt='Project 2' />
        </div>
      </div>
    </section>
  );
}

export default Projects;
