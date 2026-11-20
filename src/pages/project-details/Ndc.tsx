
import { Link } from 'react-router-dom'
import { useLanguage } from '../../LanguageContext'
import './Ndc.css'

type Lang = 'fr' | 'en'
type Localized = Record<Lang, string>

const githubUrl = 'https://github.com/xxaishs21/Nuit-du-code-2024'
const imagePath = '/images/projects/ndc/'

const features: {
  number: string
  title: Localized
  description: Localized
  image: string
}[] = [
  {
    number: '01',
    title: {
      fr: 'Explorer les profondeurs',
      en: 'Explore the depths',
    },
    description: {
      fr: "Déplacez Thomas avec les flèches directionnelles et creusez progressivement vers le centre de la planète Sylva.",
      en: 'Move Thomas using the arrow keys and dig progressively toward the center of planet Sylva.',
    },
    image: 'gameplay.png',
  },
  {
    number: '02',
    title: {
      fr: 'Miner et collecter',
      en: 'Mine and collect',
    },
    description: {
      fr: "Cliquez sur les blocs accessibles pour les détruire et récupérer de l'or. Les différents minerais nécessitent des outils adaptés.",
      en: 'Click accessible blocks to break them and collect gold. Different minerals require suitable tools.',
    },
    image: 'blocs.png',
  },
  {
    number: '03',
    title: {
      fr: 'Améliorer sa pioche',
      en: 'Upgrade your pickaxe',
    },
    description: {
      fr: "Utilisez l'or collecté pour améliorer votre morpho-pioche et accéder à des matériaux plus résistants.",
      en: 'Spend collected gold to upgrade your morphing pickaxe and access tougher materials.',
    },
    image: 'pioche-fer.png',
  },
  {
    number: '04',
    title: {
      fr: 'Trouver le trésor',
      en: 'Find the treasure',
    },
    description: {
      fr: "Progressez jusqu'au coffre caché dans les profondeurs, en évitant les blocs d'Eternium, qui sont incassables.",
      en: 'Reach the treasure chest hidden underground while avoiding unbreakable Eternium blocks.',
    },
    image: 'eternium.png',
  },
]

const challenges: {
  number: string
  title: Localized
  description: Localized
}[] = [
  {
    number: '01',
    title: {
      fr: 'Défilement vertical du monde',
      en: 'Vertical world scrolling',
    },
    description: {
      fr: "L'un des défis majeurs a été de déplacer le décor à l'écran tout en conservant le personnage à une position fixe. Cette mécanique nous a demandé environ deux heures de travail.",
      en: 'One of our biggest challenges was scrolling the world while keeping the character at a fixed screen position. This mechanic took us about two hours to implement.',
    },
  },
  {
    number: '02',
    title: {
      fr: 'Contraintes graphiques',
      en: 'Graphical constraints',
    },
    description: {
      fr: "La palette de couleurs limitée de Pyxel nous a obligés à réfléchir à la lisibilité de l'interface et à la différenciation des blocs.",
      en: "Pyxel's limited color palette challenged us to make the interface readable and distinguish the different blocks.",
    },
  },
  {
    number: '03',
    title: {
      fr: 'Gestion du temps',
      en: 'Time management',
    },
    description: {
      fr: "Nous avons privilégié les mécaniques essentielles du jeu. Un écran d'accueil, des sons et un système de durabilité des blocs faisaient partie des améliorations envisagées.",
      en: 'We prioritized the essential gameplay mechanics. A start screen, sounds, and block durability were among the improvements we had planned.',
    },
  },
]

const controls: {
  key: string
  description: Localized
}[] = [
  {
    key: '↑ ↓ ← →',
    description: {
      fr: 'Déplacer le personnage',
      en: 'Move the character',
    },
  },
  {
    key: 'CLICK',
    description: {
      fr: 'Miner les blocs accessibles',
      en: 'Mine accessible blocks',
    },
  },
  {
    key: 'P',
    description: {
      fr: 'Mettre en pause / reprendre',
      en: 'Pause / resume',
    },
  },
  {
    key: 'R',
    description: {
      fr: 'Recommencer après la victoire',
      en: 'Restart after winning',
    },
  },
]

export default function Ndc() {
  const { language } = useLanguage()
  const lang: Lang = language === 'en' ? 'en' : 'fr'
  const fr = lang === 'fr'

  return (
    <main className="ndc-page">
      {/* HERO */}

      <section className="ndc-hero">
        <div className="ndc-container">
          <Link to="/projects" className="ndc-back">
            <span aria-hidden="true">←</span>
            {fr ? 'Retour aux projets' : 'Back to projects'}
          </Link>

          <div className="ndc-hero-grid">
            <div className="ndc-hero-content">
              <span className="ndc-eyebrow">
                NUIT DU CODE · 2024
              </span>

              <h1>
                Finding a <span>Treasure</span> in the Void
              </h1>

              <p className="ndc-hero-subtitle">
                Simulator
              </p>

              <p className="ndc-hero-description">
                {fr
                  ? "Un jeu d'exploration et de minage en pixel art, développé en équipe avec Python et Pyxel pendant la Nuit du Code 2024."
                  : 'A pixel-art exploration and mining game developed as a team using Python and Pyxel during Nuit du Code 2024.'}
              </p>

              <div className="ndc-tags">
                <span>Python</span>
                <span>Pyxel</span>
                <span>Pixel Art</span>
                <span>Game Development</span>
              </div>

              <div className="ndc-actions">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ndc-button ndc-button-primary"
                >
                  {fr ? 'Voir sur GitHub' : 'View on GitHub'}
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="#ndc-story"
                  className="ndc-button ndc-button-secondary"
                >
                  {fr ? 'Découvrir le jeu' : 'Explore the game'}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="ndc-hero-visual">
              <div className="ndc-game-window">
                <div className="ndc-window-top">
                  <div className="ndc-window-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span>SYLVA.EXE</span>
                  <span>2024</span>
                </div>

                <img
                  src={`${imagePath}gameplay.png`}
                  alt={
                    fr
                      ? 'Capture du jeu montrant Thomas dans les profondeurs de Sylva'
                      : 'Game screenshot showing Thomas underground on Sylva'
                  }
                />
              </div>

              <div className="ndc-visual-caption">
                <span className="ndc-pixel-star">✦</span>
                {fr
                  ? 'UNE AVENTURE SOUS LA SURFACE'
                  : 'AN ADVENTURE BELOW THE SURFACE'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}

      <section className="ndc-section ndc-story" id="ndc-story">
        <div className="ndc-container ndc-narrow">
          <span className="ndc-eyebrow">
            01 / {fr ? "L'HISTOIRE" : 'THE STORY'}
          </span>

          <h2>
            {fr
              ? 'Un trésor caché au cœur de Sylva'
              : 'A hidden treasure at the heart of Sylva'}
          </h2>

          <p>
            {fr
              ? "Thomas est un explorateur qui arrive sur la planète Sylva après avoir entendu parler d'un trésor mystérieux caché dans ses profondeurs. Armé de sa morpho-pioche, il entreprend de creuser à travers différentes couches de minerais."
              : 'Thomas is an explorer who arrives on planet Sylva after hearing rumors of a mysterious treasure hidden deep underground. Armed with his morphing pickaxe, he begins digging through layers of minerals.'}
          </p>

          <p>
            {fr
              ? "Pour progresser, il doit récupérer de l'or, améliorer son outil et apprendre à reconnaître les blocs qu'il peut miner. Son objectif final : atteindre le coffre et découvrir ce que cache la planète."
              : 'To progress, he must collect gold, upgrade his tool, and learn which blocks he can mine. His final objective is to reach the chest and discover what the planet is hiding.'}
          </p>

          <div className="ndc-quote">
            <span aria-hidden="true">✦</span>
            <p>
              {fr
                ? 'Jusqu’où devrez-vous creuser pour découvrir le trésor ?'
                : 'How deep will you have to dig to discover the treasure?'}
            </p>
          </div>
        </div>
      </section>

      
{/* GAMEPLAY */}

<section className="ndc-section ndc-gameplay">
  <div className="ndc-container">
    <div className="ndc-centered">
      <span className="ndc-eyebrow">
        02 / {fr ? 'LE GAMEPLAY' : 'GAMEPLAY'}
      </span>

      <h2>
        {fr
          ? 'Creuser. Collecter. Améliorer.'
          : 'Dig. Collect. Upgrade.'}
      </h2>

      <p>
        {fr
          ? "Une aventure où chaque couche de la planète réserve de nouvelles découvertes."
          : 'An adventure where every layer of the planet brings new discoveries.'}
      </p>
    </div>

    {/* MAIN GAMEPLAY SHOWCASE */}

    <div className="ndc-gameplay-showcase">
      <div className="ndc-showcase-image">
        <img
          src={`${imagePath}gameplay.png`}
          alt={
            fr
              ? 'Capture du jeu montrant les différentes couches de la planète Sylva'
              : 'Screenshot showing the different underground layers of planet Sylva'
          }
          loading="lazy"
        />
      </div>

      <div className="ndc-showcase-content">
        <span className="ndc-showcase-label">
          <span aria-hidden="true">✦</span>
          01 — GAMEPLAY
        </span>

        <h3>
          {fr
            ? 'Explorer les profondeurs'
            : 'Explore the depths'}
        </h3>

        <p>
          {fr
            ? "Accompagnez Thomas dans son exploration de la planète Sylva. Déplacez-vous à travers les galeries, creusez les blocs accessibles et progressez toujours plus profondément à la recherche du trésor."
            : 'Join Thomas as he explores planet Sylva. Navigate underground passages, mine accessible blocks, and venture deeper in search of the hidden treasure.'}
        </p>

        <div className="ndc-showcase-tags">
          <span>{fr ? 'Exploration' : 'Exploration'}</span>
          <span>{fr ? 'Plateforme' : 'Platforming'}</span>
          <span>Pixel Art</span>
        </div>
      </div>
    </div>

    {/* THREE GAMEPLAY MECHANICS */}

    <div className="ndc-mechanics-grid">
      <article className="ndc-mechanic-card">
        <div className="ndc-mechanic-image">
          <img
            src={`${imagePath}blocs.png`}
            alt={fr ? 'Différents blocs du jeu' : 'Different game blocks'}
            loading="lazy"
          />
        </div>

        <div className="ndc-mechanic-content">
          <span className="ndc-mechanic-number">02</span>
          <h3>{fr ? 'Miner' : 'Mine'}</h3>
          <p>
            {fr
              ? "Détruire les blocs accessibles et collecter de l'or."
              : 'Break accessible blocks and collect gold.'}
          </p>
        </div>
      </article>

      <article className="ndc-mechanic-card">
        <div className="ndc-mechanic-image">
          <img
            src={`${imagePath}pioche-fer.png`}
            alt={fr ? 'Pioche du jeu' : 'Game pickaxe'}
            loading="lazy"
          />
        </div>

        <div className="ndc-mechanic-content">
          <span className="ndc-mechanic-number">03</span>
          <h3>{fr ? 'Améliorer' : 'Upgrade'}</h3>
          <p>
            {fr
              ? 'Faire évoluer la morpho-pioche pour miner des matériaux plus résistants.'
              : 'Upgrade the morphing pickaxe to mine tougher materials.'}
          </p>
        </div>
      </article>

      <article className="ndc-mechanic-card">
        <div className="ndc-mechanic-image">
          <img
            src={`${imagePath}eternium.png`}
            alt={fr ? "Bloc d'Eternium" : 'Eternium block'}
            loading="lazy"
          />
        </div>

        <div className="ndc-mechanic-content">
          <span className="ndc-mechanic-number">04</span>
          <h3>{fr ? 'Découvrir' : 'Discover'}</h3>
          <p>
            {fr
              ? "Contourner les blocs d'Eternium incassables pour atteindre le trésor caché."
              : 'Navigate around unbreakable Eternium blocks to reach the hidden treasure.'}
          </p>
        </div>
      </article>
    </div>
  </div>
</section>


      {/* CONTROLS */}

      <section className="ndc-section ndc-controls-section">
        <div className="ndc-container">
          <div className="ndc-controls-grid">
            <div>
              <span className="ndc-eyebrow">
                03 / {fr ? 'COMMENT JOUER' : 'HOW TO PLAY'}
              </span>

              <h2>
                {fr
                  ? 'Prenez votre pioche !'
                  : 'Grab your pickaxe!'}
              </h2>

              <p>
                {fr
                  ? "Le jeu combine des déplacements au clavier et des interactions à la souris. L'objectif est d'atteindre les couches les plus profondes en améliorant progressivement son équipement."
                  : 'The game combines keyboard movement with mouse interactions. The goal is to reach the deepest layers while progressively upgrading your equipment.'}
              </p>

              <div className="ndc-mineral-note">
                <img
                  src={`${imagePath}obsidienne.png`}
                  alt="Obsidienne"
                  loading="lazy"
                />
                <p>
                  {fr
                    ? "Certains blocs, comme l'obsidienne, nécessitent une pioche suffisamment améliorée."
                    : 'Some blocks, such as obsidian, require a sufficiently upgraded pickaxe.'}
                </p>
              </div>
            </div>

            <div className="ndc-controls-card">
              <div className="ndc-controls-title">
                <span className="ndc-status-dot" />
                CONTROLS
              </div>

              {controls.map((control) => (
                <div className="ndc-control" key={control.key}>
                  <kbd>{control.key}</kbd>
                  <span>{control.description[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT */}

      <section className="ndc-section ndc-development">
        <div className="ndc-container">
          <div className="ndc-centered">
            <span className="ndc-eyebrow">
              04 / {fr ? 'LE DÉVELOPPEMENT' : 'DEVELOPMENT'}
            </span>

            <h2>
              {fr
                ? 'Créer un monde avec Pyxel'
                : 'Building a world with Pyxel'}
            </h2>

            <p>
              {fr
                ? "Nous avons développé le jeu en Python en utilisant Pyxel, un moteur adapté aux jeux rétro. La carte, les déplacements, les interactions et les graphismes sont gérés par notre programme."
                : 'We developed the game in Python using Pyxel, a retro game engine. Our program manages the map, movement, interactions, and graphics.'}
            </p>
          </div>

          <div className="ndc-tech-grid">
            <div className="ndc-tech-card">
              <span>01</span>
              <h3>Python</h3>
              <p>
                {fr
                  ? 'Logique du jeu, classes et gestion des interactions.'
                  : 'Game logic, classes, and interaction handling.'}
              </p>
            </div>

            <div className="ndc-tech-card">
              <span>02</span>
              <h3>Pyxel</h3>
              <p>
                {fr
                  ? 'Affichage, contrôles et boucle de jeu.'
                  : 'Rendering, controls, and game loop.'}
              </p>
            </div>

            <div className="ndc-tech-card">
              <span>03</span>
              <h3>Pixel Art</h3>
              <p>
                {fr
                  ? 'Création des blocs, des outils et des éléments graphiques.'
                  : 'Creation of blocks, tools, and visual assets.'}
              </p>
            </div>
          </div>

          <div className="ndc-challenges">
            <div className="ndc-challenges-heading">
              <span className="ndc-eyebrow">
                {fr ? 'DÉFIS RENCONTRÉS' : 'CHALLENGES'}
              </span>
              <h3>
                {fr
                  ? 'Les contraintes font partie du jeu'
                  : 'Challenges are part of the game'}
              </h3>
            </div>

            {challenges.map((challenge) => (
              <article className="ndc-challenge" key={challenge.number}>
                <span>{challenge.number}</span>
                <div>
                  <h4>{challenge.title[lang]}</h4>
                  <p>{challenge.description[lang]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}

      <section className="ndc-section ndc-team">
        <div className="ndc-container">
          <div className="ndc-team-grid">
            <div>
              <span className="ndc-eyebrow">
                05 / {fr ? 'LE CONCOURS' : 'THE COMPETITION'}
              </span>

              <h2>La Nuit du Code 2024</h2>

              <p>
                {fr
                  ? "Ce projet a été réalisé en équipe dans le cadre de la Nuit du Code 2024, un événement de programmation consacré à la création de jeux vidéo."
                  : 'This project was created as a team during Nuit du Code 2024, a programming event focused on video game development.'}
              </p>

              <div className="ndc-team-members">
                <span className="ndc-team-label">
                  {fr ? 'ÉQUIPE R.S.A.' : 'TEAM R.S.A.'}
                </span>
                <strong>Raees Badat</strong>
                <strong>Sania Mattan</strong>
                <strong>Assim Aly</strong>
              </div>

              <p className="ndc-team-reflection">
                {fr
                  ? "Nous avons choisi un jeu d'exploration et de minage pour nous confronter à des contraintes techniques et graphiques, tout en ayant la liberté de concevoir notre propre univers."
                  : 'We chose an exploration and mining game to challenge ourselves with technical and graphical constraints while having the freedom to design our own world.'}
              </p>
            </div>

            <div className="ndc-event-visual">
              <img
                src={`${imagePath}nuit-du-code.jpg`}
                alt="Nuit du Code"
                loading="lazy"
              />

              <div className="ndc-event-logos">
                <img
                  src={`${imagePath}lycee-la-bourdonnais.jpg`}
                  alt="Lycée La Bourdonnais"
                  loading="lazy"
                />
                <img
                  src={`${imagePath}french-tech-mauritius.jpg`}
                  alt="La French Tech Mauritius"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}

      <section className="ndc-closing">
        <div className="ndc-container ndc-centered">
          <span className="ndc-eyebrow">
            06 / {fr ? 'LE CODE SOURCE' : 'SOURCE CODE'}
          </span>

          <h2>
            {fr
              ? "L'aventure continue sur GitHub"
              : 'The adventure continues on GitHub'}
          </h2>

          <p>
            {fr
              ? "Retrouvez le code Python et les ressources du jeu dans le dépôt GitHub du projet."
              : 'Explore the Python source code and game assets in the project repository.'}
          </p>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ndc-button ndc-button-primary"
          >
            {fr ? 'Voir le projet sur GitHub' : 'View project on GitHub'}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  )
}
