import React from 'react';
import './Proficiency.css'; // Ensure the path is correct based on your project structure

const Proficiency = () => {
    return (
        <div id='container-proficiency'>
            <div className="proficiency">
                <h2><b><i>Proficiency</i></b></h2>
                <div className="proficiency-card">
                    <div className="skill">
                        <p>Frontend/Design</p>
                        <div className="progress">
                            <div className="frontend"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <p>Backend</p>
                        <div className="progress">
                            <div className="backend"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <p>Programming</p>
                        <div className="progress">
                            <div className="programming"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='model-viewer-proficiency'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeODQvX4ZZHo2ajKrVfoCXUW24lkju5uPjCQ&s' alt='Model Viewer'></img>
            </div>
        </div>
    );
};

export default Proficiency;
