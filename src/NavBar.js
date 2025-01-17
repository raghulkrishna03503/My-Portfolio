import React from "react";
import SmoothScroll from 'smooth-scroll';
import './NavBar.css';

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true
});

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <div id="logo">
                        <p>&lt;RKY/&gt;</p>
                    </div>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto" id="side-links">
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#ex">Work Experience</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
