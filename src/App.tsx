import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './App.css'

function App() {
  return (
    <>
      <header>
        <nav aria-label="Navigation principale">
          <a href="#accueil">Accueil</a>
          <a href="#apropos">À propos</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="accueil">
          <p>Bienvenue dans mon univers ✨</p>

          <h1>Aishwaria Sania Mattan</h1>

          <p>
            Étudiante ingénieure à Centrale Nantes | Alternante chez Covéa / MMA
          </p>

          <p>
            Entre ingénierie, technologie et créativité,
            découvrez mon parcours et mes projets.
          </p>

          <a href="#apropos">Me découvrir</a>
        </section>

        <section id="apropos">
          <h2>À propos de moi 🌸</h2>

          <p>
            Je suis étudiante ingénieure à Centrale Nantes,
            spécialisée en systèmes embarqués communicants,
            et alternante chez Covéa.
          </p>

          <p>
            Cet espace me permet de partager mon parcours,
            mes expériences et mes centres d'intérêt.
          </p>
        </section>

        <section id="projets">
          <h2>Mes projets 💻</h2>

          <p>
            Retrouvez prochainement mes projets techniques,
            académiques et créatifs.
          </p>
        </section>

        <section id="contact">
          <h2>Restons en contact 💌</h2>

          <p>
            Mes coordonnées, mon CV et mes liens professionnels
            seront bientôt disponibles ici.
          </p>
        </section>
      </main>

      
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

    </>
  )
}

export default App
