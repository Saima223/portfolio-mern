import React from 'react';
import './WhyMe.css';

const WhyMe = () => {
  return (
    <section className="section" id="why-me">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Business Owners <span className="text-gradient">Choose Me</span></h2>
          <p className="section-subtitle">
            I'm not just a developer. I'm a partner who cares about your business growth.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🚀</div>
            <h3>Fast Delivery</h3>
            <p>I respect your time. Most projects are delivered within 2 weeks, so you can launch sooner.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">💎</div>
            <h3>Premium Quality</h3>
            <p>I don't use cheap templates. Every design is custom-built to match your brand and goals.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">🤝</div>
            <h3>Clear Communication</h3>
            <p>No tech jargon. I explain everything in plain English so you're always in the loop.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">📈</div>
            <h3>Results Focused</h3>
            <p>A pretty website is useless if it doesn't sell. I build with conversion in mind.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
