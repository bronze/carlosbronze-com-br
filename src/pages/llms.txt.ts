import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { descriptions, profiles } from '@/lib/seo'
import { sections } from '@/lib/site'

// /llms.txt (llmstxt.org): a plain-Markdown summary of the site for AI
// assistants. Sections and projects come from the same data as the pages.
export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href.replace(/\/$/, '')
  const projects = (await getCollection('projects'))
    .filter(p => p.id.endsWith('/en'))
    .map(p => ({ slug: p.id.split('/')[0], ...p.data }))

  const body = `# Carlos Bronze

> ${descriptions.en}

Carlos Bronze is a product manager in Rio de Janeiro, Brazil, with almost 20 years in digital products and brands, from agencies to startups. He started coding in 1999, building websites for online gaming communities, and studied industrial design. In agency strategy he learned that value is perception; at MySparkle he uses gamification as a lever for activation, retention and LTV.

He focuses on product strategy, metrics that connect user behavior to business outcomes, the story and perception a product creates, and gamification. The site is bilingual (Portuguese and English) on the same URLs.

## Pages

${sections.map(s => `- [${s.label.en}](${url(s.href)}): ${s.blurb.en}`).join('\n')}

## Projects

${projects.map(p => `- [${p.title}](${url(`/tinkering/${p.slug}`)}): ${p.summary}`).join('\n')}

## Elsewhere

- [LinkedIn](${profiles.linkedin})
- [GitHub](${profiles.github})
`
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
