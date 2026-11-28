
import { useSyncExternalStore } from 'react'

export type VisitorMode = 'recruiter' | 'visitor' | null

const STORAGE_KEY = 'sania-portfolio-visitor-mode'
const CHANGE_EVENT = 'sania-visitor-mode-change'

function readMode(): VisitorMode {
  if (typeof window === 'undefined') return null

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)

    if (saved === 'recruiter' || saved === 'visitor') {
      return saved
    }
  } catch {
    return null
  }

  return null
}

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') {
    return () => {}
  }

  window.addEventListener(CHANGE_EVENT, callback)
  window.addEventListener('storage', callback)

  return () => {
    window.removeEventListener(CHANGE_EVENT, callback)
    window.removeEventListener('storage', callback)
  }
}

function getServerSnapshot(): VisitorMode {
  return null
}

export function setVisitorMode(mode: Exclude<VisitorMode, null>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, mode)
  } catch {
    // The choice still works for the current interaction.
  }

  window.dispatchEvent(new Event(CHANGE_EVENT))
}

export function useVisitorMode() {
  return useSyncExternalStore(
    subscribe,
    readMode,
    getServerSnapshot
  )
}
