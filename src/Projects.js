import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div id="projects">
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
  );
};

export default Projects;
