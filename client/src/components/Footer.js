import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>YourName<span className="dot">.</span></h3>
            <p>Helping businesses grow with modern, high-converting websites.</p>
          </div>
          <div className="footer-links">
            <h4>Menu</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Work</a></li>
              <li><a href="#why-me">Why Me</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>hello@yourname.com</p>
            <div className="social-links">
              <a href="/">LinkedIn</a>
              <a href="/">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
