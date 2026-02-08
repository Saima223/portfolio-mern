import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Landing Page",
      description: "Perfect for products, apps, or capturing leads. High-conversion design focused on a single goal.",
      price: "Starting at $500",
      features: ["Custom Design", "Mobile Responsive", "Speed Optimized", "SEO Basics"]
    },
    {
      title: "Business Website",
      description: "A complete 5-page website to showcase your business, services, and build credibility.",
      price: "Starting at $1,200",
      features: ["Home, About, Services, Contact", "CMS Integration", "Google Maps & Analytics", "Contact Form"]
    },
    {
      title: "E-commerce Store",
      description: "Sell your products online with a secure, easy-to-manage online store.",
      price: "Starting at $2,500",
      features: ["Product Management", "Payment Gateway", "Inventory System", "User Accounts"]
    }
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Simple, Transparent <span className="text-gradient">Services</span></h2>
          <p className="section-subtitle">
            Everything you need to succeed online, without the confusion. Choose the package that fits your stage.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-price">{service.price}</div>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="btn btn-secondary service-btn">Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
