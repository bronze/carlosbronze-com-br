// Structured data (schema.org JSON-LD) that tells search engines and AI
// assistants who this site is about. Layout.astro puts the person and the
// website on every page; pages can add their own nodes next to them.

export const SITE_NAME = 'Carlos Bronze'

export const profiles = {
  linkedin: 'https://www.linkedin.com/in/carlosbronze/',
  github: 'https://github.com/bronze',
}

export const descriptions = {
  pt: 'Carlos Bronze, Senior Product Manager no Rio de Janeiro. Conecto estratégia, métricas e criatividade para construir produtos que movem o negócio.',
  en: 'Carlos Bronze, senior product manager based in Rio de Janeiro. I connect strategy, metrics and creativity to build products that move the business.',
}

export type JsonLd = Record<string, unknown>

export function personId(site: URL) {
  return new URL('/#person', site).href
}

export function baseGraph(site: URL): JsonLd[] {
  const url = new URL('/', site).href
  return [
    {
      '@type': 'WebSite',
      '@id': new URL('/#website', site).href,
      url,
      name: SITE_NAME,
      inLanguage: ['pt-BR', 'en'],
      publisher: { '@id': personId(site) },
    },
    {
      '@type': 'Person',
      '@id': personId(site),
      name: SITE_NAME,
      url,
      jobTitle: 'Senior Product Manager',
      description: descriptions.en,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rio de Janeiro',
        addressCountry: 'BR',
      },
      knowsAbout: [
        'Product strategy',
        'Product management',
        'Product metrics',
        'Gamification',
        'Branding',
      ],
      sameAs: [profiles.linkedin, profiles.github],
    },
  ]
}
