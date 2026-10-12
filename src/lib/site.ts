export type Bilingual = { pt: string; en: string }

export interface Section {
  href: string
  label: Bilingual
  blurb: Bilingual
}

export const linkedin = 'https://www.linkedin.com/in/carlosbronze/'

export const home: Section = {
  href: '/',
  label: { pt: 'início', en: 'home' },
  blurb: { pt: 'De volta ao começo', en: 'Back to the beginning' },
}

// Order here is the reading order: each page links to its neighbours,
// and the last one wraps back home.
export const sections: Section[] = [
  {
    href: '/about',
    label: { pt: 'sobre', en: 'about' },
    blurb: { pt: 'Como eu trabalho, e por quê', en: 'How I work, and why' },
  },
  {
    href: '/learning',
    label: { pt: 'aprendendo', en: 'learning' },
    blurb: { pt: 'Leituras, podcasts e notas', en: 'Reading, listening and notes' },
  },
  {
    href: '/tinkering',
    label: { pt: 'experimentos', en: 'tinkering' },
    blurb: { pt: 'Coisas que construí por conta própria', en: 'Things I built for myself' },
  },
]

export function neighbours(href: string) {
  const ring = [home, ...sections]
  const i = ring.findIndex(s => s.href === href)
  return {
    prev: ring[(i - 1 + ring.length) % ring.length],
    next: ring[(i + 1) % ring.length],
  }
}

// aria-label can't hold both languages the way <T> does, so we render the
// PT text and keep both on data attributes; SiteHeader swaps them on toggle.
export function ariaLabel(b: Bilingual) {
  return { 'aria-label': b.pt, 'data-label-pt': b.pt, 'data-label-en': b.en }
}
