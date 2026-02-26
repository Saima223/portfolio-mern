import React from 'react';
import './WhyMe.css';

const WhyMe = () => {
  const reasons = [
    {
      title: "Fast Turnaround",
      desc: "Launch your new site in as little as 14 days, not months."
    },
    {
      title: "Clear Communication",
      desc: "I speak your language, not \"code.\" You'll always know what's happening."
    },
    {
      title: "Affordable Pricing",
      desc: "Professional results without the big agency price tag."
    },
    {
      title: "Long-term Support",
      desc: "I don't just build and leave. I'm here to help you grow."
    },
    {
      title: "Easy Process",
      desc: "I handle the hard stuff so you can focus on running your business."
    }
  ];

  return (
    <section className="section" id="why-me">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Business Owners <span className="text-gradient">Trust Me</span></h2>
          <p className="section-subtitle">
            I'm a partner who cares about your business growth, not just another freelancer.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="check-circle">✓</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
