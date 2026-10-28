# carlosbronze.com

Personal site of Carlos Bronze, senior product manager in Rio de Janeiro. Live at [www.carlosbronze.com](https://www.carlosbronze.com).

Bilingual (PT/EN), four pages: home, about, learning and tinkering. Built with [Astro 5](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com) and [Starwind UI](https://starwind.dev), deployed on [Vercel](https://vercel.com).

## Getting started

Needs Node and [pnpm](https://pnpm.io) (the version is pinned in `package.json`).

```sh
pnpm install
pnpm dev          # dev server at localhost:4321
pnpm build        # production build to ./dist/
pnpm preview      # serve the production build
pnpm astro check  # type-check
```

Adding Starwind Pro blocks needs a `STARWIND_LICENSE_KEY` environment variable. Nothing else does.

## How it's put together

```text
src/
├── pages/                 # one file per route; llms.txt.ts builds /llms.txt
│   └── tinkering/         # [slug].astro renders projects; design-system.astro is the live style reference
├── layouts/
│   ├── Layout.astro       # <head>, SEO, language/theme scripts, analytics
│   └── PageLayout.astro   # header, page heading, footer, prev/next links
├── components/
│   ├── site/              # header, section links, <T> for bilingual text
│   ├── project/           # blocks used inside project write-ups (<Stats>, <Steps>, …)
│   ├── starwind/          # Starwind UI components
│   └── starwind-pro/      # Starwind Pro blocks
├── content/projects/      # project write-ups, one folder per project
├── lib/
│   ├── site.ts            # sections, nav order, labels
│   └── seo.ts             # descriptions, profile links, structured data
└── styles/starwind.css    # design tokens and global styles
```

- **Both languages ship in every page.** `<T pt="…" en="…" />` renders both, and CSS hides the one not in use. The choice is stored in `localStorage`, and defaults to the browser's language.
- **Theme follows the system** (`prefers-color-scheme` sets the `.dark` class, live) until the footer toggle saves a choice. A second footer toggle turns the interface sounds off.
- **Navigation** uses Astro's `<ClientRouter />` for view transitions. Scripts that touch the page re-run on `astro:page-load`.
- **Sound and haptics** on links come from [Foley](https://www.npmjs.com/package/@foleyjs/core) (`data-foley-*` attributes) and [web-haptics](https://www.npmjs.com/package/web-haptics).

## Adding a project

Create `src/content/projects/<slug>/pt.mdx` and `en.mdx`. The folder name becomes `/tinkering/<slug>`.

```mdx
---
title: Page headline
summary: One or two lines under the headline.
url: https://live-project.example/
repo: https://github.com/bronze/repo   # optional
---
```

The body follows PEARL as `##` sections: Problem, Epiphany (optional), Action, Result, Learning. `src/content.config.ts` has the exact headings in both languages.

## Design

`DESIGN.md` describes the design system and its rules. `/tinkering/design-system` shows it live, reading its values straight from `src/styles/starwind.css`. `docs/site-redesign.md` records why the site is structured the way it is.

## Deployment

Pushing to `master` deploys to Vercel. `vercel.json` sets clean URLs and proxies `/obsidian/*` to Obsidian Publish, which serves the notes at [www.carlosbronze.com/obsidian](https://www.carlosbronze.com/obsidian/).

Analytics: Vercel Analytics and Speed Insights, PostHog and Umami.
