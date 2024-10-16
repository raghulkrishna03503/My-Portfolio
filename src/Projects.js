import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedSlide, setSelectedSlide] = useState('c1');

    const handleSlideChange = (event) => {
        setSelectedSlide(event.target.id);
    };
  return (
    <div id='pro'>
    <div id='container-projects'>
      <div className="projects">
        <h2><b><i>Projects</i></b></h2>
        <div className="wrapper">
            <div className="container">
                <input
                    type="radio"
                    name="slide"
                    id="c1"
                    checked={selectedSlide === 'c1'}
                    onChange={handleSlideChange}
                />
                <label htmlFor="c1" className="card">
                    <div className="row">
                        <div className="icon">1</div>
                        <div className="description">
                            <h4>Winter</h4>
                            <p>Winter has so much to offer - creative activities</p>
                        </div>
                    </div>
                </label>

                <input
                    type="radio"
                    name="slide"
                    id="c2"
                    checked={selectedSlide === 'c2'}
                    onChange={handleSlideChange}
                />
                <label htmlFor="c2" className="card">
                    <div className="row">
                        <div className="icon">2</div>
                        <div className="description">
                            <h4>Digital Technology</h4>
                            <p>Gets better every day - stay tuned</p>
                        </div>
                    </div>
                </label>

                <input
                    type="radio"
                    name="slide"
                    id="c3"
                    checked={selectedSlide === 'c3'}
                    onChange={handleSlideChange}
                />
                <label htmlFor="c3" className="card">
                    <div className="row">
                        <div className="icon">3</div>
                        <div className="description">
                            <h4>Globalization</h4>
                            <p>Help people all over the world</p>
                        </div>
                    </div>
                </label>

                <input
                    type="radio"
                    name="slide"
                    id="c4"
                    checked={selectedSlide === 'c4'}
                    onChange={handleSlideChange}
                />
                <label htmlFor="c4" className="card">
                    <div className="row">
                        <div className="icon">4</div>
                        <div className="description">
                            <h4>New technologies</h4>
                            <p>Space engineering becomes more and more advanced</p>
                        </div>
                    </div>
                </label>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
