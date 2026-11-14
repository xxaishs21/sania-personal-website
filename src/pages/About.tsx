
import { useLanguage } from '../LanguageContext'
import PhotoPlaceholder from '../components/PhotoPlaceholder'
import './About.css'

export default function About() {
  const { language } = useLanguage()
  const fr = language === 'fr'

  const sections = [
    {
      id: 'meet',
      label: fr ? 'Présentation' : 'Introduction',
    },
    {
      id: 'story',
      label: fr ? 'Mon histoire' : 'My story',
    },
    {
      id: 'languages',
      label: fr ? 'Mes langues' : 'Languages',
    },
    {
      id: 'beyond',
      label: fr ? "Plus que l'ingénierie" : 'Beyond Engineering',
    },
    {
      id: 'favorites',
      label: fr ? 'Mes chouchous' : 'Little joys',
    },
  ]

  const languages = [
    {
      flag: '🇫🇷',
      name: fr ? 'Français' : 'French',
      level: fr ? 'Natale' : 'Native',
      bars: 5,
    },
    {
      flag: '🇬🇧',
      name: fr ? 'Anglais' : 'English',
      level: fr ? 'Bilingue' : 'Bilingual',
      bars: 5,
    },
    {
      flag: '🇲🇺',
      name: fr ? 'Créole mauricien' : 'Mauritian Creole',
      level: fr ? 'Natale' : 'Native',
      bars: 5,
    },
    {
      flag: '🇪🇸',
      name: fr ? 'Espagnol' : 'Spanish',
      level: fr ? 'B2 — Avancé' : 'B2 — Upper-intermediate',
      bars: 4,
    },
    {
      flag: '🇩🇪',
      name: fr ? 'Allemand' : 'German',
      level: fr ? 'A1 — Débutant' : 'A1 — Beginner',
      bars: 1,
    },
  ]

  const interests = [
    {
      icon: '📖',
      title: fr ? 'Lecture' : 'Reading',
      description: fr
        ? 'Découvrir de nouveaux univers et me laisser emporter par les histoires.'
        : 'Exploring new worlds and getting lost in stories.',
    },
    {
      icon: '🎀',
      title: 'Journaling',
      description: fr
        ? 'Conserver mes souvenirs et exprimer ma créativité sur papier.'
        : 'Preserving memories and expressing creativity on paper.',
    },
    {
      icon: '🎮',
      title: 'Gaming',
      description: fr
        ? 'Explorer, imaginer et relever de nouveaux défis.'
        : 'Exploring, imagining, and taking on new challenges.',
    },
    {
      icon: '✨',
      title: fr ? 'Création' : 'Creating',
      description: fr
        ? 'Transformer mes idées en projets personnels.'
        : 'Turning ideas into personal creative projects.',
    },
  ]

  return (
    <main className="about-page">
      {/* INTRODUCTION */}
      <header className="about-intro">
        <p className="about-eyebrow">
          {fr ? 'FAISONS CONNAISSANCE ✧' : 'GET TO KNOW ME ✧'}
        </p>

        <h1>{fr ? 'À propos de moi' : 'About Me'}</h1>

        <p className="about-intro-description">
          {fr
            ? 'Un peu de mon histoire, de mes passions et de tout ce qui me rend unique.'
            : 'A little about my story, my passions, and everything that makes me who I am.'}
        </p>
      </header>

      {/* NAVIGATION SECONDAIRE */}
      <nav
        className="about-subnav"
        aria-label={fr ? 'Sections de la page' : 'Page sections'}
      >
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            {section.label}
          </a>
        ))}
      </nav>

      {/* PRÉSENTATION */}
      <section id="meet" className="about-section about-meet">
        <div className="about-section-inner about-split">
          <div className="about-copy">
            <p className="about-eyebrow">
              {fr ? 'ENCHANTÉE ✧' : 'NICE TO MEET YOU ✧'}
            </p>

            <h2>
              {fr ? "Moi c'est Sania !" : "I'm Sania!"}
            </h2>

            <div className="about-text">
              <p>
                {fr
                  ? "Je suis une étudiante ingénieure originaire de l'île Maurice, actuellement à Centrale Nantes et en alternance chez Covéa à MMA au Mans."
                  : "I'm an engineering student from Mauritius, currently studying at Centrale Nantes and completing a work-study program at Covéa in MMA group in Le Mans."}
              </p>

              <p>
                {fr
                  ? "J'aime apprendre, imaginer, construire et donner vie à mes idées. La technologie fait partie de mon univers, mais ma curiosité va bien au-delà."
                  : "I love learning, imagining, building, and bringing ideas to life. Technology is part of my world, but my curiosity goes far beyond it."}
              </p>
            </div>

            <span className="about-signature">with love, Sania ♡</span>
          </div>

          <div className="about-portrait-wrap">
            <div className="about-portrait-backdrop" />

            <PhotoPlaceholder
              src="/images/portrait.jpg"
              alt={fr ? 'Portrait de Sania' : 'Portrait of Sania'}
              icon="🌷"
              label={fr ? 'Une photo de moi ♡' : 'A photo of me ♡'}
              className="about-portrait"
            />

            <span className="about-photo-sparkle" aria-hidden="true">
              ✧
            </span>
          </div>
        </div>
      </section>

      {/* MON HISTOIRE */}
      <section id="story" className="about-section about-story">
        <div className="about-section-inner about-split about-story-layout">
          <div className="about-memory-gallery">
            <div className="about-polaroid about-polaroid-left">
              <PhotoPlaceholder
                src="/images/mauritius.jpeg"
                alt={
                  fr
                    ? "Souvenir de l'île Maurice"
                    : 'A memory from Mauritius'
                }
                icon="🌴"
                label={fr ? 'Photo de Maurice' : 'Mauritius photo'}
              />
              <span>Mauritius ♡</span>
            </div>

            <div className="about-polaroid about-polaroid-right">
              <PhotoPlaceholder
                src="/images/france4.jpeg"
                alt={fr ? 'Souvenir en France' : 'A memory from France'}
                icon="🏛️"
                label={fr ? 'Photo en France' : 'France photo'}
              />
              <span>France ✧</span>
            </div>
          </div>

          <div className="about-copy">
            <p className="about-eyebrow">
              {fr ? 'MON HISTOIRE ✧' : 'MY STORY ✧'}
            </p>

            <h2>
              {fr ? 'De Maurice à la France' : 'From Mauritius to France'}
            </h2>

            <div className="about-text">
              <p>
                {fr
                  ? "Originaire de l'île Maurice, j'ai grandi entourée de différentes cultures et langues. Cette diversité fait partie de mon identité."
                  : "Originally from Mauritius, I grew up surrounded by different cultures and languages. That diversity is part of my identity."}
              </p>

              <p>
                {fr
                  ? "En 2024, j'ai commencé un nouveau chapitre en France pour poursuivre mes études. Depuis, chaque expérience m'aide à grandir et à construire mon propre chemin."
                  : "In 2024, I started a new chapter in France to pursue my studies. Since then, every experience has helped me grow and shape my own path."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MES LANGUES */}
      <section
        id="languages"
        className="about-section about-languages"
      >
        <div className="about-section-inner">
          <div className="about-centered-heading">
            <p className="about-eyebrow">
              BETWEEN CULTURES ✧
            </p>

            <h2>
              {fr
                ? 'Les langues que je parle'
                : 'The languages I speak'}
            </h2>

            <p className="about-section-description">
              {fr
                ? 'Cinq langues, plusieurs cultures, une seule histoire.'
                : 'Five languages, many cultures, one story.'}
            </p>
          </div>

          <div className="about-language-grid">
            {languages.map((item) => (
              <article
                className="about-language-card"
                key={item.name}
              >
                <span
                  className="about-language-flag"
                  aria-hidden="true"
                >
                  {item.flag}
                </span>

                <h3>{item.name}</h3>

                <p className="about-language-level">
                  {item.level}
                </p>

                <div
                  className="about-language-bars"
                  role="img"
                  aria-label={`${item.name} : ${item.level}`}
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className={
                        index < item.bars
                          ? 'about-language-bar about-language-bar-filled'
                          : 'about-language-bar'
                      }
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AU-DELÀ DE L'INGÉNIERIE */}
      <section id="beyond" className="about-section about-beyond">
        <div className="about-section-inner">
          <div className="about-centered-heading">
            <p className="about-eyebrow">
              {fr
                ? "AU-DELÀ DE L'INGÉNIERIE ✧"
                : 'BEYOND ENGINEERING ✧'}
            </p>

            <h2>
              {fr ? 'Bien plus que du code' : 'More than just code'}
            </h2>

            <p className="about-section-description">
              {fr
                ? "L'ingénierie occupe une grande place dans ma vie, mais j'aime aussi explorer d'autres formes de créativité."
                : "Engineering is a big part of my life, but I also love exploring other forms of creativity."}
            </p>
          </div>

          <div className="about-interest-grid">
            {interests.map((interest) => (
              <article
                className="about-interest-card"
                key={interest.title}
              >
                <span
                  className="about-interest-icon"
                  aria-hidden="true"
                >
                  {interest.icon}
                </span>

                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </article>
            ))}
          </div>

          {/* GALERIE DE PASSIONS */}
          <div className="about-hobby-gallery">
            <PhotoPlaceholder
              src="/images/about/journaling.jpg"
              alt={
                fr
                  ? 'Mon univers de journaling'
                  : 'My journaling world'
              }
              icon="📓"
              label={fr ? 'Mon journaling' : 'My journaling'}
            />

            <PhotoPlaceholder
              src="/images/about/reading.jpg"
              alt={fr ? 'Mes lectures' : 'My books'}
              icon="📚"
              label={fr ? 'Mes lectures' : 'My books'}
            />

            <PhotoPlaceholder
              src="/images/about/gaming.jpg"
              alt={fr ? 'Mon univers gaming' : 'My gaming world'}
              icon="🎮"
              label={
                fr ? 'Mon univers gaming' : 'My gaming world'
              }
            />
          </div>
        </div>
      </section>

      {/* MES PETITS BONHEURS */}
      <section
        id="favorites"
        className="about-section about-favorites"
      >
        <div className="about-section-inner about-centered-heading">
          <p className="about-eyebrow">
            {fr
              ? 'LES PETITES CHOSES ✧'
              : 'THE LITTLE THINGS ✧'}
          </p>

          <h2>
            {fr ? 'Mes petits bonheurs' : 'Little things I love'}
          </h2>

          <div className="about-favorites-list">
            <span>📚 {fr ? 'Les livres' : 'Books'}</span>
            <span>🌷 {fr ? 'Les fleurs' : 'Flowers'}</span>
            <span>📝 Journaling</span>
            <span>🎮 Gaming</span>
            <span>🎨 {fr ? 'Créer' : 'Creating'}</span>
          </div>

          <p className="about-closing">
            {fr
              ? 'Toujours curieuse, toujours en train de créer.'
              : 'Always curious, always creating.'}
          </p>
        </div>
      </section>
    </main>
  )
}
