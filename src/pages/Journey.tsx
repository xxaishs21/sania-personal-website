
import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import './Journey.css'

type TimelineEntry = {
  date: string
  icon: string
  title: string
  subtitle: string
  description: string
  tags: string[]
}

export default function Journey() {
  const { language } = useLanguage()
  const fr = language === 'fr'

  const timeline: TimelineEntry[] = [
    {
      date: fr ? 'Avant 2024' : 'Before 2024',
      icon: '🌴',
      title: fr
        ? "Mes débuts à l'île Maurice"
        : 'My beginnings in Mauritius',
      subtitle: fr
        ? 'Là où tout a commencé'
        : 'Where it all began',
      description: fr
        ? "C'est à l'île Maurice que j'ai développé mon intérêt pour l'informatique et la programmation. Entre découvertes, projets et concours, j'ai commencé à explorer les possibilités offertes par la technologie."
        : "Mauritius is where my interest in computer science and programming began. Through discoveries, projects, and competitions, I started exploring what technology could make possible.",
      tags: fr
        ? ['Informatique', 'Programmation', 'Curiosité']
        : ['Computer science', 'Programming', 'Curiosity'],
    },
    {
      date: '2024',
      icon: '✈️',
      title: fr
        ? 'Une nouvelle aventure en France'
        : 'A new adventure in France',
      subtitle: fr
        ? 'Un nouveau chapitre'
        : 'A new chapter',
      description: fr
        ? "En septembre 2024, j'ai quitté l'île Maurice pour poursuivre mes études en France. Une expérience qui m'a permis de découvrir un nouvel environnement, de gagner en autonomie et de m'ouvrir à de nouvelles opportunités."
        : "In September 2024, I left Mauritius to continue my studies in France. This experience helped me discover a new environment, become more independent, and embrace new opportunities.",
      tags: fr
        ? ['France', 'Adaptation', 'Autonomie']
        : ['France', 'Adaptability', 'Independence'],
    },
    {
      date: '2025 — 2026',
      icon: '📚',
      title: fr
        ? 'Classe préparatoire'
        : 'Preparatory classes',
      subtitle: fr
        ? 'Lycée Kléber · Strasbourg'
        : 'Lycée Kléber · Strasbourg',
      description: fr
        ? "Une étape exigeante qui m'a appris à approfondir mes connaissances scientifiques, à développer ma rigueur et à persévérer face à des problèmes complexes."
        : "A demanding experience that strengthened my scientific knowledge, analytical thinking, and perseverance when facing complex problems.",
      tags: fr
        ? ['Mathématiques', 'Sciences', 'Rigueur']
        : ['Mathematics', 'Science', 'Analytical thinking'],
    },
    {
      date: '2026 — 2029',
      icon: '🎓',
      title: 'Centrale Nantes',
      subtitle: fr
        ? 'Cycle ingénieur · Systèmes Embarqués Communicants'
        : 'Engineering degree · Embedded and Communication Systems',
      description: fr
        ? "J'ai intégré Centrale Nantes pour poursuivre ma formation d'ingénieure dans le domaine des systèmes embarqués communicants. J'y développe mes compétences techniques à travers les cours, les travaux pratiques et les projets."
        : "I joined Centrale Nantes to pursue an engineering degree focused on embedded and communication systems, developing technical skills through coursework, practical labs, and projects.",
      tags: fr
        ? ['Ingénierie', 'Systèmes embarqués', 'Électronique']
        : ['Engineering', 'Embedded systems', 'Electronics'],
    },
    {
      date: '2026 — 2029',
      icon: '💼',
      title: 'Covéa / MMA',
      subtitle: fr
        ? 'Alternance · Systèmes d’information'
        : 'Work-study · Information systems',
      description: fr
        ? "En parallèle de mes études, j'ai rejoint Covéa / MMA en alternance. J'y découvre le développement d'applications dans un environnement professionnel, les outils collaboratifs et le travail en équipe sur des projets concrets."
        : "Alongside my studies, I joined Covéa / MMA as a work-study engineering student. I'm discovering application development in a professional environment, collaborative tools, and teamwork on real projects.",
      tags: fr
        ? ['Développement logiciel', 'Git', 'Travail en équipe']
        : ['Software development', 'Git', 'Teamwork'],
    },
  ]

  const achievements = [
    {
      icon: '🏆',
      title: 'Trophées NSI',
      detail: fr
        ? 'Lauréate régionale puis nationale'
        : 'Regional and national award winner',
      description: fr
        ? "Une expérience marquante qui m'a permis de valoriser un projet informatique et le travail réalisé en équipe."
        : 'A memorable opportunity to showcase a computer science project and collaborative work.',
    },
    {
      icon: '🧩',
      title: 'Algoréa',
      detail: fr ? 'Demi-finaliste' : 'Semi-finalist',
      description: fr
        ? "Un concours qui a renforcé mon goût pour l'algorithmique et la résolution de problèmes."
        : 'A competition that strengthened my interest in algorithms and problem-solving.',
    },
    {
      icon: '💻',
      title: fr ? 'Concours Castor' : 'Bebras Challenge',
      detail: fr ? 'Finaliste' : 'Finalist',
      description: fr
        ? "Une expérience autour de la logique, de la réflexion et de la pensée informatique."
        : 'An experience focused on logic, reasoning, and computational thinking.',
    },
  ]

  return (
    <main className="journey-page">
      {/* PAGE INTRODUCTION */}
      <header className="journey-intro">
        <p className="journey-eyebrow">
          {fr ? 'MON HISTOIRE EN QUELQUES ÉTAPES ✧' : 'MY STORY SO FAR ✧'}
        </p>

        <h1>{fr ? 'Mon parcours' : 'My Journey'}</h1>

        <p className="journey-intro-description">
          {fr
            ? "De l'île Maurice à Centrale Nantes, chaque étape m'a permis d'apprendre, de grandir et de me rapprocher de mes ambitions."
            : "From Mauritius to Centrale Nantes, every step has helped me learn, grow, and move closer to my ambitions."}
        </p>
      </header>

      {/* TIMELINE */}
      <section className="journey-timeline-section">
        <div className="journey-section-heading">
          <p className="journey-eyebrow">
            {fr ? 'LE CHEMIN PARCOURU ✧' : 'THE JOURNEY ✧'}
          </p>

          <h2>
            {fr
              ? 'Chaque étape raconte une histoire'
              : 'Every step tells a story'}
          </h2>

          <p>
            {fr
              ? 'Un parcours fait de découvertes, de défis et de nouvelles opportunités.'
              : 'A journey shaped by discoveries, challenges, and new opportunities.'}
          </p>
        </div>

        <div className="journey-timeline">
          {timeline.map((entry, index) => (
            <article
              className={`journey-timeline-item ${
                index % 2 === 0
                  ? 'journey-timeline-left'
                  : 'journey-timeline-right'
              }`}
              key={`${entry.date}-${index}`}
            >
              <div className="journey-timeline-marker">
                <span aria-hidden="true">{entry.icon}</span>
              </div>

              <div className="journey-timeline-card">
                <span className="journey-date">{entry.date}</span>

                <h3>{entry.title}</h3>

                <p className="journey-card-subtitle">
                  {entry.subtitle}
                </p>

                <p className="journey-card-description">
                  {entry.description}
                </p>

                <div className="journey-tags">
                  {entry.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="journey-achievements-section">
        <div className="journey-section-heading">
          <p className="journey-eyebrow">
            {fr ? 'QUELQUES FIERTÉS ✧' : 'MILESTONES ✧'}
          </p>

          <h2>
            {fr
              ? 'Mes réalisations marquantes'
              : 'Achievements & Highlights'}
          </h2>

          <p>
            {fr
              ? "Des expériences qui ont nourri ma passion pour l'informatique."
              : 'Experiences that helped shape my passion for computer science.'}
          </p>
        </div>

        <div className="journey-achievements-grid">
          {achievements.map((achievement) => (
            <article
              className="journey-achievement-card"
              key={achievement.title}
            >
              <div className="journey-achievement-icon" aria-hidden="true">
                {achievement.icon}
              </div>

              <h3>{achievement.title}</h3>

              <p className="journey-achievement-detail">
                {achievement.detail}
              </p>

              <p className="journey-achievement-description">
                {achievement.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* NEXT STEP */}
      <section className="journey-next-section">
        <div className="journey-next-content">
          <p className="journey-eyebrow">
            {fr ? 'ET MAINTENANT ? ✧' : "WHAT'S NEXT? ✧"}
          </p>

          <h2>
            {fr
              ? "L'aventure continue"
              : 'The journey continues'}
          </h2>

          <p>
            {fr
              ? "Chaque projet est une nouvelle occasion d'apprendre et de créer quelque chose de concret."
              : "Every project is a new opportunity to learn and build something meaningful."}
          </p>

          <Link to="/projects" className="journey-projects-button">
            {fr ? 'Découvrir mes projets ↗' : 'Explore my projects ↗'}
          </Link>
        </div>
      </section>
    </main>
  )
}
