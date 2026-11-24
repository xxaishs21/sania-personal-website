const chart = document.querySelector('#chart')
const slider = document.querySelector('#date')
const detail = document.querySelector('#detail')
const refresh = document.querySelector('#refresh')
const statusText = document.querySelector('#status')
const palette = ['#b36f16', '#832b50', '#426e83', '#be507e', '#6862a0', '#397b65',
  '#906e49', '#9e5941', '#5d728b', '#894c84', '#52773c', '#7e5956']
const selected = new Set(['/cv', '/contact'])
const dateLabel = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short', timeZone: 'UTC' })
let report
let period = 7
let dates = []
let lines = []
let plotWidth = 660
const left = 42
const right = 20
const top = 18
const bottom = 183

function mark(tag, attributes, content) {
  const node = document.createElementNS('http://www.w3.org/2000/svg', tag)
  for (const [name, value] of Object.entries(attributes)) node.setAttribute(name, value)
  if (content !== undefined) node.textContent = content
  chart.append(node)
}

function x(index) {
  if (dates.length === 1) return (plotWidth + left - right) / 2
  return left + index * (plotWidth - left - right) / (dates.length - 1)
}

function showDay() {
  if (!dates.length || !lines.length) return
  const i = Number(slider.value)
  const date = dateLabel.format(new Date(dates[i]))
  slider.setAttribute('aria-valuetext', date)
  detail.textContent = date + ' · ' + lines.map(line => line.label + ' : ' + line.values[i]).join('  ·  ')
}

function draw() {
  if (!report) return
  dates = report.dates.slice(-period)
  lines = report.series.filter(line => selected.has(line.path)).map(line => ({
    ...line, values: line.values.slice(-period),
  }))
  chart.replaceChildren()
  slider.disabled = !dates.length || !lines.length
  if (slider.disabled) {
    chart.style.display = 'none'
    detail.textContent = dates.length ? 'Coche une page à afficher.' : 'Aucune vue enregistrée sur cette période.'
    return
  }
  chart.style.display = ''
  plotWidth = Math.max(230, Math.round(chart.getBoundingClientRect().width))
  chart.setAttribute('viewBox', '0 0 ' + plotWidth + ' 215')
  const max = Math.max(1, ...lines.flatMap(line => line.values))
  const step = Math.max(1, Math.ceil(max / 4))
  const ceiling = step * 4
  const y = value => bottom - (bottom - top) * value / ceiling
  for (let tick = 0; tick <= ceiling; tick += step) {
    mark('line', { x1: left, x2: plotWidth - right, y1: y(tick), y2: y(tick), stroke: '#e9d3dc' })
    mark('text', { x: left - 8, y: y(tick) + 4, 'text-anchor': 'end' }, tick)
  }
  for (const i of new Set([0, Math.floor((dates.length - 1) / 2), dates.length - 1])) {
    mark('text', { x: x(i), y: 207, 'text-anchor': i === dates.length - 1 ? 'end' : 'middle' },
      dateLabel.format(new Date(dates[i])))
  }
  for (const line of lines) {
    mark('polyline', { points: line.values.map((value, i) => x(i) + ',' + y(value)).join(' '),
      fill: 'none', stroke: line.color, 'stroke-width': 2.5, 'stroke-linejoin': 'round' })
    if (dates.length <= 7) line.values.forEach((value, i) =>
      mark('circle', { cx: x(i), cy: y(value), r: 3, fill: line.color }))
  }
  slider.max = String(dates.length - 1)
  slider.value = slider.max
  showDay()
}

function buildFilters() {
  const group = document.querySelector('#pages')
  group.replaceChildren()
  for (const line of report.series) {
    const label = document.createElement('label')
    label.style.setProperty('--color', line.color)
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = selected.has(line.path)
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) selected.add(line.path)
      else selected.delete(line.path)
      draw()
    })
    label.append(checkbox, line.label)
    group.append(label)
  }
}

async function load(force = false) {
  refresh.disabled = true
  try {
    const result = await fetch('/admin/data', { method: force ? 'POST' : 'GET' })
    if (result.status === 401) { location.reload(); return }
    if (!result.ok) throw Error()
    report = await result.json()
    report.series.forEach((line, i) => { line.color = palette[i % palette.length] })
    const updated = new Date(report.updated).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' })
    statusText.textContent = (report.demo ? 'Démonstration · chiffres fictifs. ' : 'saniamattan.com · ') +
      'Mis à jour le ' + updated + (report.stale ? ' · Actualisation indisponible.' : ' · Cache de 24 h.')
    document.querySelector('#report').hidden = false
    buildFilters()
    draw()
  } catch {
    statusText.textContent = 'Lecture PostHog indisponible. Vérifie la configuration du serveur puis réessaie.'
  } finally {
    refresh.disabled = false
  }
}

document.querySelectorAll('[name=days]').forEach(input => input.addEventListener('change', () => {
  period = Number(input.value)
  draw()
}))
chart.addEventListener('pointermove', event => {
  if (!dates.length) return
  const pos = event.clientX - chart.getBoundingClientRect().left
  slider.value = String(Math.round((pos - left) / (plotWidth - left - right) * (dates.length - 1)))
  showDay()
})
slider.addEventListener('input', showDay)
refresh.addEventListener('click', () => load(true))
window.addEventListener('resize', draw)
load()
