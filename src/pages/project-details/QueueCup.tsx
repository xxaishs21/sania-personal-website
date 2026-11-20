
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../LanguageContext'
import './QueueCup.css'

type Drink = {
  id: string
  icon: string
  nameFr: string
  nameEn: string
  basePrice: number
  color: string
}

const drinks: Drink[] = [
  {
    id: 'espresso',
    icon: '☕',
    nameFr: 'Espresso',
    nameEn: 'Espresso',
    basePrice: 2.2,
    color: '#a56b4f',
  },
  {
    id: 'latte',
    icon: '🥛',
    nameFr: 'Café latte',
    nameEn: 'Caffè latte',
    basePrice: 3.8,
    color: '#c28e65',
  },
  {
    id: 'matcha',
    icon: '🍵',
    nameFr: 'Matcha',
    nameEn: 'Matcha',
    basePrice: 4.5,
    color: '#839c73',
  },
]

const initialHistory = [
  { time: 0, espresso: 2.2, latte: 3.8, matcha: 4.5 },
  { time: 1, espresso: 2.3, latte: 3.7, matcha: 4.6 },
  { time: 2, espresso: 2.25, latte: 3.9, matcha: 4.55 },
  { time: 3, espresso: 2.4, latte: 3.85, matcha: 4.7 },
  { time: 4, espresso: 2.35, latte: 4.0, matcha: 4.65 },
  { time: 5, espresso: 2.5, latte: 3.95, matcha: 4.8 },
]

type HistoryPoint = {
  time: number
  espresso: number
  latte: number
  matcha: number
}

function PriceChart({
  history,
  activeDrink,
  fr,
}: {
  history: HistoryPoint[]
  activeDrink: string
  fr: boolean
}) {
  const width = 650
  const height = 300
  const paddingX = 45
  const paddingY = 30

  const allPrices = history.flatMap((point) => [
    point.espresso,
    point.latte,
    point.matcha,
  ])

  const minPrice = Math.floor(Math.min(...allPrices) - 0.5)
  const maxPrice = Math.ceil(Math.max(...allPrices) + 0.5)
  const range = Math.max(1, maxPrice - minPrice)

  const getX = (index: number) =>
    paddingX +
    (index / Math.max(1, history.length - 1)) *
      (width - paddingX * 2)

  const getY = (price: number) =>
    height -
    paddingY -
    ((price - minPrice) / range) * (height - paddingY * 2)

  const makePath = (id: 'espresso' | 'latte' | 'matcha') =>
    history
      .map((point, index) => {
        const x = getX(index)
        const y = getY(point[id])
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
      })
      .join(' ')

  const ticks = Array.from({ length: 5 }, (_, i) =>
    minPrice + (range * i) / 4
  )

  return (
    <div className="queue-chart-wrapper">
      <svg
        className="queue-chart"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={
          fr
            ? 'Évolution simulée des prix de trois boissons'
            : 'Simulated price changes for three drinks'
        }
      >
        {ticks.map((price) => (
          <g key={price}>
            <line
              x1={paddingX}
              y1={getY(price)}
              x2={width - paddingX}
              y2={getY(price)}
              stroke="#e9e0d5"
              strokeDasharray="5 5"
            />
            <text
              x={paddingX - 12}
              y={getY(price) + 4}
              textAnchor="end"
              fontSize="12"
              fill="#927e70"
            >
              {price.toFixed(1)} €
            </text>
          </g>
        ))}

        {drinks.map((drink) => {
          const id = drink.id as 'espresso' | 'latte' | 'matcha'
          const selected =
            activeDrink === 'all' || activeDrink === drink.id

          return (
            <g
              key={drink.id}
              opacity={selected ? 1 : 0.13}
              style={{ transition: 'opacity 0.25s ease' }}
            >
              <path
                d={makePath(id)}
                fill="none"
                stroke={drink.color}
                strokeWidth={selected ? 3.5 : 2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {history.map((point, index) => (
                <circle
                  key={index}
                  cx={getX(index)}
                  cy={getY(point[id])}
                  r={index === history.length - 1 ? 5 : 3}
                  fill={drink.color}
                  stroke="white"
                  strokeWidth="1.5"
                />
              ))}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default function QueueCup() {
  const { language } = useLanguage()
  const fr = language === 'fr'

  const [history, setHistory] = useState<HistoryPoint[]>(
    initialHistory
  )
  const [activeDrink, setActiveDrink] = useState('all')
  const [orders, setOrders] = useState(0)

  const latest = history[history.length - 1]

  const formatPrice = (value: number) =>
    new Intl.NumberFormat(fr ? 'fr-FR' : 'en-US', {
      style: 'currency',
      currency: 'EUR',
    }).format(value)

  const orderDrink = (drinkId: string) => {
    const id = drinkId as 'espresso' | 'latte' | 'matcha'

    const next: HistoryPoint = {
      ...latest,
      time: latest.time + 1,
      [id]: Math.round((latest[id] + 0.15) * 100) / 100,
    }

    setHistory((previous) => [...previous, next].slice(-12))
    setOrders((previous) => previous + 1)
    setActiveDrink(drinkId)
  }

  const resetSimulation = () => {
    setHistory(initialHistory)
    setOrders(0)
    setActiveDrink('all')
  }

  return (
    <main className="queue-page">
      {/* HERO */}
      <section className="queue-hero">
        <div className="queue-container">
          <Link to="/projects" className="queue-back">
            ← {fr ? 'Retour aux projets' : 'Back to projects'}
          </Link>

          <div className="queue-hero-grid">
            <div className="queue-hero-copy">
              <p className="queue-eyebrow">
                {fr
                  ? 'DÉVELOPPEMENT WEB · SIMULATION'
                  : 'WEB DEVELOPMENT · SIMULATION'}
              </p>

              <h1>
                Queue<span>Cup</span>
                <span className="queue-title-dot">.</span>
              </h1>

              <p className="queue-hero-tagline">
                {fr
                  ? 'Quand le café rencontre la bourse.'
                  : 'Where coffee meets the stock market.'}
              </p>

              <p className="queue-hero-description">
                {fr
                  ? "QueueCup est une simulation de café inspirée des marchés financiers. Le prix des boissons évolue en fonction de la demande et du volume des transactions, transformant chaque commande en une expérience dynamique."
                  : 'QueueCup is a café simulation inspired by financial markets. Drink prices change based on demand and transaction volume, turning every order into a dynamic experience.'}
              </p>

              <div className="queue-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>{fr ? 'Prix dynamiques' : 'Dynamic pricing'}</span>
                <span>{fr ? 'Simulation' : 'Simulation'}</span>
              </div>

              <a href="#queue-demo" className="queue-primary-button">
                {fr ? 'Tester la simulation ↓' : 'Try the simulation ↓'}
              </a>
            </div>

            <div className="queue-hero-art" aria-hidden="true">
              <div className="queue-art-circle" />

              <div className="queue-art-ticket queue-ticket-back">
                <span>MARKET UPDATE</span>
                <strong>LATTE</strong>
                <span className="queue-ticket-price">€3.80</span>
                <span className="queue-ticket-trend">↗ +4.2%</span>
              </div>

              <div className="queue-art-cup">
                <div className="queue-cup-lid" />
                <div className="queue-cup-body">
                  <span>QUEUE</span>
                  <strong>CUP</strong>
                  <small>COFFEE EXCHANGE</small>
                </div>
              </div>

              <div className="queue-art-ticket queue-ticket-front">
                <span>LIVE PRICE</span>
                <strong>ESPRESSO</strong>
                <span className="queue-ticket-price">€2.20</span>
                <span className="queue-ticket-trend">↗ MARKET OPEN</span>
              </div>

              <span className="queue-art-spark spark-one">✦</span>
              <span className="queue-art-spark spark-two">✧</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="queue-section">
        <div className="queue-container queue-narrow">
          <p className="queue-eyebrow">
            {fr ? 'LE CONCEPT ✧' : 'THE CONCEPT ✧'}
          </p>

          <h2>
            {fr
              ? 'Un menu qui ne reste jamais figé'
              : 'A menu that never stays the same'}
          </h2>

          <p>
            {fr
              ? "Dans un café traditionnel, les prix sont généralement fixes. Mais que se passerait-il si chaque boisson était échangée comme un actif sur un marché ?"
              : 'In a traditional café, prices are generally fixed. But what if every drink were traded like an asset on a market?'}
          </p>

          <p>
            {fr
              ? "QueueCup transpose cette idée dans une interface interactive : les commandes influencent la demande, et la demande participe à l'évolution des prix. Le projet associe ainsi une expérience ludique à des mécanismes de tarification dynamique."
              : 'QueueCup brings this idea into an interactive interface: orders influence demand, and demand contributes to price changes. The project combines a playful experience with dynamic pricing mechanisms.'}
          </p>

          <div className="queue-concept-quote">
            <span>↗</span>
            <p>
              {fr
                ? 'Et si commander un café revenait aussi à observer les mouvements d’un marché ?'
                : 'What if ordering coffee also meant watching a market move?'}
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="queue-section queue-section-cream">
        <div className="queue-container">
          <div className="queue-centered">
            <p className="queue-eyebrow">
              {fr ? 'LES MÉCANISMES ✧' : 'THE MECHANICS ✧'}
            </p>

            <h2>
              {fr
                ? 'Un café piloté par la demande'
                : 'A café driven by demand'}
            </h2>

            <p>
              {fr
                ? 'Trois idées structurent le fonctionnement de cette simulation.'
                : 'Three ideas shape how this simulation works.'}
            </p>
          </div>

          <div className="queue-features">
            <article className="queue-feature">
              <span className="queue-feature-icon">☕</span>
              <span className="queue-feature-number">01</span>
              <h3>
                {fr ? 'Un menu dynamique' : 'A dynamic menu'}
              </h3>
              <p>
                {fr
                  ? 'Les boissons possèdent des prix qui peuvent évoluer au cours des transactions.'
                  : 'Drinks have prices that can change as transactions take place.'}
              </p>
            </article>

            <article className="queue-feature">
              <span className="queue-feature-icon">↗</span>
              <span className="queue-feature-number">02</span>
              <h3>
                {fr ? 'La demande influence les prix' : 'Demand affects prices'}
              </h3>
              <p>
                {fr
                  ? 'Le volume des commandes intervient dans les mécanismes de tarification.'
                  : 'Order volume plays a role in the pricing mechanisms.'}
              </p>
            </article>

            <article className="queue-feature">
              <span className="queue-feature-icon">▥</span>
              <span className="queue-feature-number">03</span>
              <h3>
                {fr ? 'Une interface réactive' : 'A reactive interface'}
              </h3>
              <p>
                {fr
                  ? 'React et TypeScript permettent de représenter les changements de prix et les interactions.'
                  : 'React and TypeScript make it possible to represent price changes and interactions.'}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <section className="queue-section queue-demo-section" id="queue-demo">
        <div className="queue-container">
          <div className="queue-centered">
            <p className="queue-eyebrow">
              {fr ? 'DÉMONSTRATION INTERACTIVE ✧' : 'INTERACTIVE DEMONSTRATION ✧'}
            </p>

            <h2>
              {fr
                ? 'À toi de faire bouger le marché'
                : 'Your turn to move the market'}
            </h2>

            <p>
              {fr
                ? "Passe une commande et observe comment le prix de la boisson sélectionnée évolue sur le graphique."
                : 'Place an order and watch how the selected drink price changes on the chart.'}
            </p>
          </div>

          <div className="queue-demo-note">
            <span>ⓘ</span>
            <p>
              {fr
                ? "Cette démonstration simplifiée a été créée pour le portfolio. Elle ne reproduit pas nécessairement l'algorithme de tarification exact de QueueCup."
                : 'This simplified demonstration was created for the portfolio. It does not necessarily reproduce QueueCup’s exact pricing algorithm.'}
            </p>
          </div>

          <div className="queue-market">
            <div className="queue-market-header">
              <div>
                <span className="queue-market-live">
                  <i /> {fr ? 'MARCHÉ SIMULÉ' : 'SIMULATED MARKET'}
                </span>
                <h3>QueueCup Exchange</h3>
              </div>

              <div className="queue-market-orders">
                <span>
                  {fr ? 'Commandes passées' : 'Orders placed'}
                </span>
                <strong>{orders}</strong>
              </div>
            </div>

            <div className="queue-drinks">
              {drinks.map((drink) => {
                const id = drink.id as 'espresso' | 'latte' | 'matcha'
                const price = latest[id]
                const initialPrice = initialHistory[0][id]
                const difference = price - initialPrice

                return (
                  <article
                    className={`queue-drink-card ${
                      activeDrink === drink.id ? 'is-selected' : ''
                    }`}
                    key={drink.id}
                  >
                    <span className="queue-drink-emoji" aria-hidden="true">
                      {drink.icon}
                    </span>

                    <h4>{fr ? drink.nameFr : drink.nameEn}</h4>

                    <strong>{formatPrice(price)}</strong>

                    <span className="queue-drink-change">
                      {difference >= 0 ? '+' : ''}
                      {formatPrice(difference)}
                    </span>

                    <button
                      type="button"
                      onClick={() => orderDrink(drink.id)}
                    >
                      {fr ? 'Commander +' : 'Order +'}
                    </button>
                  </article>
                )
              })}
            </div>

            <div className="queue-chart-panel">
              <div className="queue-chart-heading">
                <div>
                  <span>
                    {fr ? 'ÉVOLUTION DES PRIX' : 'PRICE EVOLUTION'}
                  </span>
                  <h4>
                    {fr ? 'Historique simulé' : 'Simulated history'}
                  </h4>
                </div>

                <button
                  type="button"
                  className="queue-reset-button"
                  onClick={resetSimulation}
                >
                  ↺ {fr ? 'Réinitialiser' : 'Reset'}
                </button>
              </div>

              <div className="queue-chart-filters">
                <button
                  type="button"
                  className={activeDrink === 'all' ? 'active' : ''}
                  onClick={() => setActiveDrink('all')}
                >
                  {fr ? 'Tous' : 'All'}
                </button>

                {drinks.map((drink) => (
                  <button
                    key={drink.id}
                    type="button"
                    className={activeDrink === drink.id ? 'active' : ''}
                    onClick={() => setActiveDrink(drink.id)}
                  >
                    <i style={{ background: drink.color }} />
                    {fr ? drink.nameFr : drink.nameEn}
                  </button>
                ))}
              </div>

              <PriceChart
                history={history}
                activeDrink={activeDrink}
                fr={fr}
              />
            </div>
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="queue-section queue-section-cream">
        <div className="queue-container">
          <div className="queue-centered">
            <p className="queue-eyebrow">
              {fr ? 'DERRIÈRE LE PROJET ✧' : 'BEHIND THE PROJECT ✧'}
            </p>

            <h2>
              {fr
                ? 'Une expérience construite avec React'
                : 'An experience built with React'}
            </h2>
          </div>

          <div className="queue-tech-grid">
            <article className="queue-tech-card">
              <span>01 / FRONTEND</span>
              <h3>React</h3>
              <p>
                {fr
                  ? 'Construction de composants pour organiser les différentes parties de l’interface.'
                  : 'Building components to organize the different parts of the interface.'}
              </p>
            </article>

            <article className="queue-tech-card">
              <span>02 / LANGUAGE</span>
              <h3>TypeScript</h3>
              <p>
                {fr
                  ? 'Utilisation du typage pour structurer les données et les interactions.'
                  : 'Using static typing to structure data and interactions.'}
              </p>
            </article>

            <article className="queue-tech-card">
              <span>03 / INTERACTION</span>
              <h3>
                {fr ? 'Gestion des états' : 'State management'}
              </h3>
              <p>
                {fr
                  ? 'Mise à jour des informations affichées en fonction des commandes et des changements de prix.'
                  : 'Updating displayed information based on orders and price changes.'}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="queue-section">
        <div className="queue-container queue-narrow">
          <p className="queue-eyebrow">
            {fr ? 'L’IDÉE DERRIÈRE LE CODE ✧' : 'THE IDEA BEHIND THE CODE ✧'}
          </p>

          <h2>
            {fr
              ? 'Transformer un concept en expérience'
              : 'Turning a concept into an experience'}
          </h2>

          <p>
            {fr
              ? "QueueCup illustre comment des mécanismes inspirés d'un domaine — ici, les marchés financiers — peuvent être transposés dans une application interactive. Le défi consiste à rendre les changements de prix compréhensibles et visibles pour l'utilisateur."
              : 'QueueCup illustrates how mechanisms inspired by one field — in this case, financial markets — can be translated into an interactive application. The challenge is making price changes understandable and visible to users.'}
          </p>

          <p>
            {fr
              ? "Ce projet associe ainsi développement frontend, gestion des données et conception d'une expérience utilisateur originale."
              : 'The project therefore combines frontend development, data handling, and the design of an original user experience.'}
          </p>
        </div>
      </section>

      {/* GITHUB */}
      <section className="queue-closing">
        <div className="queue-container queue-closing-content">
          <p className="queue-eyebrow">
            {fr ? 'POUR ALLER PLUS LOIN ✧' : 'EXPLORE FURTHER ✧'}
          </p>

          <h2>
            {fr
              ? 'Envie de découvrir QueueCup ?'
              : 'Want to explore QueueCup?'}
          </h2>

          <p>
            {fr
              ? 'Retrouvez le code source et les détails du projet sur GitHub.'
              : 'Find the source code and project details on GitHub.'}
          </p>

          <a
            href="https://github.com/Joyswaria/QueueCup"
            target="_blank"
            rel="noopener noreferrer"
            className="queue-github-button"
          >
            {fr ? 'Voir QueueCup sur GitHub ↗' : 'View QueueCup on GitHub ↗'}
          </a>

          <Link to="/projects" className="queue-bottom-back">
            ← {fr ? 'Tous mes projets' : 'All my projects'}
          </Link>
        </div>
      </section>
    </main>
  )
}
