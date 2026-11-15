
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import './Rodrigues.css'

type Lang = 'fr' | 'en'
type Localized = Record<Lang, string>

type IconName =
  | 'ground'
  | 'surface'
  | 'rain'
  | 'desalination'
  | 'climate'
  | 'island'
  | 'network'
  | 'sustainable'

const images = {
  hero: '/images/projects/rodrigues1.png',
  personal: '/images/projects/rodrigues4.jpeg',
  landscape: '/images/projects/rodrigues3.png',
  keychains: '/images/projects/rodrigues2.jpeg',
}

function WaterIcon({
  name,
  size = 30,
}: {
  name: IconName
  size?: number
}) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }

  switch (name) {
    case 'ground':
      return (
        <svg {...common}>
          <path d="M24 5C18 14 11 22 11 30a13 13 0 0 0 26 0C37 22 30 14 24 5Z" />
          <path d="M17 32c3-5 6-5 9 0s6 5 9 0" />
        </svg>
      )

    case 'surface':
      return (
        <svg {...common}>
          <path d="M5 19c5-4 9-4 14 0s9 4 14 0 7-4 10-2" />
          <path d="M5 27c5-4 9-4 14 0s9 4 14 0 7-4 10-2" />
          <path d="M5 35c5-4 9-4 14 0s9 4 14 0 7-4 10-2" />
        </svg>
      )

    case 'rain':
      return (
        <svg {...common}>
          <path d="M13 29a9 9 0 0 1 1-18 12 12 0 0 1 22 4 7 7 0 0 1 0 14H13Z" />
          <path d="m15 34-2 6m12-6-2 6m12-6-2 6" />
        </svg>
      )

    case 'desalination':
      return (
        <svg {...common}>
          <path d="M6 13h36M6 35h36M13 13v22m22-22v22" />
          <path d="M24 17c-3 5-6 8-6 12a6 6 0 0 0 12 0c0-4-3-7-6-12Z" />
        </svg>
      )

    case 'climate':
      return (
        <svg {...common}>
          <path d="M11 30a9 9 0 0 1 2-18 12 12 0 0 1 22 4 7 7 0 0 1 0 14H11Z" />
          <path d="M14 37h20" />
        </svg>
      )

    case 'island':
      return (
        <svg {...common}>
          <path d="M4 34 16 18l8 10 6-8 14 14" />
          <path d="M4 40c6-3 10-3 16 0s10 3 16 0 6-2 8-1" />
          <circle cx="35" cy="11" r="4" />
        </svg>
      )

    case 'network':
      return (
        <svg {...common}>
          <rect x="4" y="17" width="13" height="13" rx="3" />
          <rect x="31" y="5" width="13" height="13" rx="3" />
          <rect x="31" y="30" width="13" height="13" rx="3" />
          <path d="M17 23h8v-12h6m-6 12v13h6" />
        </svg>
      )

    case 'sustainable':
      return (
        <svg {...common}>
          <path d="M24 42V23" />
          <path d="M24 27C11 28 8 18 9 9c11 0 18 5 15 18Z" />
          <path d="M24 34c13 1 18-7 17-17-12 0-19 6-17 17Z" />
          <path d="M17 42h14" />
        </svg>
      )
  }
}

type WaterSource = {
  id: string
  icon: IconName
  title: Localized
  description: Localized
  issue: Localized
}

const waterSources: WaterSource[] = [
  {
    id: 'ground',
    icon: 'ground',
    title: {
      fr: 'Eaux souterraines',
      en: 'Groundwater',
    },
    description: {
      fr: "Une partie de l'eau provient des nappes souterraines, accessibles grâce à des forages. C'est une ressource importante pour l'approvisionnement de Rodrigues.",
      en: 'Part of the water supply comes from underground aquifers, accessed through boreholes. This is an important resource for Rodrigues.',
    },
    issue: {
      fr: "Il faut surveiller les prélèvements pour éviter d'épuiser les réserves ou de dégrader leur qualité.",
      en: 'Extraction must be monitored to avoid depleting the reserves or damaging water quality.',
    },
  },
  {
    id: 'surface',
    icon: 'surface',
    title: {
      fr: 'Eaux de surface',
      en: 'Surface water',
    },
    description: {
      fr: "Les barrages et les retenues collinaires permettent de stocker une partie de l'eau issue des précipitations et du ruissellement.",
      en: 'Dams and hillside reservoirs store some of the water collected from rainfall and surface runoff.',
    },
    issue: {
      fr: 'Le volume disponible dépend notamment des pluies et des capacités de stockage.',
      en: 'The amount available depends in part on rainfall and storage capacity.',
    },
  },
  {
    id: 'rain',
    icon: 'rain',
    title: {
      fr: 'Récupération des pluies',
      en: 'Rainwater harvesting',
    },
    description: {
      fr: "La collecte de l'eau de pluie, notamment à l'échelle des habitations, peut compléter les autres sources d'approvisionnement.",
      en: 'Collecting rainwater, particularly at household level, can supplement other sources of water.',
    },
    issue: {
      fr: 'Cette solution dépend des précipitations et nécessite des installations adaptées pour la collecte et le stockage.',
      en: 'This solution depends on rainfall and requires suitable collection and storage systems.',
    },
  },
  {
    id: 'desalination',
    icon: 'desalination',
    title: {
      fr: 'Dessalement',
      en: 'Desalination',
    },
    description: {
      fr: "Le dessalement consiste à retirer le sel de l'eau de mer afin de produire de l'eau douce. C'est une possibilité particulièrement intéressante pour un territoire insulaire.",
      en: 'Desalination removes salt from seawater to produce freshwater. It is a particularly relevant option for an island territory.',
    },
    issue: {
      fr: "Le procédé demande de l'énergie et implique des coûts d'exploitation ainsi que des contraintes environnementales.",
      en: 'The process requires energy and involves operating costs as well as environmental considerations.',
    },
  },
]

const challenges: {
  icon: IconName
  title: Localized
  description: Localized
}[] = [
  {
    icon: 'climate',
    title: {
      fr: 'Précipitations',
      en: 'Rainfall',
    },
    description: {
      fr: "Les périodes de sécheresse rendent l'approvisionnement plus difficile.",
      en: 'Dry periods make water supply more difficult.',
    },
  },
  {
    icon: 'island',
    title: {
      fr: 'Géographie',
      en: 'Geography',
    },
    description: {
      fr: "Le relief et la répartition des habitations compliquent l'acheminement de l'eau.",
      en: 'The terrain and distribution of homes complicate water delivery.',
    },
  },
  {
    icon: 'network',
    title: {
      fr: 'Infrastructures',
      en: 'Infrastructure',
    },
    description: {
      fr: "Produire de l'eau ne suffit pas : il faut aussi la stocker et la distribuer.",
      en: 'Producing water is not enough: it must also be stored and distributed.',
    },
  },
  {
    icon: 'sustainable',
    title: {
      fr: 'Gestion des ressources',
      en: 'Resource management',
    },
    description: {
      fr: "Les solutions doivent rester adaptées aux besoins et aux ressources de l'île.",
      en: "Solutions must remain suited to the island's needs and resources.",
    },
  },
]

const researchSteps: {
  number: string
  title: Localized
  description: Localized
}[] = [
  {
    number: '01',
    title: {
      fr: 'Assister',
      en: 'Attend',
    },
    description: {
      fr: "J'ai assisté aux présentations et découvert différentes façons d'aborder le problème de l'eau à Rodrigues.",
      en: 'I attended the presentations and discovered different approaches to the water challenges in Rodrigues.',
    },
  },
  {
    number: '02',
    title: {
      fr: 'Rechercher',
      en: 'Research',
    },
    description: {
      fr: "J'ai repris mes notes et effectué des recherches pour mieux comprendre les points qui m'intéressaient.",
      en: 'I reviewed my notes and did further research to better understand the topics that interested me.',
    },
  },
  {
    number: '03',
    title: {
      fr: 'Préparer',
      en: 'Prepare',
    },
    description: {
      fr: "J'ai sélectionné les informations à présenter et créé mon propre PowerPoint.",
      en: 'I selected the information I wanted to present and created my own PowerPoint.',
    },
  },
  {
    number: '04',
    title: {
      fr: 'Présenter',
      en: 'Present',
    },
    description: {
      fr: "J'ai ensuite expliqué le sujet à mes camarades de classe à l'aide de mon diaporama.",
      en: 'I then explained the topic to my classmates using my presentation.',
    },
  },
]

export default function Rodrigues() {
  const { language } = useLanguage()
  const lang: Lang = language === 'en' ? 'en' : 'fr'
  const fr = lang === 'fr'

  const [selectedSource, setSelectedSource] = useState('ground')

  const activeSource =
    waterSources.find((source) => source.id === selectedSource) ??
    waterSources[0]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="rodrigues-page">

      {/* HERO */}

      <section className="rodrigues-hero" id="rodrigues-top">
        <img
          className="rodrigues-hero-image"
          src={images.hero}
          alt={
            fr
              ? 'Route côtière et lagon turquoise de Rodrigues'
              : 'Coastal road and turquoise lagoon in Rodrigues'
          }
        />

        <div className="rodrigues-hero-overlay" />

        <div className="rodrigues-hero-content">
          <Link className="rodrigues-back" to="/journey">
            <span aria-hidden="true">←</span>
            {fr ? 'Retour à mon parcours' : 'Back to my journey'}
          </Link>

          <div className="rodrigues-hero-intro">
            <span className="rodrigues-eyebrow">
              {fr
                ? 'RODRIGUES · FÉVRIER 2023'
                : 'RODRIGUES · FEBRUARY 2023'}
            </span>

            <h1>
              {fr
                ? 'Rodrigues, entre souvenirs et découvertes'
                : 'Rodrigues, between memories and discoveries'}
            </h1>

            <p>
              {fr
                ? "En 2023, j'ai eu l'occasion de retourner à Rodrigues et d'assister aux Assises de l'eau. Une expérience que j'ai ensuite eu envie de partager avec ma classe."
                : 'In 2023, I had the opportunity to return to Rodrigues and attend the Water Conference. An experience I later wanted to share with my class.'}
            </p>

            <a
              href="#rodrigues-event"
              className="rodrigues-discover"
            >
              {fr
                ? 'Découvrir cette expérience'
                : 'Explore this experience'}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 01 — CONFÉRENCE */}

      <section
        className="rodrigues-section rodrigues-conference"
        id="rodrigues-event"
      >
        <div className="rodrigues-section-heading">
          <span className="rodrigues-kicker">
            01 / {fr ? "L'ÉVÉNEMENT" : 'THE EVENT'}
          </span>

          <h2>
            {fr
              ? "Les Assises de l'eau"
              : 'The Water Conference'}
          </h2>

          <p className="rodrigues-section-lead">
            Shaping the Future of Water in Rodrigues
          </p>
        </div>

        <div className="rodrigues-event-info">
          <div>
            <span>DATES</span>
            <strong>
              {fr
                ? '23 au 25 février 2023'
                : '23–25 February 2023'}
            </strong>
          </div>

          <div>
            <span>{fr ? 'LIEU' : 'LOCATION'}</span>
            <strong>La Résidence, Port-Mathurin</strong>
          </div>

          <div>
            <span>
              {fr ? 'ORGANISATION' : 'ORGANIZED BY'}
            </span>
            <strong>
              {fr
                ? 'Bureau du Chef commissaire de Rodrigues'
                : 'Office of the Chief Commissioner of Rodrigues'}
            </strong>
          </div>
        </div>

        <div className="rodrigues-conference-copy">
          <p>
            {fr
              ? "En février 2023, je suis retournée à Rodrigues, où j'avais vécu pendant quatre ans. Pendant ce séjour, j'ai eu l'occasion d'assister aux Assises de l'eau, une conférence consacrée aux difficultés d'approvisionnement en eau sur l'île."
              : "In February 2023, I returned to Rodrigues, where I had lived for four years. During my stay, I had the opportunity to attend the Water Conference, an event focused on the island's water supply difficulties."}
          </p>

          <p>
            {fr
              ? "Mon père faisait partie des intervenants. C'est grâce à lui que j'ai pu assister à sa présentation et découvrir les échanges autour des ressources en eau, des infrastructures et des solutions envisagées. Le sujet m'intéressait d'autant plus qu'il concernait une île que je connaissais personnellement."
              : 'My father was one of the speakers. Thanks to him, I was able to attend his presentation and learn about the discussions on water resources, infrastructure, and possible solutions. The subject felt especially relevant because it concerned an island I knew personally.'}
          </p>
        </div>
      </section>

      {/* 02 — SOURCES D'EAU */}

      <section className="rodrigues-section rodrigues-water">
        <div className="rodrigues-section-heading">
          <span className="rodrigues-kicker">
            02 / {fr ? "L'APPROVISIONNEMENT" : 'WATER SUPPLY'}
          </span>

          <h2>
            {fr
              ? "D'où vient l'eau à Rodrigues ?"
              : 'Where does Rodrigues get its water?'}
          </h2>

          <p>
            {fr
              ? "Pour comprendre le problème, je me suis d'abord intéressée aux différentes sources d'eau disponibles sur l'île."
              : 'To understand the problem, I first looked into the different water sources available on the island.'}
          </p>
        </div>

        <div
          className="rodrigues-water-tabs"
          role="group"
          aria-label={
            fr
              ? "Choisir une source d'eau"
              : 'Choose a water source'
          }
        >
          {waterSources.map((source) => (
            <button
              key={source.id}
              type="button"
              className={`rodrigues-water-tab ${
                selectedSource === source.id ? 'active' : ''
              }`}
              aria-pressed={selectedSource === source.id}
              onClick={() => setSelectedSource(source.id)}
            >
              <WaterIcon name={source.icon} size={29} />
              <span>{source.title[lang]}</span>
            </button>
          ))}
        </div>

        <div
          className="rodrigues-water-detail"
          aria-live="polite"
        >
          <div className="rodrigues-water-icon">
            <WaterIcon name={activeSource.icon} size={48} />
          </div>

          <div>
            <h3>{activeSource.title[lang]}</h3>
            <p>{activeSource.description[lang]}</p>

            <div className="rodrigues-water-challenge">
              <strong>
                {fr
                  ? 'Ce qui pose difficulté'
                  : 'The main challenge'}
              </strong>
              <p>{activeSource.issue[lang]}</p>
            </div>
          </div>
        </div>

        {/* DONNÉES HISTORIQUES */}

        <div className="rodrigues-stats">
          <div className="rodrigues-stats-heading">
            <span className="rodrigues-data-label">
              {fr
                ? 'DONNÉES HISTORIQUES · 2022–2023'
                : 'HISTORICAL DATA · 2022–2023'}
            </span>

            <h3>
              {fr
                ? "Répartition de la production d'eau"
                : 'Breakdown of water production'}
            </h3>

            <p>
              {fr
                ? "Voici les chiffres présentés dans les documents de l'époque."
                : 'These are the figures presented in the documents from that period.'}
            </p>
          </div>

          {[
            { fr: 'Forages', en: 'Boreholes', value: 45 },
            { fr: 'Eaux de surface', en: 'Surface water', value: 28 },
            { fr: 'Dessalement', en: 'Desalination', value: 27 },
          ].map((item) => (
            <div className="rodrigues-stat" key={item.en}>
              <div className="rodrigues-stat-label">
                <span>{item[lang]}</span>
                <strong>{item.value} %</strong>
              </div>

              <div
                className="rodrigues-stat-track"
                role="progressbar"
                aria-valuenow={item.value}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={item[lang]}
              >
                <div
                  className="rodrigues-stat-fill"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}

          <p className="rodrigues-stats-note">
            {fr
              ? "Source : présentation des Assises de l'eau, 2023. Ces pourcentages concernent la période étudiée et ne décrivent pas nécessairement la situation actuelle. La récupération domestique des eaux pluviales n'est pas incluse dans cette répartition."
              : 'Source: 2023 Water Conference presentation. These percentages refer to the period studied and do not necessarily reflect the current situation. Household rainwater harvesting is not included in this breakdown.'}
          </p>
        </div>
      </section>

      {/* PHOTO PANORAMIQUE */}

      <section className="rodrigues-landscape">
        <img
          src={images.landscape}
          alt={
            fr
              ? 'Paysage de Rodrigues'
              : 'Landscape in Rodrigues'
          }
          loading="lazy"
        />

        <div className="rodrigues-landscape-caption">
          {fr
            ? "À Rodrigues, l'eau est une question qui touche directement la vie quotidienne."
            : 'In Rodrigues, water is an issue that directly affects everyday life.'}
        </div>
      </section>

      {/* 03 — DIFFICULTÉS */}

      <section className="rodrigues-section rodrigues-challenges">
        <div className="rodrigues-section-heading">
          <span className="rodrigues-kicker">
            03 / {fr ? 'LES DIFFICULTÉS' : 'THE CHALLENGES'}
          </span>

          <h2>
            {fr
              ? "Pourquoi l'approvisionnement est-il compliqué ?"
              : 'Why is water supply so challenging?'}
          </h2>

          <p>
            {fr
              ? "J'ai compris que le problème ne se limitait pas à trouver de l'eau. Il fallait aussi pouvoir la récupérer, la traiter, la stocker et l'acheminer jusqu'aux habitants."
              : 'I learned that the problem was not simply finding water. It also had to be collected, treated, stored, and delivered to residents.'}
          </p>
        </div>

        <div className="rodrigues-challenge-grid">
          {challenges.map((item) => (
            <article
              className="rodrigues-challenge-card"
              key={item.icon}
            >
              <WaterIcon name={item.icon} size={35} />
              <h3>{item.title[lang]}</h3>
              <p>{item.description[lang]}</p>
            </article>
          ))}
        </div>

        <p className="rodrigues-challenges-note">
          {fr
            ? "Ces enjeux faisaient partie des sujets abordés dans les documents de 2023. Les solutions évoquées lors de l'événement ne sont pas nécessairement des projets qui ont ensuite été réalisés."
            : 'These challenges were discussed in the 2023 documents. Solutions mentioned during the event were not necessarily implemented afterward.'}
        </p>
      </section>

      {/* 04 — MON TRAVAIL */}

      <section className="rodrigues-section rodrigues-my-work">
        <div className="rodrigues-section-heading">
          <span className="rodrigues-kicker">
            04 / {fr ? 'MON TRAVAIL PERSONNEL' : 'MY OWN WORK'}
          </span>

          <h2>
            {fr
              ? 'De Rodrigues à ma salle de classe'
              : 'From Rodrigues to my classroom'}
          </h2>

          <p>
            {fr
              ? "Après la conférence, j'avais envie d'aller un peu plus loin. J'ai donc décidé de faire mes propres recherches et de préparer une présentation pour mes camarades."
              : 'After the conference, I wanted to explore the subject further. So I decided to do my own research and prepare a presentation for my classmates.'}
          </p>
        </div>

        <div className="rodrigues-steps">
          {researchSteps.map((step) => (
            <article
              className="rodrigues-step"
              key={step.number}
            >
              <span>{step.number}</span>
              <h3>{step.title[lang]}</h3>
              <p>{step.description[lang]}</p>
            </article>
          ))}
        </div>

        <div className="rodrigues-work-highlight">
          <div
            className="rodrigues-work-line"
            aria-hidden="true"
          />

          <p>
            {fr
              ? "Ce n'était pas un projet scolaire imposé ni une mission officielle. C'était simplement un sujet que j'avais envie de mieux comprendre, puis d'expliquer à d'autres. J'ai conservé mes notes, mes recherches et le diaporama que j'avais préparé."
              : 'This was not an assigned school project or an official role. It was simply a subject I wanted to understand better and then explain to others. I kept my notes, research, and the presentation I had prepared.'}
          </p>
        </div>
      </section>

      {/* 05 — APPRENTISSAGES */}

      <section className="rodrigues-section rodrigues-reflection">
        <span className="rodrigues-kicker">
          05 / {fr ? "CE QUE J'AI APPRIS" : 'WHAT I LEARNED'}
        </span>

        <h2>
          {fr
            ? 'Ce que je retiens de cette expérience'
            : 'What I took away from this experience'}
        </h2>

        <p>
          {fr
            ? "Avant cette conférence, je connaissais déjà les difficultés d'accès à l'eau à Rodrigues. Mais je n'avais jamais vraiment pris le temps de comprendre d'où venait le problème, ni quelles solutions pouvaient être envisagées. En faisant mes recherches, j'ai découvert à quel point les aspects techniques, environnementaux et humains étaient liés."
            : 'Before this conference, I already knew that access to water was difficult in Rodrigues. But I had never really taken the time to understand the causes or the possible solutions. Through my research, I discovered how closely technical, environmental, and human factors were connected.'}
        </p>

        <p>
          {fr
            ? "Préparer une présentation pour ma classe m'a aussi appris à sélectionner les informations importantes et à expliquer des notions scientifiques avec mes propres mots."
            : 'Preparing a presentation for my class also taught me how to select relevant information and explain scientific concepts in my own words.'}
        </p>

        <div className="rodrigues-skills">
          {(fr
            ? [
                'Recherche documentaire',
                'Analyse',
                'Synthèse',
                'Vulgarisation scientifique',
                'Présentation orale',
              ]
            : [
                'Research',
                'Analysis',
                'Synthesis',
                'Science communication',
                'Public speaking',
              ]
          ).map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      {/* 06 — HISTOIRE PERSONNELLE */}

      <section className="rodrigues-section rodrigues-story">
        <div className="rodrigues-story-inner">
          <div className="rodrigues-story-text">
            <span className="rodrigues-kicker">
              06 / {fr
                ? 'UNE HISTOIRE PERSONNELLE'
                : 'A PERSONAL STORY'}
            </span>

            <h2>
              {fr
                ? "Bien plus qu'un simple voyage"
                : 'More than just a trip'}
            </h2>

            <p>
              {fr
                ? "Je suis originaire de l'île Maurice, mais Rodrigues fait aussi partie de mon histoire. J'y ai vécu pendant quatre ans, et j'en garde beaucoup de souvenirs."
                : 'I am originally from Mauritius, but Rodrigues is also part of my story. I lived there for four years, and I have many memories of the island.'}
            </p>

            <p>
              {fr
                ? "Y retourner en 2023, c'était retrouver un endroit que je connaissais bien. Assister aux Assises de l'eau m'a permis de découvrir Rodrigues sous un autre angle : pas seulement comme une île à laquelle je suis attachée, mais aussi comme un territoire qui doit faire face à de vraies difficultés."
                : 'Returning in 2023 meant revisiting a place I knew well. Attending the Water Conference allowed me to see Rodrigues from a different perspective: not only as an island I feel attached to, but also as a place facing real challenges.'}
            </p>

            <p>
              {fr
                ? "Aujourd'hui, je trouve intéressant de repenser à cette expérience alors que je poursuis des études d'ingénierie. Elle me rappelle pourquoi j'aime comprendre comment les choses fonctionnent et chercher des réponses à des problèmes concrets."
                : 'Today, as I study engineering, I find it interesting to look back on this experience. It reminds me why I enjoy understanding how things work and exploring solutions to real problems.'}
            </p>

            <Link
              to="/journey"
              className="rodrigues-end-link"
            >
              {fr
                ? 'Retour à mon parcours'
                : 'Back to my journey'}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* DEUX POLAROIDS COMME SUR ABOUT */}

          <div className="rodrigues-memory-gallery">
            <figure className="rodrigues-polaroid rodrigues-polaroid-back">
              <div className="rodrigues-polaroid-image">
                <img
                  src={images.keychains}
                  alt={
                    fr
                      ? 'Paysage de Rodrigues'
                      : 'Landscape of Rodrigues'
                  }
                  loading="lazy"
                />
              </div>

              <figcaption>
                {fr ? 'Rodrigues, 2023' : 'Rodrigues, 2023'}
              </figcaption>
            </figure>

            <figure className="rodrigues-polaroid rodrigues-polaroid-front">
              <div className="rodrigues-polaroid-image">
                <img
                  src={images.personal}
                  alt={
                    fr
                      ? 'Un souvenir personnel de mon séjour à Rodrigues'
                      : 'A personal memory from my trip to Rodrigues'
                  }
                  loading="lazy"
                />
              </div>

              <figcaption>
                {fr ? 'Un souvenir de Rodrigues' : 'A Rodrigues memory'}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

    </main>
  )
}
