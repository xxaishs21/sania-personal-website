
import { useLanguage } from '../LanguageContext'
import './Contact.css'

export default function Contact() {
  const { language } = useLanguage()
  const fr = language === 'fr'

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:a.sania.mattan@gmail.com',
      description: fr
        ? 'Envoyez-moi un email'
        : 'Send me an email',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aishwaria-sania-mattan',
      description: fr
        ? 'Mon parcours professionnel'
        : 'My professional journey',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/xxaishs21',
      description: fr
        ? 'Mon code et mes projets'
        : 'My code and projects',
    },
  ]

  return (
    <main className="contact-page">
      <section className="contact-editorial">
        <div className="contact-editorial-inner">
          <span
            className="contact-decor contact-decor-left"
            aria-hidden="true"
          >
            ✧
          </span>

          <span
            className="contact-decor contact-decor-right"
            aria-hidden="true"
          >
            ✳
          </span>

          <p className="contact-eyebrow">
            {fr ? 'RESTONS EN CONTACT ✧' : "LET'S CONNECT ✧"}
          </p>

          <h1>
            {fr ? (
              <>
                Et si nous
                <br />
                <em>échangions ?</em>
              </>
            ) : (
              <>
                Let's create
                <br />
                <em>something together.</em>
              </>
            )}
          </h1>

          <p className="contact-editorial-description">
            {fr
              ? "Une idée, une opportunité ou simplement envie de faire connaissance ? Je serais ravie d'échanger avec vous."
              : "Have an idea, an opportunity, or simply want to say hello? I'd love to connect with you."}
          </p>

          <div className="contact-editorial-divider">
            <span>✦</span>
          </div>

          <p className="contact-find-me">
            {fr ? 'CONTACTEZ-MOI' : 'GET IN TOUCH'}
          </p>

          <div className="contact-social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={
                  social.name === 'Email'
                    ? undefined
                    : '_blank'
                }
                rel={
                  social.name === 'Email'
                    ? undefined
                    : 'noopener noreferrer'
                }
                className="contact-social-link"
                aria-label={`${social.name} — ${social.description}`}
                title={social.description}
              >
                {social.name === 'Email' ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect
                      x="2"
                      y="4"
                      width="20"
                      height="16"
                      rx="3"
                    />
                    <path d="m3 6 9 7 9-7" />
                  </svg>
                ) : social.name === 'LinkedIn' ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .297a12 12 0 0 0-3.793 23.385c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.303-5.467-1.333-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.53 11.53 0 0 1 6.006 0c2.291-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .297z" />
                  </svg>
                )}

                <span>{social.name}</span>

                <span
                  className="contact-social-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>

          <p className="contact-editorial-signature">
            with love, Sania ♡
          </p>
        </div>
      </section>
    </main>
  )
}
