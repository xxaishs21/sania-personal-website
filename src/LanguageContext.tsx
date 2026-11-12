
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import fr from './locales/fr'
import en from './locales/en'

type Language = 'fr' | 'en'

const translations = { fr, en }

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: typeof fr
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('sania-language')
    return saved === 'en' ? 'en' : 'fr'
  })

  useEffect(() => {
    localStorage.setItem('sania-language', language)
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}
