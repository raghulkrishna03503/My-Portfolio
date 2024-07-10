import React, { useEffect, useState } from 'react';
import './Skills.css';
import Proficiency from './Proficiency';
import Education from './Education';

const skills = [
    { name: 'Java', icon: 'java' },
    { name: 'Python', icon: 'python' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'C', icon: 'cuttlefish' },
    { name: 'ReactJS', icon: 'react' },
    { name: 'NodeJS', icon: 'node' },
    { name: 'Android Studio', icon: 'android' },
    { name: 'VR', icon: 'vr-cardboard' },
    { name: 'AI', icon: 'brain' },
    { name: 'Cloud', icon: 'cloud' }
];

export default function Skills() {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const skillsSection = document.getElementById('skills');
            if (skillsSection && window.scrollY >= skillsSection.offsetTop - window.innerHeight / 2) {
                setAnimated(true); // Trigger animation when scrolling to the skills section
                window.removeEventListener('scroll', handleScroll); // Remove listener to prevent multiple triggers
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="skills" className={`skills-section ${animated ? 'animate' : ''}`}>
            <div className="skills-content">
                <h2><b><i>What I do</i></b></h2>
                <p className="skills-description">Tech enthusiast proficient in Java, Python, JS, crafting user-friendly apps, including AR/VR, exploring AI & cloud, dedicated to collaboration and learning.</p>
                <div className="skills-card">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-icon">
                            {skill.icon === "vr-cardboard" ? (
                                <>
                                    <i className={`fa fa-${skill.icon}`}></i><p>{skill.name} & AR</p>
                                </>
                            ) : skill.icon === "brain" ? (
                                <>
                                    <i className={`fa fa-${skill.icon}`}></i><p>{skill.name}</p>
                                </>
                            ) : skill.icon === "cloud" ? (
                                <>
                                    <i className={`fa fa-${skill.icon}`}></i><p>{skill.name}</p>
                                </>
                            ) : (
                                <>
                                    <i className={`fab fa-${skill.icon}`}></i><p>{skill.name}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <ul className="skills-list">
                    <li>I'm a Computer Science Engineering student passionate about Software Development, Virtual Reality and Augmented Reality.</li>
                    <li>My journey began with a curiosity about technology, growing into a commitment to creating innovative solutions.</li>
                    <li>I've immersed myself in programming, especially in VR, which fascinates me for its potential to revolutionize user experiences.</li>
                </ul>
            </div>
            <Proficiency/>
            <Education/>
        </div>
    );
}
