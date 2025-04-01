import React from 'react';
import './Skills.css';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python'];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;