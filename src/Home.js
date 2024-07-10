import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import './Home.css';
import { ModelViewer } from './ModelViewer';

export default function Home() {
    useEffect(() => {
        document.title = "Raghul Yadhav's Portfolio";
    }, []);

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/files/RaghulYadhav_Resume.pdf`;
        link.download = 'RaghulYadhav_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div id="container">
            <div id="text-container">
                <h1><b><i>Hi all, I'm Raghul</i></b><span id="wave">👋</span></h1>
                <h3>A Tech enthusiast and Full Stack Developer proficient in Java, Python, and JavaScript, crafting user-friendly apps including AR/VR and exploring AI and cloud technologies.</h3>
                <div id='handle'>
                    <ul>
                        <li>
                            <a href="https://github.com/raghulkrishna03503" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/raghul-yadhav-k-ba9137217/" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:raghulkrishna03052003@gmail.com" target='_blank' rel="noopener noreferrer">
                                <i className="fa fa-envelope"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/+918015023475" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/raghul.krishnaraj/" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id='buttons'>
                    <button><b><i><a href="#contact">Contact Me</a></i></b></button>
                    <button onClick={downloadResume}><b><i>Download my Resume</i></b></button>
                </div>
            </div>
            <div id="model-container">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <Environment preset='studio' />
                    <ModelViewer position={[0, -3.5, 0]} />
                    {/* <SecondModelViewer position={[0, -3.5, -10]} /> Second model positioned behind */}
                </Canvas>
            </div>
        </div>
    );
}
