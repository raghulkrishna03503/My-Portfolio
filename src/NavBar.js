import React from "react";
import './NavBar.css';

export default function NavBar() {

    return (

        <>
            <div id="nav-bar">
                <div id="logo">
                    <p>&lt;RKY/&gt;</p>
                </div>
                <div id="side-links">
                    <ul>
                        <li>
                            <a href="#">Skills</a>
                        </li>
                        <li>
                            <a href="#">Work Experience</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Achievments</a>
                        </li>
                        <li>
                            <a href="#">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    );

}