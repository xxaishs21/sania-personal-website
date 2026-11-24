
import { useLanguage } from '../../LanguageContext'
import './CV.css'

type Lang = 'fr' | 'en'
type Localized = Record<Lang, string>

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
      fr: 'Alternante ingénieure en développement logiciel',
      en: 'Software Development Apprentice',
    },
    location: 'Le Mans, France',
    description: {
      fr: "Participation à la refonte d'une application interne de dépôt de fichiers, avec un travail principalement axé sur le développement backend en Java, les API REST et les processus de gestion des fichiers.",
      en: 'Redeveloping an internal file-upload application, focusing on Java backend development, REST APIs and file-handling workflows.',
    },
    skills: ['Java', 'REST API', 'Backend', 'File handling'],
  },
  {
    id: 'maubon',
    date: 'Déc. 2023',
    company: 'Maubon Food Services Ltd',
    role: {
      fr: 'Stagiaire',
      en: 'Intern',
    },
    location: 'Maurice',
    description: {
      fr: "Participation aux activités quotidiennes de l'entreprise : traitement des demandes clients, suivi des commandes et gestion des demandes complémentaires.",
      en: 'Supported daily business operations by handling customer enquiries, tracking orders and ensuring follow-up requests.',
    },
  },
  {
    id: 'alliance',
    date: 'Juin 2022',
    company: 'Alliance Financial Services Ltd',
    role: {
      fr: "Stagiaire d'observation",
      en: 'Observation Intern',
    },
    location: 'Maurice',
    description: {
      fr: "Découverte du secteur des services financiers à travers l'observation des processus internes et des activités de l'entreprise.",
      en: 'Gained insight into financial services through the observation of internal processes and business operations.',
    },
  },
]

const education: {
  date: string
  school: string
  location: string
  degree: Localized
  description: Localized
}[] = [
  {
    date: '2026 — 2029',
    school: 'Centrale Nantes',
    location: 'Nantes, France',
    degree: {
      fr: "Diplôme d'ingénieur · Systèmes Embarqués Communicants",
      en: 'Engineering Degree · Embedded and Connected Systems',
    },
    description: {
      fr: "Formation d'ingénieure en alternance, associant enseignements scientifiques et techniques à Centrale Nantes et expérience professionnelle chez Covéa. Diplôme de niveau master.",
      en: "Work-study engineering programme combining academic training at Centrale Nantes with industrial experience at Covéa. Engineering degree equivalent to a master's degree.",
    },
  },
  {
    date: '2024 — 2026',
    school: 'Lycées Pierre de Fermat & Kléber',
    location: 'Toulouse & Strasbourg, France',
    degree: {
      fr: 'Classes préparatoires MP2I / MPI',
      en: 'MP2I / MPI Preparatory Classes',
    },
    description: {
      fr: "Deux années de formation scientifique intensive en mathématiques, informatique et physique, préparant aux concours d'entrée des grandes écoles d'ingénieurs.",
      en: 'Two-year intensive preparatory programme in mathematics, computer science and physics, preparing for competitive French engineering school entrance examinations.',
    },
  },
  {
    date: '2024',
    school: 'Lycée La Bourdonnais',
    location: 'Maurice',
    degree: {
      fr: 'Baccalauréat français · Mathématiques & NSI',
      en: 'French Baccalaureate · Mathematics & Computer Science',
    },
    description: {
      fr: 'Baccalauréat général, mention Très Bien.',
      en: 'French Baccalaureate with High Honours, equivalent to the HSC.',
    },
  },
]

const skills: {
  label: Localized
  values: string[]
}[] = [
  {
    label: { fr: 'Programmation', en: 'Programming' },
    values: ['Python', 'Java', 'JavaScript', 'C', 'C++', 'OCaml'],
  },
  {
    label: { fr: 'Développement web', en: 'Web Development' },
    values: ['HTML', 'CSS', 'React', 'Angular', 'TypeScript'],
  },
  {
    label: { fr: 'Données', en: 'Data' },
    values: ['SQL'],
  },
  {
    label: { fr: 'Outils & systèmes', en: 'Tools & Systems' },
    values: ['Git', 'GitHub', 'Linux', 'Windows'],
  },
]

const languages: {
  name: Localized
  level: Localized
}[] = [
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
    level: {
      fr: 'C1 · Cambridge Advanced',
      en: 'C1 · Cambridge Advanced',
    },
  },
  {
    name: { fr: 'Espagnol', en: 'Spanish' },
    level: { fr: 'B2', en: 'B2' },
  },
]

const awards: {
  date: string
  title: string
  detail: Localized
}[] = [
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
      fr: 'Meilleur projet de Terminale dans mon établissement',
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

const volunteering: {
  date: string
  title: string
  detail: Localized
}[] = [
  {
    date: '2026 —',
    title: 'Montmagny Athlétisme',
    detail: {
      fr: "Bénévolat lors d'événements sportifs : aide à la logistique et à la coordination sur place.",
      en: 'Athletics event volunteer, supporting logistics and on-site coordination.',
    },
  },
  {
    date: '2023 — 2024',
    title: 'Tutorat bénévole',
    detail: {
      fr: "Accompagnement d'élèves pour renforcer leurs connaissances et leur confiance.",
      en: 'Helped students strengthen their understanding and academic confidence.',
    },
  },
  {
    date: '2021 — 2023',
    title: 'JOJO',
    detail: {
      fr: 'Jeune Officielle et Organisatrice : arbitrage, chronométrage et coordination de compétitions sportives.',
      en: 'Young Sports Official & Organizer: officiating, timekeeping and participant coordination.',
    },
  },
]

const projects: {
  title: string
  technologies: string
  description: Localized
  link: string
}[] = [
  {
    title: 'Cinapple',
    technologies: 'React · JavaScript',
    description: {
      fr: "Application de recommandation de films basée sur les préférences des utilisateurs, intégrant le traitement et l'analyse de données.",
      en: 'Movie recommendation application based on user preferences, incorporating data processing and analysis.',
    },
    link: '/projects/Cinapple',
  },
  {
    title: 'TIPE · Réseaux sociaux',
    technologies: 'Python · NetworkX',
    description: {
      fr: "Modélisation de réseaux sociaux sous forme de graphes, implémentation d'algorithmes de recommandation et comparaison de leurs performances.",
      en: 'Modelled graph-based social networks, implemented recommendation algorithms and compared their performance.',
    },
    link: '/projects',
  },
  {
    title: 'Cr0ss-iT',
    technologies: 'Python · Pygame · QR Codes',
    description: {
      fr: "Application de gestion d'événements sportifs : inscriptions, chronométrage par QR codes et classements automatisés. Projet récompensé aux Trophées NSI 2024.",
      en: 'Sports event management application featuring registration, QR-code-based timing and automated rankings. Award-winning project at Trophées NSI 2024.',
    },
    link: '/projects/cross-it',
  },
]

export default function CV() {
  const { language } = useLanguage()
  const lang: Lang = language === 'en' ? 'en' : 'fr'
  const fr = lang === 'fr'

  const pdfPath = fr
    ? '/documents/CV_vf.pdf'
    : '/documents/CV_vo.pdf'

  const pdfFilename = fr
    ? 'Aishwaria-Sania-Mattan-CV-FR.pdf'
    : 'Aishwaria-Sania-Mattan-CV-EN.pdf'

  return (
    <main className="cv-page">
      {/* HERO */}

      <header className="cv-hero">
        <div className="cv-hero-inner">
          <p className="cv-eyebrow">CURRICULUM VITAE ✧</p>

          <h1>Aishwaria Sania Mattan</h1>

          <p className="cv-hero-role">
            {fr
              ? 'Élève ingénieure · Développement logiciel'
              : 'Engineering Student · Software Development'}
          </p>

          <p className="cv-hero-description">
            {fr
              ? 'Centrale Nantes · Systèmes Embarqués Communicants · Alternance chez Covéa'
              : 'Centrale Nantes · Embedded and Connected Systems · Covéa Apprenticeship'}
          </p>

          <div className="cv-hero-actions">
            <a
              href={pdfPath}
              download={pdfFilename}
              className="cv-button cv-button-primary"
            >
              <span aria-hidden="true">↓</span>
              {fr ? 'Télécharger mon CV' : 'Download my resume'}
              <span className="cv-document-language">
                {fr ? 'FR' : 'EN'}
              </span>
            </a>

            <a
              href={pdfPath}
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
              : 'PDF document · English version'}
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}

      <div className="cv-layout">
        <div className="cv-main-column">
          {/* PROFILE */}

          <section className="cv-section">
            <div className="cv-section-heading">
              <span className="cv-section-number">01</span>
              <h2>{fr ? 'À propos' : 'Profile'}</h2>
            </div>

            <p className="cv-profile-text">
              {fr
                ? "Élève ingénieure à Centrale Nantes, spécialisée en Systèmes Embarqués Communicants, je poursuis ma formation en alternance chez Covéa dans le développement logiciel. Mon parcours en classes préparatoires MP2I/MPI m'a permis de développer une solide rigueur scientifique. Passionnée d'informatique, je m'intéresse particulièrement à la conception d'applications, au développement backend et à la résolution de problèmes techniques."
                : 'Highly motivated engineering student at Centrale Nantes, specializing in Embedded and Connected Systems, and Software Development Apprentice at Covéa. With a background in intensive MP2I/MPI preparatory classes, I have developed strong analytical and technical skills. I am particularly interested in application development, backend engineering and technical problem-solving.'}
            </p>
          </section>

          {/* EXPERIENCE */}

          <section className="cv-section">
            <div className="cv-section-heading">
              <span className="cv-section-number">02</span>
              <h2>
                {fr
                  ? 'Expériences professionnelles'
                  : 'Professional Experience'}
              </h2>
            </div>

            <div className="cv-experience-list">
              {experiences.map((experience) => (
                <article
                  className="cv-experience-card"
                  key={experience.id}
                >
                  <div className="cv-experience-top">
                    <div className="cv-experience-content">
                      <span className="cv-item-date">
                        {experience.date}
                      </span>

                      <h3>{experience.company}</h3>

                      <p className="cv-item-role">
                        {experience.role[lang]}
                      </p>

                      <p className="cv-item-location">
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  <div className="cv-experience-details">
                    <p>{experience.description[lang]}</p>

                    {experience.skills && (
                      <div className="cv-tag-list">
                        {experience.skills.map((skill) => (
                          <span className="cv-tag" key={skill}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* EDUCATION */}

          <section className="cv-section">
            <div className="cv-section-heading">
              <span className="cv-section-number">03</span>
              <h2>{fr ? 'Formation' : 'Education'}</h2>
            </div>

            <div className="cv-education-list">
              {education.map((item) => (
                <article
                  className="cv-education-item"
                  key={item.school}
                >
                  <span className="cv-item-date">{item.date}</span>
                  <h3>{item.school}</h3>

                  <p className="cv-item-role">
                    {item.degree[lang]}
                  </p>

                  <p className="cv-item-location">
                    {item.location}
                  </p>

                  <p className="cv-education-description">
                    {item.description[lang]}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* PROJECTS */}

          <section className="cv-section">
            <div className="cv-section-heading">
              <span className="cv-section-number">04</span>
              <h2>
                {fr
                  ? 'Projets sélectionnés'
                  : 'Selected Projects'}
              </h2>
            </div>

            <div className="cv-project-list">
              {projects.map((project) => (
                <article
                  className="cv-project-card"
                  key={project.title}
                >
                  <div className="cv-project-header">
                    <h3>{project.title}</h3>
                    <span>{project.technologies}</span>
                  </div>

                  <p>{project.description[lang]}</p>

                  <a href={project.link}>
                    {fr ? 'Découvrir le projet' : 'Explore project'}
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          {/* AWARDS */}

          <section className="cv-section">
            <div className="cv-section-heading">
              <span className="cv-section-number">05</span>
              <h2>
                {fr
                  ? 'Prix & distinctions'
                  : 'Awards & Competitions'}
              </h2>
            </div>

            <div className="cv-simple-list">
              {awards.map((item) => (
                <article
                  className="cv-simple-item"
                  key={`${item.title}-${item.date}`}
                >
                  <span className="cv-item-date">
                    {item.date}
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail[lang]}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* VOLUNTEERING */}

          <section className="cv-section">
            <div className="cv-section-heading">
              <span className="cv-section-number">06</span>
              <h2>
                {fr
                  ? 'Engagements associatifs'
                  : 'Volunteering'}
              </h2>
            </div>

            <div className="cv-simple-list">
              {volunteering.map((item) => (
                <article
                  className="cv-simple-item"
                  key={item.title}
                >
                  <span className="cv-item-date">
                    {item.date}
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail[lang]}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* SIDEBAR */}

        <aside className="cv-sidebar">
          <section className="cv-side-panel">
            <h2>{fr ? 'Compétences' : 'Skills'}</h2>

            {skills.map((group) => (
              <div
                className="cv-skill-group"
                key={group.label.en}
              >
                <h3>{group.label[lang]}</h3>

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
                <div
                  className="cv-language-item"
                  key={item.name.en}
                >
                  <strong>{item.name[lang]}</strong>
                  <span>{item.level[lang]}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-side-panel">
            <h2>{fr ? 'Me retrouver' : 'Find Me'}</h2>

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

      {/* BOTTOM DOWNLOAD */}

      <footer className="cv-bottom">
        <p>
          {fr
            ? 'Vous préférez un format classique ?'
            : 'Prefer a traditional format?'}
        </p>

        <a href={pdfPath} download={pdfFilename}>
          {fr
            ? 'Télécharger mon CV en PDF'
            : 'Download my resume as PDF'}
          <span aria-hidden="true">↓</span>
        </a>
      </footer>
    </main>
  )
}
