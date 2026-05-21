import React from 'react';
import myImage from '../assets/my.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-layout">
        <div className="hero-content">
          <h1 className="hero-greeting fade-in delay-1">Hi, my name is</h1>
          <h2 className="hero-name fade-in delay-2">Puja Sarkar.</h2>
          <h3 className="hero-role fade-in delay-3">Front-End Developer</h3>
          <p className="hero-desc fade-in delay-4">
            I'm a BCA graduate and Front-End Developer skilled in HTML, CSS, JavaScript, React.js, and responsive web design. Experienced in building user-friendly web applications, UI/UX implementation, and performance optimization.
          </p>
          <div className="fade-in delay-5 mt-50">
            <a href="#projects" className="btn hero-btn">Check out my projects!</a>
          </div>
        </div>
        <div className="hero-visual fade-in delay-5">
          {/* <img src={myImage} alt="Puja Sarkar" className="hero-image" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
