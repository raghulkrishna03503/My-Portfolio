import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './Home.css'; // Assuming your CSS file is named Home.css and located in the same directory

function Model() {
    const { scene } = useGLTF('/model.glb');
    return <primitive object={scene} scale={5} />;
}

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
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Suspense fallback={null}>
                        <Model />
                    </Suspense>
                    <OrbitControls />
                </Canvas>
            </div>
        </div>
    );
}
