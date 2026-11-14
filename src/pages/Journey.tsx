
import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import './Journey.css'

type Localized = {
  fr: string
  en: string
}

type Highlight = {
  title: string
  result: Localized
  description: Localized
  image?: string
  crownX?: string
  crownY?: string
}

type TimelineEntry = {
  id: string
  date: string
  title: Localized
  subtitle: Localized
  description: Localized
  learning?: Localized[]
  highlights?: Highlight[]
  mentions?: {
    title: string
    result: Localized
  }[]
}

const entries: TimelineEntry[] = [
  {
    id: 'centrale',
    date: '2026 — 2029',
    title: { fr: 'Centrale Nantes', en: 'Centrale Nantes' },
    subtitle: {
      fr: 'Cycle ingénieur SEC · Alternance chez Covéa / MMA',
      en: 'SEC engineering program · Covéa / MMA apprenticeship',
    },
    description: {
      fr: `J'ai rejoint Centrale Nantes en septembre 2026 pour poursuivre ma formation d'ingénieure en Systèmes Embarqués Communicants.
        Mon alternance chez Covéa / MMA me permet de découvrir le développement logiciel dans un environnement professionnel.`,

      en: `I joined Centrale Nantes in September 2026 to study Embedded and Connected Systems engineering.
        My apprenticeship at Covéa / MMA allows me to develop my software engineering skills.`,
    },
    learning: [
      {
        fr: 'Systèmes embarqués et microcontrôleurs',
        en: 'Embedded systems and microcontrollers',
      },
      {
        fr: 'Conception numérique',
        en: 'Digital design',
      },
      {
        fr: 'Développement logiciel en entreprise',
        en: 'Software development in industry',
      },
    ],
  },
  {
    id: 'prepa',
    date: '2024 — 2026',
    title: {
      fr: 'Classe préparatoire · Lycée Kléber',
      en: 'Preparatory classes · Lycée Kléber',
    },
    subtitle: {
      fr: 'Strasbourg, France',
      en: 'Strasbourg, France',
    },
    description: {
      fr: `La prépa m'a appris à aborder des problèmes complexes avec méthode, à approfondir mon raisonnement scientifique et à 
        travailler avec rigueur. C'était aussi une expérience humaine exigeante, qui m'a poussée à développer mon autonomie, ma 
        persévérance et ma capacité d'adaptation.`,
      en: `Preparatory classes taught me to approach complex problems methodically, deepen my scientific reasoning, and work rigorously. 
        It was also a demanding personal experience that helped me develop independence, perseverance, and adaptability.`,
    },
    learning: [
      {
        fr: 'Raisonnement mathématique et scientifique',
        en: 'Mathematical and scientific reasoning',
      },
      {
        fr: 'Résolution de problèmes complexes',
        en: 'Complex problem-solving',
      },
      {
        fr: 'Rigueur, organisation et gestion du temps',
        en: 'Rigor, organization, and time management',
      },
      {
        fr: 'Autonomie et persévérance',
        en: 'Independence and perseverance',
      },
    ],
  },
  {
    id: 'france',
    date: '2024',
    title: {
      fr: 'Un nouveau chapitre en France',
      en: 'A new chapter in France',
    },
    subtitle: {
      fr: 'Septembre 2024 · Départ de Maurice',
      en: 'September 2024 · Leaving Mauritius',
    },
    description: {
      fr: `Quitter l'île Maurice pour poursuivre mes études en France a marqué un tournant dans ma vie. Une nouvelle culture, 
        de nouvelles rencontres et beaucoup de découvertes : une étape qui m'a fait grandir autant personnellement qu'académiquement.`,
      en: `Leaving Mauritius to continue my studies in France marked a turning point in my life. A new culture, new people, and many 
        discoveries helped me grow both personally and academically.`,
    },
    learning: [
      {
        fr: 'Adaptation à un nouvel environnement',
        en: 'Adapting to a new environment',
      },
      {
        fr: 'Autonomie et ouverture culturelle',
        en: 'Independence and cultural openness',
      },
    ],
  },
  {
    id: 'awards-2024',
    date: '2024',
    title: {
      fr: 'Projets, concours et belles victoires',
      en: 'Projects, competitions, and achievements',
    },
    subtitle: {
      fr: 'Mes années lycée · Île Maurice',
      en: 'My school years · Mauritius',
    },
    description: {
      fr: `Les concours informatiques m'ont donné l'occasion de transformer des idées en projets, de collaborer en équipe et de me confronter à de nouveaux défis`,
      en: `Computing competitions gave me opportunities to turn ideas into projects, collaborate with teammates, and take on new challenges.`,
    },
    highlights: [
      {
        title: 'Cr0ss_iT · Trophées NSI 2024',
        result: {
          fr: "Lauréate internationale — Prix du Sport · Lauréate régionale — Prix de l'originalité",
          en: 'International winner — Sports Prize · Regional winner — Originality Prize',
        },
        description: {
          fr: 'Un même projet collaboratif récompensé à deux niveaux.',
          en: 'One collaborative project recognized at two levels.',
        },
        image: '/images/journey/nsi-2024.jpg',
        crownX: '50%',
        crownY: '19%',
      },
      {
        title: 'La Nuit du Code 2024',
        result: {
          fr: '1re place scolaire · Meilleur projet Terminale',
          en: '1st at school · Best final-year project',
        },
        description: {
          fr: 'Un projet de programmation réalisé en équipe.',
          en: 'A team programming project.',
        },
        image: '/images/journey/nuit-code-2024.jpg',
        crownX: '50%',
        crownY: '19%',
      },
    ],
    mentions: [
      {
        title: 'Concours Algoréa',
        result: {
          fr: 'Demi-finaliste nationale',
          en: 'National semifinalist',
        },
      },
      {
        title: 'Concours Castor Informatique',
        result: {
          fr: '2e place scolaire en binôme · 103e place mondiale',
          en: '2nd at school in a team of two · 103rd worldwide',
        },
      },
    ],
  },
  {
    id: 'awards-2023',
    date: '2023',
    title: {
      fr: 'Mes premières distinctions',
      en: 'My first awards',
    },
    subtitle: {
      fr: 'Les débuts de mon aventure informatique',
      en: 'The beginning of my computing journey',
    },
    description: {
      fr: "C'est pendant ces années que j'ai commencé à participer à des concours et à découvrir le plaisir de construire des projets informatiques avec d'autres.",
      en: "During these years, I began entering competitions and discovered how rewarding it could be to build computing projects with others.",
    },
    highlights: [
      {
        title: 'Trophées NSI 2023',
        result: {
          fr: 'Lauréate régionale · Meilleur projet Première',
          en: 'Regional winner · Best Première-year project',
        },
        description: {
          fr: 'Un projet informatique original développé en équipe.',
          en: 'An original computing project developed as a team.',
        },
        image: '/images/journey/nsi-2023.jpg',
        crownX: '50%',
        crownY: '19%',
      },
      {
        title: 'La Nuit du Code 2023',
        result: {
          fr: '1re place scolaire · Meilleur projet Première',
          en: '1st at school · Best Première-year project',
        },
        description: {
          fr: 'Une nouvelle expérience de création en équipe.',
          en: 'Another team-based creative coding experience.',
        },
        image: '/images/journey/nuit-code-2023.jpg',
        crownX: '50%',
        crownY: '19%',
      },
    ],
    mentions: [
      {
        title: 'Olympiades nationales de mathématiques',
        result: {
          fr: 'Copie sélectionnée pour le concours régional et distinguée',
          en: 'Selected for the regional competition and recognized',
        },
      },
    ],
  },
]

function AwardHighlight({
  award,
  fr,
}: {
  award: Highlight
  fr: boolean
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <article className="journey-highlight">
      {award.image && (
        <div
          className="journey-highlight-photo"
          style={
            {
              '--crown-x': award.crownX || '50%',
              '--crown-y': award.crownY || '19%',
            } as React.CSSProperties
          }
        >
          <div className="journey-photo-fallback">
            <span aria-hidden="true">♡</span>
            <small>{fr ? 'Photo à ajouter' : 'Photo coming soon'}</small>
          </div>

          <img
            src={award.image}
            alt={award.title}
            className={loaded ? 'journey-image-visible' : ''}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(false)}
          />

          {loaded && (
            <span className="journey-crown" aria-hidden="true">
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
        </div>
      )}

      <div className="journey-highlight-text">
        <span className="journey-highlight-label">
          ✧ {fr ? 'DISTINCTION' : 'AWARD'}
        </span>
        <h4>{award.title}</h4>
        <p className="journey-highlight-result">
          {fr ? award.result.fr : award.result.en}
        </p>
        <p>{fr ? award.description.fr : award.description.en}</p>
      </div>
    </article>
  )
}

export default function Journey() {
  const { language } = useLanguage()
  const fr = language === 'fr'

  return (
    <main className="journey-page">
      <header className="journey-hero">
        <p className="journey-eyebrow">THE STORY SO FAR ✧</p>
        <h1>{fr ? 'Mon parcours' : 'My Journey'}</h1>
        <p>
          {fr
            ? "Des découvertes, des défis, des rencontres et quelques jolies victoires. Voici les étapes qui m'ont construite."
            : 'Discoveries, challenges, new connections, and a few lovely victories. These are the chapters that shaped me.'}
        </p>
      </header>

      <section className="journey-timeline">
        {entries.map((entry, index) => (
          <article
            className={`journey-entry ${
              index % 2 === 0 ? 'journey-entry-left' : 'journey-entry-right'
            }`}
            key={entry.id}
          >
            <span className="journey-node" aria-hidden="true" />

            <div className="journey-card">
              <span className="journey-date">{entry.date}</span>
              <h2>{fr ? entry.title.fr : entry.title.en}</h2>
              <p className="journey-subtitle">
                {fr ? entry.subtitle.fr : entry.subtitle.en}
              </p>
              <p className="journey-description">
                {fr ? entry.description.fr : entry.description.en}
              </p>

              {entry.learning && (
                <div className="journey-learning">
                  <h3>
                    {fr
                      ? 'Ce que cette étape m’a apporté ✧'
                      : 'What I gained from this chapter ✧'}
                  </h3>
                  <div className="journey-tags">
                    {entry.learning.map((item) => (
                      <span key={item.fr}>
                        {fr ? item.fr : item.en}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {entry.highlights && (
                <div className="journey-highlights">
                  {entry.highlights.map((award) => (
                    <AwardHighlight
                      key={award.title}
                      award={award}
                      fr={fr}
                    />
                  ))}
                </div>
              )}

              {entry.mentions && (
                <div className="journey-mentions">
                  <h3>
                    {fr ? 'Également cette année' : 'Also this year'}
                  </h3>
                  {entry.mentions.map((mention) => (
                    <div className="journey-mention" key={mention.title}>
                      <span aria-hidden="true">✧</span>
                      <div>
                        <strong>{mention.title}</strong>
                        <p>
                          {fr ? mention.result.fr : mention.result.en}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
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
