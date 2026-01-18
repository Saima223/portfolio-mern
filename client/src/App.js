import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="portfolio">
      <header className="header">
        <div className="header-inner">
          <div className="logo">Your Name</div>
          <nav className="nav">
            <a href="#work">Work</a>
            <a href="#services">What I Do</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-content">
            <h1>Static Business Websites for International Small Businesses and Startups</h1>
            <p>
              I design and build clear, fast-loading static websites that help small businesses
              and startups look professional, trustworthy, and easy to understand for
              international clients.
            </p>
            <div className="hero-actions">
              <a href="#work" className="button primary">View Work</a>
              <a href="#contact" className="button secondary">Request Project Estimate</a>
            </div>
            <div className="hero-meta">
              <span>Static websites only</span>
              <span>Structured process</span>
              <span>International-client friendly</span>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-inner">
            <h2>What I Do</h2>
            <p className="section-intro">
              I focus on simple, reliable static websites for small teams who want a professional
              online presence without unnecessary complexity or ongoing technical overhead.
            </p>
            <div className="grid grid-three">
              <div className="card">
                <h3>Static Business Websites</h3>
                <p>
                  Multi-section static sites that explain who you are, what you offer, and how
                  to contact you, in clear and simple language.
                </p>
              </div>
              <div className="card">
                <h3>Product and Service Landing Pages</h3>
                <p>
                  Focused landing pages for new products or services with a clear structure and
                  a strong call-to-action.
                </p>
              </div>
              <div className="card">
                <h3>Clean, Responsive Layouts</h3>
                <p>
                  Fast-loading layouts that work well on desktop and mobile, helping visitors
                  find what they need quickly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="work">
          <div className="section-inner">
            <h2>Selected Projects</h2>
            <p className="section-intro">
              A small, focused collection of static websites. Each project is structured
              around a clear business goal, simple solution, and practical outcome.
            </p>
            <div className="grid grid-three">
              <article className="card project-card">
                <h3>Accounting Firm Website</h3>
                <p className="project-meta">Static business website</p>
                <p>
                  A three-page static website for an independent accounting firm, focused on
                  clearly presenting services and making it easy to request a consultation.
                </p>
                <ul className="project-points">
                  <li>Problem: No clear online presence or way to contact the firm.</li>
                  <li>
                    Solution: Simple structure with Home, Services, and Contact sections,
                    written in straightforward language.
                  </li>
                  <li>
                    Outcome: Visitors can quickly understand the services and submit an inquiry
                    through the contact section.
                  </li>
                </ul>
                <div className="project-links">
                  <span className="project-tag">Static HTML, CSS, JavaScript</span>
                  <a href="#" className="text-link">
                    View live website
                  </a>
                </div>
              </article>

              <article className="card project-card">
                <h3>Consulting Agency Landing Page</h3>
                <p className="project-meta">Single-page static landing</p>
                <p>
                  A focused landing page for a small consulting agency, highlighting key
                  services, social proof, and a clear call-to-action.
                </p>
                <ul className="project-points">
                  <li>
                    Problem: Existing information was spread across documents and messages,
                    with no clear public page.
                  </li>
                  <li>
                    Solution: Single-page layout with hero, services, process, and contact
                    sections.
                  </li>
                  <li>
                    Outcome: Prospective clients can understand the offer in one visit and send
                    a structured inquiry.
                  </li>
                </ul>
                <div className="project-links">
                  <span className="project-tag">Static HTML, CSS, JavaScript</span>
                  <a href="#" className="text-link">
                    View live website
                  </a>
                </div>
              </article>

              <article className="card project-card">
                <h3>SaaS Product Information Site</h3>
                <p className="project-meta">Static marketing site</p>
                <p>
                  A static information site for a small SaaS tool, explaining the product in
                  simple terms and directing users to sign up.
                </p>
                <ul className="project-points">
                  <li>
                    Problem: Early-stage product with no clear public explanation of features
                    or benefits.
                  </li>
                  <li>
                    Solution: Clear sections for overview, key benefits, simple pricing, and
                    frequently asked questions.
                  </li>
                  <li>
                    Outcome: Visitors gain a quick understanding of the product and can move
                    directly to the sign-up flow.
                  </li>
                </ul>
                <div className="project-links">
                  <span className="project-tag">Static HTML, CSS, JavaScript</span>
                  <a href="#" className="text-link">
                    View live website
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="section-inner">
            <h2>Process</h2>
            <p className="section-intro">
              Every project follows a clear, structured process. This keeps the work focused,
              avoids confusion, and respects timelines on both sides.
            </p>
            <div className="grid grid-four process-grid">
              <div className="card process-card">
                <div className="process-step">1</div>
                <h3>Discovery</h3>
                <p>
                  We begin with a short call or written brief to understand your business, your
                  services, your customers, and what you want visitors to do on the website.
                  This step defines the goals, pages, and basic content so we both have the same
                  understanding before design starts.
                </p>
              </div>
              <div className="card process-card">
                <div className="process-step">2</div>
                <h3>Design</h3>
                <p>
                  I plan the structure of the website and create a simple layout. The focus is
                  on clear headings, logical sections, and easy navigation, so the website feels
                  calm and simple to follow.
                </p>
              </div>
              <div className="card process-card">
                <div className="process-step">3</div>
                <h3>Development</h3>
                <p>
                  I build the site as a static front-end using HTML, CSS, and JavaScript. The
                  website loads quickly, works on desktop and mobile, and stays focused on clear
                  presentation of your content.
                </p>
              </div>
              <div className="card process-card">
                <div className="process-step">4</div>
                <h3>Review and Delivery</h3>
                <p>
                  You review the website on a live demo link and share your feedback during the
                  review stage. Within the agreed scope, I make revisions and then prepare final
                  files and deployment support so you can go live with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="about">
          <div className="section-inner two-column">
            <div>
              <h2>About Me</h2>
              <p>
                I am a freelance web developer focused on building clear, static websites for
                small businesses and startups. I work with international clients who want a
                professional online presence without unnecessary complexity or ongoing technical
                overhead.
              </p>
              <p>
                My work is based on structure, clarity, and reliable delivery. I help you
                organize your content, define the most important messages, and present them in a
                simple layout that feels calm and easy to use. Visitors understand quickly who
                you are, what you offer, and how to take the next step.
              </p>
              <p>
                Every project follows a defined process with written scope, milestones, and
                timelines. You always know what I am working on, what I need from you, and when
                to expect each stage. Communication is direct and organized, so we avoid
                last-minute surprises and rushed decisions.
              </p>
            </div>
            <div className="about-highlight">
              <h3>How I Work</h3>
              <ul>
                <li>Written scope and timelines before we start.</li>
                <li>Regular updates during the project.</li>
                <li>Defined review and revision rounds.</li>
                <li>Final handover with all files and instructions.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="working-together">
          <div className="section-inner">
            <h2>Working Together</h2>
            <p className="section-intro">
              I approach each project with a clear scope, defined timelines, and transparent
              communication. The goal is a calm, predictable experience for both sides.
            </p>
            <div className="grid grid-two">
              <div className="card">
                <h3>Expectations</h3>
                <p>
                  I work best with clients who value clear communication, realistic timelines,
                  and project-based pricing. Each project starts with a written agreement that
                  defines scope, pricing, and key milestones.
                </p>
                <p>
                  Revisions are handled within defined review stages. Additional ideas or
                  changes can be added as a new phase, which keeps the project organized and
                  respectful of time on both sides.
                </p>
              </div>
              <div className="card">
                <h3>Boundaries</h3>
                <p>
                  To keep projects focused and respectful of time, I do not work on unpaid test
                  tasks, speculative work, or unlimited revision requests. I also avoid last-
                  minute urgent work that conflicts with existing commitments.
                </p>
                <p>
                  This helps protect both the quality of the website and the timeline we agree
                  on, and supports a professional, long-term collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-inner contact-section">
            <div>
              <h2>Contact</h2>
              <p>
                If you are a small business or startup and you need a clear, static website,
                you can use this form to share basic details. I typically respond within one to
                two business days.
              </p>
              <p>
                Please include your business name, a short description of what you do, and
                what you would like the website to achieve.
              </p>
            </div>
            <form className="contact-form">
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="form-row">
                <label htmlFor="business">Business or Startup Name</label>
                <input id="business" type="text" placeholder="Business name" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Project Summary</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Short description of your business and what you need from the website"
                />
              </div>
              <button type="submit" className="button primary full-width">
                Send Inquiry
              </button>
              <p className="contact-note">
                This is a simple static form for now. Integration with a custom backend can be
                added later as the project grows.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p>Static business websites with a calm, structured process.</p>
          <p className="footer-meta">
            Future-ready for integration with a MERN stack when your needs grow.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
