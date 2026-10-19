export type Bilingual = { pt: string; en: string }

export interface Section {
  href: string
  label: Bilingual
  blurb: Bilingual
}

// Labels are stored capitalised. Places that show them in lowercase (nav,
// section links) or uppercase (page eyebrows) change the case with CSS.

export const home: Section = {
  href: '/',
  label: { pt: 'Início', en: 'Home' },
  blurb: { pt: 'De volta ao começo', en: 'Back to the beginning' },
}

// Order here is the reading order: each page links to its neighbours,
// and the last one wraps back home.
export const sections: Section[] = [
  {
    href: '/about',
    label: { pt: 'Sobre', en: 'About' },
    blurb: { pt: 'O que me move', en: 'What drives me' },
  },
  {
    href: '/learning',
    label: { pt: 'Aprendendo', en: 'Learning' },
    blurb: {
      pt: 'Leituras, podcasts e notas',
      en: 'Reading, listening and notes',
    },
  },
  {
    href: '/tinkering',
    label: { pt: 'Fazendo', en: 'Tinkering' },
    blurb: {
      pt: 'Coisas que fiz por diversão',
      en: 'Things I built for fun',
    },
  },
  {
    href: '/work',
    label: { pt: 'Trabalho', en: 'Work' },
    blurb: {
      pt: 'Onde trabalhei e o que fiz',
      en: 'Where I worked and what I did',
    },
  },
]

// Sub-pages (e.g. /tinkering/some-project) belong to their parent section.
export function sectionFor(path: string) {
  if (path === '/') return home
  return sections.find(s => path === s.href || path.startsWith(s.href + '/'))
}

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
