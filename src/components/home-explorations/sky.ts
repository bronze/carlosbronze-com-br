// The sky of exploration 4: where the sun and moon sit at a given hour in
// Rio, and what the moon looks like on a given day. Shared by the scene and
// its debug panel.

// The arc, in the scene's viewBox units: from the left edge to the right one,
// starting and ending a sun's width below the bottom, peaking well above Pão
// de Açúcar. The sun takes it from 6h to 18h, the moon from 18h to 6h.
export const arc = { left: 130, right: 570, horizon: 200, top: -30 }

// t runs from 0 (rising) to 1 (setting).
export function pointOnArc(t: number) {
  return {
    x: arc.left + (arc.right - arc.left) * t,
    y: arc.horizon - (arc.horizon - arc.top) * Math.sin(Math.PI * t),
  }
}

export function arcPath(steps = 48) {
  return Array.from({ length: steps + 1 }, (_, i) => {
    const { x, y } = pointOnArc(i / steps)
    return `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`
  }).join(' ')
}

// Which body is up at this hour, and how far along the arc it is.
export function skyAt(hour: number) {
  const day = hour >= 6 && hour < 18
  const t = ((((hour - (day ? 6 : 18)) % 24) + 24) % 24) / 12
  return { day, t }
}

const clock = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'America/Sao_Paulo',
  hour: 'numeric',
  minute: 'numeric',
  hourCycle: 'h23',
})

// Hours since midnight in Rio, e.g. 17.5 for 17:30.
export function hourInRio(date = new Date()) {
  const parts = clock.formatToParts(date)
  const part = (type: string) => Number(parts.find(p => p.type === type)!.value)
  return part('hour') + part('minute') / 60
}

export function formatHour(hour: number) {
  const minutes = Math.round(hour * 60) % (24 * 60)
  return `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`
}

// Moon phase from 0 to 1: 0 new, 0.25 first quarter, 0.5 full, 0.75 last
// quarter. Counted from a known new moon (6 Jan 2000, 18:14 UTC), in mean
// synodic months: off by up to a day, which a drawing this size can't show.
const knownNewMoon = Date.UTC(2000, 0, 6, 18, 14)
const synodicMonth = 29.530588853 * 24 * 60 * 60 * 1000
export function moonPhase(date = new Date()) {
  return ((((date.getTime() - knownNewMoon) / synodicMonth) % 1) + 1) % 1
}

// The lit part of a moon of radius r centred on 0,0, as seen from Rio.
// Seen from the southern hemisphere the moon is flipped: it waxes from the
// left. The outer edge is a half circle; the terminator is a half ellipse
// whose width follows the phase.
export function litMoonPath(phase: number, r: number) {
  const k = Math.cos(2 * Math.PI * phase)
  const sweep = k > 0 ? 0 : 1
  const shape = `M0 ${-r} A${r} ${r} 0 0 1 0 ${r} A${(Math.abs(k) * r).toFixed(2)} ${r} 0 0 ${sweep} 0 ${-r} Z`
  // Built lit on the right (northern waxing); waxing in the south is mirrored.
  const waxing = phase < 0.5
  return { d: shape, mirror: waxing }
}

// The four main phases are moments, so they get a narrow window (about a
// day either side); the names in between cover the rest.
export function phaseName(phase: number) {
  const near = (p: number) => Math.min(Math.abs(phase - p), 1 - Math.abs(phase - p)) < 0.035
  if (near(0)) return { pt: 'nova', en: 'new' }
  if (near(0.25)) return { pt: 'quarto crescente', en: 'first quarter' }
  if (near(0.5)) return { pt: 'cheia', en: 'full' }
  if (near(0.75)) return { pt: 'quarto minguante', en: 'last quarter' }
  if (phase < 0.25) return { pt: 'crescente', en: 'waxing crescent' }
  if (phase < 0.5) return { pt: 'crescente gibosa', en: 'waxing gibbous' }
  if (phase < 0.75) return { pt: 'minguante gibosa', en: 'waning gibbous' }
  return { pt: 'minguante', en: 'waning crescent' }
}
