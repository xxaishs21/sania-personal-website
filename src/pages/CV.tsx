
import { useLanguage } from '../LanguageContext'
import './CV.css'

export default function CV() {
  const { language } = useLanguage()
  const fr = language === 'fr'

  return (
    <main className="cv-page">
      <section className="cv-section">
        <div className="cv-container">
          <span
            className="cv-decoration cv-decoration-left"
            aria-hidden="true"
          >
            ✧
          </span>

          <span
            className="cv-decoration cv-decoration-right"
            aria-hidden="true"
          >
            ✳
          </span>

          <p className="cv-eyebrow">
            {fr ? 'MON PROFIL ✧' : 'MY PROFILE ✧'}
          </p>

          <h1 className="cv-title">
            {fr ? (
              <>
                Mon <em>CV.</em>
              </>
            ) : (
              <>
                My <em>Resume.</em>
              </>
            )}
          </h1>

          <p className="cv-description">
            {fr
              ? 'Retrouvez bientôt mon parcours, mes expériences et mes compétences dans un document à consulter ou à télécharger.'
              : 'Soon you will be able to explore my education, experience and skills in a document available to view or download.'}
          </p>

          <div className="cv-preview">
            <div className="cv-preview-paper">
              <div className="cv-paper-header">
                <span className="cv-paper-name">
                  Aishwaria Sania Mattan
                </span>

                <span className="cv-paper-role">
                  {fr
                    ? 'Étudiante ingénieure'
                    : 'Engineering student'}
                </span>
              </div>

              <div className="cv-paper-line" />

              <div className="cv-paper-section">
                <span>
                  {fr ? 'PROFIL' : 'PROFILE'}
                </span>
                <div className="cv-placeholder-line long" />
                <div className="cv-placeholder-line medium" />
                <div className="cv-placeholder-line short" />
              </div>

              <div className="cv-paper-section">
                <span>
                  {fr ? 'FORMATION' : 'EDUCATION'}
                </span>
                <div className="cv-placeholder-line long" />
                <div className="cv-placeholder-line medium" />
              </div>

              <div className="cv-paper-section">
                <span>
                  {fr ? 'EXPÉRIENCES' : 'EXPERIENCE'}
                </span>
                <div className="cv-placeholder-line long" />
                <div className="cv-placeholder-line medium" />
                <div className="cv-placeholder-line short" />
              </div>

              <div className="cv-paper-section">
                <span>
                  {fr ? 'COMPÉTENCES' : 'SKILLS'}
                </span>
                <div className="cv-placeholder-line long" />
                <div className="cv-placeholder-line short" />
              </div>
            </div>

            <div className="cv-coming-soon">
              <span aria-hidden="true">✧</span>
              {fr ? 'Bientôt disponible' : 'Coming soon'}
            </div>
          </div>

          <div className="cv-actions">
            <button
              type="button"
              className="cv-button cv-button-primary"
              disabled
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 17v3h14v-3" />
              </svg>

              {fr ? 'Télécharger mon CV' : 'Download my resume'}
            </button>

            <button
              type="button"
              className="cv-button cv-button-secondary"
              disabled
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>

              {fr ? 'Consulter mon CV' : 'View my resume'}
            </button>
          </div>

          <p className="cv-note">
            {fr
              ? 'Les versions française et anglaise seront disponibles prochainement.'
              : 'French and English versions will be available soon.'}
          </p>

          <p className="cv-signature">
            with love, Sania ♡
          </p>
        </div>
      </section>
    </main>
  )
}
