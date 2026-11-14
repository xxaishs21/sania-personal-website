
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'

export default function Navbar() {
  const { language, setLanguage } = useLanguage()
  const fr = language === 'fr'

  return (
    <header className="site-header">
      <nav className="nav">
        <NavLink to="/" className="logo">
          sania <span>♡</span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" end>
            {fr ? 'Accueil' : 'Home'}
          </NavLink>

          <NavLink to="/about">
            {fr ? 'À propos' : 'About'}
          </NavLink>

          <NavLink to="/journey">
            {fr ? 'Parcours' : 'Journey'}
          </NavLink>

          <NavLink to="/projects">
            {fr ? 'Projets' : 'Projects'}
          </NavLink>

          <NavLink to="/cv">
            {fr ? 'Mon CV' : 'My Resume'}
          </NavLink>

          <NavLink to="/contact">
            {fr ? 'Me contacter' : 'Contact'}
          </NavLink>

          <div
            className="language-switcher"
            role="group"
            aria-label={fr ? 'Choisir la langue' : 'Choose language'}
          >
            <button
              type="button"
              className={fr ? 'active' : ''}
              onClick={() => setLanguage('fr')}
              aria-pressed={fr}
            >
              FR
            </button>

            <button
              type="button"
              className={!fr ? 'active' : ''}
              onClick={() => setLanguage('en')}
              aria-pressed={!fr}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
