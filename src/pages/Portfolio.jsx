import React from 'react';
import Project from '../components/Project';
 import project1Image from '../images/project1.jpg';
// Import other project images

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        <Project title="Project 1" image={project1Image} deployedLink="" githubLink="" />
        {/* Add more Project components here */}
        
      </div>
    </section>
  );
};

export default Portfolio;
