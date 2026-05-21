import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="social-links">
        <a href="https://github.com/puja-sarkar14" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://linkedin.com/in/puja-sarkar-a47534302" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
      </div>
      <div className="footer-text">
        <p>Designed & Built by Puja Sarkar</p>
      </div>
    </footer>
  );
};

export default Footer;
