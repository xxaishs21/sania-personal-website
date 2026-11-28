
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../LanguageContext'
import {
  setVisitorMode,
  useVisitorMode
} from '../../VisitorMode'
import '../../VisitorMode.css'

export default function Home() {
  const { language } = useLanguage()
  const isFrench = language === 'fr'

  const visitorMode = useVisitorMode()
  const isRecruiter = visitorMode === 'recruiter'

  const [showReminder, setShowReminder] = useState(false)

  // Show the welcome dialog only if no preference exists.
  const showWelcome = visitorMode === null

  // Lock background scrolling while the welcome dialog is open.
  useEffect(() => {
    if (!showWelcome) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [showWelcome])

  // Suggest projects after 45 seconds on Home in recruiter mode.
  useEffect(() => {
    setShowReminder(false)

    if (!isRecruiter || showWelcome) return

    const reminderKey = 'sania-recruiter-reminder-shown'

    try {
      if (sessionStorage.getItem(reminderKey) === 'yes') {
        return
      }
    } catch {
      // Continue without session persistence.
    }

    const timeout = window.setTimeout(() => {
      try {
        sessionStorage.setItem(reminderKey, 'yes')
      } catch {
        // Continue even if storage is unavailable.
      }

      setShowReminder(true)
    }, 45000)

    return () => window.clearTimeout(timeout)
  }, [isRecruiter, showWelcome])

  function chooseMode(mode: 'recruiter' | 'visitor') {
    setVisitorMode(mode)
    setShowReminder(false)
  }

  return (
    <main
      className={`home-page ${
        isRecruiter ? 'home-recruiter-mode' : ''
      }`}
    >
      <section className="home-hero">
        <div className="home-hero-content">
          {isRecruiter && (
            <p className="home-eyebrow home-professional-eyebrow">
              {isFrench
                ? 'PORTFOLIO PROFESSIONNEL ✧'
                : 'PROFESSIONAL PORTFOLIO ✧'}
            </p>
          )}

          <h1>
            <span className="home-name-light">Aishwaria</span>
            <br />
            <span className="home-name-dark">Sania</span>
            <span className="home-name-light"> Mattan.</span>
          </h1>

          <p className="home-role">
            {isRecruiter
              ? isFrench
                ? 'Élève ingénieure à Centrale Nantes · Systèmes Embarqués Communicants · Alternante chez Covéa/MMA'
                : 'Engineering student at Centrale Nantes · Embedded and Connected Systems · Apprentice at Covéa/MMA'
              : isFrench
                ? 'Étudiante ingénieure à Centrale Nantes · Alternante chez Covéa à MMA'
                : 'Engineering student at Centrale Nantes · Apprentice at Covéa in MMA group'}
          </p>

          <p className="home-description">
            {isRecruiter
              ? isFrench
                ? "Passionnée par le développement logiciel et l'algorithmique, je développe mes compétences en ingénierie à travers ma formation, mon alternance et mes projets personnels."
                : "Passionate about software development and algorithms, I develop my engineering skills through my studies, apprenticeship and personal projects."
              : isFrench
                ? 'Entre ingénierie, technologie et créativité, je construis mon parcours avec curiosité et passion.'
                : "At the intersection of engineering, technology and creativity, I'm building my journey with curiosity and passion."}
          </p>

          <div className="home-actions">
            <Link
              to={isRecruiter ? '/projects' : '/about'}
              className="home-button home-button-primary"
            >
              {isRecruiter
                ? isFrench
                  ? 'Découvrir mes projets ↗'
                  : 'Explore my projects ↗'
                : isFrench
                  ? 'Me découvrir ♡'
                  : 'Get to know me ♡'}
            </Link>

            <Link
              to={isRecruiter ? '/cv' : '/projects'}
              className="home-button home-button-secondary"
            >
              {isRecruiter
                ? isFrench
                  ? 'Consulter mon CV'
                  : 'View my resume'
                : isFrench
                  ? 'Mes projets'
                  : 'My projects'}
            </Link>
          </div>

          {isRecruiter && (
            <div className="home-professional-tags">
              <span>
                {isFrench
                  ? 'Développement logiciel'
                  : 'Software development'}
              </span>
              <span>
                {isFrench
                  ? 'Algorithmique'
                  : 'Algorithms'}
              </span>
              <span>
                {isFrench
                  ? 'Systèmes embarqués'
                  : 'Embedded systems'}
              </span>
            </div>
          )}
        </div>

        <div className="home-hero-visual">
          <div className="home-photo-decoration" />

          <div className="home-photo-frame">
            <img
              src="/images/profile.jpeg"
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
            {isRecruiter
              ? isFrench
                ? 'Ingénierie & créativité'
                : 'Engineering & creativity'
              : isFrench
                ? "La personne de l'autre côté"
                : 'The person behind the screen'}
          </div>
        </div>
      </section>

      <section className="home-explore">
        <div className="home-explore-heading">
          <p className="home-eyebrow">
            {isRecruiter
              ? isFrench
                ? 'MON PROFIL ✧'
                : 'MY PROFILE ✧'
              : isFrench
                ? 'DÉCOUVRIR ✧'
                : 'EXPLORE ✧'}
          </p>

          <h2>
            {isRecruiter
              ? isFrench
                ? 'Mon parcours en ingénierie'
                : 'My engineering journey'
              : isFrench
                ? 'Bienvenue dans mon univers'
                : 'Welcome to my world'}
          </h2>

          <p>
            {isRecruiter
              ? isFrench
                ? 'Découvrez mes réalisations, ma formation et mes compétences.'
                : 'Explore my work, education and technical skills.'
              : isFrench
                ? 'Plusieurs passions, un seul parcours.'
                : 'Many passions, one journey.'}
          </p>
        </div>

        <div className="home-card-grid">
          {isRecruiter ? (
            <>
              <Link to="/projects" className="home-card">
                <span
                  className="home-card-icon"
                  aria-hidden="true"
                >
                  💻
                </span>

                <h3>
                  {isFrench
                    ? 'Mes réalisations'
                    : 'My projects'}
                </h3>

                <p>
                  {isFrench
                    ? "Découvrez mes projets en développement logiciel, algorithmique et conception d'applications."
                    : 'Discover my work in software development, algorithms and application design.'}
                </p>

                <span
                  className="home-card-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>

              <Link to="/journey" className="home-card">
                <span
                  className="home-card-icon"
                  aria-hidden="true"
                >
                  🎓
                </span>

                <h3>
                  {isFrench
                    ? 'Formation & expérience'
                    : 'Education & experience'}
                </h3>

                <p>
                  {isFrench
                    ? 'De mes classes préparatoires à Centrale Nantes, découvrez mon parcours et mon alternance chez Covéa.'
                    : 'From preparatory classes to Centrale Nantes, explore my education and apprenticeship at Covéa.'}
                </p>

                <span
                  className="home-card-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>

              <Link to="/cv" className="home-card">
                <span
                  className="home-card-icon"
                  aria-hidden="true"
                >
                  📄
                </span>

                <h3>
                  {isFrench
                    ? 'Mon CV'
                    : 'My resume'}
                </h3>

                <p>
                  {isFrench
                    ? 'Retrouvez une synthèse de ma formation, de mes compétences et de mes expériences.'
                    : 'Find an overview of my education, skills and professional experience.'}
                </p>

                <span
                  className="home-card-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
            </>
          ) : (
            <>
              <Link to="/about" className="home-card">
                <span
                  className="home-card-icon"
                  aria-hidden="true"
                >
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

                <span
                  className="home-card-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>

              <Link to="/journey" className="home-card">
                <span
                  className="home-card-icon"
                  aria-hidden="true"
                >
                  🎓
                </span>

                <h3>
                  {isFrench
                    ? 'Mon parcours'
                    : 'My journey'}
                </h3>

                <p>
                  {isFrench
                    ? 'Mes études, mes expériences et les étapes qui me construisent.'
                    : 'My studies, experiences and the milestones shaping my path.'}
                </p>

                <span
                  className="home-card-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>

              <Link to="/projects" className="home-card">
                <span
                  className="home-card-icon"
                  aria-hidden="true"
                >
                  💻
                </span>

                <h3>
                  {isFrench
                    ? 'Mes projets'
                    : 'My projects'}
                </h3>

                <p>
                  {isFrench
                    ? 'Un aperçu de mes réalisations techniques et créatives.'
                    : 'A look at my technical and creative work.'}
                </p>

                <span
                  className="home-card-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
            </>
          )}
        </div>
      </section>

      {isRecruiter && (
        <section className="home-featured-projects">
          <div className="home-featured-heading">
            <p className="home-eyebrow">
              {isFrench
                ? 'SÉLECTION DE PROJETS ✧'
                : 'SELECTED PROJECTS ✧'}
            </p>

            <h2>
              {isFrench
                ? 'Quelques réalisations'
                : 'Selected work'}
            </h2>

            <p>
              {isFrench
                ? 'Trois projets qui illustrent différents aspects de mon travail.'
                : 'Three projects showcasing different aspects of my work.'}
            </p>
          </div>

          <div className="home-featured-grid">
            <article className="home-featured-card">
              <span className="home-featured-number">01</span>

              <h3>OptiRecom</h3>

              <p>
                {isFrench
                  ? "Projet TIPE consacré à la recommandation d'amis à partir d'algorithmes sur les graphes."
                  : 'Academic research project exploring friend recommendations using graph algorithms.'}
              </p>

              <span className="home-featured-tag">
                {isFrench
                  ? 'Graphes · Algorithmique'
                  : 'Graphs · Algorithms'}
              </span>
            </article>

            <article className="home-featured-card">
              <span className="home-featured-number">02</span>

              <h3>Cinapple</h3>

              <p>
                {isFrench
                  ? 'Application de recommandation de films utilisant notamment des méthodes de machine learning.'
                  : 'Movie recommendation application using machine learning techniques.'}
              </p>

              <span className="home-featured-tag">
                Python · Streamlit
              </span>
            </article>

            <article className="home-featured-card">
              <span className="home-featured-number">03</span>

              <h3>Cross_iT</h3>

              <p>
                {isFrench
                  ? 'Projet de gestion sportive développé en Python, intégrant une interface interactive.'
                  : 'Sports management project developed in Python with an interactive interface.'}
              </p>

              <span className="home-featured-tag">
                Python · Pygame
              </span>
            </article>
          </div>

          <Link
            to="/projects"
            className="home-featured-link"
          >
            {isFrench
              ? 'Explorer tous mes projets ↗'
              : 'Explore all my projects ↗'}
          </Link>
        </section>
      )}

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
            {isRecruiter
              ? isFrench
                ? "Vous souhaitez échanger à propos de mon parcours, de mes compétences ou d'un projet ? Je serais ravie de discuter avec vous."
                : "Would you like to discuss my background, skills or a project? I'd be happy to connect."
              : isFrench
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

      {/* FIRST-VISIT WELCOME DIALOG */}
      {showWelcome && (
        <div className="visitor-modal-backdrop">
          <section
            className="visitor-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="visitor-modal-title"
            aria-describedby="visitor-modal-description"
          >
            <span
              className="visitor-modal-sparkle"
              aria-hidden="true"
            >
              ✧
            </span>

            <p className="visitor-modal-eyebrow">
              {isFrench
                ? 'UN PETIT MOT AVANT DE COMMENCER'
                : 'A LITTLE NOTE BEFORE WE BEGIN'}
            </p>

            <h2 id="visitor-modal-title">
              {isFrench
                ? 'Bienvenue dans mon univers ♡'
                : 'Welcome to my world ♡'}
            </h2>

            <p
              id="visitor-modal-description"
              className="visitor-modal-description"
            >
              {isFrench
                ? 'Pour personnaliser votre visite, dites-moi ce qui vous amène ici.'
                : 'To personalize your visit, tell me what brings you here.'}
            </p>

            <div className="visitor-modal-options">
              <button
                type="button"
                className="visitor-modal-option"
                onClick={() => chooseMode('recruiter')}
              >
                <span
                  className="visitor-modal-option-icon"
                  aria-hidden="true"
                >
                  💼
                </span>

                <span className="visitor-modal-option-copy">
                  <strong>
                    {isFrench
                      ? 'Je recrute'
                      : "I'm recruiting"}
                  </strong>

                  <small>
                    {isFrench
                      ? 'Projets, compétences et parcours professionnel'
                      : 'Projects, skills and professional background'}
                  </small>
                </span>

                <span aria-hidden="true">↗</span>
              </button>

              <button
                type="button"
                className="visitor-modal-option"
                onClick={() => chooseMode('visitor')}
              >
                <span
                  className="visitor-modal-option-icon"
                  aria-hidden="true"
                >
                  🌷
                </span>

                <span className="visitor-modal-option-copy">
                  <strong>
                    {isFrench
                      ? 'Je suis simplement curieux·se'
                      : "I'm just exploring"}
                  </strong>

                  <small>
                    {isFrench
                      ? 'Une découverte plus personnelle'
                      : 'A more personal discovery'}
                  </small>
                </span>

                <span aria-hidden="true">↗</span>
              </button>
            </div>

            <button
              type="button"
              className="visitor-modal-skip"
              onClick={() => chooseMode('visitor')}
            >
              {isFrench
                ? 'Continuer sans choisir'
                : 'Continue without choosing'}
            </button>
          </section>
        </div>
      )}

      {/* RECRUITER REMINDER */}
      {showReminder && isRecruiter && !showWelcome && (
        <aside
          className="visitor-reminder"
          aria-label={
            isFrench
              ? 'Suggestion de navigation'
              : 'Navigation suggestion'
          }
        >
          <button
            type="button"
            className="visitor-reminder-close"
            onClick={() => setShowReminder(false)}
            aria-label={isFrench ? 'Fermer' : 'Close'}
          >
            ×
          </button>

          <span className="visitor-reminder-icon" aria-hidden="true">
            ✧
          </span>

          <h3>
            {isFrench
              ? 'Et si vous découvriez mes projets ?'
              : 'How about exploring my projects?'}
          </h3>

          <p>
            {isFrench
              ? 'Découvrez les réalisations qui illustrent mes compétences techniques.'
              : 'Discover the work showcasing my technical skills.'}
          </p>

          <Link
            to="/projects"
            className="visitor-reminder-link"
            onClick={() => setShowReminder(false)}
          >
            {isFrench
              ? 'Voir mes projets ↗'
              : 'View my projects ↗'}
          </Link>
        </aside>
      )}
    </main>
  )
}
