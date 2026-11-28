
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'
import {
  setVisitorMode,
  useVisitorMode
} from '../VisitorMode'
import '../VisitorMode.css'

export default function Navbar() {
  const { language, setLanguage } = useLanguage()
  const fr = language === 'fr'

  const visitorMode = useVisitorMode()
  const isRecruiter = visitorMode === 'recruiter'

  return (
    <header className="site-header">
      <nav className="nav">
        <div className="nav-brand-group">
          <NavLink to="/" className="logo">
            sania <span>♡</span>
          </NavLink>

          <div
            className="visitor-navbar-switch"
            role="group"
            aria-label={
              fr
                ? 'Choisir le mode de visite'
                : 'Choose visitor mode'
            }
          >
            <button
              type="button"
              className={!isRecruiter ? 'active' : ''}
              onClick={() => setVisitorMode('visitor')}
              aria-pressed={!isRecruiter}
              title={fr ? 'Mode Découverte' : 'Discovery mode'}
            >
              <span>{fr ? 'Découverte' : 'Discover'}</span>
            </button>

            <button
              type="button"
              className={isRecruiter ? 'active' : ''}
              onClick={() => setVisitorMode('recruiter')}
              aria-pressed={isRecruiter}
              title={fr ? 'Mode Recruteur' : 'Recruiter mode'}
            >
              <span>{fr ? 'Recruteur' : 'Recruiter'}</span>
            </button>
          </div>
        </div>

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
