import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import './Home.css';
import { ModelViewer } from './ModelViewer';

export default function Home() {
    return (
        <div id="container">
            <div id="text-container">
                <h1><b><i>Hi all, I'm Raghul</i></b><span id="wave">👋</span></h1>
                <h3>A Tech enthusiast and Full Stack Developer proficient in Java, Python, and JavaScript, crafting user-friendly apps including AR/VR and exploring AI and cloud technologies.</h3>
                <div id='handle'>
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-envelope"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id='buttons'>
                    <button><b><i>Contact Me</i></b></button>
                    <button><b><i>Download my Resume</i></b></button>
                </div>
            </div>
            <div id="model-container">
                <Canvas>
                    <Environment preset='studio'/>
                    {/* <OrbitControls /> */}
                    <ModelViewer/>
                </Canvas>
            </div>
        </div>
    );
}
