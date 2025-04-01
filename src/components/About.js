import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>I'm a passionate frontend developer with 3 years of experience...</p>
        </div>
        <div className="about-image">
          {/* Add your image here */}
          <div className="image-placeholder"></div>
        </div>
      </div>
    </section>
  );
};

export default About;