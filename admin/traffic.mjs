const dayMs = 86_400_000
const projectId = process.env.POSTHOG_PROJECT_ID
const apiKey = process.env.POSTHOG_PERSONAL_API_KEY
const parisDate = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit',
})

export const pages = [
  ['/', 'Accueil'], ['/cv', 'CV'], ['/journey', 'Expériences (Parcours)'],
  ['/contact', 'Contact'], ['/projects', 'Projets'], ['/about', 'À propos'],
  ['/projects/rodrigues-water', 'Rodrigues'], ['/projects/opti-recom', 'OptiRecom'],
  ['/projects/cinapple', 'Cinapple'], ['/projects/queuecup', 'QueueCup'],
  ['/projects/cross-it', 'CrossIT'], ['/projects/ndc', 'Nuit du Code'],
]

const query = `
  SELECT day, path, views FROM (
  SELECT toString(toDate(timestamp, 'Europe/Paris')) AS day,
         lower(properties.$pathname) AS path, count() AS views
  FROM events
  WHERE event = '$pageview'
    AND properties.$host IN ('saniamattan.com', 'www.saniamattan.com')
    AND timestamp >= toDateTime(toDate(now(), 'Europe/Paris') - 29, 'Europe/Paris')
  GROUP BY day, path
  UNION ALL
  SELECT toString(toDate(min(timestamp), 'Europe/Paris')), '__first__', count()
  FROM events
  WHERE event = '$pageview' AND properties.$host IN ('saniamattan.com', 'www.saniamattan.com')
  )
  WHERE path = '__first__' OR replaceRegexpOne(path, '/+$', '') IN (${pages.map(([path]) => "'" + (path === '/' ? '' : path) + "'").join(', ')})
  LIMIT 1000
`

async function loadTraffic() {
  const updated = new Date()
  const end = Date.parse(parisDate.format(updated) + 'T00:00:00Z')
  const dates = Array.from({ length: 30 }, (_, i) =>
    new Date(end - (29 - i) * dayMs).toISOString().slice(0, 10))
  const demo = !projectId && !apiKey
  const series = pages.map(([path, label], index) => ({
    path, label,
    values: dates.map((_, i) => demo ? Math.round(8 + 5 * Math.sin(i * .7 + index) + ((i * 3 + index * 7) % 11)) : 0),
  }))
  if (demo) return { demo, dates, series, updated }

  if (!apiKey || !/^\d+$/.test(projectId ?? '')) throw new Error('Configuration PostHog incomplète.')
  const response = await fetch('https://eu.posthog.com/api/projects/' + projectId + '/query/', {
    method: 'POST', headers: { Authorization: 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: { kind: 'HogQLQuery', query }, refresh: 'force_blocking' }),
    signal: AbortSignal.timeout(20000), redirect: 'error',
  })
  if (!response.ok) throw new Error('Lecture PostHog indisponible.')
  const { results } = await response.json()
  if (!Array.isArray(results)) throw new Error('Réponse PostHog incomplète.')
  for (const [date, rawPath, count] of results) {
    if (typeof rawPath !== 'string') continue
    const path = rawPath.replace(/\/+$/, '') || '/'
    const item = series.find(page => page.path === path)
    const day = dates.indexOf(date)
    const value = Number(count)
    if (item && day >= 0 && Number.isSafeInteger(value) && value >= 0) item.values[day] += value
  }
  const first = results.find(row => row[1] === '__first__' && Number(row[2]) > 0)
  const start = first ? dates.filter(day => day < first[0]).length : dates.length
  return { demo, dates: dates.slice(start),
    series: series.map(item => ({ ...item, values: item.values.slice(start) })), updated }
}

let cached
let pending
export async function traffic(refresh = false) {
  if (!refresh && cached && Date.now() - cached.updated.getTime() < dayMs) return cached
  if (!pending) {
    pending = loadTraffic().then(report => {
      cached = report
      return report
    }).finally(() => { pending = undefined })
  }
  try {
    return await pending
  } catch (error) {
    if (cached) return { ...cached, stale: true }
    throw error
  }
}
