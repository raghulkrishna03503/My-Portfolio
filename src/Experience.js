import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div id='ex'>
    <div id='container-experience'>
      <div className="experience">
        <h2><b><i>Experience</i></b></h2>
        <div className="experience-cards">
          <div className="experience-card facebook">
            <h3>Facebook</h3>
            <h4>Software Engineer</h4>
            <p>June 2018 - Present</p>
            <ul>
              <li>Worked on various projects using React and Node.js.</li>
              <li>Implemented new features and optimized existing code.</li>
            </ul>
          </div>
          <div className="experience-card quora">
            <h3>Quora</h3>
            <h4>Front-End Developer</h4>
            <p>May 2017 - May 2018</p>
            <ul>
              <li>Developed interactive UI components using Angular.</li>
              <li>Collaborated with the backend team to integrate APIs.</li>
            </ul>
          </div>
          <div className="experience-card airbnb">
            <h3>Airbnb</h3>
            <h4>Software Engineer Intern</h4>
            <p>Jan 2015 - Sep 2015</p>
            <ul>
              <li>Assisted in developing features for the Airbnb web app.</li>
              <li>Worked with a team to improve application performance.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Experience;
