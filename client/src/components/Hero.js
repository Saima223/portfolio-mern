import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <span className="hero-badge">Available for new projects</span>
          <h1 className="hero-title">
            Turn Your Website Into Your <span className="text-gradient">Best Salesperson</span>
          </h1>
          <p className="hero-subtitle">
            I help small businesses and startups build professional, high-converting websites that attract customers and build trust. No technical jargon, just results.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-glow">Get a Free Quote</a>
            <a href="#portfolio" className="btn btn-secondary">View My Work</a>
          </div>
          <div className="hero-social-proof">
            <p>Trusted by 20+ small businesses</p>
            {/* Add small logos or avatars here if available */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
