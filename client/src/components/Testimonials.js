import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      text: "I finally have a website I'm proud to show people. Since launching, we've seen a huge jump in new customer calls.",
      author: "Sarah J.",
      role: "Small Business Owner"
    },
    {
      text: "The process was so easy. Saima took my rough ideas and turned them into a professional site that looks amazing.",
      author: "Mark T.",
      role: "Startup Founder"
    },
    {
      text: "Fast, reliable, and actually cares about my business results. Highly recommended for any non-technical founder.",
      author: "David L.",
      role: "CEO"
    }
  ];

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="stats-grid animate-fade-in">
          <div className="stat-item">
            <div className="stat-number text-gradient">20+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number text-gradient">14 Days</div>
            <div className="stat-label">Avg. Delivery Time</div>
          </div>
          <div className="stat-item">
            <div className="stat-number text-gradient">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>

        <div className="testimonials-grid">
          {reviews.map((rev, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{rev.text}</p>
              <div className="testimonial-author">
                <strong>{rev.author}</strong>
                <span>{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
