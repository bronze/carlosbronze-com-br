import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export const SiteMetadata = {
  title: 'Carlos Bronze',
  description: 'Product Manager',
  author: {
    name: 'Carlos Bronze',
    twitter: '@carlosbronze',
    url: 'https://carlosbronze.com.br',
    email: 'carlos@carlosbronze.com.br',
    summary: 'Product Manager',
  },
  org: {
    name: 'Carlos Bronze',
    twitter: '@carlosbronze',
    url: 'https://carlosbronze.com.br',
    email: 'carlos@carlosbronze.com.br',
    summary:
      'Carlos Bronze é Gerente de Produtos digitais com experiência em Design, Produto e Analytics.',
  },
  location: 'Rio de Janeiro, Rio de Janeiro, Brasil',
  latlng: [-22.98552, -43.19733] as [number, number],
  repository: 'https://github.com/bronze/carlosbronze-com-br',
  buildTime: new Date(),
}

// export { default as Logo } from './assets/svg/astro/astro-icon-dark.svg'
// export { default as LogoImage } from './assets/astro/astro-logo-dark.png'
export { default as Logo } from './assets/hero.png'
export { default as LogoImage } from './assets/hero.png'
export { default as FeaturedSVG } from './assets/hero.png'
export { default as DefaultSVG } from './assets/hero.png'
export { default as DefaultImage } from './assets/opengraph.jpg'

export const NavigationLinks = [
  { title: 'Home', path: '/', slug: '', key: '1' },
  // { title: 'Sobre', path: '/sobre', slug: 'sobre' },
  { title: 'Contato', path: '/contato/', slug: 'contato', key: '2' },
]
// const menuitems = [
//   {
//     title: 'Features',
//     path: '#',
//     children: [
//       { title: 'Action', path: '/' },
//       { title: 'Another action', path: '#' },
//       { title: 'Dropdown Submenu', path: '#' },
//       { title: '404 Page', path: '/404' },
//     ],
//   },
//   {
//     title: 'Pricing',
//     path: '/pricing',
//   },
//   {
//     title: 'About',
//     path: '/about',
//   },
//   {
//     title: 'Blog',
//     path: '/blog',
//   },
//   {
//     title: 'Contact',
//     path: '/contact',
//   },
// ]

export const PAGE_SIZE = 6

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
