
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../LanguageContext'

export default function Navbar() {
  const { language } = useLanguage()
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

          <NavLink to="/contact">
            {fr ? 'Me contacter' : 'Contact'}
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
