import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Ready to Grow Your Business?</h2>
          <p className="contact-subtitle">
            Let's build a website that works as hard as you do. Book a free 15-minute discovery call.
          </p>
          <div className="contact-actions">
            <a href="mailto:your@email.com" className="btn btn-primary btn-glow">Book a Free Call</a>
            <a href="mailto:your@email.com" className="btn btn-secondary">Send an Email</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
