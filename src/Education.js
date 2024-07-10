// Education.js
import React from 'react';
import './Education.css'; // Make sure this path is correct based on your project structure

const Education = () => {
    return (
        <div className="education">
            <h2>Education</h2>
            <div className="school">
                <img src="path_to_harvard_logo.png" alt="Harvard Logo" />
                <div>
                    <h3>Harvard University</h3>
                    <p>Master of Science in Computer Science</p>
                    <p>September 2017 - April 2019</p>
                    <p>Participated in the research of XXX and published 3 papers.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    </ul>
                </div>
            </div>
            <div className="school">
                <img src="path_to_stanford_logo.png" alt="Stanford Logo" />
                <div>
                    <h3>Stanford University</h3>
                    <p>Bachelor of Science in Computer Science</p>
                    <p>September 2013 - April 2017</p>
                    <p>Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;
