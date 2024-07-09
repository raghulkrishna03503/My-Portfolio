import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './Skills.css';

function Model() {
    const { scene } = useGLTF('/models/model.glb');
    return <primitive object={scene} scale={5} />;
}

export default function Skills() {
    return (
        <div id="skills">
            <div id="model-container-skills">
                <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Suspense fallback={null}>
                        <Model />
                    </Suspense>
                    <OrbitControls />
                </Canvas>
            </div>
            <div id="text-container-skills">
                <h1><b><i>What I do</i></b></h1>
                <h3>A Tech enthusiast and Full Stack Developer proficient in Java, Python, and JavaScript, crafting user-friendly apps including AR/VR and exploring AI and cloud technologies.</h3>
            </div>
        </div>
    );
}