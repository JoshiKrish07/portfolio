import React from 'react';
import './Project.css';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project">
          <h3>CodeHub Repo</h3>
          <img src='../../codehubRepoProject.png' alt='Project 1' />
          <p>Built a project using Angular, Firebase, Bootsrap where you can register your code.</p>
          <a href='https://codehubrepo-ng.web.app/login' target='blank'>Click Here</a>
        </div>
        {/* <div className="project">
          <h3>Project 2</h3>
          <img src='../../project2.png' alt='Project 2' />
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
