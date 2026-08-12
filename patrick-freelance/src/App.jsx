import { useState } from 'react'
import './App.css'

const projects = [
  {
    label: 'TRICYCLE SYSTEM',
    title: 'Tricycle Franchise Tracker',
    desc: 'A centralized dashboard for monitoring tricycle franchise and license expirations across a municipality.',
    tech: 'React · Vite · JavaScript · CSS',
    img: '/images/image-1786497232527.png',
    alt: 'Franchise Tracker background',
    demo: 'https://tric-franchise-tracker.vercel.app',
    github: 'https://github.com/patrickeva/Tric-Franchise-Tracker',
  },
  {
    label: 'LEGISLATIVE TRACKER',
    title: 'Cuenca Legislative Tracker',
    desc: 'A public sector portal for tracking legislation, agendas, and meeting progress with a polished local government interface.',
    tech: 'React · Vite · Web APIs · UI/UX',
    img: '/images/image-1786497220605.png',
    alt: 'Cuenca Legislative Tracker background',
    demo: 'https://sb-cuenca-docsys.vercel.app',
    github: 'https://github.com/patrickeva/sb-cuenca-docsys',
  },
  {
    label: 'MUNICIPAL CALENDAR',
    title: 'Municipal Cuenca Calendar',
    desc: 'A public-facing calendar portal for viewing municipal events and official activities in a clean and organized interface.',
    tech: 'React · Vite · Calendar UI · Web APIs',
    img: '/images/calendar.png',
    alt: 'Municipal Calendar background',
    demo: 'https://municipal-cuenca-calendar.vercel.app',
    github: 'https://github.com/patrickeva/Municipal-Cuenca-Calendar',
  },
  {
    label: 'PERSONAL PORTFOLIO',
    title: 'Personal Portfolio',
    desc: 'A modern portfolio website showcasing freelance projects, case studies, and contact pathways.',
    tech: 'React · Vite · CSS · Responsive design',
    img: '/images/image-1786497201724.png',
    alt: 'Personal Portfolio background',
    demo: 'https://ptrkportfolio.vercel.app',
    github: 'https://github.com/patrickeva/ptrk_portfolio',
  },
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goPrev = () => {
    setActiveIndex((i) => (i === 0 ? projects.length - 1 : i - 1))
  }

  const goNext = () => {
    setActiveIndex((i) => (i === projects.length - 1 ? 0 : i + 1))
  }

  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <a href="#top" className="brand">
            <span className="brand-mark">▣</span> Digital Works 
          </a>
          <nav className="main-nav">
            <a href="#services" className="nav-link">[ SERVICES ]</a>
            <a href="#process" className="nav-link">[ PROCESS ]</a>
            <a href="#work" className="nav-link">[ WORK ]</a>
            <a href="#pricing" className="nav-link">[ PRICING ]</a>
          </nav>
          <a href="#contact" className="btn btn-primary nav-cta">Let’s Talk</a>
        </div>
      </header>

      <section id="top" className="hero-section blueprint-grid">
        <div className="hero-bg-glow"></div>
        <div className="container hero-content">
          <div className="reveal">
            <span className="tag">FREELANCE WEB &amp; SYSTEMS DEV</span>
          </div>
          <h1 className="hero-title reveal">
            Your idea,<br />
            <span className="accent-text">built with precision.</span>
          </h1>
          <p className="hero-copy reveal">
            I design and build custom web applications and business systems that help organizations launch faster and work smarter.
          </p>
          <div className="hero-actions reveal">
            <a href="#contact" className="btn btn-primary btn-large">Request a Quote</a>
            <a href="#work" className="btn btn-outline btn-large">See my work →</a>
          </div>
          <div className="hero-stats reveal">
            <div>
              <div className="stat-number">400+</div>
              hours of full-stack project work
            </div>
            <div>
              <div className="stat-number">1</div>
              public sector system delivered
            </div>
            <div>
              <div className="stat-number">100%</div>
              ready for development
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="tag">01 — SERVICES</span>
              <h2 className="section-title">What I can build for you</h2>
            </div>
          </div>
          <div className="service-grid">
            <article className="card service-card">
              <div className="corner-mark corner-top-left"></div>
              <span className="mini-label">[ WEB ]</span>
              <h3 className="card-title">Business &amp; landing websites</h3>
              <p className="card-copy">Fast, responsive websites that communicate clearly and help turn visitors into customers.</p>
            </article>

            <article className="card service-card">
              <div className="corner-mark corner-top-left"></div>
              <span className="mini-label">[ SYSTEM ]</span>
              <h3 className="card-title">Web apps &amp; internal systems</h3>
              <p className="card-copy">Booking solutions, inventory tools, forms, dashboards, and business systems that replace manual work.</p>
            </article>

            <article className="card service-card">
              <div className="corner-mark corner-top-left"></div>
              <span className="mini-label">[ DATA/ML ]</span>
              <h3 className="card-title">Data &amp; automation integrations</h3>
              <p className="card-copy">Smart workflows, reporting, automation, and data-connected features for growing operations.</p>
            </article>

            <article className="card service-card">
              <div className="corner-mark corner-top-left"></div>
              <span className="mini-label">[ MAINTAIN ]</span>
              <h3 className="card-title">Maintenance &amp; updates</h3>
              <p className="card-copy">Keep your website or system stable with ongoing improvements, fixes, and feature releases.</p>
            </article>

            <article className="card service-card">
              <div className="corner-mark corner-top-left"></div>
              <span className="mini-label">[ CONSULT ]</span>
              <h3 className="card-title">Tech consulting for startups</h3>
              <p className="card-copy">Plan your stack, define the scope, and shape a digital roadmap before building begins.</p>
            </article>

            <article className="card service-card custom-card">
              <span className="mini-label accent-label">[ CUSTOM ]</span>
              <h3 className="card-title">Have a different project?</h3>
              <p className="card-copy">Tell me what you need and I’ll help you figure out the right solution.</p>
              <a href="#contact" className="text-link">Let’s scope it →</a>
            </article>
          </div>
        </div>
      </section>

      <section id="process" className="section process-section blueprint-grid-fine">
        <div className="container">
          <span className="tag">02 — PROCESS</span>
          <h2 className="section-title process-title">How the process works</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">STEP 01</div>
              <h3 className="step-title">Discovery &amp; scope</h3>
              <p className="step-copy">We define the business goal, the users, and the exact features your service or platform needs.</p>
            </div>
            <div className="process-step">
              <div className="step-number">STEP 02</div>
              <h3 className="step-title">Design &amp; proposal</h3>
              <p className="step-copy">I’ll outline the direction, estimate the work, and prepare a practical timeline for delivery.</p>
            </div>
            <div className="process-step">
              <div className="step-number">STEP 03</div>
              <h3 className="step-title">Development</h3>
              <p className="step-copy">I build the site or system with regular updates so you can see progress as it moves forward.</p>
            </div>
            <div className="process-step">
              <div className="step-number">STEP 04</div>
              <h3 className="step-title">Launch &amp; support</h3>
              <p className="step-copy">The platform goes live and I stay available for improvements, maintenance, and future updates.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="container">
          <span className="tag">03 — WORK</span>
          <h2 className="section-title work-title">Selected work</h2>

          <div className="slider">
            <button
              type="button"
              className="slider-arrow slider-arrow-left"
              onClick={goPrev}
              aria-label="Previous project"
            >
              ‹
            </button>

            <div className="slider-viewport">
              <div
                className="slider-track"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <article className="card work-card slider-slide" key={project.title}>
                    <div className="work-img-wrap">
                      <img
                        src={project.img}
                        alt={project.alt}
                        className="work-img obj-top"
                      />
                    </div>
                    <div className="work-card-body">
                      <span className="mini-label">{project.label}</span>
                      <h3 className="work-title-large">{project.title}</h3>
                      <p className="card-copy">{project.desc}</p>
                      <span className="tech-label">{project.tech}</span>
                      <div className="work-links">
                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-link">Live demo</a>
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-link">GitHub</a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="slider-arrow slider-arrow-right"
              onClick={goNext}
              aria-label="Next project"
            >
              ›
            </button>
          </div>

          <div className="slider-dots">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                className={`slider-dot ${index === activeIndex ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to ${project.title}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section pricing-section blueprint-grid-fine">
        <div className="container">
          <span className="tag">04 — PACKAGES</span>
          <h2 className="section-title pricing-title">Clear service packages</h2>
          <div className="pricing-grid">
            <article className="card pricing-card">
              <span className="mini-label">STARTER</span>
              <div className="price-title">Landing Page</div>
              <p className="card-copy">A focused one-page website for businesses that need a professional online presence.</p>
              <ul className="feature-list">
                <li>— Responsive design</li>
                <li>— Contact form</li>
                <li>— 1 revision round</li>
              </ul>
              <a href="#contact" className="btn btn-outline price-button">Ask for Quote</a>
            </article>

            <article className="card pricing-card highlighted-card">
              <span className="popular-badge">POPULAR</span>
              <span className="mini-label">BUSINESS</span>
              <div className="price-title">Website + System</div>
              <p className="card-copy">A complete digital project with custom pages, forms, integrations, and business tools.</p>
              <ul className="feature-list">
                <li>— Custom pages &amp; features</li>
                <li>— Database integration</li>
                <li>— 2 revision rounds</li>
                <li>— 1 month free support</li>
              </ul>
              <a href="#contact" className="btn btn-primary price-button">Ask for Quote</a>
            </article>

            <article className="card pricing-card">
              <span className="mini-label">CUSTOM</span>
              <div className="price-title">Full System Build</div>
              <p className="card-copy">A custom platform for startups and organizations that need a complete digital workflow.</p>
              <ul className="feature-list">
                <li>— Full scoping &amp; architecture</li>
                <li>— Ongoing development</li>
                <li>— Maintenance plan</li>
              </ul>
              <a href="#contact" className="btn btn-outline price-button">Let’s Talk</a>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-bg blueprint-grid"></div>
        <div className="container contact-content">
          <span className="tag">05 — LET’S BUILD</span>
          <h2 className="contact-title">Need a website or system?<br />Let’s make it happen.</h2>
          <p className="contact-copy">Send your project idea and I’ll respond with the best next steps for your digital build.</p>
          <div className="contact-actions">
            <a href="mailto:patrickramoseva@gmail.com" className="btn btn-primary btn-large">patrickramoseva@gmail.com</a>
            <a href="https://www.facebook.com/ptrkrmseva/" target="_blank" rel="noreferrer" className="btn btn-outline btn-large">Facebook Message</a>
          </div>
          <p className="contact-footnote">Philippines · Available for remote freelance projects</p>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <span>© 2026 Patrick Eva — Web &amp; Systems Development</span>
          <span>Based in the Philippines</span>
        </div>
      </footer>
    </>
  )
}

export default App