
import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'

export default function Home() {
  const { language } = useLanguage()
  const isFrench = language === 'fr'

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-eyebrow">
            {isFrench
              ? "HELLO, MOI C'EST SANIA ✨"
              : "HELLO, I'M SANIA ✨"}
          </p>

          <h1>
            <span className="home-name-light">Aishwaria</span>
            <br />
            <span className="home-name-dark">Sania</span>
            <span className="home-name-light"> Mattan.</span>
          </h1>

          <p className="home-role">
            {isFrench
              ? 'Étudiante ingénieure à Centrale Nantes · Alternante chez Covéa / MMA'
              : 'Engineering student at Centrale Nantes · Apprentice at Covéa / MMA'}
          </p>

          <p className="home-description">
            {isFrench
              ? 'Entre ingénierie, technologie et créativité, je construis mon parcours avec curiosité et passion.'
              : "At the intersection of engineering, technology and creativity, I'm building my journey with curiosity and passion."}
          </p>

          <div className="home-actions">
            <Link
              to="/about"
              className="home-button home-button-primary"
            >
              {isFrench
                ? 'Me découvrir ♡'
                : 'Get to know me ♡'}
            </Link>

            <Link
              to="/projects"
              className="home-button home-button-secondary"
            >
              {isFrench
                ? 'Mes projets ↗'
                : 'My projects ↗'}
            </Link>
          </div>
        </div>

        <div className="home-hero-visual">
          <div className="home-photo-decoration" />

          <div className="home-photo-frame">
            <img
              src="/images/profile.jpg"
              alt={
                isFrench
                  ? 'Portrait de Sania'
                  : 'Portrait of Sania'
              }
            />
          </div>

          <span
            className="home-photo-sparkle"
            aria-hidden="true"
          >
            ✧
          </span>

          <div className="home-photo-label">
            {isFrench
              ? 'Un peu de moi '
              : 'A little about me'}
          </div>
        </div>
      </section>

      <section className="home-explore">
        <div className="home-explore-heading">
          <p className="home-eyebrow">
            {isFrench ? 'DÉCOUVRIR ✧' : 'EXPLORE ✧'}
          </p>

          <h2>
            {isFrench
              ? 'Bienvenue dans mon univers'
              : 'Welcome to my world'}
          </h2>

          <p>
            {isFrench
              ? 'Plusieurs passions, un seul parcours.'
              : 'Many passions, one journey.'}
          </p>
        </div>

        <div className="home-card-grid">
          <Link to="/about" className="home-card">
            <span className="home-card-icon" aria-hidden="true">
              🌷
            </span>

            <h3>
              {isFrench ? 'À propos' : 'About me'}
            </h3>

            <p>
              {isFrench
                ? 'Découvrez qui je suis, au-delà de mon parcours académique.'
                : 'Discover who I am beyond my academic journey.'}
            </p>

            <span className="home-card-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>

          <Link to="/journey" className="home-card">
            <span className="home-card-icon" aria-hidden="true">
              🎓
            </span>

            <h3>
              {isFrench ? 'Mon parcours' : 'My journey'}
            </h3>

            <p>
              {isFrench
                ? 'Mes études, mes expériences et les étapes qui me construisent.'
                : 'My studies, experiences and the milestones shaping my path.'}
            </p>

            <span className="home-card-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>

          <Link to="/projects" className="home-card">
            <span className="home-card-icon" aria-hidden="true">
              💻
            </span>

            <h3>
              {isFrench ? 'Mes projets' : 'My projects'}
            </h3>

            <p>
              {isFrench
                ? 'Un aperçu de mes réalisations techniques et créatives.'
                : 'A look at my technical and creative work.'}
            </p>

            <span className="home-card-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </section>

      <section className="home-contact home-contact-editorial">
        <div className="home-contact-content">
          <p className="home-eyebrow">
            {isFrench
              ? 'RESTONS EN CONTACT ✧'
              : "LET'S CONNECT ✧"}
          </p>

          <h2>
            {isFrench ? (
              <>
                Et si nous <em>échangions ?</em>
              </>
            ) : (
              <>
                Let's <em>connect.</em>
              </>
            )}
          </h2>

          <p className="home-contact-description">
            {isFrench
              ? "Une idée, un projet ou une opportunité ? Je serais ravie d'échanger avec vous."
              : "An idea, a project, or an opportunity? I'd love to hear from you."}
          </p>

          <Link
            to="/contact"
            className="home-button home-button-primary home-contact-button"
          >
            {isFrench
              ? 'Me contacter ↗'
              : 'Get in touch ↗'}
          </Link>

          <span
            className="home-contact-decoration"
            aria-hidden="true"
          >
            ✧
          </span>
        </div>
      </section>
    </main>
  )
}
