import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="logo">
          Saima<span className="dot">.</span>
        </a>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#why-me" onClick={() => setIsOpen(false)}>Why Me</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>Results</a>
          <a href="#process" onClick={() => setIsOpen(false)}>Process</a>
          <a href="https://calendly.com/saima-sidd223" target="_blank" rel="noopener noreferrer" className="nav-btn" onClick={() => setIsOpen(false)}>Book Call</a>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
