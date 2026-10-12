---
title: My favorite author's site deserved better than a 34.
summary: An unofficial redesign of Brandon Sanderson's website, rebuilt from scratch for performance, accessibility and navigation.
url: https://brandonsanderson-redesign.carlosbronze.com.br/
repo: https://github.com/bronze/bsand
---

## The itch

I'm a Brandon Sanderson fan, and his site didn't do the books justice. It was a slow WordPress site with images over 1 MB in old formats, confusing navigation for finding series and books, and no dark mode. On Google PageSpeed it scored 34 out of 100, even on desktop.

His readers are deeply engaged. A better site would make a real difference.

## The insight

I'd read how Smashing Magazine [moved from WordPress to the JAMstack](https://www.smashingmagazine.com/2020/01/migration-from-wordpress-to-jamstack/), and it stuck with me. My bet was that most of this could be fixed at the foundation. Move off WordPress to a tool with a build step, like Astro or 11ty, and adopt lighter, modern image formats, with srcset serving a different image for each screen size. That alone would make a big difference in load time and experience.

## What I did

In late 2023, I rebuilt the site from scratch with 11ty (Eleventy), a static site generator. I was torn between it and Astro, and picked 11ty to try a new tool.

- Images in AVIF and WebP, with a PNG fallback and srcset per screen size: up to 90% lighter, with no visible loss.
- Caching and a CDN, with no unnecessary requests.
- A dark mode that remembers the reader's preference.
- Books organized by series and chronological order, with format filters and links between characters and worlds.

## The result

- PageSpeed from 34 to 100, across performance, accessibility, best practices and SEO.
- Load time from about 5 seconds to under 1.

## What I learned

Performance isn't just speed. It's respect for people's time.

11ty gave me full control, but I missed what Astro does well for developer experience. Not by chance, this site is built with Astro.
