import React from 'react';
import './Portfolio.css';

const Results = () => {
  const cases = [
    {
      title: "Maharashtra Plast",
      problem: "A local manufacturing business needed to showcase their PVC and LD beading solutions to industrial clients.",
      solution: "A professional, clean business website highlighting their 25+ years of excellence and ISO certification.",
      result: "Established a strong online presence and simplified client trust for large-scale industrial orders.",
      link: "https://maharashtra-plast.surge.sh/"
    },
    {
      title: "Vibe Coding (Excuse Generator)",
      problem: "A fun, interactive tool was needed to demonstrate creative frontend logic and user interaction.",
      solution: "A sleek, responsive web app that generates believable excuses across various categories.",
      result: "High user engagement with a focus on seamless mobile experience and modern UI aesthetics.",
      link: "https://vibe-codingg.vercel.app/"
    },
    {
      title: "Professional Portfolio (Messy Reaction)",
      problem: "A developer needed a platform to showcase their journey, skills, and visual storytelling capabilities.",
      solution: "A comprehensive portfolio site built with technical precision and creative insight, focusing on full-stack mastery.",
      result: "Successfully built a personal brand that connects technical skills with creative storytelling.",
      link: "https://messy-reaction.surge.sh/"
    }
  ];

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Real <span className="text-gradient">Business Results</span></h2>
          <p className="section-subtitle">
            I don't just build websites. I build assets that solve problems and drive growth.
          </p>
        </div>

        <div className="results-grid">
          {cases.map((item, index) => (
            <div className="result-card" key={index}>
              <h3 className="result-title">{item.title}</h3>
              <div className="result-body">
                <div className="result-point">
                  <strong>The Problem:</strong>
                  <p>{item.problem}</p>
                </div>
                <div className="result-point">
                  <strong>The Solution:</strong>
                  <p>{item.solution}</p>
                </div>
                <div className="result-point outcome">
                  <strong>The Result:</strong>
                  <p className="text-gradient">{item.result}</p>
                </div>
              </div>
              <div className="result-actions" style={{ marginTop: '2rem' }}>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%' }}>View Live Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
