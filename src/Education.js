
import React from 'react';
import './Education.css'; // Ensure the path is correct based on your project structure

const Education = () => {
    return (
        <div id='education'>
            <div className="education">
                <h2><b><i>Education</i></b></h2>
                <div className="education-cards">
                    <div className="education-card">
                        <div className="institution">
                            <h3> Sri Sivasubramaniya Nadar College of Engineering</h3>
                            <p>B.E. Computer Science Engineering</p>
                            <p><strong>Year: </strong>2021 - 2025</p>
                            <p><strong>CGPA: </strong>8.18</p>
                        </div>
                    </div>
                    <div className="education-card">
                        <div className="institution">
                            <h3> Indian Institute of Technology Madras</h3>
                            <p>B.S. Data Science</p>
                            <p><strong>Year: </strong>2022 - 2025</p>
                            <p><strong>CGPA: </strong>7.63</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="education-cards">
                    <div className="education-card">
                        <div className="institution">
                            <h3>Sri Ram Dayal Khemka Vivekananda Vidyalaya Senior Secondary School</h3>
                            <p>Class 12</p>
                            <p><strong>Year: </strong>2020 - 2021</p>
                            <p><strong>Percentage: </strong>95.6% - AISSCE</p>
                        </div>
                    </div>
                    <div className="education-card">
                        <div className="institution">
                            <h3>Sri Ram Dayal Khemka Vivekananda Vidyalaya Senior Secondary School</h3>
                            <p>Class 10</p>
                            <p><strong>Year: </strong>2018 - 2019</p>
                            <p><strong>Percentage: </strong>93.4% - AISSE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
