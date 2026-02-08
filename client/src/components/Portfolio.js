import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web App",
      description: "A modern dashboard for a financial startup helping users track expenses.",
      tags: ["React", "Dashboard", "Finance"],
      image: "https://via.placeholder.com/600x400/1c1c1c/333333?text=Project+1"
    },
    {
      title: "Coffee Shop Brand",
      category: "Website",
      description: "A warm, inviting website for a local coffee chain to drive foot traffic.",
      tags: ["Design", "Branding", "Local SEO"],
      image: "https://via.placeholder.com/600x400/1c1c1c/333333?text=Project+2"
    },
    {
      title: "E-commerce Redesign",
      category: "E-commerce",
      description: "Redesigned an online store to improve checkout flow and increase sales by 40%.",
      tags: ["Shopify", "UX/UI", "Conversion"],
      image: "https://via.placeholder.com/600x400/1c1c1c/333333?text=Project+3"
    }
  ];

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Recent <span className="text-gradient">Success Stories</span></h2>
          <p className="section-subtitle">
            I don't just build websites; I build business assets. Here are a few recent projects.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href="#contact" className="btn btn-primary">View Case Study</a>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
