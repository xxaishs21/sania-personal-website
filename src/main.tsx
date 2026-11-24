
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { LanguageProvider } from './LanguageContext'
import App from './App'
import './index.css'

const token = import.meta.env.VITE_POSTHOG_PROJECT_TOKEN
const host = import.meta.env.VITE_POSTHOG_HOST

if (token && host) {
  void import('posthog-js').then(({ default: posthog }) => {
    posthog.init(token, {
      api_host: host,
      defaults: '2026-08-30',
      capture_pageview: 'history_change',
      capture_pageleave: false,
      autocapture: false,
      disable_session_recording: true,
      disable_surveys: true,
      person_profiles: 'never',
      before_send: event => event?.event === '$pageview' ? event : null,
    })
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
