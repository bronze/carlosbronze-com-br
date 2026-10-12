import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// One folder per project, one file per language:
//   src/content/projects/<slug>/pt.mdx
//   src/content/projects/<slug>/en.mdx
// (.md also works; .mdx lets the text use the components in
// src/components/project: <Stats>, <Steps>.)
// Each folder becomes /tinkering/<slug>.
//
// Body follows PEARL, as h2 sections (EN / PT):
//   Problem   → The itch / O incômodo
//   Epiphany  → The insight / O estalo      (skip if there wasn't one)
//   Action    → What I did / O que fiz
//   Result    → The result / O resultado
//   Learning  → What I learned / O que aprendi
const projects = defineCollection({
  loader: glob({ pattern: '*/{pt,en}.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    // Page headline.
    title: z.string(),
    // Intro under the headline.
    summary: z.string(),
    // Live project, linked as "ver no ar ↗".
    url: z.string().url(),
    // Source code, linked as "código ↗". Optional.
    repo: z.string().url().optional(),
  }),
})

export const collections = { projects }
