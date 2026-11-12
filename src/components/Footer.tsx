import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (

    <footer className="site-footer">
    <div className="footer-content">
        <div className="footer-identity">
        <p className="footer-name">Aishwaria Sania Mattan</p>
        <p className="footer-copyright">
            © 2026 · Made with ♡
        </p>
        </div>

        
    <div className="footer-socials">
    <a
        href="https://github.com/xxaishs21"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mon profil GitHub"
        title="GitHub"
    >
        <FaGithub size={22} />
    </a>

    <a
        href="https://www.linkedin.com/in/aishwaria-sania-mattan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Mon profil LinkedIn"
        title="LinkedIn"
    >
        <FaLinkedin size={22} />
    </a>
    </div>

    </div>
    </footer>
    )
}
 