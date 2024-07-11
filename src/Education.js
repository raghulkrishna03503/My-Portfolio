import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <div className="education">
            <h2><b><i>Education</i></b></h2>
            <div className="education-card">
                <h3>Massachusetts Institute of Technology (MIT)</h3>
                <p>Bachelor of Science in Computer Science and Engineering</p>
                <p><strong>Year:</strong> 2016 - 2020</p>
                <p><strong>Grade:</strong> 3.8 GPA</p>
            </div>
            <div className="education-card">
                <h3>Stanford University</h3>
                <p>Master of Science in Artificial Intelligence</p>
                <p><strong>Year:</strong> 2020 - 2022</p>
                <p><strong>Grade:</strong> 4.0 GPA</p>
            </div>
        </div>
    );
};

export default Education;
