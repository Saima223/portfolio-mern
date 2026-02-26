import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      title: "Discovery",
      desc: "We talk about your goals and what your business needs to grow."
    },
    {
      title: "Design",
      desc: "I create a modern look that makes your brand stand out."
    },
    {
      title: "Build",
      desc: "I turn the design into a fast, working website that looks great on every screen."
    },
    {
      title: "Launch",
      desc: "We go live and start attracting your new customers."
    }
  ];

  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">An Easy, <span className="text-gradient">Stress-Free</span> Process</h2>
          <p className="section-subtitle">
            I handle all the technical heavy lifting so you can focus on running your business.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
