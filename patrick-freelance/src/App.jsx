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
          <span className="tag">02 — HOW IT WORKS</span>
          <h2 className="section-title process-title">Work with me</h2>
          <p className="how-it-works-intro">
            I take on a few freelance projects at a time, mostly for small businesses around Batangas.
            Here's what I build and what it costs — so you don't have to message me just to find out.
          </p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">STEP 01</div>
              <h3 className="step-title">We talk</h3>
              <p className="step-copy">You tell me what your business needs. Chat is fine — no meeting required, and it costs nothing.</p>
            </div>
            <div className="process-step">
              <div className="step-number">STEP 02</div>
              <h3 className="step-title">I build you a free preview</h3>
              <p className="step-copy">Not a mockup picture — a real, working version you can open on your own phone, before you've paid anything.</p>
            </div>
            <div className="process-step">
              <div className="step-number">STEP 03</div>
              <h3 className="step-title">You decide</h3>
              <p className="step-copy">If you want it, we agree on the price and I finish it with your real photos and details. If you don't, you owe me nothing.</p>
            </div>
            <div className="process-step">
              <div className="step-number">STEP 04</div>
              <h3 className="step-title">It goes live in your name</h3>
              <p className="step-copy">I hand over the accounts registered to you — not to me. You're never locked into working with me to keep your own site.</p>
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
                {projects.map((project) => (
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
          <h2 className="section-title pricing-title">What I build and what it costs</h2>

          <div className="pricing-grid">
            <article className="card pricing-card">
              <span className="mini-label">ONE-PAGE</span>
              <div className="price-title">₱4,000</div>
              <span className="price-sub">Business site — starts at</span>
              <p className="card-copy">Everything a customer needs on one scrollable page: what you offer, your prices, hours, location, and a way to reach you. Built for a phone first, because that's where almost everyone will open it.</p>
              <ul className="feature-list">
                <li>— One scrollable page</li>
                <li>— Mobile-first layout</li>
                <li>— Contact / location / hours</li>
              </ul>
              <div className="timeline-row">
                <span className="timeline-label">Usually ready in</span>
                <span className="timeline-value">~1 week</span>
              </div>
              <div className="rush-note">
                <span className="rush-label">⚡ Rush (2–3 days)</span>
                <span className="rush-value">+₱1,500</span>
              </div>
              <a href="#contact" className="btn btn-outline price-button">Ask for Quote</a>
            </article>

            <article className="card pricing-card highlighted-card">
              <span className="popular-badge">POPULAR</span>
              <span className="mini-label">FULL WEBSITE</span>
              <div className="price-title">₱8,000</div>
              <span className="price-sub">Business website — starts at</span>
              <p className="card-copy">Several sections with a filterable menu or service list, a photo gallery, and forms — reservations, pre-orders, inquiries — that land straight in your inbox or Messenger. Set up so it shares properly on Facebook and shows up on Google.</p>
              <ul className="feature-list">
                <li>— Filterable menu / service list</li>
                <li>— Photo gallery</li>
                <li>— Reservation / inquiry forms</li>
                <li>— Facebook share preview &amp; SEO setup</li>
              </ul>
              <div className="timeline-row">
                <span className="timeline-label">Usually ready in</span>
                <span className="timeline-value">1-2 weeks</span>
              </div>
              <div className="rush-note">
                <span className="rush-label">⚡ Rush (4-5 days)</span>
                <span className="rush-value">+₱3,000</span>
              </div>
              <a href="#contact" className="btn btn-primary price-button">Ask for Quote</a>
            </article>

            <article className="card pricing-card">
              <span className="mini-label">CUSTOM SYSTEM</span>
              <div className="price-title">₱15,000</div>
              <span className="price-sub">Full system build — starts at</span>
              <p className="card-copy">Software your business actually runs on, not just a page about it — online booking with slots that lock in real time, customer records, staff logins, reports. Installs like an app on your phone and keeps working when the internet drops.</p>
              <ul className="feature-list">
                <li>— Real-time booking / slots</li>
                <li>— Customer records &amp; staff logins</li>
                <li>— Reports dashboard</li>
                <li>— Works offline, installs like an app</li>
              </ul>
              <div className="timeline-row">
                <span className="timeline-label">Usually ready in</span>
                <span className="timeline-value">3-4 weeks</span>
              </div>
              <div className="rush-note">
                <span className="rush-label">⚡ Rush (1-2 weeks)</span>
                <span className="rush-value">+₱5,000</span>
              </div>
              <a href="#contact" className="btn btn-outline price-button">Let's Talk</a>
            </article>
          </div>

          <div className="pricing-footnote">
            <p>Final price depends on how much you need — I'll quote your project after we talk, and quoting is free.</p>
            <p>Hosting is free on the setup I use. A custom domain like <span className="accent-text-inline">yourcafe.com</span> is optional and runs roughly ₱700–1,000 a year, paid directly to the registrar in your name.</p>
            <p className="rush-footnote">⚡ Rush pricing shortens the timeline — it doesn't skip steps. You still get the free preview first.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-bg blueprint-grid"></div>
        <div className="container contact-content">
          <div className="contact-card">
            <div className="contact-glow"></div>
            <span className="tag">05 — GET IN TOUCH</span>
            <h2 className="contact-title">Need a website or a system<br />for your business?</h2>

            <div className="contact-actions">
              <a href="mailto:patrickramoseva@gmail.com" className="btn btn-primary btn-large">patrickramoseva@gmail.com</a>
              <a href="https://www.facebook.com/ptrkrmseva/" target="_blank" rel="noreferrer" className="btn btn-outline btn-large">Facebook Message</a>
            </div>

            <p className="contact-footnote">Philippines · Available for remote freelance projects</p>

            <div className="contact-divider"></div>

            <div className="contact-socials">
              <a href="https://www.facebook.com/ptrkrmseva/" target="_blank" rel="noreferrer" className="social-icon-btn fb" aria-label="Facebook">
                <svg viewBox="0 0 320 512" fill="#fff">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/_ptrkeva/" target="_blank" rel="noreferrer" className="social-icon-btn ig" aria-label="Instagram">
                <svg viewBox="0 0 448 512" fill="#fff">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a href="https://wa.me/639683072740" target="_blank" rel="noreferrer" className="social-icon-btn wa" aria-label="WhatsApp">
                <svg viewBox="0 0 448 512" fill="#fff">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
            </div>
          </div>
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