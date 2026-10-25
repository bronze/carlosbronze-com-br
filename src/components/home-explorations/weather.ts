// Rio's weather right now, from Open-Meteo (free, no key, open to the
// browser), for the clock line's icon, the clouds and rain over Pão de Açúcar,
// and what the sun says when tapped. The site is static, so the visitor's
// browser asks; one request serves the whole page, and the answer is kept for
// 15 minutes. Anything that goes wrong gives null, and the page stays as it
// was before weather: no icon, a clear sky.
//
// ?tempo=rain (or clear, partly, cloudy, fog, storm) forces the sky, for
// testing, even offline.

// The darksky.net set, give or take: clear and partly cloudy come in a day
// and a night version, picked by the hour in Rio.
export type Sky = 'clear' | 'partly' | 'cloudy' | 'fog' | 'rain' | 'storm'
export const skies: Sky[] = ['clear', 'partly', 'cloudy', 'fog', 'rain', 'storm']

export type Weather = {
  sky: Sky
  // 0 dry, 1 drizzle or light, 2 moderate, 3 heavy.
  rain: 0 | 1 | 2 | 3
  // Percent of the sky.
  cover: number
  temp: number
  isDay: boolean
  // "05:12", in Rio's time.
  sunrise: string
  sunset: string
  high: number
  low: number
  rainChance: number
  uv: number
}

export const skyLabel: Record<Sky, { pt: string; en: string }> = {
  clear: { pt: 'céu limpo', en: 'clear' },
  partly: { pt: 'parcialmente nublado', en: 'partly cloudy' },
  cloudy: { pt: 'nublado', en: 'cloudy' },
  fog: { pt: 'neblina', en: 'fog' },
  rain: { pt: 'chuva', en: 'rain' },
  storm: { pt: 'tempestade', en: 'thunderstorm' },
}

// WMO weather codes, as Open-Meteo reports them. Snow and anything unknown
// read as rain: it's Rio.
function fromCode(code: number): Pick<Weather, 'sky' | 'rain'> {
  if (code <= 1) return { sky: 'clear', rain: 0 }
  if (code === 2) return { sky: 'partly', rain: 0 }
  if (code === 3) return { sky: 'cloudy', rain: 0 }
  if (code === 45 || code === 48) return { sky: 'fog', rain: 0 }
  if (code >= 95) return { sky: 'storm', rain: 3 }
  const heavy = [55, 57, 65, 67, 75, 82, 86]
  const moderate = [53, 63, 73, 81]
  return { sky: 'rain', rain: heavy.includes(code) ? 3 : moderate.includes(code) ? 2 : 1 }
}

// What ?tempo= stands in for, with the rest of the reading made up.
const forced: Record<Sky, { code: number; cover: number }> = {
  clear: { code: 0, cover: 5 },
  partly: { code: 2, cover: 45 },
  cloudy: { code: 3, cover: 100 },
  fog: { code: 45, cover: 60 },
  rain: { code: 63, cover: 90 },
  storm: { code: 95, cover: 100 },
}

const url =
  'https://api.open-meteo.com/v1/forecast?latitude=-22.949&longitude=-43.157' +
  '&current=temperature_2m,weather_code,cloud_cover,is_day' +
  '&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max' +
  '&timezone=America/Sao_Paulo&forecast_days=1'
const key = 'weather'
const fresh = 15 * 60 * 1000

type Reading = {
  current: { temperature_2m: number; weather_code: number; cloud_cover: number; is_day: number }
  daily: {
    sunrise: string[]
    sunset: string[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    precipitation_probability_max: number[]
    uv_index_max: number[]
  }
}

async function fetchReading(): Promise<Reading | null> {
  try {
    const kept = JSON.parse(sessionStorage.getItem(key) ?? 'null')
    if (kept && Date.now() - kept.at < fresh) return kept.reading
  } catch {}
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(5000) })
    if (!response.ok) return null
    const reading: Reading = await response.json()
    try {
      sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), reading }))
    } catch {}
    return reading
  } catch {
    return null
  }
}

function toWeather(reading: Reading | null, force: Sky | null): Weather | null {
  if (!reading && !force) return null
  const c = reading?.current
  const d = reading?.daily
  // The times come as "2026-10-25T05:12", already in Rio's time.
  const time = (iso?: string) => iso?.slice(11, 16) ?? '--:--'
  const code = force ? forced[force].code : c!.weather_code
  return {
    ...fromCode(code),
    cover: force ? forced[force].cover : c!.cloud_cover,
    temp: Math.round(c?.temperature_2m ?? 24),
    isDay: c ? c.is_day === 1 : true,
    sunrise: time(d?.sunrise[0]),
    sunset: time(d?.sunset[0]),
    high: Math.round(d?.temperature_2m_max[0] ?? 27),
    low: Math.round(d?.temperature_2m_min[0] ?? 21),
    rainChance: d?.precipitation_probability_max[0] ?? 0,
    uv: Math.round(d?.uv_index_max[0] ?? 0),
  }
}

// A reading with its sky swapped for another, for the dev panel.
export function forceSky(sky: Sky, base: Weather | null): Weather {
  return { ...(base ?? toWeather(null, sky)!), ...fromCode(forced[sky].code), cover: forced[sky].cover }
}

// One request per page, however many parts ask.
let pending: { at: number; promise: Promise<Weather | null> } | null = null
export function getWeather(): Promise<Weather | null> {
  if (!pending || Date.now() - pending.at > fresh) {
    const param = new URLSearchParams(location.search).get('tempo') as Sky | null
    const force = param && skies.includes(param) ? param : null
    pending = { at: Date.now(), promise: fetchReading().then(reading => toWeather(reading, force)) }
  }
  return pending.promise
}

// How many of the scene's clouds are out, and whether they hide the sun and
// moon.
export function cloudsFor(weather: Weather | null) {
  if (!weather) return { count: 0, overcast: false }
  const { sky, cover } = weather
  if (sky === 'clear') return { count: cover >= 30 ? 1 : 0, overcast: false }
  if (sky === 'partly' || sky === 'fog') return { count: 2, overcast: false }
  const overcast = sky !== 'rain' || cover >= 90
  return { count: overcast ? 5 : 4, overcast }
}
