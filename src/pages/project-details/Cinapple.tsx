
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../LanguageContext'
import './Cinapple.css'

type AlgorithmId = 'knn' | 'id3' | 'kmeans'

type Algorithm = {
  id: AlgorithmId
  number: string
  name: string
  subtitleFr: string
  subtitleEn: string
  descriptionFr: string
  descriptionEn: string
  exampleFr: string
  exampleEn: string
}

const algorithms: Algorithm[] = [
  {
    id: 'knn',
    number: '01',
    name: 'k-NN',
    subtitleFr: 'Les plus proches voisins',
    subtitleEn: 'k-Nearest Neighbors',
    descriptionFr:
      "Cet algorithme s'appuie sur la proximité entre les préférences pour estimer les films susceptibles de plaire à un utilisateur.",
    descriptionEn:
      'This algorithm uses similarities between preferences to estimate which movies a user might enjoy.',
    exampleFr:
      "Si tes évaluations ressemblent à celles d'autres utilisateurs, leurs préférences peuvent aider à prédire les tiennes.",
    exampleEn:
      'If your ratings are similar to those of other users, their preferences can help predict yours.',
  },
  {
    id: 'id3',
    number: '02',
    name: 'ID3',
    subtitleFr: 'L’arbre de décision',
    subtitleEn: 'Decision Tree',
    descriptionFr:
      "ID3 construit un arbre de décision à partir de critères successifs. Il permet d'orienter la sélection d'un film grâce à une série de questions.",
    descriptionEn:
      'ID3 builds a decision tree using successive criteria. It helps guide movie selection through a series of questions.',
    exampleFr:
      'Envie de quelque chose de drôle ? Plutôt un film récent ? Chaque réponse permet d’affiner la sélection.',
    exampleEn:
      'In the mood for something funny? Prefer a recent movie? Each answer helps narrow down the selection.',
  },
  {
    id: 'kmeans',
    number: '03',
    name: 'k-means',
    subtitleFr: 'Le regroupement de films',
    subtitleEn: 'Movie Clustering',
    descriptionFr:
      "k-means répartit les films en groupes selon leurs caractéristiques, afin d'explorer les similarités entre eux.",
    descriptionEn:
      'k-means groups movies according to their characteristics, making it possible to explore similarities between them.',
    exampleFr:
      'Des films qui partagent certaines caractéristiques peuvent être regroupés, même si leurs titres sont très différents.',
    exampleEn:
      'Movies sharing certain characteristics can be grouped together, even when their titles are very different.',
  },
]

function AlgorithmVisual({ id }: { id: AlgorithmId }) {
  if (id === 'knn') {
    return (
      <div className="cina-algorithm-visual cina-knn-visual" aria-hidden="true">
        <div className="cina-knn-center">★</div>
        <span className="cina-knn-dot dot-1">♥</span>
        <span className="cina-knn-dot dot-2">★</span>
        <span className="cina-knn-dot dot-3">♥</span>
        <span className="cina-knn-dot dot-4">★</span>
        <span className="cina-knn-dot dot-5">♥</span>
        <span className="cina-knn-dot dot-6">★</span>
        <div className="cina-knn-ring" />
      </div>
    )
  }

  if (id === 'id3') {
    return (
      <div className="cina-algorithm-visual cina-tree-visual" aria-hidden="true">
        <div className="cina-tree-root">?</div>
        <div className="cina-tree-branches">
          <div className="cina-tree-branch">
            <span>YES</span>
            <div>♡</div>
          </div>
          <div className="cina-tree-branch">
            <span>NO</span>
            <div>★</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cina-algorithm-visual cina-cluster-visual" aria-hidden="true">
      <div className="cina-cluster-group cluster-a">
        <i /><i /><i /><i /><i />
      </div>
      <div className="cina-cluster-group cluster-b">
        <i /><i /><i /><i /><i />
      </div>
      <div className="cina-cluster-group cluster-c">
        <i /><i /><i /><i /><i />
      </div>
    </div>
  )
}

function MovieArtwork() {
  return (
    <div className="cina-artwork" aria-hidden="true">
      <div className="cina-artwork-glow" />

      <div className="cina-poster cina-poster-left">
        <span className="cina-poster-top">CINAPPLE ORIGINAL</span>
        <div className="cina-poster-symbol">☾</div>
        <span className="cina-poster-title">MIDNIGHT</span>
        <span className="cina-poster-bottom">A STORY TO DISCOVER</span>
      </div>

      <div className="cina-poster cina-poster-right">
        <span className="cina-poster-top">CINAPPLE ORIGINAL</span>
        <div className="cina-poster-symbol">✿</div>
        <span className="cina-poster-title">BLOOM</span>
        <span className="cina-poster-bottom">A STORY TO DISCOVER</span>
      </div>

      <div className="cina-poster cina-poster-main">
        <span className="cina-poster-top">YOUR NEXT FAVORITE</span>
        <div className="cina-poster-symbol">✦</div>
        <span className="cina-poster-title">CINAPPLE</span>
        <span className="cina-poster-bottom">FIND YOUR NEXT MOVIE</span>
      </div>

      <div className="cina-floating-rating">★★★★★</div>
      <div className="cina-floating-heart">♥</div>
    </div>
  )
}

export default function Cinapple() {
  const { language } = useLanguage()
  const fr = language === 'fr'
  const [activeAlgorithm, setActiveAlgorithm] = useState<AlgorithmId>('knn')

  const selectedAlgorithm = algorithms.find(
    (algorithm) => algorithm.id === activeAlgorithm
  )!

  return (
    <main className="cina-page">
      {/* HERO */}
      <section className="cina-hero">
        <div className="cina-container">
          <Link to="/projects" className="cina-back">
            ← {fr ? 'Retour aux projets' : 'Back to projects'}
          </Link>

          <div className="cina-hero-grid">
            <div className="cina-hero-content">
              <p className="cina-eyebrow">
                {fr
                  ? 'PROJET LOGICIEL · RECOMMANDATION'
                  : 'SOFTWARE PROJECT · RECOMMENDATION'}
              </p>

              <h1>Cinapple<span className="cina-title-dot">.</span></h1>

              <p className="cina-hero-tagline">
                {fr
                  ? 'Trouver le bon film, autrement.'
                  : 'Find your next movie, differently.'}
              </p>

              <p className="cina-hero-description">
                {fr
                  ? "Cinapple est une application de recommandation de films développée avec Python et Streamlit. Elle explore trois approches algorithmiques pour aider les utilisateurs à découvrir des films selon leurs préférences."
                  : 'Cinapple is a movie recommendation application built with Python and Streamlit. It explores three algorithmic approaches to help users discover movies based on their preferences.'}
              </p>

              <div className="cina-tags">
                <span>Python</span>
                <span>Streamlit</span>
                <span>k-NN</span>
                <span>ID3</span>
                <span>k-means</span>
              </div>

              <a href="#cina-discover" className="cina-primary-button">
                {fr ? 'Découvrir le projet ↓' : 'Explore the project ↓'}
              </a>
            </div>

            <MovieArtwork />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="cina-section" id="cina-discover">
        <div className="cina-container cina-narrow">
          <p className="cina-eyebrow">
            {fr ? 'LE CONCEPT ✧' : 'THE CONCEPT ✧'}
          </p>

          <h2>
            {fr
              ? 'Et si choisir un film devenait plus simple ?'
              : 'What if choosing a movie were easier?'}
          </h2>

          <p>
            {fr
              ? "Face à un catalogue de films toujours plus vaste, trouver quelque chose à regarder peut vite devenir compliqué. Les systèmes de recommandation tentent de résoudre ce problème en proposant des contenus adaptés à chaque utilisateur."
              : 'With an ever-growing catalog of movies, finding something to watch can quickly become overwhelming. Recommendation systems aim to solve this problem by suggesting content suited to each user.'}
          </p>

          <p>
            {fr
              ? "Avec Cinapple, j'ai voulu explorer ce sujet en implémentant plusieurs algorithmes de recommandation, puis en les intégrant dans une interface accessible."
              : 'With Cinapple, I wanted to explore this topic by implementing several recommendation algorithms and integrating them into an accessible interface.'}
          </p>

          <div className="cina-quote">
            <span aria-hidden="true">✦</span>
            <p>
              {fr
                ? "Un même objectif, trois façons différentes d'y parvenir : recommander le film qui pourrait vous plaire."
                : 'One goal, three different ways to achieve it: recommending a movie you might enjoy.'}
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="cina-section cina-section-soft">
        <div className="cina-container">
          <div className="cina-section-heading">
            <p className="cina-eyebrow">
              {fr ? 'LES FONCTIONNALITÉS ✧' : 'THE FEATURES ✧'}
            </p>
            <h2>
              {fr
                ? 'Une expérience personnalisée'
                : 'A personalized experience'}
            </h2>
            <p>
              {fr
                ? 'Une application conçue autour de la découverte et des préférences cinématographiques.'
                : 'An application designed around movie discovery and personal preferences.'}
            </p>
          </div>

          <div className="cina-feature-grid">
            <article className="cina-feature-card">
              <div className="cina-feature-icon">★</div>
              <span className="cina-feature-number">01</span>
              <h3>{fr ? 'Évaluer des films' : 'Rate movies'}</h3>
              <p>
                {fr
                  ? "Les évaluations des utilisateurs permettent d'exprimer leurs goûts et d'alimenter les recommandations."
                  : 'User ratings help express personal tastes and inform recommendations.'}
              </p>
            </article>

            <article className="cina-feature-card">
              <div className="cina-feature-icon">♡</div>
              <span className="cina-feature-number">02</span>
              <h3>
                {fr
                  ? 'Découvrir de nouveaux films'
                  : 'Discover new movies'}
              </h3>
              <p>
                {fr
                  ? "Les algorithmes explorent les préférences et les similarités pour proposer des films à découvrir."
                  : 'The algorithms explore preferences and similarities to suggest movies worth discovering.'}
              </p>
            </article>

            <article className="cina-feature-card">
              <div className="cina-feature-icon">⌘</div>
              <span className="cina-feature-number">03</span>
              <h3>
                {fr
                  ? 'Explorer plusieurs approches'
                  : 'Explore different approaches'}
              </h3>
              <p>
                {fr
                  ? 'Trois méthodes de recommandation permettent d’aborder le problème sous des angles différents.'
                  : 'Three recommendation methods approach the problem from different perspectives.'}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ALGORITHMS */}
      <section className="cina-section cina-algorithms-section">
        <div className="cina-container">
          <div className="cina-section-heading">
            <p className="cina-eyebrow">
              {fr ? 'DERRIÈRE LES RECOMMANDATIONS ✧' : 'BEHIND THE RECOMMENDATIONS ✧'}
            </p>
            <h2>
              {fr
                ? 'Trois algorithmes, trois approches'
                : 'Three algorithms, three approaches'}
            </h2>
            <p>
              {fr
                ? "Le cœur technique de Cinapple repose sur trois algorithmes réimplémentés pour explorer différentes méthodes de recommandation."
                : 'At the heart of Cinapple are three reimplemented algorithms exploring different recommendation methods.'}
            </p>
          </div>

          <div className="cina-algorithm-tabs" role="tablist" aria-label={fr ? 'Choisir un algorithme' : 'Choose an algorithm'}>
            {algorithms.map((algorithm) => (
              <button
                key={algorithm.id}
                type="button"
                role="tab"
                id={`cina-tab-${algorithm.id}`}
                aria-selected={activeAlgorithm === algorithm.id}
                aria-controls="cina-algorithm-panel"
                className={`cina-algorithm-tab ${
                  activeAlgorithm === algorithm.id ? 'is-active' : ''
                }`}
                onClick={() => setActiveAlgorithm(algorithm.id)}
              >
                <span>{algorithm.number}</span>
                {algorithm.name}
              </button>
            ))}
          </div>

          <div
            className="cina-algorithm-panel"
            id="cina-algorithm-panel"
            role="tabpanel"
            aria-labelledby={`cina-tab-${activeAlgorithm}`}
          >
            <div className="cina-algorithm-copy">
              <span className="cina-algorithm-index">
                ALGORITHM {selectedAlgorithm.number} / 03
              </span>

              <h3>{selectedAlgorithm.name}</h3>
              <h4>
                {fr
                  ? selectedAlgorithm.subtitleFr
                  : selectedAlgorithm.subtitleEn}
              </h4>

              <p>
                {fr
                  ? selectedAlgorithm.descriptionFr
                  : selectedAlgorithm.descriptionEn}
              </p>

              <div className="cina-algorithm-example">
                <span>
                  {fr ? 'EN PRATIQUE ✧' : 'IN PRACTICE ✧'}
                </span>
                <p>
                  {fr
                    ? selectedAlgorithm.exampleFr
                    : selectedAlgorithm.exampleEn}
                </p>
              </div>
            </div>

            <AlgorithmVisual id={activeAlgorithm} />
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="cina-section cina-section-soft">
        <div className="cina-container">
          <div className="cina-section-heading">
            <p className="cina-eyebrow">
              {fr ? 'LA RÉALISATION ✧' : 'THE IMPLEMENTATION ✧'}
            </p>
            <h2>
              {fr
                ? 'Du modèle à l’interface'
                : 'From algorithms to interface'}
            </h2>
          </div>

          <div className="cina-tech-grid">
            <div className="cina-tech-item">
              <span className="cina-tech-icon">01</span>
              <div>
                <h3>Python</h3>
                <p>
                  {fr
                    ? 'Implémentation des algorithmes et traitement des données nécessaires aux recommandations.'
                    : 'Algorithm implementation and processing of the data needed for recommendations.'}
                </p>
              </div>
            </div>

            <div className="cina-tech-item">
              <span className="cina-tech-icon">02</span>
              <div>
                <h3>Streamlit</h3>
                <p>
                  {fr
                    ? 'Création d’une interface web interactive pour rendre les méthodes de recommandation utilisables.'
                    : 'Development of an interactive web interface that makes the recommendation methods usable.'}
                </p>
              </div>
            </div>

            <div className="cina-tech-item">
              <span className="cina-tech-icon">03</span>
              <div>
                <h3>TMDb API</h3>
                <p>
                  {fr
                    ? "Intégration facultative de visuels de films pour enrichir l'interface."
                    : 'Optional integration of movie artwork to enrich the interface.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="cina-section">
        <div className="cina-container cina-narrow">
          <p className="cina-eyebrow">
            {fr ? 'CE QUE CE PROJET M’A APPORTÉ ✧' : 'WHAT I LEARNED ✧'}
          </p>

          <h2>
            {fr
              ? 'Comprendre les algorithmes en les construisant'
              : 'Understanding algorithms by building them'}
          </h2>

          <p>
            {fr
              ? "Cinapple m'a permis de travailler sur plusieurs approches de recommandation et de mieux comprendre leurs différences. Réimplémenter les algorithmes a été une façon concrète d'étudier leur fonctionnement plutôt que de simplement utiliser des solutions existantes."
              : 'Cinapple allowed me to work with several recommendation approaches and better understand their differences. Reimplementing the algorithms was a practical way to study how they work instead of simply relying on existing solutions.'}
          </p>

          <p>
            {fr
              ? "Le projet m'a également donné l'occasion de relier la partie algorithmique à une application utilisable, en réfléchissant à la façon de présenter les recommandations aux utilisateurs."
              : 'The project also gave me the opportunity to connect algorithmic work with a usable application, considering how recommendations should be presented to users.'}
          </p>
        </div>
      </section>

      {/* GITHUB */}
      <section className="cina-closing">
        <div className="cina-container cina-closing-content">
          <p className="cina-eyebrow">
            {fr ? 'ENVIE D’EN VOIR PLUS ? ✧' : 'WANT TO SEE MORE? ✧'}
          </p>

          <h2>
            {fr
              ? 'Le code derrière les recommandations'
              : 'The code behind the recommendations'}
          </h2>

          <p>
            {fr
              ? "Retrouvez le code source, les détails techniques et la documentation du projet sur GitHub."
              : 'Explore the source code, technical details, and project documentation on GitHub.'}
          </p>

          <a
            href="https://github.com/xxaishs21/Cinapple"
            target="_blank"
            rel="noopener noreferrer"
            className="cina-github-button"
          >
            {fr ? 'Voir Cinapple sur GitHub ↗' : 'View Cinapple on GitHub ↗'}
          </a>

          <Link to="/projects" className="cina-bottom-back">
            ← {fr ? 'Tous mes projets' : 'All my projects'}
          </Link>
        </div>
      </section>
    </main>
  )
}
