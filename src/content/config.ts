// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from 'astro:content'

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      title: z.string(),
      description: z.string().optional(),
      snippet: z.string().optional(),
      coverSVG: image().optional(),
      coverImage: image().optional(),
      socialImage: image().optional(),
      images: z.array(image()).optional(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      publishDate: z.string().transform(str => new Date(str)),
      author: z.string().default('Astroship').optional(),
      category: z.string(),
      tags: z.array(z.string()).optional(),
      minutesRead: z.string().optional(),
    }),
})

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  team: teamCollection,
}
