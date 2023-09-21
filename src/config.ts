import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export const SiteMetadata = {
  title: 'Astroship - Starter Template for Astro with Tailwind CSS',
  description:
    'Astroship is a starter website template for Astro built with TailwindCSS.',
  author: {
    name: 'Chris Tham',
    twitter: '@chris1tham',
    url: 'https://christham.net',
    email: 'chris@christham.net',
    summary: 'Outrageous actualiser.',
  },
  org: {
    name: 'Hello Tham',
    twitter: '@hellothamcom',
    url: 'https://hellotham.com',
    email: 'info@hellotham.com',
    summary:
      'Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.',
  },
  location: 'Rivendell, Middle Earth',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/hellotham/hello-astro',
  buildTime: new Date(),
}

// export { default as Logo } from './assets/svg/astro/astro-icon-dark.svg'
// export { default as LogoImage } from './assets/astro/astro-logo-dark.png'
export { default as Logo } from './assets/hero.png'
export { default as LogoImage } from './assets/hero.png'
export { default as FeaturedSVG } from './assets/hero.png'
export { default as DefaultSVG } from './assets/hero.png'
export { default as DefaultImage } from './assets/hero.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
  { name: 'Blog', href: 'blog' },
  { name: 'Docs', href: 'doc/introduction' },
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/hellotham/hello-astro`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export const SocialLinks = {
  linkedin: {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/hellothamcom',
    icon: 'linkedin',
  },
  github: {
    name: 'Github',
    link: 'https://github.com/hellothamcom',
    icon: 'github',
  },
  email: {
    name: 'Email',
    link: 'mailto:info@hellothamcom',
    icon: 'envelope',
  },
  phone: {
    name: 'Phone',
    link: 'tel:555-5555',
    icon: 'telephone',
  },
}
