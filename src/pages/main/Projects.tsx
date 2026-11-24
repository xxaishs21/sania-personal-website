
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../LanguageContext'
import './Projects.css'

type Category = 'development' | 'engineering' | 'creative'
type Filter = 'all' | Category

type Project = {
  id: number
  category: Category
  icon: string
  image: string
  titleFr: string
  titleEn: string
  descriptionFr: string
  descriptionEn: string
  technologies: string[]
  path?: string
  github?: string
  demo?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    category: 'development',
    icon: '🏃',
    image: '/images/projects/cross-it.png',
    titleFr: 'Cr0ss_iT',
    titleEn: 'Cr0ss_iT',
    descriptionFr:
      "Une application de gestion d'événements sportifs : inscriptions, QR codes, chronométrage et résultats des courses.",
    descriptionEn:
      'A sports event management application featuring registrations, QR codes, race timing and results.',
    technologies: ['Python', 'Pygame', 'QR Code', 'Base de données'],
    github: 'https://github.com/RB-2804/Cr0ss-iT',
    featured: true,
    path: '/projects/cross-it',
  },
  {
    id: 2,
    category: 'development',
    icon: '🎬',
    image: '/images/projects/cinapple.png',
    titleFr: 'Cinapple',
    titleEn: 'Cinapple',
    descriptionFr:
      'Une application de recommandation de films utilisant des algorithmes de machine learning implémentés en Python.',
    descriptionEn:
      'A movie recommendation application using machine learning algorithms implemented in Python.',
    technologies: ['Python', 'Streamlit', 'KNN', 'K-means', 'ID3'],
    path: '/projects/Cinapple',
    github: 'https://github.com/xxaishs21/Cinapple',
  },
  {
    id: 3,
    category: 'engineering',
    icon: '🕸️',
    image: '/images/projects/opti-recom2.png',
    titleFr: 'Opti-recom',
    titleEn: 'Opti-recom',
    descriptionFr:
      "Un système de recommandation d'amis fondé sur l'analyse de graphes et la comparaison de différentes stratégies.",
    descriptionEn:
      'A friend recommendation system based on graph analysis and comparisons between recommendation strategies.',
    technologies: ['Python', 'NetworkX', 'Graphes', 'Algorithmes'],
    path: '/projects/opti-recom',
    github: 'https://github.com/xxaishs21/Opti-recom',
  },
  {
    id: 4,
    category: 'development',
    icon: '☕',
    image: '/images/projects/queuecup.jpg',
    titleFr: 'QueueCup',
    titleEn: 'QueueCup',
    descriptionFr:
      "Une application de café imaginée autour d'un marché où les prix évoluent selon la demande. Un projet développé en équipe.",
    descriptionEn:
      'A café application designed around a market where prices respond to demand. A collaborative project.',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    path: '/projects/queuecup',
    github: 'https://github.com/Joyswaria/QueueCup',
    featured: true,
  },
  {
    id: 5,
    category: 'creative',
    icon: '🎮',
    image: '/images/projects/ndc/gameplay.png',
    titleFr: 'Nuit du Code 2024',
    titleEn: 'Nuit du Code 2024',
    descriptionFr:
      "Finding a Treasure in the Void : un jeu d'exploration et de minage en pixel art, développé en équipe pendant la Nuit du Code.",
    descriptionEn:
      'Finding a Treasure in the Void: a pixel-art exploration and mining game developed as a team during Nuit du Code.',
    technologies: ['Python', 'Pyxel', 'Game Development'],
    github: 'https://github.com/xxaishs21/Nuit-du-code-2024',
    path: '/projects/ndc',
  },
  {
    id: 6,
    category: 'creative',
    icon: '🌊',
    image: '/images/projects/rodrigues1.png',
    titleFr: "Les Assises de l'Eau — Rodrigues",
    titleEn: 'Water Forum — Rodrigues',
    descriptionFr:
      "Une expérience éducative à Rodrigues consacrée aux enjeux de l'eau, à l'environnement et à la sensibilisation.",
    descriptionEn:
      'An educational experience in Rodrigues focused on water challenges, environmental issues and awareness.',
    technologies: ['Environnement', 'Recherche', 'Présentation'],
    path: '/projects/rodrigues-water',
  },
]

function ProjectVisual({
  src,
  icon,
  title,
  category,
}: {
  src: string
  icon: string
  title: string
  category: Category
}) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <div className={`projects-visual projects-visual-${category}`}>
      {!loaded && (
        <div className="projects-visual-fallback">
          <span aria-hidden="true">{icon}</span>
          <span>{title}</span>
        </div>
      )}

      {!failed && (
        <img
          src={src}
          alt={title}
          className={loaded ? 'projects-image-loaded' : ''}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export default function Projects() {
  const { language } = useLanguage()
  const fr = language === 'fr'
  const [filter, setFilter] = useState<Filter>('all')

  const filters: { value: Filter; label: string }[] = [
    { value: 'all', label: fr ? 'Tous les projets' : 'All projects' },
    {
      value: 'development',
      label: fr ? 'Développement' : 'Development',
    },
    {
      value: 'engineering',
      label: fr ? 'Ingénierie' : 'Engineering',
    },
    {
      value: 'creative',
      label: fr ? 'Créatif' : 'Creative',
    },
  ]

  const categoryLabels: Record<Category, string> = {
    development: fr ? 'Développement' : 'Development',
    engineering: fr ? 'Ingénierie' : 'Engineering',
    creative: fr ? 'Créatif' : 'Creative',
  }

  const visibleProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter)

  return (
    <main className="projects-page">
      {/* INTRODUCTION */}

      <header className="projects-intro">
        <p className="projects-eyebrow">
          {fr ? 'MES RÉALISATIONS ✧' : 'MY WORK ✧'}
        </p>

        <h1>{fr ? 'Mes projets' : 'My Projects'}</h1>

        <p className="projects-intro-description">
          {fr
            ? "Des idées, du code et beaucoup de curiosité. Découvrez un aperçu de ce que j'aime imaginer et construire."
            : 'Ideas, code, and plenty of curiosity. Explore a glimpse of what I love to imagine and build.'}
        </p>
      </header>

      {/* PROJECT GALLERY */}

      <section className="projects-gallery-section">
        <div className="projects-gallery-heading">
          <p className="projects-eyebrow">
            {fr ? 'EXPLORER ✧' : 'EXPLORE ✧'}
          </p>

          <h2>
            {fr ? 'Quelques réalisations' : 'Selected Work'}
          </h2>

          <p>
            {fr
              ? 'Une collection de projets techniques et créatifs.'
              : 'A collection of technical and creative projects.'}
          </p>
        </div>

        {/* FILTERS */}

        <div
          className="projects-filters"
          role="group"
          aria-label={fr ? 'Filtrer les projets' : 'Filter projects'}
        >
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`projects-filter ${
                filter === item.value ? 'projects-filter-active' : ''
              }`}
              aria-pressed={filter === item.value}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* PROJECT CARDS */}

        <div className="projects-grid">
          {visibleProjects.map((project) => {
            const title = fr ? project.titleFr : project.titleEn
            const description = fr
              ? project.descriptionFr
              : project.descriptionEn

            const cardDestination = project.path || project.github

            return (
              <article
                className={`projects-card ${
                  project.featured ? 'projects-card-featured' : ''
                }`}
                key={project.id}
              >
                {/* CLICKABLE CARD OVERLAY */}

                {cardDestination &&
                  (project.path ? (
                    <Link
                      to={project.path}
                      className="projects-card-overlay"
                      aria-label={`${fr ? 'Voir le projet' : 'View project'} : ${title}`}
                    />
                  ) : (
                    <a
                      href={cardDestination}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects-card-overlay"
                      aria-label={`${fr ? 'Voir le projet sur GitHub' : 'View project on GitHub'} : ${title}`}
                    />
                  ))}

                {/* PROJECT IMAGE */}

                <div className="projects-card-image">
                  <ProjectVisual
                    key={project.image}
                    src={project.image}
                    icon={project.icon}
                    title={title}
                    category={project.category}
                  />

                  {project.featured && (
                    <span className="projects-featured-badge">
                      ✦ {fr ? 'À la une' : 'Featured'}
                    </span>
                  )}
                </div>

                {/* CARD CONTENT */}

                <div className="projects-card-content">
                  <p className="projects-category">
                    {categoryLabels[project.category]}
                  </p>

                  <h3>{title}</h3>

                  <p className="projects-card-description">
                    {description}
                  </p>

                  <div className="projects-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  {/* CARD LINKS */}

                  <div className="projects-card-links">
                    {project.path && (
                      <Link
                        to={project.path}
                        className="projects-card-primary-link"
                      >
                        {fr ? 'Voir le projet →' : 'View project →'}
                      </Link>
                    )}

                    {project.demo && (
                      <Link
                        to={project.demo}
                        className="projects-card-demo-link"
                      >
                        {fr
                          ? "Essayer l'application ↗"
                          : 'Try the application ↗'}
                      </Link>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* PROJECT COUNT */}

        <p className="projects-count" aria-live="polite">
          {fr
            ? `${visibleProjects.length} projet${
                visibleProjects.length > 1 ? 's' : ''
              } affiché${visibleProjects.length > 1 ? 's' : ''}`
            : `${visibleProjects.length} project${
                visibleProjects.length > 1 ? 's' : ''
              } shown`}
        </p>
      </section>

      {/* CLOSING */}

      <section className="projects-closing-section">
        <div className="projects-closing-content">
          <p className="projects-eyebrow">
            {fr ? 'TOUJOURS EN CRÉATION ✧' : 'ALWAYS CREATING ✧'}
          </p>

          <h2>
            {fr
              ? 'Et ce n’est que le début'
              : 'And this is only the beginning'}
          </h2>

          <p>
            {fr
              ? "J'aime apprendre en expérimentant, ça permet de voir et de comprendre réellement les choses."
              : 'I love learning by experimenting, and every new project is an opportunity to grow.'}
          </p>

          <a
            href="https://github.com/xxaishs21"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-github-button"
          >
            {fr ? 'Découvrir mon GitHub ↗' : 'Explore my GitHub ↗'}
          </a>
        </div>
      </section>
    </main>
  )
}
