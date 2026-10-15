# Site redesign: reference notes

How and why the site is structured the way it is. Started October 2026.

## Inspiration: alliethu.com

We used [alliethu.com](https://alliethu.com/) (Allie Thu, Design Director at GitHub) as the reference. What makes it work:

- **Few sections, always visible.** The nav is the same on every page: `about · always learning · my tinkering · work ↗`. "Work" is just a link to LinkedIn, so there's no CV on the site.
- **One idea per page, very little copy.** Every page follows the same pattern: small mono uppercase label → serif headline → short intro → content.
- **Reading order.** Each page ends with previous/next links, so the pages form a loop: home → about → learning → tinkering → home.
  - These links only show on small screens (`display: none` above 820px). On desktop the header nav is always in view, so the links would repeat it. On a phone, her nav is folded into a menu and the top of the page has scrolled away, so the links are how you continue. On phones they are stacked, each with a top border and a 64px touch target.
- **Home is an index.** Location label, big name, role, one-sentence intro, then three links to the sections, each with a one-line subtitle.
- **Section contents:**
  - **About:** a short story, a "Where I focus" list of 4 items, a personal closing line.
  - **Always learning:** podcasts (with a small tag) and writers, all linking out, no commentary.
  - **Tinkering:** a few projects with 1–2 lines each, plus quick ones that only link to a repo.
- **Type:** a serif for headlines (Domine), a sans for body text (Work Sans), a mono for labels and nav (IBM Plex Mono).
- **Motion:** content rises in, top to bottom, on every page load (details below).

We took the structure, spacing, typography roles and motion from it. **We did not copy her colours or her illustrations**; we kept our own neutral palette.

## Our structure

| Route        | PT label     | EN label  | Content                                                   |
| ------------ | ------------ | --------- | --------------------------------------------------------- |
| `/`          | início       | home      | Location, name, role, tagline, links to the 3 sections    |
| `/about`     | sobre        | about     | Headline, intro, "Where I focus" (4 items), personal line |
| `/learning`  | aprendendo   | learning  | My notes (Obsidian), podcasts, writers                    |
| `/tinkering` | experimentos | tinkering | Personal projects + "quick ones" (repo links)             |
| LinkedIn ↗   | trabalho     | work      | https://www.linkedin.com/in/carlosbronze/                 |

**Decisions:**

- **Obsidian Notes lives under Learning** ("My notes"), not as a button on the home page. The notes are learning in public, so they belong with the podcasts and writers. `/obsidian` is still served through the Vercel rewrite to Obsidian Publish (`vercel.json`).
- **Work is LinkedIn only.** No experience section on the site.
- **The URLs are in English** (`/about`, `/learning`, `/tinkering`), while the labels follow the language toggle.
- **Tinkering already uses real projects**, taken from `obsidian/projetos-pessoais/` (FSAKM, Thompson Total Branding, Brandon Sanderson Redesign, Tera Workshop). The About and Learning pages are still placeholders.
- **Location:** Rio de Janeiro, BR. **Role line:** Product Manager.

## Code map

- **`src/lib/site.ts`:** the single source for the nav order, bilingual labels and subtitles, the LinkedIn URL, and `neighbours()`, which works out the previous/next pages. To add, rename or reorder a section, edit this file. Each page's eyebrow and browser-tab title also come from here (`sectionFor()`), so a section's name lives in one place. Labels are stored capitalised ("Sobre", "About"); the nav and section links lowercase them with CSS, and eyebrows uppercase them. The tab title switches language with the toggle.
- **`src/layouts/Layout.astro`:**
  - The base HTML document, fonts and analytics.
  - The blocking script that sets the theme and the `data-lang` attribute before the first paint.
  - The global foley sounds (`bind()`).
  - `<body>` is a flex column (`min-h-dvh`).
- **`src/layouts/PageLayout.astro`:**
  - The shell every page uses: skip link, `<SiteHeader>`, `<main>`, `<footer>`.
  - Props: `eyebrow`, `heading`, `subheading`, `intro` (all bilingual), `hero` (the big two-line name, home only), `pager` (previous/next links, on by default, shown only at 820px wide and below).
- **`src/components/site/SiteHeader.astro`:**
  - Name, nav, PT/EN toggle.
  - The current page is underlined (`aria-current`).
  - Holds the toggle logic, haptics, and click tracking for links with `data-track`.
- **`src/components/site/SectionLink.astro`:** the mono "label →" link with a subtitle underneath. Used on the home page and for the previous/next links, so the two always match.
- **`src/components/site/T.astro`:** `<T pt="…" en="…" />` renders both languages.
- **`src/styles/starwind.css`:** design tokens, plus (at the end of the file) the rules that hide the inactive language and the motion rules.

## Layout and spacing

- **`<header>`, `<main>` and `<footer>` are direct children of `<body>`** (no wrapper div), like hers. Each one sets its own width with `mx-auto w-full max-w-5xl px-4 sm:px-6`.
- **Width:** up to 1024px of content on large screens, with a 16px side margin on phones.
- **Inner pages read narrower.** Inside `<main>`, the page content is wrapped in `<section class="reveal" aria-labelledby="page-title">`. On inner pages that section is `mx-auto max-w-[720px]`, matching her `.page` wrapper (`max-width: 720px; margin: 0 auto`). On home it spans the full 1024px column, so the hero stays aligned with the header.
- **Header:**
  - Desktop: one row (name · nav · toggle).
  - Phone: the nav moves to a second row. There's no hamburger menu.
- **Footer:** `© year`, centred, in mono.
- **Skip link:** "Skip to content" is the first thing in `<body>` and only appears when someone presses Tab.

## Typography

| Role                                  | Font               | Notes                                                                            |
| ------------------------------------- | ------------------ | -------------------------------------------------------------------------------- |
| Headlines, project names              | Newsreader (serif) | weight 500, tight tracking; home name `text-6xl → sm:text-8xl`, line height 0.92; inner page headlines `clamp(32px, 4vw, 46px)`, line height 1.15 |
| Body, intro                           | Geist (sans)       | home intro 16 → 18px, max width `32ch`; inner pages 18px, line height 1.75                                   |
| Labels, nav, role line, section links | Geist Mono         | small labels are uppercase with `tracking-[0.12em]`                              |

The fonts are loaded through Astro's experimental fonts API (fontsource) in `astro.config.mjs`. `--font-serif` maps to Newsreader in `starwind.css`.

Inner page sizes are copied from alliethu.com's CSS:

| Element | Size |
| --- | --- |
| Eyebrow label | 13px mono, tracking 0.08em |
| Headline | `clamp(32px, 4vw, 46px)`, line height 1.15, 24px gap below |
| Intro and body paragraphs (About) | 18px, line height 1.75; 20px between paragraphs; 44px after the intro on other pages |
| Small section labels ("Where I focus", "Podcasts") | 12px mono, tracking 0.06em, 20px gap below |
| Focus grid | auto-fit columns of at least 148px (4 across at 720px, 2 on phones), gaps 24px × 22px |
| Focus title / description | 18px serif / 14px, line height 1.5 |
| Project title / description (Tinkering) | 24px serif / 16px, line height 1.6 |
| List items (Learning) | 17px |

## Colour

The colour system (primitive OKLCH scales, semantic roles, the `--brand` accent and the candidate palettes) is documented in [`DESIGN.md`](../DESIGN.md) and shown live at `/tinkering/design-system`. The live palette is still plain neutral with no accent. Dark mode works through the existing `.dark` class.

## Bilingual (PT/EN)

- **Both languages are in the HTML.** A CSS rule hides the inactive one, based on `html[data-lang]`.
- **No flash of the wrong language:** an inline script in `<head>` sets `data-lang` and `lang` before the first paint. It uses `localStorage.lang` if set, otherwise the browser language (Portuguese → `pt`, anything else → `en`).
- **The toggle** flips `data-lang`, saves the choice, triggers a haptic and fires the PostHog event `language_switched`.
- **Limitation:** `<title>` is not translated; each page has a single title.

## Motion

Copied from alliethu.com's CSS (exact values):

- **Page load:** every direct child of `main > .reveal` uses `rise-in`: from `opacity: 0; translateY(14px)` to its normal position, over `0.8s`, with `cubic-bezier(0.22, 0.61, 0.36, 1)`.
- **Stagger by position:** 60ms, 160ms, 240ms, 320ms, then 420ms for the 5th child onwards. This creates the top-to-bottom build.
  - Home order: location → name → role → intro → section links.
  - Inner pages: label → headline → intro → content → previous/next links.
- **Between pages:**
  - Native cross-document view transitions (`@view-transition { navigation: auto }`).
  - The header has `view-transition-name: site-header`, so it stays still.
  - The old page fades out in 160ms.
  - The new page has no transition of its own; its blocks rise in.
  - Firefox doesn't support these yet and just navigates.
- **Prefetching:** `prefetch: { prefetchAll: true, defaultStrategy: 'hover' }`, so moving between pages feels instant.
- **Reduced motion:** with `prefers-reduced-motion: reduce`, all of this is turned off.
- **Language toggle:** switching language does not replay the animation.

## Accessibility (mirrors alliethu.com's markup)

| Element | Markup |
| --- | --- |
| Skip link | First item in `<body>`, targets `<main id="main" tabindex="-1">` |
| Header home link | `aria-label="Carlos Bronze, home"` |
| Header nav | `<nav id="site-navigation" aria-label="Main navigation">`; the current page gets `aria-current="page"` |
| Page wrapper | `<section aria-labelledby="page-title">` around the content, with `<h1 id="page-title">` |
| Subsections | `<section aria-labelledby="…-title">` with a matching `<h2 id>` (focus, notes, podcasts, writers, quick); focus items are `<h3>` |
| Home section links | `<nav aria-label="Sections">` |
| Previous/next | `<nav aria-label="Explore sections">`; each link reads "Previous: home. Back to the beginning" (hers uses `aria-label`; ours uses `sr-only` text so it switches language automatically) |
| Decorative glyphs | Every `→ ← ↗` and the `/` in the language toggle is `aria-hidden="true"` |
| External links | `target="_blank" rel="noopener noreferrer"` |
| Language toggle | Accessible name is the action, in the target language: "Read in English" / "Ler em português" |

**Bilingual `aria-label`s:** an attribute can't hold both languages the way `<T>` does. `ariaLabel({ pt, en })` in `src/lib/site.ts` renders `aria-label` in PT and keeps both versions on `data-label-pt` / `data-label-en`. `SiteHeader`'s script applies the right one on load and on every toggle.

## Interaction feedback (unchanged from before)

- **Sounds:** foley sounds (`@foleyjs/core`, mechanical theme, full volume) through the `data-foley-press` / `data-foley-hover` / `data-foley-toggle` attributes.
- **Haptics:** web haptics (`web-haptics`) on the toggle and on tracked links.
- **PostHog events:** `language_switched`, `obsidian_link_clicked`, `linkedin_clicked`.

## Project pages (Tinkering)

Projects with a story get their own page at `/tinkering/<slug>`; small ones stay as external links under "Quick ones".

- **Files:** `src/content/projects/<slug>/pt.mdx` and `en.mdx` (plain `.md` also works), each with `title` (page headline), `summary` (intro), `url` (live project) and an optional `repo` (source code), shown as "see it live ↗" and "source code ↗" under the intro. The build fails if a language is missing. Rendered by `src/pages/tinkering/[slug].astro`; collection defined in `src/content.config.ts`.
- **Card:** point the project's `href` in `tinkering.astro` to `/tinkering/<slug>`. Internal cards show `→`, external ones `↗`.
- **Structure: PEARL** (from the argumentation-frameworks note), one `##` per step:

| Step | EN heading | PT heading |
| --- | --- | --- |
| Problem | The itch | O incômodo |
| Epiphany | The insight | O estalo |
| Action | What I did | O que fiz |
| Result | The result | O resultado |
| Learning | What I learned | O que aprendi |

- **Components** (in `src/components/project/`, available in every `.mdx` without importing), to break up long runs of paragraphs:
  - `<Stats items={[{ label, before?, after }]} />`: big numbers for the result, with an optional "before" value (e.g. PageSpeed 34 → 100).
  - `<Steps items={[{ title, text? }]} />`: a numbered 01/02/03 sequence, for how the work was done.
  - `<Rows items={[{ title, text, href? }]} />`: label/description rows with rules between them, e.g. a timeline.
  - A Markdown blockquote (`> …`) renders as a pull quote; use it for the one line worth remembering, usually in "What I learned".

Chosen over STAR because side projects have no assigned Task (the motivation is the problem), and STAR folds learning into Result. Epiphany is optional: skip it when there wasn't a real turning point.

## Open items

- Write the About copy (headline, intro, 4 focus areas, personal line) in PT and EN.
- Fill Learning with real podcasts, writers or books.
- Add a repo link for "This website" in Tinkering (currently `#`).
- Optional: a dark/light toggle in the header (right now it follows the system).
- Optional: make each item inside long content areas rise in its own turn.
