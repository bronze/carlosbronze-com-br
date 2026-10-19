// The sky of exploration 4: where the sun and moon sit at a given hour in
// Rio, and what the moon looks like on a given day. Shared by the scene and
// its debug panel.

// The arc, in the scene's viewBox units: from the left edge to the right one,
// starting and ending a sun's width below the bottom, peaking well above Pão
// de Açúcar. The sun takes it from 6h to 18h, stretched by `twilight` hours
// at both ends so it lingers low at dawn and dusk. The moon takes twelve
// hours too, but when depends on its phase (see moonRise).
export const twilight = 1
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

// How far along the arc a body is at this hour (0 rising, 1 setting), or
// null while it's down.
export function arcPosition(hour: number, rise: number, extra = 0) {
  const t = ((((hour - rise + extra) % 24) + 24) % 24) / (12 + 2 * extra)
  return t <= 1 ? t : null
}

// The moon rises about 50 minutes later each day, a full turn of the clock
// per cycle: with the sun when new (6h), at noon at first quarter, at sunset
// when full (18h), at midnight at last quarter.
//
// It's an approximation, off by an hour or two: the real delay runs 30 to 70
// minutes, the moon stays up 10 to 14 hours, and Rio's sunrise drifts from
// about 5h to 6h40 over the year. If the sky ever needs to be the real one,
// suncalc (~3 kB) gives true sun and moon times for Rio.
export function moonRise(phase: number) {
  return (6 + 24 * phase) % 24
}

// A new moon stays in the sky as a dark disc, though the real one is lost in
// the sun's glare.
export function skyAt(hour: number, phase: number) {
  return {
    sun: arcPosition(hour, 6, twilight),
    moon: arcPosition(hour, moonRise(phase)),
  }
}

// How dark the sky is, 0 (day) to 1 (night), for the stars: they fade in
// from 17:30 to 19h and out from 5h to 6:30.
export function nightness(hour: number) {
  const clamp = (n: number) => Math.min(1, Math.max(0, n))
  return hour < 12 ? clamp((6.5 - hour) / 1.5) : clamp((hour - 17.5) / 1.5)
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

// The page ground through the day, for exploration 4: lightest at noon,
// darkest at night, in both themes. The ends are as far as the ground can go
// with every text role still at AA (accent text is the tightest: 4.6:1 on the
// light night ground, 7:1 on the dark day one).
const ground = {
  light: { day: [0.975, 0.011, 84], night: [0.925, 0.014, 80] },
  dark: { day: [0.21, 0, 0], night: [0.145, 0, 0] },
}

export function groundAt(hour: number, dark: boolean) {
  const sun = arcPosition(hour, 6, twilight)
  // Daylight follows the sun's height, eased so the morning brightens fast.
  const day = sun === null ? 0 : Math.sin(Math.PI * sun) ** 0.6
  const { day: a, night: b } = ground[dark ? 'dark' : 'light']
  const [l, c, h] = b.map((n, i) => n + (a[i] - n) * day)
  return `oklch(${l.toFixed(4)} ${c.toFixed(4)} ${h.toFixed(1)})`
}

