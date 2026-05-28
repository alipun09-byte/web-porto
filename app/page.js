import Nav from '../components/Nav';
import SectionHeader from '../components/SectionHeader';
import WorkCard from '../components/WorkCard';
import {
  hero,
  stats,
  about,
  services,
  works,
  gallery,
  photoshoots,
  viral,
  printWorks,
  commissionWorks,
  moreWork,
  timeline,
  contact,
} from '../data/portfolio';

export default function HomePage() {
  return (
    <>
      <a id="top" />
      <Nav />

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="hero-badge">{hero.badge}</div>
              <h1>
                {hero.title.split(' that ').map((part, index) => (
                  <span key={index}>
                    {index > 0 ? 'that ' : ''}
                    {part}
                    {index < hero.title.split(' that ').length - 1 ? <br /> : null}
                  </span>
                ))}
              </h1>
              <p className="hero-sub">{hero.description}</p>
              <div className="hero-actions">
                <a href="#works" className="btn-primary">
                  View My Work
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#contact" className="btn-secondary">Get In Touch</a>
              </div>
            </div>

            <div className="hero-image">
              <img src={hero.image} alt={hero.imageAlt} loading="eager" />
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            {stats.map((item) => (
              <div className="stat" key={item.label}>
                <div className="stat-number">{item.value}</div>
                <div className="stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="about">
          <div className="container">
            <SectionHeader label="About Me" title={about.title} description={about.description[0]} />
            <div className="about-grid">
              <div className="about-image">
                <img src={about.image} alt="Nur Alip" loading="lazy" />
              </div>
              <div className="about-text">
                <h3>Hi, I'm Nur Alip 👋</h3>
                {about.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <div className="tools-grid">
                  {about.tools.map((tool) => (
                    <span className="tool-tag" key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <SectionHeader label="What I Do" title="Services & Expertise." description="I help brands stand out in a crowded digital space through strategic visual communication." />
            <div className="services-grid">
              {services.map((service) => (
                <div className="service-card" key={service.title}>
                  <div className="service-number">{service.number}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="works">
          <div className="container">
            <SectionHeader label="Selected Work" title="Featured Projects." description="Projects that showcase my approach to visual communication and brand building." />
            <div className="works-grid">
              {works.map((work) => (
                <WorkCard work={work} key={work.title} />
              ))}
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="container">
            <SectionHeader label="Social Media" title="Content Gallery." description="Social media designs, Instagram posts, and marketing visuals." />
            <div className="gallery-grid">
              {gallery.map((src) => (
                <div className="gallery-item" key={src}>
                  <img src={src} alt="Social media design" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <SectionHeader label="Photography" title="Photo Direction." description="Professional photoshoot direction — combining formal and personal elements." />
            <div className="photoshoot-grid">
              {photoshoots.map((src) => (
                <div className="photoshoot-item" key={src}>
                  <img src={src} alt="Photoshoot sample" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <SectionHeader label="Viral Content" title="Campaign Showcase." description="Short-form video content that generated 1.8M+ organic views." />
            <div className="photoshoot-grid">
              {viral.map((src) => (
                <div className="photoshoot-item" key={src}>
                  <img src={src} alt="Viral campaign sample" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <SectionHeader label="Print Design" title="Print & Materials." description="Offline brand presence through professional print design." />
            <div className="photoshoot-grid">
              {printWorks.map((src) => (
                <div className="photoshoot-item" key={src}>
                  <img src={src} alt="Print design sample" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <SectionHeader label="Commission & Personal" title="Creative Explorations." description="Commercial commissions and personal projects." />
            <div className="commission-grid">
              {commissionWorks.map((src) => (
                <div className="commission-item" key={src}>
                  <img src={src} alt="Commission work sample" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <SectionHeader label="More Work" title="Additional Projects." description="More examples of visual storytelling and branded content." />
            <div className="photoshoot-grid">
              {moreWork.map((src) => (
                <div className="photoshoot-item" key={src}>
                  <img src={src} alt="Additional work sample" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="container">
            <SectionHeader label="Experience" title="My Journey." description="Professional milestones and design experience through the years." />
            <div className="timeline">
              {timeline.map((item) => (
                <div className="timeline-item" key={item.role + item.company}>
                  <div className="timeline-date">{item.date}</div>
                  <h3>{item.role}</h3>
                  <div className="timeline-company">{item.company}</div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <SectionHeader label="Get In Touch" title="Let's create something great." description="Have a project in mind? Let's talk about how we can work together." centered />
            <div className="contact-links">
              <a href={`mailto:${contact.email}`} className="contact-link" aria-label={`Send email to ${contact.email}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
                {contact.email}
              </a>
              <a href={contact.whatsapp} className="contact-link" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a href={contact.linkedin} className="contact-link" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-text">© 2026 <span>Nur Alip</span>. All rights reserved.</div>
          <div className="footer-text">Designed with intention.</div>
        </div>
      </footer>
    </>
  );
}
