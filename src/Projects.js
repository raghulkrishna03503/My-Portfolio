import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div id='pro'>
    <div id='container-projects'>
      <div className="projects">
        <h2><b><i>Projects</i></b></h2>
        <div className="projects-cards">
          <div className="project-card">
            <h3>developerFolio</h3>
            <p>Software Developer Portfolio Template that helps you showcase your work...</p>
            <p><strong>Technologies:</strong> JavaScript</p>
          </div>
          <div className="project-card">
            <h3>react-blog-github</h3>
            <p>React + Github Issues Your Personal Blog</p>
            <p><strong>Technologies:</strong> JavaScript</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
