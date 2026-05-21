import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo fade-in">
        <a href="#">P<span>S</span></a>
      </div>

      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ol>
          <li className="fade-in delay-1" onClick={() => setMenuOpen(false)}><a href="#about">About</a></li>
          <li className="fade-in delay-2" onClick={() => setMenuOpen(false)}><a href="#skills">Skills</a></li>
          <li className="fade-in delay-3" onClick={() => setMenuOpen(false)}><a href="#projects">Projects</a></li>
          <li className="fade-in delay-4" onClick={() => setMenuOpen(false)}><a href="#achievements">Achievements</a></li>
          <li className="fade-in delay-5" onClick={() => setMenuOpen(false)}><a href="#contact">Contact</a></li>
        </ol>
        <div className="fade-in delay-6">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn resume-btn">Resume</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
