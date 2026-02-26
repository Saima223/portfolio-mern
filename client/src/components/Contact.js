import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-card animate-fade-in">
          <h2 className="contact-title">Stop Losing Customers to a Bad Website</h2>
          <p className="contact-subtitle">
            Your competitors are already online. Let's make sure you look better and sell more. Book your free 15-minute strategy call today.
          </p>
          <div className="contact-actions">
            <a href="https://calendly.com/saima-sidd223" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-glow">Book Free Call</a>
            <a href="mailto:saima.sidd223@gmail.com?subject=Request for responsive frontend website" className="btn btn-secondary">Get a Quote</a>
          </div>
          <p className="contact-footer-note">No obligation. Just expert advice on how to grow your business.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
