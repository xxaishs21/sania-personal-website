
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../LanguageContext'
import './Journey.css'

type Localized = {
  fr: string
  en: string
}

type Category =
  | 'education'
  | 'professional'
  | 'victory'
  | 'distinction'
  | 'travel'
  | 'volunteering'

type Filter =
  | 'all'
  | 'education'
  | 'professional'
  | 'awards'
  | 'travel'
  | 'volunteering'

type TimelineEntry = {
  id: string
  date: Localized
  category: Category
  title: Localized
  subtitle: Localized
  description: Localized
  compact?: boolean
  image?: string
  imageAlt?: Localized
  projectUrl?: string
  projectLabel?: Localized
  details?: Localized[]
}

const entries: TimelineEntry[] = [
  {
    id: 'centrale',
    date: { fr: '2026 — 2029', en: '2026 — 2029' },
    category: 'education',
    title: {
      fr: 'Centrale Nantes',
      en: 'Centrale Nantes',
    },
    subtitle: {
      fr: 'Cycle ingénieur · Systèmes Embarqués Communicants',
      en: 'Engineering degree · Embedded and Connected Systems',
    },
    description: {
      fr: `J'ai intégré Centrale Nantes en septembre 2026, dans le parcours Systèmes Embarqués Communicants, en alternance. J'y découvre le fonctionnement interne des systèmes embarqués et la programmation des microcontrôleurs, avec un intérêt particulier pour l'optimisation des ressources, la miniaturisation et la réduction de leur impact environnemental.`,
      en: `I joined Centrale Nantes in September 2026 as an apprentice engineering student specializing in Embedded and Connected Systems. I am exploring how embedded systems work and how microcontrollers are programmed, with a particular interest in resource efficiency, miniaturization, and reducing environmental impact.`,
    },
    details: [
      {
        fr: 'Systèmes embarqués et microcontrôleurs',
        en: 'Embedded systems and microcontrollers',
      },
      {
        fr: 'Conception numérique',
        en: 'Digital design',
      },
      {
        fr: 'Développement logiciel',
        en: 'Software development',
      },
    ],
  },
  {
    id: 'covea',
    date: {
      fr: 'Sept. 2026 — Sept. 2029',
      en: 'Sep 2026 — Sep 2029',
    },
    category: 'professional',
    title: {
      fr: 'MMA · Groupe Covéa',
      en: 'MMA · Covéa Group',
    },
    subtitle: {
      fr: 'Alternance en développement full-stack · Le Mans',
      en: 'Full-stack development apprenticeship · Le Mans',
    },
    description: {
      fr: `J'effectue mon alternance au sein du groupe Covéa, dans le domaine du développement logiciel. Je me forme notamment à Java, Angular, TypeScript, aux API REST et aux tests logiciels. Je participe à la réécriture d'une application existante, une occasion de mieux comprendre la conception d'une architecture solide, les enjeux de sécurité et l'importance d'une documentation claire.`,
      en: `I am completing my software development apprenticeship at Covéa Group, gaining experience with Java, Angular, TypeScript, REST APIs, and software testing. I am contributing to the redevelopment of an existing application, which is helping me understand sound software architecture, security considerations, and the importance of clear documentation.`,
    },
    details: [
      { fr: 'Java', en: 'Java' },
      { fr: 'Angular / TypeScript', en: 'Angular / TypeScript' },
      { fr: 'API REST', en: 'REST APIs' },
      { fr: 'Tests logiciels', en: 'Software testing' },
    ],
  },
  {
    id: 'montmagny',
    date: {
      fr: 'Fév. 2026 — Aujourd’hui',
      en: 'Feb 2026 — Present',
    },
    category: 'volunteering',
    compact: true,
    title: {
      fr: 'Montmagny Athlétisme',
      en: 'Montmagny Athlétisme',
    },
    subtitle: {
      fr: 'Bénévolat · Événements sportifs',
      en: 'Volunteer · Athletics events',
    },
    description: {
      fr: `Je participe à l'organisation et à l'encadrement d'activités et d'événements d'athlétisme. J'accompagne notamment des enfants de différentes tranches d'âge, une expérience qui me permet de développer mes capacités d'animation, d'adaptation et de gestion de groupe.`,
      en: `I help organize and supervise athletics activities and events. I also support children of different age groups, an experience that is helping me develop my communication, adaptability, and group leadership skills.`,
    },
  },
  {
    id: 'prepa',
    date: { fr: '2024 — 2026', en: '2024 — 2026' },
    category: 'education',
    title: {
      fr: 'Classe préparatoire · Lycée Kléber',
      en: 'Preparatory classes · Lycée Kléber',
    },
    subtitle: {
      fr: 'MP2I / MPI · Strasbourg',
      en: 'MP2I / MPI · Strasbourg',
    },
    description: {
      fr: `J'ai suivi deux années de classe préparatoire scientifique MP2I/MPI à Strasbourg. Cette formation exigeante en mathématiques, informatique et sciences m'a appris à travailler avec rigueur et méthode. Au-delà des connaissances acquises, elle m'a aussi fait grandir sur le plan personnel, en développant ma persévérance et ma capacité d'adaptation.`,
      en: `I completed two years of intensive MP2I/MPI preparatory studies in Strasbourg, focusing on mathematics, computer science, and sciences. Beyond strengthening my analytical skills and discipline, this demanding experience helped me grow personally, developing perseverance and adaptability.`,
    },
  },
  {
    id: 'france',
    date: { fr: 'Septembre 2024', en: 'September 2024' },
    category: 'travel',
    title: {
      fr: 'Un nouveau chapitre en France',
      en: 'A new chapter in France',
    },
    subtitle: {
      fr: 'Départ de Maurice · Strasbourg',
      en: 'Leaving Mauritius · Strasbourg',
    },
    description: {
      fr: `En septembre 2024, j'ai quitté l'île Maurice pour poursuivre mes études en France. Découvrir une nouvelle culture, faire de nouvelles rencontres et apprendre à vivre loin de mon île natale ont marqué un véritable tournant dans ma vie. C'était aussi une étape importante pour construire mon avenir et donner forme à mes ambitions professionnelles.`,
      en: `In September 2024, I left Mauritius to continue my studies in France. Discovering a new culture, meeting new people, and learning to live far from my home island marked a turning point in my life. It was also an important step toward building my future and pursuing my professional ambitions.`,
    },
  },
  {
    id: 'bac',
    date: { fr: '2024', en: '2024' },
    category: 'education',
    compact: true,
    title: {
      fr: 'Baccalauréat',
      en: 'French Baccalaureate',
    },
    subtitle: {
      fr: 'Lycée Labourdonnais · Mention Très Bien',
      en: 'Lycée Labourdonnais · High Honours',
    },
    description: {
      fr: `Baccalauréat français obtenu au Lycée Labourdonnais, à Maurice, avec les spécialités mathématiques et numérique et sciences informatiques. Mention Très Bien.`,
      en: `French Baccalaureate earned at Lycée Labourdonnais in Mauritius, specializing in Mathematics and Computer Science. High Honours.`,
    },
  },
  {
    id: 'nsi-2024',
    date: { fr: '2024', en: '2024' },
    category: 'victory',
    title: {
      fr: 'Cr0ss_iT · Trophées NSI',
      en: 'Cr0ss_iT · Trophées NSI',
    },
    subtitle: {
      fr: "Prix du Sport international · Prix régional de l'originalité",
      en: 'International Sports Prize · Regional Originality Prize',
    },
    description: {
      fr: `Cr0ss_iT est un projet de gestion d'événements sportifs développé en Python avec Pygame. Nous avons notamment travaillé sur l'inscription des participants, le chronométrage par QR code et le classement automatisé. Le projet a remporté le Prix du Sport à l'international et le Prix de l'originalité au niveau régional.`,
      en: `Cr0ss_iT is a sports event management project developed with Python and Pygame. We worked on participant registration, QR-code-based timing, and automated rankings. The project received the International Sports Prize and the Regional Originality Prize.`,
    },
    image: '/images/journey/nsi-2024.jpg',
    imageAlt: {
      fr: 'Capture du projet Cr0ss_iT',
      en: 'Cr0ss_iT project screenshot',
    },
    // projectUrl: '/projects/cross-it',
  },
  {
    id: 'nuit-code-2024',
    date: { fr: '2024', en: '2024' },
    category: 'victory',
    title: {
      fr: 'La Nuit du Code',
      en: 'La Nuit du Code',
    },
    subtitle: {
      fr: '1re place scolaire · Meilleur projet Terminale',
      en: '1st at school · Best final-year project',
    },
    description: {
      fr: `Projet de programmation réalisé en équipe lors de La Nuit du Code 2024. Notre projet a obtenu la première place scolaire et la distinction du meilleur projet de Terminale.`,
      en: `A team programming project created during La Nuit du Code 2024. Our project placed first at school and received the award for the best final-year project.`,
    },
    image: '/images/journey/nuit-code-2024.jpg',
    imageAlt: {
      fr: 'Projet Nuit du Code 2024',
      en: 'Nuit du Code 2024 project',
    },
    // projectUrl: '/projects/nuit-code-2024',
  },
  {
    id: 'algorea',
    date: { fr: '2024', en: '2024' },
    category: 'distinction',
    compact: true,
    title: {
      fr: 'Concours Algoréa',
      en: 'Algoréa Competition',
    },
    subtitle: {
      fr: 'Demi-finaliste nationale',
      en: 'National semifinalist',
    },
    description: {
      fr: `Demi-finaliste nationale du concours Algoréa, consacré à la programmation et à la résolution de problèmes algorithmiques.`,
      en: `National semifinalist in the Algoréa programming and algorithmic problem-solving competition.`,
    },
  },
  {
    id: 'castor',
    date: { fr: '2024', en: '2024' },
    category: 'distinction',
    compact: true,
    title: {
      fr: 'Concours Castor Informatique',
      en: 'Bebras Computing Challenge',
    },
    subtitle: {
      fr: '2e place scolaire · 103e place mondiale',
      en: '2nd at school · 103rd worldwide',
    },
    description: {
      fr: `Participation en binôme au concours Castor Informatique. Deuxième place dans notre établissement et 103e place mondiale.`,
      en: `Participated with a teammate in the Bebras Computing Challenge. Second place at school and 103rd worldwide.`,
    },
  },
  {
    id: 'tutorat',
    date: {
      fr: 'Août 2023 — Juin 2024',
      en: 'Aug 2023 — Jun 2024',
    },
    category: 'volunteering',
    compact: true,
    title: {
      fr: 'Tutorat bénévole',
      en: 'Volunteer tutoring',
    },
    subtitle: {
      fr: 'Lycée Labourdonnais · Maurice',
      en: 'Lycée Labourdonnais · Mauritius',
    },
    description: {
      fr: `Accompagnement scolaire d'élèves du secondaire dans le cadre d'un programme de tutorat bénévole.`,
      en: `Providing academic support to secondary school students through a volunteer tutoring program.`,
    },
  },
  {
    id: 'maubon',
    date: { fr: 'Décembre 2023', en: 'December 2023' },
    category: 'professional',
    title: {
      fr: 'Maubon Food Services Ltd',
      en: 'Maubon Food Services Ltd',
    },
    subtitle: {
      fr: 'Stage · Maurice',
      en: 'Internship · Mauritius',
    },
    description: {
      fr: `Lors de ce stage, j'ai participé au traitement des demandes clients, au suivi des commandes et aux échanges avec la clientèle. J'ai également découvert les principales étapes de la création d'une entreprise et les éléments essentiels à son fonctionnement.`,
      en: `During this internship, I helped handle customer requests, track orders, and communicate with clients. I also learned about the main steps involved in setting up a business and the foundations of its day-to-day operations.`,
    },
  },
  {
    id: 'nsi-2023',
    date: { fr: '2023', en: '2023' },
    category: 'victory',
    title: {
      fr: 'Trophées NSI',
      en: 'Trophées NSI',
    },
    subtitle: {
      fr: 'Lauréate régionale · Meilleur projet Première',
      en: 'Regional winner · Best Première-year project',
    },
    description: {
      fr: `Projet informatique original développé en équipe et récompensé au niveau régional lors des Trophées NSI 2023.`,
      en: `An original team computing project recognized at regional level during the 2023 Trophées NSI.`,
    },
    image: '/images/journey/nsi-2023.jpg',
    imageAlt: {
      fr: 'Projet Trophées NSI 2023',
      en: 'Trophées NSI 2023 project',
    },
    // projectUrl: '/projects/nsi-2023',
  },
  {
    id: 'nuit-code-2023',
    date: { fr: '2023', en: '2023' },
    category: 'victory',
    title: {
      fr: 'La Nuit du Code',
      en: 'La Nuit du Code',
    },
    subtitle: {
      fr: '1re place scolaire · Meilleur projet Première',
      en: '1st at school · Best Première-year project',
    },
    description: {
      fr: `Projet de programmation réalisé en équipe lors de La Nuit du Code 2023, récompensé par une première place scolaire et le prix du meilleur projet de Première.`,
      en: `A team programming project created during La Nuit du Code 2023, awarded first place at school and best Première-year project.`,
    },
    image: '/images/journey/nuit-code-2023.jpg',
    imageAlt: {
      fr: 'Projet Nuit du Code 2023',
      en: 'Nuit du Code 2023 project',
    },
    // projectUrl: '/projects/nuit-code-2023',
  },
  {
    id: 'math-2023',
    date: { fr: '2023', en: '2023' },
    category: 'distinction',
    compact: true,
    title: {
      fr: 'Olympiades nationales de mathématiques',
      en: 'National Mathematics Olympiad',
    },
    subtitle: {
      fr: 'Copie sélectionnée et distinguée',
      en: 'Selected and recognized entry',
    },
    description: {
      fr: `Ma copie a été sélectionnée dans le cadre des Olympiades de mathématiques et a reçu une distinction.`,
      en: `My work was selected and recognized as part of the Mathematics Olympiad.`,
    },
  },
  {
    id: 'jojo',
    date: {
      fr: 'Août 2021 — Déc. 2023',
      en: 'Aug 2021 — Dec 2023',
    },
    category: 'volunteering',
    compact: true,
    title: {
      fr: 'Jeune Officielle et Organisatrice (JOJO)',
      en: 'Young Sports Official & Organizer (JOJO)',
    },
    subtitle: {
      fr: 'Lycée Labourdonnais · Maurice',
      en: 'Lycée Labourdonnais · Mauritius',
    },
    description: {
      fr: `J'ai participé à l'organisation de compétitions sportives, notamment à travers l'arbitrage, le chronométrage et la coordination des participants. Cette expérience a également inspiré Cr0ss_iT, une application conçue pour faciliter la gestion des événements sportifs de l'établissement.`,
      en: `I helped organize sports competitions through officiating, timekeeping, and participant coordination. This experience also inspired Cr0ss_iT, an application designed to make managing school sports events easier.`,
    },
  },
  {
    id: 'alliance',
    date: { fr: 'Juin 2022', en: 'June 2022' },
    category: 'professional',
    title: {
      fr: 'Alliance Financial Services Ltd',
      en: 'Alliance Financial Services Ltd',
    },
    subtitle: {
      fr: "Stage d'observation · Maurice",
      en: 'Observation internship · Mauritius',
    },
    description: {
      fr: `Découverte du fonctionnement de l'entreprise et observation de ses processus internes.`,
      en: `Observation of internal processes and day-to-day company operations.`,
    },
  },
  {
    id: 'rodrigues',
    date: {
      fr: 'Février 2023',
      en: 'February 2023',
    },
    category: 'travel',
    title: {
      fr: "Les Assises de l'eau à Rodrigues",
      en: 'The Rodrigues Water Conference',
    },
    subtitle: {
      fr: 'Voyage éducatif · Environnement et ressources en eau',
      en: 'Educational experience · Environment and water resources',
    },
    description: {
      fr: `En février 2023, je suis retournée à Rodrigues, une île où j'ai vécu pendant quatre ans et à laquelle je reste profondément attachée. J'ai eu l'occasion d'assister aux Assises de l'eau, un événement consacré aux défis de l'approvisionnement en eau sur l'île. Cette expérience m'a permis de découvrir les enjeux scientifiques, techniques et environnementaux liés à la gestion de cette ressource essentielle. Curieuse d'en apprendre davantage, j'ai approfondi le sujet à travers des recherches personnelles, puis conçu un diaporama pour partager mes découvertes avec mes camarades de classe.`,
      en: `In February 2023, I returned to Rodrigues, an island where I had lived for four years and which remains very close to my heart. I had the opportunity to attend the Water Conference, an event focused on the island's water supply challenges. This experience introduced me to the scientific, technical, and environmental issues surrounding water resource management. Eager to learn more, I conducted additional research and created a presentation to share what I had discovered with my classmates.`,
    },
    image: '/images/projects/rodrigues1.png',
    imageAlt: {
      fr: 'Vue du lagon de Rodrigues depuis une route côtière',
      en: 'View of the Rodrigues lagoon from a coastal road',
    },
    details: [
      {
        fr: 'Recherche documentaire',
        en: 'Documentary research',
      },
      {
        fr: 'Vulgarisation scientifique',
        en: 'Science communication',
      },
      {
        fr: 'Présentation orale',
        en: 'Oral presentation',
      },
    ],
    projectUrl: '/projects/rodrigues-water',
    projectLabel: {
      fr: 'Découvrir cette expérience',
      en: 'Explore this experience',
    },
  },
  {
    id: 'brevet',
    date: {
      fr: '2021',
      en: '2021',
    },
    category: 'education',
    compact: true,
    title: {
      fr: 'Diplôme national du brevet',
      en: 'French National Lower Secondary School Diploma',
    },
    subtitle: {
      fr: 'Série générale · Mention Très Bien',
      en: 'General track · Highest Honours',
    },
    description: {
      fr: `J'ai obtenu le diplôme national du brevet (DNB), série générale, avec la mention Très Bien, le 1er juillet 2021. Ce diplôme, délivré par l'Académie de La Réunion, marque la fin de mon parcours au collège et une première étape importante de ma scolarité.`,
      en: `I earned the French National Lower Secondary School Diploma (Diplôme national du brevet), general track, with Highest Honours (Très Bien) on 1 July 2021. Issued by the Académie de La Réunion, this diploma marked the completion of my lower secondary education and an important milestone in my academic journey.`,
    },
    details: [
      {
        fr: 'Mention Très Bien',
        en: 'Highest Honours',
      },
      {
        fr: 'Académie de La Réunion',
        en: 'Académie de La Réunion',
      },
      {
        fr: 'Obtenu le 1er juillet 2021',
        en: 'Awarded on 1 July 2021',
      },
    ],
  },
]

const filters: { id: Filter; label: Localized }[] = [
  {
    id: 'all',
    label: { fr: 'Tout voir', en: 'All' },
  },
  {
    id: 'education',
    label: { fr: 'Formations', en: 'Education' },
  },
  {
    id: 'professional',
    label: { fr: 'Expériences pro', en: 'Work experience' },
  },
  {
    id: 'awards',
    label: {
      fr: 'Prix & distinctions',
      en: 'Awards & Honors',
    },
  },
  {
    id: 'travel',
    label: { fr: 'Voyages', en: 'Travel' },
  },
  {
    id: 'volunteering',
    label: { fr: 'Engagements', en: 'Volunteering' },
  },
]

const categoryLabels: Record<Category, Localized> = {
  education: {
    fr: 'Formation',
    en: 'Education',
  },
  professional: {
    fr: 'Expérience pro',
    en: 'Work experience',
  },
  victory: {
    fr: 'Victoire',
    en: 'Achievement',
  },
  distinction: {
    fr: 'Distinction',
    en: 'Recognition',
  },
  travel: {
    fr: 'Voyage',
    en: 'Travel',
  },
  volunteering: {
    fr: 'Engagement',
    en: 'Volunteering',
  },
}

function ProjectImage({
  src,
  alt,
  fr,
}: {
  src: string
  alt: string
  fr: boolean
}) {
  const [status, setStatus] = useState<
    'loading' | 'loaded' | 'error'
  >('loading')

  return (
    <div className="journey-project-image">
      {status !== 'loaded' && (
        <div className="journey-image-placeholder">
          {status === 'error'
            ? fr
              ? 'Image à remplacer'
              : 'Image to replace'
            : fr
              ? 'Chargement...'
              : 'Loading...'}
        </div>
      )}

      {status !== 'error' && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={status === 'loaded' ? 'is-visible' : ''}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
    </div>
  )
}

function JourneyCard({
  entry,
  fr,
  side,
}: {
  entry: TimelineEntry
  fr: boolean
  side: 'left' | 'right'
}) {
  const [expanded, setExpanded] = useState(false)

  const title = fr ? entry.title.fr : entry.title.en
  const subtitle = fr ? entry.subtitle.fr : entry.subtitle.en
  const description = fr
    ? entry.description.fr
    : entry.description.en

  return (
    <article
      className={[
        'journey-entry',
        `journey-entry-${side}`,
        `journey-${entry.category}`,
        entry.compact ? 'journey-entry-compact' : '',
      ].join(' ')}
    >
      <span className="journey-node" aria-hidden="true" />

      <div className="journey-card">
        <div className="journey-card-meta">
          <span className="journey-date">
            {fr ? entry.date.fr : entry.date.en}
          </span>

          <span className="journey-category">
            {fr
              ? categoryLabels[entry.category].fr
              : categoryLabels[entry.category].en}
          </span>
        </div>

        {entry.category === 'victory' && (
          <span
            className="journey-crown-sticker"
            aria-hidden="true"
          >
            <svg viewBox="0 0 130 80" fill="none">
              <path
                d="M12 56 L7 17 L38 36 L65 7 L91 36 L123 17 L117 56 Q65 65 12 56Z"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 66 Q65 73 116 66"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        )}

        <h2>{title}</h2>
        <p className="journey-subtitle">{subtitle}</p>

        <button
          type="button"
          className="journey-expand-button"
          aria-expanded={expanded}
          aria-controls={`journey-details-${entry.id}`}
          onClick={() => setExpanded((value) => !value)}
        >
          <span>
            {expanded
              ? fr
                ? 'Voir moins'
                : 'Show less'
              : fr
                ? 'En savoir plus'
                : 'Read more'}
          </span>

          <span
            className="journey-expand-symbol"
            aria-hidden="true"
          >
            {expanded ? '−' : '+'}
          </span>
        </button>

        <div
          id={`journey-details-${entry.id}`}
          className="journey-details"
          hidden={!expanded}
        >
          <div className="journey-details-inner">
            {entry.image && (
              <ProjectImage
                src={entry.image}
                alt={
                  fr
                    ? entry.imageAlt?.fr || title
                    : entry.imageAlt?.en || title
                }
                fr={fr}
              />
            )}

            <p className="journey-description">
              {description}
            </p>

            {entry.details && entry.details.length > 0 && (
              <div className="journey-details-list">
                {entry.details.map((detail, index) => (
                  <span key={`${entry.id}-${index}`}>
                    {fr ? detail.fr : detail.en}
                  </span>
                ))}
              </div>
            )}

            {entry.projectUrl && (
              <Link
                className="journey-project-link"
                to={entry.projectUrl}
              >
                {entry.projectLabel
                  ? fr
                    ? entry.projectLabel.fr
                    : entry.projectLabel.en
                  : fr
                    ? 'Voir le projet'
                    : 'View project'}
                <span aria-hidden="true">↗</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Journey() {
  const { language } = useLanguage()
  const fr = language === 'fr'
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const visibleEntries = entries.filter((entry) => {
    if (activeFilter === 'all') return true

    if (activeFilter === 'awards') {
      return (
        entry.category === 'victory' ||
        entry.category === 'distinction'
      )
    }

    return entry.category === activeFilter
  })

  return (
    <main className="journey-page">
      <header className="journey-hero">
        <p className="journey-eyebrow">
          THE STORY SO FAR
        </p>

        <h1>{fr ? 'Mon parcours' : 'My Journey'}</h1>

        <p>
          {fr
            ? 'Formations, expériences, projets et découvertes : quelques étapes de mon parcours.'
            : 'Education, work, projects, and discoveries: a few chapters of my journey.'}
        </p>

        <Link
          className="journey-cv-button"
          to="/cv"
        >
          {fr ? 'Voir mon CV' : 'View my resume'}
          <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section
        className="journey-content"
        aria-label={
          fr ? 'Mon parcours' : 'My journey'
        }
      >
        <div
          className="journey-filters"
          role="group"
          aria-label={
            fr ? 'Filtrer mon parcours' : 'Filter my journey'
          }
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`journey-filter ${
                activeFilter === filter.id ? 'is-active' : ''
              }`}
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {fr ? filter.label.fr : filter.label.en}
            </button>
          ))}
        </div>

        <p
          className="journey-result-count"
          aria-live="polite"
        >
          {visibleEntries.length}{' '}
          {fr
            ? visibleEntries.length === 1
              ? 'étape'
              : 'étapes'
            : visibleEntries.length === 1
              ? 'entry'
              : 'entries'}
        </p>

        <div className="journey-timeline">
          {visibleEntries.map((entry, index) => (
            <JourneyCard
              key={entry.id}
              entry={entry}
              fr={fr}
              side={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </section>

      <div className="journey-ending">
        <span aria-hidden="true">♡</span>
        <p>
          {fr
            ? "Et l'histoire continue..."
            : 'And the story continues...'}
        </p>
      </div>
    </main>
  )
}
