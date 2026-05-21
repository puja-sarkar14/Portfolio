import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="inner">
        <div className="about-text">
          <p>
            Hello! My name is Puja. I'm a BCA graduate from KBC North Maharashtra University, Jalgaon, and a passionate Front-End Developer. My interest in web development started when I decided to build my first interactive website. Turns out, combining design with logic taught me a lot about creating seamless user experiences.
          </p>
          <p>
            Recently, I worked as a Frontend Web Developer at CODTECH IT SOLUTIONS Pvt.Ltd, where I collaborated with a team to design and implement UI components, integrate APIs, and optimize performance. My main focus these days is building accessible, inclusive products and digital experiences that are both beautiful and highly functional.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="about-pic">
          <div className="wrapper">
            {/* The generated image will be placed in assets */}
            <img className="img hover-lift" src="/profile_pic.png" alt="Puja Sarkar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
