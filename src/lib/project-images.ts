import type { ImageMetadata } from 'astro'

// Screenshots live in src/assets/projects, named after the project folder:
//   <slug>.webp         the project as it is now (cover, list thumbnail)
//   <slug>-before.webp  the original, when there's one to compare with
// Captured at 1440×900 (2x) and saved as WebP; astro:assets resizes them.
const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/projects/*.webp', {
  eager: true,
})

export function projectImage(name: string): ImageMetadata | undefined {
  return files[`/src/assets/projects/${name}.webp`]?.default
}
