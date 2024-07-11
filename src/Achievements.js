import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <div id="#achievements">
      <div className="achievement-card">
        <h3>Google Code-In Finalist</h3>
        <p>First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.</p>
      </div>
      <div className="achievement-card">
        <h3>Google Assistant Action</h3>
        <p>Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices worldwide.</p>
      </div>
      {/* Add more achievements as needed */}
    </div>
  );
};

export default Achievements;
