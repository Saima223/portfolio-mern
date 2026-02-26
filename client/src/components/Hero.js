import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-trust-badges">
            <span className="trust-badge">✓ Fast 2-Week Delivery</span>
            <span className="trust-badge">✓ Affordable Fixed Pricing</span>
            <span className="trust-badge">✓ 100% Reliable Support</span>
          </div>
          <h1 className="hero-title">
            I Build Websites That Get You <span className="text-gradient">More Customers</span>
          </h1>
          <p className="hero-subtitle">
            Stop losing sales to a confusing website. I design professional, high-converting sites for small businesses and startups that build trust and drive results.
          </p>
          <div className="hero-actions">
            <a href="mailto:saima.sidd223@gmail.com?subject=Request for responsive frontend website" className="btn btn-primary btn-glow">Get a Quote</a>
            <a href="https://calendly.com/saima-sidd223" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Book a Free Call</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
