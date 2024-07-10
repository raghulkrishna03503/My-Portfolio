import React from 'react';
import './Skills.css';

const skills = [
  { name: 'Java', icon: 'java' },
  { name: 'Python', icon: 'python' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'C', icon: 'c' },
  { name: 'ReactJS', icon: 'react' },
  { name: 'NodeJS', icon: 'node' },
  { name: 'Android Studio', icon: 'android' },
  { name: 'VR', icon: 'vr-cardboard' },
  { name: 'AR', icon: 'ar' },
  { name: 'AI', icon: 'brain' },
  { name: 'Cloud', icon: 'cloud' }
];

export default function Skills() {
  return (
    <div id="skills" className="skills-section">
      <div className="skills-content">
        <h2><b><i>What I do</i></b></h2>
        <p className="skills-description">Tech enthusiast proficient in Java, Python, JS, crafting user-friendly apps, including AR/VR, exploring AI & cloud, dedicated to collaboration and learning.</p>
        <div className="skills-icons">
          {skills.map((skill, index) => (
            <div key={index} className="skill-icon">
              <i className={`fab fa-${skill.icon}`}></i>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        <ul className="skills-list">
          <li>I'm a Computer Science Engineering student passionate about Software Development, Virtual Reality and Augmented Reality.</li>
          <li>My journey began with a curiosity about technology, growing into a commitment to creating innovative solutions.</li>
          <li>I've immersed myself in programming, especially in VR, which fascinates me for its potential to revolutionize user experiences.</li>
        </ul>
      </div>
    </div>
  );
}
