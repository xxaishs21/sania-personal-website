
import { Link } from 'react-router-dom'
import { useLanguage } from '../../LanguageContext'
import './OptiRecom.css'

type NetworkNode = {
  id: number
  x: number
  y: number
  group: number
}

const nodes: NetworkNode[] = [
  { id: 0, x: 90, y: 65, group: 0 },
  { id: 1, x: 48, y: 120, group: 0 },
  { id: 2, x: 125, y: 145, group: 0 },
  { id: 3, x: 75, y: 195, group: 0 },
  { id: 4, x: 165, y: 80, group: 0 },
  { id: 5, x: 300, y: 65, group: 1 },
  { id: 6, x: 365, y: 115, group: 1 },
  { id: 7, x: 280, y: 160, group: 1 },
  { id: 8, x: 345, y: 205, group: 1 },
  { id: 9, x: 420, y: 165, group: 1 },
  { id: 10, x: 200, y: 255, group: 2 },
  { id: 11, x: 140, y: 315, group: 2 },
  { id: 12, x: 245, y: 330, group: 2 },
  { id: 13, x: 310, y: 290, group: 2 },
]

const edges: [number, number][] = [
  [0, 1], [0, 2], [0, 4], [1, 2], [1, 3],
  [2, 3], [2, 4], [5, 6], [5, 7], [5, 9],
  [6, 8], [6, 9], [7, 8], [7, 9], [8, 9],
  [10, 11], [10, 12], [10, 13],
  [11, 12], [12, 13],
  [4, 7], [3, 10], [7, 13],
]

const colors = ['#b989d1', '#75b6ca', '#e6a4bb']

function NetworkIllustration() {
  return (
    <svg
      viewBox="0 0 470 380"
      className="opti-network"
      role="img"
      aria-label="Illustration de trois communautés reliées par des connexions"
    >
      <defs>
        <linearGradient id="opti-line-gradient">
          <stop offset="0%" stopColor="#b989d1" />
          <stop offset="100%" stopColor="#75b6ca" />
        </linearGradient>
      </defs>

      {edges.map(([from, to], index) => (
        <line
          key={index}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="url(#opti-line-gradient)"
          strokeWidth="2"
          opacity="0.45"
        />
      ))}

      {nodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r="15"
            fill={colors[node.group]}
            opacity="0.15"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r="8"
            fill={colors[node.group]}
            stroke="white"
            strokeWidth="2"
          />
        </g>
      ))}
    </svg>
  )
}

export default function OptiRecom() {
  const { language } = useLanguage()
  const fr = language === 'fr'

  const objectives = [
    {
      number: '01',
      title: fr
        ? 'Modéliser les réseaux'
        : 'Model social networks',
      text: fr
        ? "Représenter les utilisateurs et leurs relations sous forme de graphes afin d'étudier la structure d'un réseau social."
        : 'Represent users and their relationships as graphs to study the structure of a social network.',
    },
    {
      number: '02',
      title: fr
        ? 'Comparer les recommandations'
        : 'Compare recommendations',
      text: fr
        ? "Étudier différentes stratégies fondées sur les relations d'amitié et la similarité des centres d'intérêt."
        : 'Study different strategies based on friendship connections and shared interests.',
    },
    {
      number: '03',
      title: fr
        ? 'Analyser les communautés'
        : 'Analyze communities',
      text: fr
        ? "Observer les effets des nouveaux liens sur la modularité, le coefficient de clustering et les cycles du graphe."
        : 'Observe how new connections affect modularity, clustering coefficients, and graph cycles.',
    },
    {
      number: '04',
      title: fr
        ? 'Introduire des probabilités'
        : 'Introduce probabilities',
      text: fr
        ? 'Explorer des approches probabilistes pour modéliser des comportements sociaux moins déterministes.'
        : 'Explore probabilistic approaches to model less deterministic social behavior.',
    },
  ]

  const concepts = [
    {
      icon: '◉',
      title: fr ? 'Théorie des graphes' : 'Graph theory',
      text: fr
        ? 'Les utilisateurs sont représentés par des sommets et leurs relations par des arêtes.'
        : 'Users are represented as vertices and their relationships as edges.',
    },
    {
      icon: '◇',
      title: fr ? 'Modularité' : 'Modularity',
      text: fr
        ? 'Une mesure permettant d’étudier la séparation du réseau en communautés.'
        : 'A measure used to study how a network is divided into communities.',
    },
    {
      icon: '◎',
      title: fr ? 'Clustering' : 'Clustering',
      text: fr
        ? 'Une mesure de la tendance des utilisateurs à former des groupes localement connectés.'
        : 'A measure of the tendency of users to form locally connected groups.',
    },
    {
      icon: '↗',
      title: fr ? 'Prédiction de liens' : 'Link prediction',
      text: fr
        ? 'Des stratégies pour identifier de nouvelles connexions pertinentes entre utilisateurs.'
        : 'Strategies for identifying relevant new connections between users.',
    },
  ]

  return (
    <main className="opti-page">
      {/* HERO */}
      <section className="opti-hero">
        <div className="opti-container">
          <Link to="/projects" className="opti-back">
            ← {fr ? 'Retour aux projets' : 'Back to projects'}
          </Link>

          <div className="opti-hero-grid">
            <div className="opti-hero-content">
              <p className="opti-eyebrow">
                {fr
                  ? 'PROJET INDIVIDUEL · ALGORITHMIQUE'
                  : 'INDIVIDUAL PROJECT · ALGORITHMS'}
              </p>

              <h1>Opti-recom</h1>

              <p className="opti-hero-subtitle">
                {fr
                  ? 'Optimisation des recommandations sur les réseaux sociaux'
                  : 'Optimizing recommendations in social networks'}
              </p>

              <p className="opti-hero-description">
                {fr
                  ? "Comment recommander de nouveaux contacts sans simplement renforcer les communautés déjà existantes ? Ce projet explore différentes stratégies de recommandation à travers la théorie des graphes."
                  : 'How can we recommend new connections without simply reinforcing existing communities? This project explores different recommendation strategies through graph theory.'}
              </p>

              <div className="opti-tags">
                <span>Python</span>
                <span>NetworkX</span>
                <span>{fr ? 'Graphes' : 'Graphs'}</span>
                <span>{fr ? 'Simulation' : 'Simulation'}</span>
              </div>
            </div>

            <div className="opti-hero-visual">
              <NetworkIllustration />
              <p>
                {fr
                  ? 'Illustration conceptuelle d’un réseau social'
                  : 'Conceptual illustration of a social network'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="opti-section">
        <div className="opti-container opti-narrow">
          <p className="opti-eyebrow">
            {fr ? 'LE CONTEXTE ✧' : 'THE CONTEXT ✧'}
          </p>

          <h2>
            {fr
              ? 'Au-delà de notre cercle habituel'
              : 'Beyond our usual circles'}
          </h2>

          <p>
            {fr
              ? "Sur les réseaux sociaux, les systèmes de recommandation proposent souvent des personnes avec lesquelles nous partageons déjà des relations ou des centres d'intérêt. Ces mécanismes peuvent contribuer à renforcer des communautés existantes."
              : 'On social networks, recommendation systems often suggest people with whom we already share connections or interests. These mechanisms can reinforce existing communities.'}
          </p>

          <p>
            {fr
              ? "Je me suis donc intéressée à une autre question : comment utiliser la structure d'un réseau pour proposer des connexions pertinentes tout en favorisant son ouverture ?"
              : 'I became interested in a different question: how can network structure be used to suggest relevant connections while encouraging greater openness?'}
          </p>

          <div className="opti-question">
            <span>?</span>
            <p>
              {fr
                ? "Comment définir des stratégies de recommandation permettant à un utilisateur d'étendre son réseau au-delà de son voisinage immédiat ?"
                : 'How can recommendation strategies help users expand their networks beyond their immediate connections?'}
            </p>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="opti-section opti-section-tinted">
        <div className="opti-container">
          <div className="opti-centered">
            <p className="opti-eyebrow">
              {fr ? 'LES OBJECTIFS ✧' : 'THE OBJECTIVES ✧'}
            </p>
            <h2>
              {fr
                ? 'Une approche en quatre axes'
                : 'A four-part approach'}
            </h2>
            <p>
              {fr
                ? "L'étude combine modélisation, comparaison d'algorithmes et analyse de la structure des réseaux."
                : 'The study combines modeling, algorithm comparison, and network structure analysis.'}
            </p>
          </div>

          <div className="opti-objectives">
            {objectives.map((item) => (
              <article className="opti-objective" key={item.number}>
                <span className="opti-objective-number">
                  {item.number}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="opti-section">
        <div className="opti-container">
          <div className="opti-centered">
            <p className="opti-eyebrow">
              {fr ? 'L’APPROCHE TECHNIQUE ✧' : 'TECHNICAL APPROACH ✧'}
            </p>
            <h2>
              {fr
                ? 'Comprendre les connexions'
                : 'Understanding connections'}
            </h2>
            <p>
              {fr
                ? 'Les principaux concepts mathématiques et algorithmiques qui structurent le projet.'
                : 'The main mathematical and algorithmic concepts behind the project.'}
            </p>
          </div>

          <div className="opti-concepts">
            {concepts.map((concept) => (
              <article className="opti-concept" key={concept.title}>
                <span className="opti-concept-icon" aria-hidden="true">
                  {concept.icon}
                </span>
                <h3>{concept.title}</h3>
                <p>{concept.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    
    {/* EXPERIMENTS */}
    <section className="opti-section opti-experiments">
    <div className="opti-container">
        <div className="opti-centered">
        <p className="opti-eyebrow">
            {fr ? 'LES EXPÉRIENCES ✧' : 'THE EXPERIMENTS ✧'}
        </p>
        <h2>
            {fr ? 'Les stratégies en action' : 'Strategies in action'}
        </h2>
        <p>
            {fr
            ? 'Comparaison visuelle de deux stratégies de recommandation appliquées à des réseaux sociaux.'
            : 'A visual comparison of two recommendation strategies applied to social networks.'}
        </p>
        </div>

        {[
        {
            image: '/images/projects/opti-recom2.png',
            title: fr ? 'Graphe orienté' : 'Directed graph',
            description: fr
            ? 'Comparaison du réseau initial et des réseaux obtenus avec les recommandations par liens et par intérêts.'
            : 'Comparison of the initial network and the networks obtained using link-based and interest-based recommendations.',
        },
        {
            image: '/images/projects/opti-recom3.png',
            title: fr ? 'Réseau de 50 sommets' : '50-node network',
            description: fr
            ? 'Une seconde expérience permettant d’observer les effets des stratégies sur un réseau plus grand.'
            : 'A second experiment showing how the strategies affect a larger network.',
        },
        ].map((experiment) => (
        <figure className="opti-experiment" key={experiment.image}>
            <img
            src={experiment.image}
            alt={experiment.title}
            loading="lazy"
            />
            <figcaption>
            <h3>{experiment.title}</h3>
            <p>{experiment.description}</p>
            </figcaption>
        </figure>
        ))}
    </div>
    </section>


      {/* WORKFLOW */}
      <section className="opti-section opti-section-tinted">
        <div className="opti-container opti-narrow">
          <p className="opti-eyebrow">
            {fr ? 'LA DÉMARCHE ✧' : 'THE PROCESS ✧'}
          </p>

          <h2>
            {fr
              ? 'De la modélisation à la comparaison'
              : 'From modeling to comparison'}
          </h2>

          <div className="opti-steps">
            {[
              {
                n: '01',
                title: fr
                  ? 'Construire un graphe social'
                  : 'Build a social graph',
                text: fr
                  ? 'Générer des réseaux artificiels pour disposer d’un environnement expérimental contrôlé.'
                  : 'Generate artificial networks to create a controlled experimental environment.',
              },
              {
                n: '02',
                title: fr
                  ? 'Définir les stratégies'
                  : 'Define the strategies',
                text: fr
                  ? "Étudier des recommandations fondées sur les connexions existantes et les intérêts partagés."
                  : 'Study recommendations based on existing connections and shared interests.',
              },
              {
                n: '03',
                title: fr
                  ? 'Mesurer les effets'
                  : 'Measure the effects',
                text: fr
                  ? 'Examiner la modularité, le clustering et les cycles pour caractériser la structure du réseau.'
                  : 'Examine modularity, clustering, and cycles to characterize the network structure.',
              },
              {
                n: '04',
                title: fr
                  ? 'Comparer les approches'
                  : 'Compare the approaches',
                text: fr
                  ? 'Utiliser des simulations, notamment probabilistes, pour étudier les différences entre stratégies.'
                  : 'Use simulations, including probabilistic ones, to study differences between strategies.',
              },
            ].map((step) => (
              <div className="opti-step" key={step.n}>
                <div className="opti-step-marker">{step.n}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONAL PERSPECTIVE */}
      <section className="opti-section">
        <div className="opti-container opti-narrow">
          <p className="opti-eyebrow">
            {fr ? 'POURQUOI CE PROJET ? ✧' : 'WHY THIS PROJECT? ✧'}
          </p>

          <h2>
            {fr
              ? 'Quand les algorithmes rencontrent les enjeux sociaux'
              : 'Where algorithms meet social questions'}
          </h2>

          <p>
            {fr
              ? "Ce projet me permet d'explorer le lien entre des outils mathématiques et des questions très concrètes : comment les plateformes influencent-elles nos interactions et comment les choix algorithmiques peuvent-ils modifier la structure d'un réseau ?"
              : 'This project allows me to explore the connection between mathematical tools and real-world questions: how do platforms influence our interactions, and how can algorithmic choices change the structure of a network?'}
          </p>

          <p className="opti-note">
            {fr
              ? "Cette page présente la problématique, les objectifs et la démarche du projet. Les résultats expérimentaux pourront être ajoutés lorsqu'ils seront documentés."
              : 'This page presents the research question, objectives, and methodology. Experimental results can be added once they have been documented.'}
          </p>
        </div>
      </section>

      {/* GITHUB */}
      <section className="opti-closing">
        <div className="opti-container opti-centered">
          <p className="opti-eyebrow">
            {fr ? 'ALLER PLUS LOIN ✧' : 'EXPLORE FURTHER ✧'}
          </p>

          <h2>
            {fr
              ? 'Envie de découvrir le projet ?'
              : 'Want to explore the project?'}
          </h2>

          <p>
            {fr
              ? "Retrouvez la présentation technique, les références et le code source sur GitHub."
              : 'Find the technical presentation, references, and source code on GitHub.'}
          </p>

          <a
            href="https://github.com/xxaishs21/Opti-recom"
            target="_blank"
            rel="noopener noreferrer"
            className="opti-github-button"
          >
            {fr ? 'Voir le projet sur GitHub ↗' : 'View on GitHub ↗'}
          </a>
        </div>
      </section>
    </main>
  )
}
