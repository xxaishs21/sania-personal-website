import { createHash, randomBytes, timingSafeEqual } from 'node:crypto'
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import sirv from 'sirv'
import { traffic } from './traffic.mjs'

const chartScript = await readFile(new URL('./chart.js', import.meta.url))

const servePortfolio = process.argv.includes('--portfolio')
const publicFiles = servePortfolio && sirv(fileURLToPath(new URL('../dist/', import.meta.url)), {
  single: true, etag: true,
})
const port = Number(servePortfolio ? process.env.PORT || 8080 : process.env.ADMIN_PORT || 5174)
const host = `127.0.0.1:${port}`
const password = process.env.ADMIN_PASSWORD
if (!password && !servePortfolio) throw new Error('Définis ADMIN_PASSWORD dans .env.local ou dans ton environnement.')
const sessionSeconds = 30 * 60
const sessions = new Map()

const styles = `
  * { box-sizing: border-box; }
  :root { color-scheme: light; color: #5e4351; font-family: system-ui, sans-serif; background: #fff8fa; }
  body { margin: 0; min-height: 100svh; background: radial-gradient(ellipse at 12% 8%, #f5dce6, transparent 55%), radial-gradient(ellipse at 98% 88%, #f4dbe4, transparent 55%); }
  main { width: min(100% - 2rem, 880px); margin: auto; padding: clamp(2rem, 8vw, 5rem) 0; }
  .card { background: #fffcfd; border: 1px solid #ebcad7; border-radius: 24px; padding: clamp(1.3rem, 4vw, 2.35rem); box-shadow: 0 18px 56px #78274712; }
  .login { max-width: 450px; margin: 6vh auto 0; }
  header { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
  h1, h2 { font-family: Georgia, serif; font-weight: 500; color: #70253f; }
  h1 { margin: .2rem 0 .65rem; font-size: clamp(2.1rem, 6vw, 3.6rem); }
  h2 { margin: 0 0 .35rem; font-size: 1.48rem; }
  p { margin: 0; line-height: 1.55; }
  .label { color: #833751; font-weight: 700; font-size: .75rem; letter-spacing: .14em; text-transform: uppercase; }
  .note { margin: 1rem 0; border-radius: 12px; background: #f8e8ef; padding: .7rem .9rem; color: #70253f; }
  .fields { display: grid; gap: .7rem; margin-top: 1.5rem; }
  label { color: #70253f; font-weight: 650; }
  input, button, .range a { font: inherit; min-height: 44px; border: 1px solid #c98fa6; border-radius: 11px; padding: .65rem .9rem; }
  input { background: #fff; color: #502238; width: 100%; }
  button, .range a { cursor: pointer; background: #fff9fb; color: #70253f; font-weight: 650; }
  .primary, .range a[aria-current] { background: #792d49; color: #fff; border-color: #792d49; }
  :focus-visible { outline: 2px solid #9a4868; outline-offset: 3px; }
  .controls { display: flex; flex-wrap: wrap; gap: .5rem; margin: .7rem 0 1rem; }
  .controls label { display: inline-flex; align-items: center; gap: .4rem; border: 1px solid #dbc1cc; border-radius: 24px; padding: .45rem .75rem; cursor: pointer; }
  .controls input { width: 1rem; min-height: auto; accent-color: var(--color, #792d49); }
  .controls label:has(:checked) { border-color: var(--color, #792d49); background: #fcf0f4; }
  .report { margin-top: 1.5rem; }
  fieldset { border: 0; margin: 1rem 0; padding: 0; }
  legend { font-weight: 650; color: #70253f; }
  svg { display: block; width: 100%; height: auto; }
  svg text { font: 13px system-ui; fill: #684653; }
  #detail { display: block; min-height: 2.5em; margin-top: .5rem; }
  #date { padding: 0; accent-color: #792d49; }
  #status { margin: .7rem 0; font-size: .9rem; }
`

function page(content) {
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow"><title>Admin · Portfolio Sania</title>
    <style>${styles}</style></head><body><main>${content}</main></body></html>`
}

function login(error = '') {
  return page(`<section class="card login" aria-labelledby="title">
    <span class="label">Accès privé</span><h1 id="title">Espace admin</h1>
    <p>Connecte-toi pour consulter les statistiques du portfolio.</p>
    ${error ? `<p class="note" role="alert">${error}</p>` : ''}
    <form method="post" action="/admin/login" class="fields">
      <label for="code">Code d’accès</label>
      <input id="code" name="code" type="password" autocomplete="off" required maxlength="256">
      <button class="primary">Se connecter</button>
    </form></section>`)
}

function dashboard() {
  return page(`<header><div><span class="label">Portfolio Sania</span><h1>Statistiques</h1></div>
    <form method="post" action="/admin/logout"><button>Se déconnecter</button></form></header>
    <section class="card report"><h2>Vues par page</h2>
      <p id="status" role="status">Chargement…</p><button type="button" id="refresh">Actualiser</button>
      <div id="report" hidden><fieldset><legend>Période</legend><div class="controls">
        <label><input type="radio" name="days" value="7" checked>7 jours</label>
        <label><input type="radio" name="days" value="30">30 jours</label></div></fieldset>
        <fieldset><legend>Pages à comparer</legend><div class="controls" id="pages"></div></fieldset>
        <svg id="chart" viewBox="0 0 660 240" role="img" aria-label="Nombre de vues par jour"></svg>
        <label for="date">Détail par jour</label><input type="range" id="date" min="0" value="0">
        <output id="detail" for="date"></output></div></section>
      <script type="module" src="/admin/chart.js"></script>`)
}

function cookie(response, value, maxAge) {
  response.setHeader('Set-Cookie', `sania_admin_demo=${value}; Path=/admin; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${servePortfolio ? '; Secure' : ''}`)
}

function redirect(response) {
  response.writeHead(303, { Location: '/admin' }).end()
}

const hash = value => createHash('sha256').update(value).digest()
const passwordHash = password ? hash(password) : null

const server = createServer(async (request, response) => {
  if (!request.url?.startsWith('/') || !request.headers.host || (!servePortfolio && request.headers.host !== host)) {
    return response.writeHead(400).end()
  }
  const path = request.url.split('?', 1)[0]
  if (servePortfolio && path !== '/admin' && !path.startsWith('/admin/')) {
    if (!['GET', 'HEAD'].includes(request.method)) return response.writeHead(405, { Allow: 'GET, HEAD' }).end()
    return publicFiles(request, response)
  }
  const origin = servePortfolio ? `https://${request.headers.host}` : `http://${host}`
  response.setHeader('Cache-Control', 'no-store')
  response.setHeader('X-Content-Type-Options', 'nosniff')
  response.setHeader('Content-Security-Policy', "default-src 'none'; style-src 'unsafe-inline'; script-src 'self'; connect-src 'self'; form-action 'self'; frame-ancestors 'none'")
  if (!passwordHash) {
    return response.writeHead(503, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Accès admin temporairement indisponible.')
  }
  const now = Date.now()
  const token = request.headers.cookie?.match(/(?:^|;\s*)sania_admin_demo=([a-f0-9]{48})(?:;|$)/)?.[1]
  const authenticated = token !== undefined && (sessions.get(token) ?? 0) > now

  if (request.method === 'GET' && path === '/') return redirect(response)
  if (['GET', 'HEAD'].includes(request.method) && (path === '/admin' || path === '/admin/')) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    return response.end(authenticated ? dashboard() : login())
  }
  if (request.method === 'GET' && path === '/admin/chart.js') {
    response.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8' }).end(chartScript)
    return
  }
  if (path === '/admin/data' && ['GET', 'POST'].includes(request.method)) {
    if (!authenticated) return response.writeHead(401).end()
    const refresh = request.method === 'POST'
    if (refresh && request.headers.origin !== origin) return response.writeHead(403).end()
    try {
      const data = await traffic(refresh)
      return response.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(data))
    } catch {
      return response.writeHead(503).end()
    }
  }
  if (request.method !== 'POST' || !['/admin/login', '/admin/logout'].includes(path)) {
    return response.writeHead(404).end()
  }
  if (request.headers.origin !== origin || request.headers['content-type']?.split(';')[0] !== 'application/x-www-form-urlencoded') {
    return response.writeHead(403).end()
  }
  if (path === '/admin/logout') {
    if (token) sessions.delete(token)
    cookie(response, '', 0)
    return redirect(response)
  }
  try {
    let body = ''
    for await (const chunk of request.iterator({ destroyOnReturn: false })) {
      body += chunk.toString()
      if (body.length > 4096) {
        request.resume()
        return response.writeHead(413).end()
      }
    }
    const submitted = new URLSearchParams(body).get('code') ?? ''
    if (!timingSafeEqual(hash(submitted), passwordHash)) {
      response.writeHead(401, { 'Content-Type': 'text/html; charset=utf-8' })
      return response.end(login('Code incorrect.'))
    }
    for (const [id, expiry] of sessions) {
      if (expiry <= now || id === token) sessions.delete(id)
    }
    const id = randomBytes(24).toString('hex')
    sessions.set(id, now + sessionSeconds * 1000)
    cookie(response, id, sessionSeconds)
    return redirect(response)
  } catch {
    if (!response.destroyed) response.writeHead(400).end()
  }
})

server.listen(port, servePortfolio ? '0.0.0.0' : '127.0.0.1', () => {
  console.log(servePortfolio ? `Portfolio et /admin sur le port ${port}` : `Admin disponible sur http://${host}/admin`)
})
