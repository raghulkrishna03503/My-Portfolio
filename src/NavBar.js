import React from "react";
import './NavBar.css';

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
                            <a className="nav-link" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Work Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Achievements</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
