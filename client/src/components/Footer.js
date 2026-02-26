import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Saima<span className="dot">.</span></h3>
            <p>Helping businesses grow with modern, high-converting websites. Based in Mumbai, India.</p>
          </div>
          <div className="footer-links">
            <h4>Menu</h4>
            <ul>
              <li><a href="#why-me">Why Me</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Results</a></li>
              <li><a href="#process">Process</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>saima.sidd223@gmail.com</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/saima223/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://x.com/_saima223" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Saima Siddiqui. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
