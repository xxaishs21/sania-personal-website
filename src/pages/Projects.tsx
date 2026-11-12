
import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
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
  github?: string
  demo?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    category: 'development',
    icon: '💻',
    image: '/images/projects/portfolio.jpg',
    titleFr: 'Mon portfolio personnel',
    titleEn: 'My personal portfolio',
    descriptionFr:
      'Un site web personnel imaginé pour présenter mon univers, mon parcours et mes réalisations.',
    descriptionEn:
      'A personal website designed to showcase my world, my journey, and my work.',
    technologies: ['React', 'TypeScript', 'CSS', 'Vite'],
    featured: true,
  },
  {
    id: 2,
    category: 'engineering',
    icon: '🔧',
    image: '/images/projects/embedded.jpg',
    titleFr: 'Projet de systèmes embarqués',
    titleEn: 'Embedded systems project',
    descriptionFr:
      'Un emplacement pour présenter un projet technique autour des microcontrôleurs et de la programmation embarquée.',
    descriptionEn:
      'A placeholder for a technical project involving microcontrollers and embedded programming.',
    technologies: ['C', 'STM32', 'GPIO'],
  },
  {
    id: 3,
    category: 'development',
    icon: '🖥️',
    image: '/images/projects/application.jpg',
    titleFr: 'Application logicielle',
    titleEn: 'Software application',
    descriptionFr:
      'Un emplacement pour une application développée dans le cadre de mes études ou de mes projets personnels.',
    descriptionEn:
      'A placeholder for an application developed during my studies or as a personal project.',
    technologies: ['Python', 'Git'],
  },
  {
    id: 4,
    category: 'creative',
    icon: '🎀',
    image: '/images/projects/journaling.jpg',
    titleFr: 'Créations & journaling',
    titleEn: 'Creative projects & journaling',
    descriptionFr:
      'Un espace pour partager mes créations personnelles, mes carnets et mes idées créatives.',
    descriptionEn:
      'A space to share personal creations, journals, and creative ideas.',
    technologies: ['Design', 'Créativité'],
  },
  {
    id: 5,
    category: 'engineering',
    icon: '⚡',
    image: '/images/projects/electronics.jpg',
    titleFr: 'Conception numérique',
    titleEn: 'Digital design',
    descriptionFr:
      'Un emplacement pour mettre en valeur un projet de logique numérique ou de conception de circuits.',
    descriptionEn:
      'A placeholder for a project involving digital logic or circuit design.',
    technologies: ['Logique numérique', 'Électronique'],
  },
  {
    id: 6,
    category: 'creative',
    icon: '✨',
    image: '/images/projects/personal.jpg',
    titleFr: 'Projet créatif personnel',
    titleEn: 'Personal creative project',
    descriptionFr:
      'Un emplacement libre pour une idée, une création ou une réalisation que je souhaite partager.',
    descriptionEn:
      'An open space for an idea, a creation, or something I would like to share.',
    technologies: ['Créativité', 'Projet personnel'],
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
            : "Ideas, code, and plenty of curiosity. Explore a glimpse of what I love to imagine and build."}
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

        {/* INTERACTIVE FILTERS */}
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

        <div className="projects-grid">
          {visibleProjects.map((project) => {
            const title = fr ? project.titleFr : project.titleEn
            const description = fr
              ? project.descriptionFr
              : project.descriptionEn

            return (
              <article
                className={`projects-card ${
                  project.featured ? 'projects-card-featured' : ''
                }`}
                key={project.id}
              >
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

                  {(project.github || project.demo) && (
                    <div className="projects-card-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub ↗
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {fr ? 'Voir la démo ↗' : 'Live demo ↗'}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>

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
              ? "J'aime apprendre en expérimentant, et chaque nouveau projet est une occasion de progresser."
              : "I love learning by experimenting, and every new project is an opportunity to grow."}
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
