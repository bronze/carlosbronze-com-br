// The white rabbit's payoff: a few seconds of Matrix code rain over the page.
// A plain 2D canvas, loaded only when someone finds the rabbit. The trails are
// painted with translucent black, so the page goes dark under the rain on its
// own. When time's up, no new streams start; the ones still falling finish
// their way down, then the whole thing fades out. Any key, click or tap ends
// it early.

const GLYPHS = 'ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ012345789Z:・."=*+-<>¦'
const RUN_MS = 9000
// Slow streams could take a while to clear the screen; don't wait for them all.
const DRAIN_MS = 3500
const FADE_MS = 1200

let running = false

export function rain() {
  if (running) return
  running = true

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
  const canvas = document.createElement('canvas')
  canvas.setAttribute('aria-hidden', 'true')
  Object.assign(canvas.style, {
    position: 'fixed',
    inset: '0',
    width: '100vw',
    height: '100dvh',
    zIndex: '2147483647',
    cursor: 'pointer',
    transition: `opacity ${FADE_MS}ms ease`,
  })
  document.body.append(canvas)

  const ctx = canvas.getContext('2d')!
  const dpr = Math.min(devicePixelRatio || 1, 2)
  const size = 16 * dpr
  const width = (canvas.width = innerWidth * dpr)
  const height = (canvas.height = innerHeight * dpr)
  const columns = Math.ceil(width / size)
  const rows = Math.ceil(height / size)
  // Positions are in rows, fractional so each stream can fall at its own
  // speed. Starts are spread over a whole screen height above the top, so the
  // streams arrive one by one instead of as a single wave.
  const drops = Array.from({ length: columns }, () => -Math.random() * rows)
  const speed = () => 0.3 + Math.random() * 0.8
  const speeds = Array.from({ length: columns }, speed)
  const pick = () => GLYPHS[(Math.random() * GLYPHS.length) | 0]

  ctx.font = `${size}px ui-monospace, monospace`
  ctx.textBaseline = 'top'

  let frame = 0
  let last = 0
  let draining = false
  function draw(now: number) {
    frame = requestAnimationFrame(draw)
    if (now - last < 50) return // ~20fps reads more like the film than 60
    last = now
    ctx.fillStyle = 'rgba(0, 0, 0, 0.09)'
    ctx.fillRect(0, 0, width, height)
    let falling = 0
    for (let i = 0; i < columns; i++) {
      const from = Math.floor(drops[i])
      drops[i] += speeds[i]
      const row = Math.floor(drops[i])
      if (row > rows) {
        // Off the bottom: once in a while, start again a little above the top.
        if (!draining && Math.random() < 0.1) {
          drops[i] = -Math.random() * rows * 0.5
          speeds[i] = speed()
        }
        continue
      }
      falling++
      // Only redraw when the stream reaches a new row. The glyph it leaves
      // turns green; the new one leads in near-white.
      if (row === from || row < 0) continue
      ctx.fillStyle = '#22c55e'
      ctx.fillText(pick(), i * size, from * size)
      ctx.fillStyle = '#dcfce7'
      ctx.fillText(pick(), i * size, row * size)
    }
    if (draining && falling === 0) end()
  }

  // Without motion: just the line, on black, then the same fade.
  function still() {
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, width, height)
    ctx.fillStyle = '#22c55e'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('Follow the white rabbit.', width / 2, height / 2)
  }

  let ended = false
  function end() {
    if (ended) return
    ended = true
    clearTimeout(timer)
    removeEventListener('keydown', end)
    canvas.style.opacity = '0'
    setTimeout(() => {
      cancelAnimationFrame(frame)
      canvas.remove()
      running = false
    }, FADE_MS)
  }

  if (reduced) still()
  else frame = requestAnimationFrame(draw)
  let timer = setTimeout(
    reduced
      ? end
      : () => {
          draining = true
          timer = setTimeout(end, DRAIN_MS)
        },
    reduced ? 2500 : RUN_MS,
  )
  canvas.addEventListener('pointerdown', end)
  addEventListener('keydown', end)
  document.addEventListener('astro:before-swap', end, { once: true })
}
