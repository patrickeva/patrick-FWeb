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
      {/* =========================
          HEADER
      ========================== */}
      <header className="site-header">
        <div className="nav-wrap">

          <a href="#top" className="brand">
            <img
              src="/images/F-profile.png"
              alt="Patrick Eva"
              className="brand-mark-img"
            />
            <span className="brand-name">Digital Works</span>
          </a>

          <nav className="main-nav">
            <a href="#top" className="nav-link">Home</a>
            <a href="#profile" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#process" className="nav-link">Process</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <a href="#contact" className="btn btn-primary nav-cta">
            Let's Talk
          </a>

        </div>
      </header>


      {/* =========================
          HOME / HERO
      ========================== */}
      <section id="top" className="hero-section blueprint-grid">

        <div className="hero-bg-glow"></div>

        <div className="container hero-content">

          <div className="hero-copy-column">

            <div className="reveal">
              <span className="tag">
                FREELANCE WEB &amp; SYSTEMS DEV
              </span>
            </div>

            <h1 className="hero-title reveal">
              Your idea,
              <br />
              <span className="accent-text">
                built with precision.
              </span>
            </h1>

            <p className="hero-copy reveal">
              I design and build custom web applications and business
              systems that help organizations launch faster and work smarter.
            </p>

            <div className="hero-actions reveal">
              <a
                href="#contact"
                className="btn btn-primary btn-large"
              >
                Request a Quote
              </a>

              <a
                href="#work"
                className="btn btn-outline btn-large"
              >
                See my work →
              </a>
            </div>

            <div className="hero-stats reveal">

              <div className="hero-stat">
                <div className="stat-number">400+</div>
                <span>hours of full-stack project work</span>
              </div>

              <div className="hero-stat">
                <div className="stat-number">1</div>
                <span>public sector system delivered</span>
              </div>

              <div className="hero-stat">
                <div className="stat-number">100%</div>
                <span>ready for development</span>
              </div>

            </div>

          </div>

        </div>

        <div className="hero-floating-dot dot-one"></div>
        <div className="hero-floating-dot dot-two"></div>

      </section>


      {/* =========================
          ABOUT
      ========================== */}
      <section
        id="profile"
        className="section profile-section"
      >

        <div className="container profile-content">

          <div className="profile-image-wrap">
            <div className="profile-image-glow"></div>

            <div className="profile-glass-frame">
              <img
                src="/images/F-profile.png"
                alt="Patrick Eva"
                className="profile-image"
              />

              <div className="profile-glass-shine"></div>
            </div>
          </div>

          <div className="profile-info">

            <span className="tag">
              ABOUT ME
            </span>

            <h2 className="section-title profile-name">
              Hi, I'm <span>Patrick</span>
            </h2>

            <p className="profile-role">
              Freelance Web &amp; Systems Developer, based in Batangas, PH
            </p>

            <p className="card-copy profile-bio">
              BSCS graduate with a specialization in Machine Learning.
              Alongside my ML background, I've built strong hands-on skills
              in web and systems development from business websites to full
              booking and management systems for real clients, including a
              public sector project. I enjoy combining a solid technical
              foundation with practical, real-world builds that actually
              solve problems for the people using them.
            </p>

            <div className="profile-highlights">

              <div className="profile-highlight-item">
                <span className="profile-highlight-num">
                  400+
                </span>
                <span className="profile-highlight-label">
                  hours coded
                </span>
              </div>

              <div className="profile-highlight-item">
                <span className="profile-highlight-num">
                  4
                </span>
                <span className="profile-highlight-label">
                  projects delivered
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SERVICES
      ========================== */}
      <section
        id="services"
        className="section services-section"
      >

        <div className="container">

          <div className="section-head">

            <div>
              <span className="tag">
                01 — SERVICES
              </span>

              <h2 className="section-title">
                What I can build for you
              </h2>
            </div>

          </div>

          <div className="service-grid">

            <article className="card service-card">
              <div className="service-icon">
                &lt;/&gt;
              </div>

              <span className="mini-label">
                [ WEB ]
              </span>

              <h3 className="card-title">
                Business &amp; landing websites
              </h3>

              <p className="card-copy">
                Fast, responsive websites that communicate clearly
                and help turn visitors into customers.
              </p>

              <a href="#contact" className="service-link">
                Learn more →
              </a>
            </article>


            <article className="card service-card">
              <div className="service-icon">
                ◫
              </div>

              <span className="mini-label">
                [ SYSTEM ]
              </span>

              <h3 className="card-title">
                Web apps &amp; internal systems
              </h3>

              <p className="card-copy">
                Booking solutions, inventory tools, forms, dashboards,
                and business systems that replace manual work.
              </p>

              <a href="#contact" className="service-link">
                Learn more →
              </a>
            </article>


            <article className="card service-card">
              <div className="service-icon">
                ⚙
              </div>

              <span className="mini-label">
                [ MAINTAIN ]
              </span>

              <h3 className="card-title">
                Maintenance &amp; updates
              </h3>

              <p className="card-copy">
                Keep your website or system stable with ongoing
                improvements, fixes, and feature releases.
              </p>

              <a href="#contact" className="service-link">
                Learn more →
              </a>
            </article>


            <article className="card service-card">
              <div className="service-icon">
                ?
              </div>

              <span className="mini-label">
                [ CONSULT ]
              </span>

              <h3 className="card-title">
                Tech consulting for startups
              </h3>

              <p className="card-copy">
                Plan your stack, define the scope, and shape a
                digital roadmap before building begins.
              </p>

              <a href="#contact" className="service-link">
                Learn more →
              </a>
            </article>


            <article className="card service-card custom-card">

              <div className="service-icon orange-icon">
                +
              </div>

              <span className="mini-label accent-label">
                [ CUSTOM ]
              </span>

              <h3 className="card-title">
                Have a different project?
              </h3>

              <p className="card-copy">
                Tell me what you need and I'll help you figure out
                the right solution.
              </p>

              <a href="#contact" className="text-link">
                Let's scope it →
              </a>

            </article>

          </div>

        </div>

      </section>


      {/* =========================
          PROCESS
      ========================== */}
      <section
        id="process"
        className="section process-section blueprint-grid-fine"
      >

        <div className="container">

          <span className="tag">
            02 — HOW IT WORKS
          </span>

          <h2 className="section-title process-title">
            Work with me
          </h2>

          <p className="how-it-works-intro">
            I take on a few freelance projects at a time, mostly for
            small businesses around Batangas. Here's what I build and
            what it costs — so you don't have to message me just to find out.
          </p>

          <div className="process-grid">

            <div className="process-step">
              <div className="step-number">
                STEP 01
              </div>

              <h3 className="step-title">
                We talk
              </h3>

              <p className="step-copy">
                You tell me what your business needs. Chat is fine —
                no meeting required, and it costs nothing.
              </p>
            </div>


            <div className="process-step">
              <div className="step-number">
                STEP 02
              </div>

              <h3 className="step-title">
                I build you a free preview
              </h3>

              <p className="step-copy">
                Not a mockup picture — a real, working version you
                can open on your own phone, before you've paid anything.
              </p>
            </div>


            <div className="process-step">
              <div className="step-number">
                STEP 03
              </div>

              <h3 className="step-title">
                You decide
              </h3>

              <p className="step-copy">
                If you want it, we agree on the price and I finish it
                with your real photos and details. If you don't, you owe
                me nothing.
              </p>
            </div>


            <div className="process-step">
              <div className="step-number">
                STEP 04
              </div>

              <h3 className="step-title">
                It goes live in your name
              </h3>

              <p className="step-copy">
                I hand over the accounts registered to you — not to me.
                You're never locked into working with me to keep your own site.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          WORK
      ========================== */}
      <section
        id="work"
        className="section work-section"
      >

        <div className="container">

          <span className="tag">
            03 — WORK
          </span>

          <h2 className="section-title work-title">
            Selected work
          </h2>

          <div className="slider">

            <button
              type="button"
              className="slider-arrow"
              onClick={goPrev}
              aria-label="Previous project"
            >
              ‹
            </button>

            <div className="slider-viewport">

              <div
                className="slider-track"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >

                {projects.map((project) => (
                  <article
                    className="card work-card slider-slide"
                    key={project.title}
                  >

                    <div className="work-img-wrap">

                      <img
                        src={project.img}
                        alt={project.alt}
                        className="work-img"
                      />

                    </div>

                    <div className="work-card-body">

                      <span className="mini-label">
                        {project.label}
                      </span>

                      <h3 className="work-title-large">
                        {project.title}
                      </h3>

                      <p className="card-copy">
                        {project.desc}
                      </p>

                      <span className="tech-label">
                        {project.tech}
                      </span>

                      <div className="work-links">

                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-link"
                        >
                          Live demo
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-link"
                        >
                          GitHub
                        </a>

                      </div>

                    </div>

                  </article>
                ))}

              </div>

            </div>

            <button
              type="button"
              className="slider-arrow"
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
                className={`slider-dot ${
                  index === activeIndex ? 'is-active' : ''
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to ${project.title}`}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =========================
          PRICING
      ========================== */}
      <section
        id="pricing"
        className="section pricing-section blueprint-grid-fine"
      >

        <div className="container">

          <span className="tag">
            04 — PACKAGES
          </span>

          <h2 className="section-title pricing-title">
            What I build and what it costs
          </h2>

          <div className="pricing-grid">

            <article className="card pricing-card">

              <span className="mini-label">
                ONE-PAGE
              </span>

              <div className="price-title">
                ₱4,000 +
              </div>

              <span className="price-sub">
                Business site — starts at
              </span>

              <p className="card-copy">
                Everything a customer needs on one scrollable page:
                what you offer, your prices, hours, location, and a way
                to reach you. Built for a phone first, because that's
                where almost everyone will open it.
              </p>

              <ul className="feature-list">
                <li>— One scrollable page</li>
                <li>— Mobile-first layout</li>
                <li>— Contact / location / hours</li>
              </ul>

              <div className="timeline-row">
                <span className="timeline-label">
                  Usually ready in
                </span>

                <span className="timeline-value">
                  ~1 week
                </span>
              </div>

              <div className="rush-note">
                <span className="rush-label">
                  ⚡ Rush (2–3 days)
                </span>

                <span className="rush-value">
                  +₱1,500
                </span>
              </div>

              <a
                href="#contact"
                className="btn btn-outline price-button"
              >
                Ask for Quote
              </a>

            </article>


            <article className="card pricing-card highlighted-card">

              <span className="popular-badge">
                POPULAR
              </span>

              <span className="mini-label">
                FULL WEBSITE
              </span>

              <div className="price-title">
                ₱8,000 +
              </div>

              <span className="price-sub">
                Business website — starts at
              </span>

              <p className="card-copy">
                Several sections with a filterable menu or service list,
                a photo gallery, and forms — reservations, pre-orders,
                inquiries — that land straight in your inbox or Messenger.
                Set up so it shares properly on Facebook and shows up on Google.
              </p>

              <ul className="feature-list">
                <li>— Filterable menu / service list</li>
                <li>— Photo gallery</li>
                <li>— Reservation / inquiry forms</li>
                <li>— Facebook share preview &amp; SEO setup</li>
              </ul>

              <div className="timeline-row">
                <span className="timeline-label">
                  Usually ready in
                </span>

                <span className="timeline-value">
                  1–2 weeks
                </span>
              </div>

              <div className="rush-note">
                <span className="rush-label">
                  ⚡ Rush (4–5 days)
                </span>

                <span className="rush-value">
                  +₱3,000
                </span>
              </div>

              <a
                href="#contact"
                className="btn btn-primary price-button"
              >
                Ask for Quote
              </a>

            </article>


            <article className="card pricing-card">

              <span className="mini-label">
                CUSTOM SYSTEM
              </span>

              <div className="price-title">
                ₱15,000 +
              </div>

              <span className="price-sub">
                Full system build — starts at
              </span>

              <p className="card-copy">
                Software your business actually runs on, not just a page
                about it — online booking with slots that lock in real time,
                customer records, staff logins, reports. Installs like an
                app on your phone and keeps working when the internet drops.
              </p>

              <ul className="feature-list">
                <li>— Real-time booking / slots</li>
                <li>— Customer records &amp; staff logins</li>
                <li>— Reports dashboard</li>
                <li>— Works offline, installs like an app</li>
              </ul>

              <div className="timeline-row">
                <span className="timeline-label">
                  Usually ready in
                </span>

                <span className="timeline-value">
                  3–4 weeks
                </span>
              </div>

              <div className="rush-note">
                <span className="rush-label">
                  ⚡ Rush (1–2 weeks)
                </span>

                <span className="rush-value">
                  +₱5,000
                </span>
              </div>

              <a
                href="#contact"
                className="btn btn-outline price-button"
              >
                Let's Talk
              </a>

            </article>

          </div>

          <div className="pricing-footnote">

            <p>
              Final price depends on how much you need — I'll quote your
              project after we talk, and quoting is free.
            </p>

            <p>
              Hosting is free on the setup I use. A custom domain like
              <span className="accent-text-inline">
                yourcafe.com
              </span>
              is optional and runs roughly ₱700–1,000 a year, paid directly
              to the registrar in your name.
            </p>

            <p className="rush-footnote">
              ⚡ Rush pricing shortens the timeline — it doesn't skip steps.
              You still get the free preview first.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          BREAKDOWN
      ========================== */}
      <section
        id="breakdown"
        className="section breakdown-section blueprint-grid-fine"
      >

        <div className="container">

          <span className="tag">
            05 — BREAKDOWN &amp; ADD-ONS
          </span>

          <h2 className="section-title breakdown-title">
            How the pricing actually works
          </h2>

          <p className="breakdown-intro">
            A price alone doesn't tell you much — so here's exactly what's
            included at each tier, what you can add on top, and how payment
            is structured. No hidden charges: if a project needs something
            extra, you'll see it here before we ever discuss your specific quote.
          </p>


          <div className="breakdown-block">

            <span className="mini-label accent-label">
              [ EXAMPLE PROJECTS ]
            </span>

            <h3 className="breakdown-subtitle">
              What each tier looks like in a real project
            </h3>

            <div className="example-grid">

              <article className="card example-card">

                <span className="mini-label">
                  ONE-PAGE · ₱4,000 +
                </span>

                <h4 className="example-title">
                  Example: A Small Eatery or Sari-Sari Store
                </h4>

                <p className="example-desc">
                  Just one scrollable page, but complete:
                </p>

                <ul className="example-list">
                  <li>— Header + short business introduction</li>
                  <li>— Menu / price list</li>
                  <li>— About / location details</li>
                  <li>— Messenger / call button</li>
                  <li>— Google Maps embed</li>
                </ul>

                <p className="example-fit">
                  Best for: small businesses that just need a basic
                  online presence.
                </p>

              </article>


              <article className="card example-card">

                <span className="mini-label">
                  FULL WEBSITE · ₱8,000 +
                </span>

                <h4 className="example-title">
                  Example: A Cafe or Retail Shop
                </h4>

                <p className="example-desc">
                  4–6 sections or pages, with a few interactive parts:
                </p>

                <ul className="example-list">
                  <li>— Home / landing section</li>
                  <li>— Filterable menu or product gallery</li>
                  <li>— About Us</li>
                  <li>— Reservation / order / inquiry form</li>
                  <li>— Contact + location page</li>
                </ul>

                <p className="example-fit">
                  Best for: businesses with products or services that
                  customers need to browse and book online.
                </p>

              </article>


              <article className="card example-card">

                <span className="mini-label">
                  CUSTOM SYSTEM · ₱15,000 +
                </span>

                <h4 className="example-title">
                  Example: A Salon or Clinic Booking System
                </h4>

                <p className="example-desc">
                  A full system, not just a website:
                </p>

                <ul className="example-list">
                  <li>— Client-facing booking page (real-time slots)</li>
                  <li>— Staff / admin login</li>
                  <li>— Customer records dashboard</li>
                  <li>— Monthly sales / reports view</li>
                  <li>— Works without internet</li>
                </ul>

                <p className="example-fit">
                  Best for: businesses with staff, appointments,
                  and a need for records tracking.
                </p>

              </article>

            </div>

          </div>


          <div className="breakdown-block">

            <span className="mini-label accent-label">
              [ OPTIONAL ADD-ONS ]
            </span>

            <h3 className="breakdown-subtitle">
              Add these anytime — not included in the base price
            </h3>

            <p className="breakdown-note">
              The base prices above stay exactly as listed. The items
              below cover specific needs beyond the standard package —
              you only pay for what your project actually requires.
            </p>

            <div className="addons-panel">

              <div className="addon-item">
                <span>Domain setup &amp; configuration</span>
                <strong>₱500 one-time</strong>
              </div>

              <div className="addon-item">
                <span>Extra page / section</span>
                <strong>₱500–800 each</strong>
              </div>

              <div className="addon-item">
                <span>Database / cloud storage integration</span>
                <strong>Starts at ₱3,000</strong>
              </div>

              <div className="addon-item">
                <span>Online payment integration</span>
                <strong>Starts at ₱4,000</strong>
              </div>

              <div className="addon-item">
                <span>Content writing / copywriting</span>
                <strong>₱1,000–2,000</strong>
              </div>

              <div className="addon-item">
                <span>Basic logo / branding kit</span>
                <strong>₱1,500–2,500</strong>
              </div>

              <div className="addon-item">
                <span>SEO basic setup</span>
                <strong>₱1,000</strong>
              </div>

              <div className="addon-item">
                <span>Extra revision round</span>
                <strong>₱500 per round</strong>
              </div>

              <div className="addon-item">
                <span>Annual maintenance &amp; support plan</span>
                <strong>₱1,500–3,000 / year</strong>
              </div>

            </div>

          </div>


          <div className="terms-grid">

            <article className="card terms-card">

              <span className="mini-label">
                [ PAYMENT TERMS ]
              </span>

              <h3 className="terms-title">
                How payment works
              </h3>

              <ul className="terms-list">
                <li>
                  <strong>One-Page &amp; Full Website:</strong> 50%
                  downpayment to start, 50% before the site goes live.
                </li>

                <li>
                  <strong>Custom System:</strong> option to split into
                  3 milestones — 30% downpayment, 40% once core features
                  pass testing, 30% on deployment/handover.
                </li>

                <li>
                  GCash or bank transfer accepted, with proof of payment
                  / receipt provided.
                </li>

                <li>
                  Rush fees are added on top of the base price.
                </li>
              </ul>

            </article>


            <article className="card terms-card">

              <span className="mini-label">
                [ DELIVERABLES &amp; INCLUSIONS ]
              </span>

              <h3 className="terms-title">
                Who brings what
              </h3>

              <div className="deliverables-columns">

                <div>
                  <span className="deliverable-heading">
                    You provide
                  </span>

                  <ul className="deliverable-list">
                    <li>Business info</li>
                    <li>Photos / logo</li>
                    <li>Social media &amp; contact details</li>
                    <li>Feedback within revision period</li>
                  </ul>
                </div>


                <div>
                  <span className="deliverable-heading">
                    I provide
                  </span>

                  <ul className="deliverable-list">
                    <li>Full design &amp; development</li>
                    <li>Mobile-responsive layout</li>
                    <li>Free hosting setup</li>
                    <li>Testing across devices/browsers</li>
                    <li>2 revision rounds</li>
                    <li>Handover walkthrough</li>
                    <li>30 days free bug-fix support</li>
                  </ul>
                </div>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================== */}
      <section
        id="contact"
        className="section contact-section"
      >

        <div className="contact-bg blueprint-grid"></div>

        <div className="container contact-content">

          <div className="contact-card">

            <div className="contact-glow"></div>

            <span className="tag">
              06 — GET IN TOUCH
            </span>

            <h2 className="contact-title">
              Need a website or a system
              <br />
              for your business?
            </h2>

            <div className="contact-actions">

              <a
                href="mailto:patrickramoseva@gmail.com"
                className="btn btn-primary btn-large"
              >
                patrickramoseva@gmail.com
              </a>

              <a
                href="https://www.facebook.com/ptrkrmseva/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-large contact-facebook"
              >
                Facebook Message
              </a>

            </div>

            <p className="contact-footnote">
              Philippines · Available for remote freelance projects
            </p>

            <div className="contact-divider"></div>

            <div className="contact-socials">

              <a
                href="https://www.facebook.com/ptrkrmseva/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn fb"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="https://www.instagram.com/_ptrkeva/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn ig"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href="https://wa.me/639683072740"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn wa"
                aria-label="WhatsApp"
              >
                ☎
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}
      <footer className="footer">

        <div className="container footer-content">

          <span>
            © 2026 Patrick Eva — Web &amp; Systems Development
          </span>

          <span>
            Based in the Philippines
          </span>

        </div>

      </footer>

    </>
  )
}

export default App