import React from 'react';
import './Services.css';

const Services = () => {
  const packages = [
    {
      name: "The Starter",
      price: "Starting at $500",
      features: [
        "1 High-Converting Page",
        "Mobile Ready & Fast Loading",
        "Secure Contact Form",
        "Basic SEO Setup"
      ],
      for: "New businesses needing a professional look fast."
    },
    {
      name: "The Business",
      price: "Starting at $1,200",
      features: [
        "Up to 5 Professional Pages",
        "Google Maps & Analytics",
        "Search Engine Optimization",
        "Easy-to-Update System"
      ],
      for: "Companies looking to beat competition & build trust."
    },
    {
      name: "The Premium",
      price: "Starting at $2,500",
      features: [
        "Full Online Store",
        "Secure Payment Integration",
        "Advanced Custom Design",
        "Priority 24/7 Support"
      ],
      for: "Established brands ready to sell online & scale."
    }
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Simple, Transparent <span className="text-gradient">Pricing</span></h2>
          <p className="section-subtitle">
            Choose the package that fits your business stage. No hidden fees, just professional results.
          </p>
        </div>
        
        <div className="services-grid">
          {packages.map((pkg, index) => (
            <div className={`service-card ${index === 1 ? 'featured' : ''}`} key={index}>
              {index === 1 && <span className="featured-badge">Most Popular</span>}
              <div className="service-content">
                <h3 className="service-name">{pkg.name}</h3>
                <div className="service-price">{pkg.price}</div>
                <p className="service-for">{pkg.for}</p>
                <ul className="service-features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="mailto:saima.sidd223@gmail.com?subject=Request for responsive frontend website" className="btn btn-secondary service-btn">Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
