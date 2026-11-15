
import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import './CV.css'

type Localized = {
  fr: string
  en: string
}

type Experience = {
  id: string
  date: string
  company: string
  role: Localized
  location: string
  description: Localized
  skills?: string[]
}

const experiences: Experience[] = [
  {
    id: 'covea',
    date: '2026 — 2029',
    company: 'MMA · Groupe Covéa',
    role: {
      fr: 'Alternante en développement full-stack',
      en: 'Full-stack development apprentice',
    },
    location: 'Le Mans, France',
    description: {
      fr: "Formation et développement logiciel autour de Java, Angular, TypeScript, des API REST et des pratiques de tests logiciels.",
      en: 'Software development and training involving Java, Angular, TypeScript, REST APIs, and software testing practices.',
    },
    skills: ['Java', 'Angular', 'TypeScript', 'REST API', 'Testing'],
  },
  {
    id: 'maubon',
    date: '2023',
    company: 'Maubon Food Services Ltd',
    role: {
      fr: 'Stagiaire',
      en: 'Intern',
    },
    location: 'Maurice',
    description: {
      fr: 'Traitement des demandes clients et suivi des commandes.',
      en: 'Handling customer requests and tracking orders.',
    },
  },
  {
    id: 'alliance',
    date: '2022',
    company: 'Alliance Financial Services Ltd',
    role: {
      fr: "Stagiaire d'observation",
      en: 'Observation intern',
    },
    location: 'Maurice',
    description: {
      fr: "Observation des processus internes et découverte du fonctionnement de l'entreprise.",
      en: 'Observation of internal processes and day-to-day company operations.',
    },
  },
]

const education = [
  {
    date: '2026 — 2029',
    school: 'Centrale Nantes',
    location: 'Nantes, France',
    degree: {
      fr: 'Diplôme d’ingénieur · Systèmes Embarqués Communicants',
      en: 'Engineering degree · Embedded and Connected Systems',
    },
  },
  {
    date: '2024 — 2026',
    school: 'Lycée Kléber',
    location: 'Strasbourg, France',
    degree: {
      fr: 'Classe préparatoire MP2I / MPI',
      en: 'Preparatory classes MP2I / MPI',
    },
  },
  {
    date: '2024',
    school: 'Lycée Labourdonnais',
    location: 'Maurice',
    degree: {
      fr: 'Baccalauréat · Mathématiques et NSI · Mention Très Bien',
      en: 'French Baccalaureate · Mathematics and Computer Science · High Honours',
    },
  },
]

const skills = [
  {
    label: { fr: 'Programmation', en: 'Programming' },
    values: ['Python', 'Java', 'JavaScript', 'C', 'C++', 'OCaml'],
  },
  {
    label: { fr: 'Développement web', en: 'Web development' },
    values: ['HTML', 'CSS', 'Angular', 'React', 'TypeScript'],
  },
  {
    label: { fr: 'Données', en: 'Data' },
    values: ['SQL'],
  },
  {
    label: { fr: 'Outils & systèmes', en: 'Tools & systems' },
    values: ['Git', 'GitHub', 'Linux', 'Windows'],
  },
]

const languages = [
  {
    name: { fr: 'Français', en: 'French' },
    level: { fr: 'Langue maternelle', en: 'Native' },
  },
  {
    name: { fr: 'Créole mauricien', en: 'Mauritian Creole' },
    level: { fr: 'Langue maternelle', en: 'Native' },
  },
  {
    name: { fr: 'Anglais', en: 'English' },
    level: { fr: 'C1 · Cambridge Advanced', en: 'C1 · Cambridge Advanced' },
  },
  {
    name: { fr: 'Espagnol', en: 'Spanish' },
    level: { fr: 'B2 · DELE', en: 'B2 · DELE' },
  },
]

const awards = [
  {
    date: '2024',
    title: 'Trophées NSI',
    detail: {
      fr: "Prix du Sport international et Prix régional de l'originalité",
      en: 'International Sports Prize and Regional Originality Prize',
    },
  },
  {
    date: '2024',
    title: 'Algoréa',
    detail: {
      fr: 'Demi-finaliste nationale',
      en: 'National semifinalist',
    },
  },
  {
    date: '2024',
    title: 'La Nuit du Code',
    detail: {
      fr: 'Meilleur projet Terminale dans mon établissement',
      en: 'Best final-year project at school',
    },
  },
  {
    date: '2023',
    title: 'Trophées NSI',
    detail: {
      fr: 'Lauréate régionale',
      en: 'Regional winner',
    },
  },
]

const volunteering = [
  {
    date: '2026 —',
    title: 'Montmagny Athlétisme',
    detail: {
      fr: "Bénévolat lors d'événements sportifs",
      en: 'Volunteering at athletics events',
    },
  },
  {
    date: '2023 — 2024',
    title: 'Lycée Labourdonnais',
    detail: {
      fr: 'Tutorat bénévole',
      en: 'Volunteer tutoring',
    },
  },
  {
    date: '2021 — 2023',
    title: 'JOJO',
    detail: {
      fr: 'Jeune Officielle et Organisatrice',
      en: 'Young Sports Official & Organizer',
    },
  },
]

function ExperienceCard({
  experience,
  fr,
}: {
  experience: Experience
  fr: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <article className="cv-experience-card">
      <div className="cv-experience-top">
        <div>
          <span className="cv-item-date">{experience.date}</span>
          <h3>{experience.company}</h3>
          <p className="cv-item-role">
            {fr ? experience.role.fr : experience.role.en}
          </p>
          <p className="cv-item-location">{experience.location}</p>
        </div>

        <button
          type="button"
          className="cv-expand"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`cv-experience-${experience.id}`}
          aria-label={
            open
              ? fr ? 'Masquer les détails' : 'Hide details'
              : fr ? 'Afficher les détails' : 'Show details'
          }
        >
          {open ? '−' : '+'}
        </button>
      </div>

      {open && (
        <div
          className="cv-experience-details"
          id={`cv-experience-${experience.id}`}
        >
          <p>
            {fr
              ? experience.description.fr
              : experience.description.en}
          </p>

          {experience.skills && (
            <div className="cv-tag-list">
              {experience.skills.map((skill) => (
                <span key={skill} className="cv-tag">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  )
}

export default function CV() {
  const { language } = useLanguage()
  const fr = language === 'fr'

  return (
    <main className="cv-page">
      <header className="cv-hero">
        <div className="cv-hero-inner">
          <p className="cv-eyebrow">CURRICULUM VITAE</p>
          <h1>Aishwaria Sania Mattan</h1>

          <p className="cv-hero-role">
            {fr
              ? 'Élève ingénieure à Centrale Nantes'
              : 'Engineering student at Centrale Nantes'}
          </p>

          <p className="cv-hero-description">
            {fr
              ? 'Systèmes Embarqués Communicants · Alternance MMA / Covéa'
              : 'Embedded and Connected Systems · MMA / Covéa apprenticeship'}
          </p>

          <div className="cv-hero-actions">
            <a
              href="/documents/CV_vf.pdf"
              download="Aishwaria-Sania-Mattan-CV-FR.pdf"
              className="cv-button cv-button-primary"
            >
              <span aria-hidden="true">↓</span>
              {fr
                ? 'Télécharger mon CV'
                : 'Download my resume'}
            </a>

            <a
              href="/documents/CV_vf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-button cv-button-secondary"
            >
              {fr ? 'Consulter le PDF' : 'View PDF'}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="cv-pdf-note">
            {fr
              ? 'Document PDF · Version française'
              : 'PDF document · French version'}
          </p>
        </div>
      </header>

      <div className="cv-layout">
        <div className="cv-main-column">
          <section className="cv-section">
            <div className="cv-section-heading">
              <span className="cv-section-number">01</span>
              <h2>{fr ? 'À propos' : 'Profile'}</h2>
            </div>

            <p className="cv-profile-text">
              {fr
                ? "Élève ingénieure à Centrale Nantes en systèmes embarqués communicants, je poursuis ma formation en alternance chez MMA (groupe Covéa). Issue d'une classe préparatoire MP2I/MPI, je m'intéresse au développement logiciel, aux systèmes connectés et aux projets qui associent programmation et réflexion technique."
                : "I am an engineering student at Centrale Nantes specializing in Embedded and Connected Systems, while completing an apprenticeship at MMA (Covéa Group). With a background in MP2I/MPI preparatory classes, I am interested in software development, connected systems, and technical problem-solving."}
            </p>
          </section>

          <section className="cv-section">
            <div className="cv-section-heading">
              <span className="cv-section-number">02</span>
              <h2>
                {fr
                  ? 'Expériences professionnelles'
                  : 'Professional experience'}
              </h2>
            </div>

            <div className="cv-experience-list">
              {experiences.map((experience) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  fr={fr}
                />
              ))}
            </div>
          </section>

          <section className="cv-section">
            <div className="cv-section-heading">
              <span className="cv-section-number">03</span>
              <h2>{fr ? 'Formations' : 'Education'}</h2>
            </div>

            <div className="cv-education-list">
              {education.map((item) => (
                <article className="cv-education-item" key={item.school}>
                  <span className="cv-item-date">{item.date}</span>
                  <h3>{item.school}</h3>
                  <p className="cv-item-role">
                    {fr ? item.degree.fr : item.degree.en}
                  </p>
                  <p className="cv-item-location">{item.location}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="cv-section">
            <div className="cv-section-heading">
              <span className="cv-section-number">04</span>
              <h2>{fr ? 'Prix & distinctions' : 'Awards & honors'}</h2>
            </div>

            <div className="cv-simple-list">
              {awards.map((item) => (
                <div className="cv-simple-item" key={`${item.title}-${item.date}`}>
                  <span className="cv-item-date">{item.date}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{fr ? item.detail.fr : item.detail.en}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section">
            <div className="cv-section-heading">
              <span className="cv-section-number">05</span>
              <h2>{fr ? 'Engagements' : 'Volunteering'}</h2>
            </div>

            <div className="cv-simple-list">
              {volunteering.map((item) => (
                <div className="cv-simple-item" key={item.title}>
                  <span className="cv-item-date">{item.date}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{fr ? item.detail.fr : item.detail.en}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="cv-sidebar">
          <section className="cv-side-panel">
            <h2>{fr ? 'Compétences' : 'Skills'}</h2>

            {skills.map((group) => (
              <div className="cv-skill-group" key={group.label.en}>
                <h3>{fr ? group.label.fr : group.label.en}</h3>

                <div className="cv-tag-list">
                  {group.values.map((skill) => (
                    <span className="cv-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="cv-side-panel">
            <h2>{fr ? 'Langues' : 'Languages'}</h2>

            <div className="cv-language-list">
              {languages.map((item) => (
                <div className="cv-language-item" key={item.name.en}>
                  <strong>{fr ? item.name.fr : item.name.en}</strong>
                  <span>{fr ? item.level.fr : item.level.en}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-side-panel">
            <h2>{fr ? 'Me retrouver' : 'Find me'}</h2>

            <div className="cv-social-links">
              <a
                href="https://github.com/xxaishs21"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/aishwaria-sania-mattan"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>

              <a href="mailto:a.sania.mattan@gmail.com">
                Email <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
        </aside>
      </div>

      <footer className="cv-bottom">
        <p>
          {fr
            ? 'Vous préférez un format classique ?'
            : 'Prefer a traditional format?'}
        </p>

        <a
          href="/documents/CV_vf.pdf"
          download="Aishwaria-Sania-Mattan-CV-FR.pdf"
        >
          {fr
            ? 'Télécharger mon CV en PDF'
            : 'Download my resume as PDF'}
          <span aria-hidden="true">↓</span>
        </a>
      </footer>
    </main>
  )
}
