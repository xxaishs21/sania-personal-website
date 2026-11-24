
import { Link } from 'react-router-dom'
import { useLanguage } from '../../LanguageContext'
import './CrossIT.css'

type Lang = 'fr' | 'en'
type Localized = Record<Lang, string>

const githubUrl = 'https://github.com/RB-2804/Cr0ss-iT'
const imagePath = '/images/projects/crossit/'

const features: {
  number: string
  title: Localized
  description: Localized
}[] = [
  {
    number: '01',
    title: {
      fr: 'Gestion des inscriptions',
      en: 'Registration management',
    },
    description: {
      fr: "Enregistrer les participants et faciliter leur gestion grâce à une interface dédiée et à l'importation de fichiers CSV.",
      en: 'Register participants and simplify their management through a dedicated interface and CSV file imports.',
    },
  },
  {
    number: '02',
    title: {
      fr: 'Organisation des courses',
      en: 'Race organization',
    },
    description: {
      fr: "Préparer les différentes épreuves et retrouver les informations nécessaires au bon déroulement de l'événement.",
      en: 'Prepare the different races and access the information needed to run the event smoothly.',
    },
  },
  {
    number: '03',
    title: {
      fr: 'Départ, chronométrage et QR codes',
      en: 'Race starts, timing and QR codes',
    },
    description: {
      fr: "Lancer les épreuves et exploiter les QR codes et la caméra pour le suivi des participants et le chronométrage.",
      en: 'Start races and use QR codes and a camera for participant tracking and timing.',
    },
  },
  {
    number: '04',
    title: {
      fr: 'Résultats et classements',
      en: 'Results and rankings',
    },
    description: {
      fr: 'Consulter les résultats des épreuves et mettre en valeur les meilleurs temps.',
      en: 'View race results and highlight the best finishing times.',
    },
  },
]

const screenshots: {
  src: string
  title: Localized
  description: Localized
}[] = [
  {
    src: `${imagePath}inscriptions.png`,
    title: {
      fr: 'Inscriptions',
      en: 'Registrations',
    },
    description: {
      fr: "Inscription individuelle, sélection des classes et importation des participants depuis un fichier.",
      en: 'Individual registration, class selection and participant imports from a file.',
    },
  },
  {
    src: `${imagePath}courses.png`,
    title: {
      fr: 'Organisation des courses',
      en: 'Race organization',
    },
    description: {
      fr: 'Sélection des épreuves, gestion des participants et préparation du départ.',
      en: 'Race selection, participant management and start preparation.',
    },
  },
  {
    src: `${imagePath}depart.png`,
    title: {
      fr: 'Départ de la course',
      en: 'Race start',
    },
    description: {
      fr: 'Affichage des participants et lancement de la course.',
      en: 'Participant overview and race start controls.',
    },
  },
  {
    src: `${imagePath}classement.png`,
    title: {
      fr: 'Classement',
      en: 'Rankings',
    },
    description: {
      fr: 'Consultation du classement des participants pour une épreuve sélectionnée.',
      en: 'View participant rankings for a selected race.',
    },
  },
]

export default function CrossIT() {
  const { language } = useLanguage()
  const lang: Lang = language === 'en' ? 'en' : 'fr'
  const fr = lang === 'fr'

  return (
    <main className="crossit-page">
      {/* HERO */}

      <section className="crossit-hero">
        <div className="crossit-container">
          <Link to="/projects" className="crossit-back">
            <span aria-hidden="true">←</span>
            {fr ? 'Retour aux projets' : 'Back to projects'}
          </Link>

          <div className="crossit-hero-grid">
            <div className="crossit-hero-content">
              <span className="crossit-eyebrow">
                {fr
                  ? 'DÉVELOPPEMENT LOGICIEL · PYTHON'
                  : 'SOFTWARE DEVELOPMENT · PYTHON'}
              </span>

              <h1>Cr0ss_iT</h1>

              <p className="crossit-subtitle">
                {fr
                  ? 'Organiser une course, du départ au classement.'
                  : 'Managing a race, from start to finish.'}
              </p>

              <p className="crossit-description">
                {fr
                  ? "Une application de gestion d'événements sportifs scolaires, conçue pour faciliter les inscriptions, l'organisation des courses, le chronométrage et la consultation des résultats."
                  : 'An application for managing school sporting events, designed to simplify registrations, race organization, timing, and results.'}
              </p>

              <div className="crossit-tags">
                <span>Python</span>
                <span>Pygame</span>
                <span>CSV</span>
                <span>QR Code</span>
              </div>

              <div className="crossit-hero-actions">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="crossit-button crossit-button-primary"
                >
                  {fr ? 'Voir sur GitHub' : 'View on GitHub'}
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="#crossit-overview"
                  className="crossit-button crossit-button-secondary"
                >
                  {fr ? 'Découvrir le projet' : 'Explore the project'}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="crossit-hero-visual" aria-hidden="true">
              <div className="crossit-track">
                <span className="crossit-track-line" />
                <span className="crossit-track-line" />
                <span className="crossit-track-line" />
                <span className="crossit-track-line" />
                <div className="crossit-finish">FINISH</div>
              </div>

              <div className="crossit-timer">
                <span>RACE TIMER</span>
                <strong>00:24:36</strong>
                <small>Cr0ss-iT</small>
              </div>

              <div className="crossit-visual-label">
                {fr
                  ? 'INSCRIPTIONS · COURSES · RÉSULTATS'
                  : 'REGISTRATIONS · RACES · RESULTS'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}

      <section
        className="crossit-section crossit-overview"
        id="crossit-overview"
      >
        <div className="crossit-container crossit-narrow">
          <span className="crossit-eyebrow">
            01 / {fr ? 'LE CONTEXTE' : 'THE CONTEXT'}
          </span>

          <h2>
            {fr
              ? "Simplifier l'organisation d'un événement sportif"
              : 'Making sporting events easier to organize'}
          </h2>

          <p>
            {fr
              ? "Organiser une course scolaire implique de gérer plusieurs tâches : inscrire les participants, préparer les épreuves, suivre les arrivées et établir les classements. Lorsque ces opérations sont effectuées séparément, elles peuvent rapidement devenir difficiles à coordonner."
              : 'Organizing a school race involves several tasks: registering participants, preparing events, tracking finishes, and producing rankings. When handled separately, these operations can quickly become difficult to coordinate.'}
          </p>

          <p>
            {fr
              ? "Cr0ss-iT rassemble ces différentes étapes dans une application dotée d'une interface graphique, afin de rendre le suivi de l'événement plus pratique pour les organisateurs."
              : 'Cr0ss-iT brings these steps together in an application with a graphical interface, making event management more practical for organizers.'}
          </p>

          <div className="crossit-highlight">
            <span aria-hidden="true">✦</span>
            <p>
              {fr
                ? "L'idée centrale : accompagner les organisateurs tout au long de la course, depuis les inscriptions jusqu'aux résultats."
                : 'The central idea: support organizers throughout the event, from registration to results.'}
            </p>
          </div>

          {/* CAPTURE PRINCIPALE */}

          <figure className="crossit-main-preview">
            <img
              src={`${imagePath}cross-it.png`}
              alt={
                fr
                  ? "Écran d'accueil de l'application Cr0ss-iT"
                  : 'Cr0ss-iT application home screen'
              }
              loading="lazy"
            />
            <figcaption>
              {fr
                ? "L'écran d'accueil de Cr0ss-iT"
                : 'The Cr0ss-iT home screen'}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FEATURES */}

      <section className="crossit-section crossit-features">
        <div className="crossit-container">
          <div className="crossit-centered">
            <span className="crossit-eyebrow">
              02 / {fr ? 'LES FONCTIONNALITÉS' : 'FEATURES'}
            </span>

            <h2>
              {fr
                ? 'Une application pour chaque étape'
                : 'An application for every stage'}
            </h2>

            <p>
              {fr
                ? "Les principales fonctionnalités ont été pensées autour du déroulement d'un événement sportif."
                : 'The main features are organized around the different stages of a sporting event.'}
            </p>
          </div>

          <div className="crossit-feature-grid">
            {features.map((feature) => (
              <article
                className="crossit-feature-card"
                key={feature.number}
              >
                <span className="crossit-feature-number">
                  {feature.number}
                </span>

                <h3>{feature.title[lang]}</h3>
                <p>{feature.description[lang]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}

      <section className="crossit-section crossit-gallery">
        <div className="crossit-container">
          <div className="crossit-centered">
            <span className="crossit-eyebrow">
              03 / {fr ? "L'APPLICATION" : 'THE APPLICATION'}
            </span>

            <h2>
              {fr
                ? "Un aperçu de l'interface"
                : 'A look at the interface'}
            </h2>

            <p>
              {fr
                ? "Découvrez les différentes étapes de gestion d'une course dans Cr0ss-iT."
                : 'Explore the different stages of race management in Cr0ss-iT.'}
            </p>
          </div>

          <div className="crossit-gallery-grid">
            {screenshots.map((screenshot) => (
              <figure
                className="crossit-screenshot"
                key={screenshot.src}
              >
                <div className="crossit-screenshot-image">
                  <img
                    src={screenshot.src}
                    alt={screenshot.title[lang]}
                    loading="lazy"
                  />
                </div>

                <figcaption>
                  <strong>{screenshot.title[lang]}</strong>
                  <span>{screenshot.description[lang]}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL APPROACH */}

      <section className="crossit-section crossit-technical">
        <div className="crossit-container">
          <div className="crossit-technical-grid">
            <div>
              <span className="crossit-eyebrow">
                04 / {fr ? 'LA PARTIE TECHNIQUE' : 'TECHNICAL APPROACH'}
              </span>

              <h2>
                {fr
                  ? 'Du code à une application utilisable'
                  : 'From code to a usable application'}
              </h2>

              <p>
                {fr
                  ? "Le projet repose sur Python et Pygame pour construire une application avec une interface graphique. Il combine la gestion des données des participants avec des fonctionnalités liées au déroulement des courses."
                  : 'The project uses Python and Pygame to build an application with a graphical interface. It combines participant data management with features supporting race operations.'}
              </p>

              <p>
                {fr
                  ? "L'importation de fichiers CSV et l'utilisation des QR codes permettent d'intégrer des données et d'accompagner le suivi des participants."
                  : 'CSV imports and QR codes help integrate data and support participant tracking.'}
              </p>
            </div>

            <div className="crossit-tech-list">
              <div>
                <span>01</span>
                <div>
                  <h3>Python</h3>
                  <p>
                    {fr
                      ? "Logique et fonctionnalités de l'application"
                      : 'Application logic and features'}
                  </p>
                </div>
              </div>

              <div>
                <span>02</span>
                <div>
                  <h3>Pygame</h3>
                  <p>
                    {fr
                      ? 'Interface graphique et interactions'
                      : 'Graphical interface and interactions'}
                  </p>
                </div>
              </div>

              <div>
                <span>03</span>
                <div>
                  <h3>CSV</h3>
                  <p>
                    {fr
                      ? 'Importation des données'
                      : 'Data import'}
                  </p>
                </div>
              </div>

              <div>
                <span>04</span>
                <div>
                  <h3>QR Codes</h3>
                  <p>
                    {fr
                      ? 'Identification et suivi des participants'
                      : 'Participant identification and tracking'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}

      <section className="crossit-closing">
        <div className="crossit-container crossit-centered">
          <span className="crossit-eyebrow">
            05 / {fr ? 'EN SAVOIR PLUS' : 'LEARN MORE'}
          </span>

          <h2>
            {fr
              ? 'Découvrir Cr0ss-iT sur GitHub'
              : 'Explore Cr0ss-iT on GitHub'}
          </h2>

          <p>
            {fr
              ? 'Retrouvez le code source et les informations complémentaires du projet dans son dépôt GitHub.'
              : 'Find the source code and additional project information in its GitHub repository.'}
          </p>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="crossit-button crossit-button-primary"
          >
            {fr ? 'Accéder au dépôt' : 'Open repository'}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  )
}
