# DESIGN.md

The design system for carlosbronze.com: what the site should feel like, the tokens it's built from, and the rules for adding to it. The live reference is `/tinkering/design-system`, which reads its values from the CSS so it can't drift from this file's source of truth, `src/styles/starwind.css`.

For layout history, Allie Thu's influence and the project page format, see [`docs/site-redesign.md`](docs/site-redesign.md).

## Personality

A quiet, editorial site. It should read like a well-set essay: strategy and results first, with creativity showing in the details.

- **Calm, not cold.** Lots of white space, few colours, and type doing most of the work.
- **Serif for the voice, mono for the machinery.** Newsreader carries headlines and numbers. Geist carries reading. Geist Mono carries navigation and labels.
- **One accent, used sparingly.** Colour marks interaction and emphasis, never decoration.
- **Inspired by alliethu.com, not a copy.** Structure, rhythm and motion come from there and are credited. The colours have to be our own.

## Principles

These come from *Refactoring UI*; notes in `obsidian/refactoring-ui.md`.

1. **Hierarchy comes from colour and weight, not just size.** Secondary text gets `--muted-foreground`, not a smaller size.
2. **Limit choices.** Pick from the scales below. A new value needs a reason, and it goes into the scale, not into one component.
3. **Greys don't have to be grey.** Warmth comes from a little hue in the greys, not from more colours.
4. **Define shades up front.** Never use `color-mix`, opacity or `lighten`/`darken` to invent a new shade. The exception is `text-foreground/80` for body copy, an established role.
5. **Don't rely on colour alone.** The active nav item is underlined, links are underlined, and contrast results are spelled out in words.
6. **Keep lines between 45 and 75 characters.** Text sits in a 720px column even on wide screens.

## Colour

### Architecture

Two layers, both in `src/styles/starwind.css`:

1. **Primitive scales** hold raw OKLCH values.
   - `--color-base-{0,50,100…900,950}`: the greys. `0` is the page background in light mode; `950` is the darkest text.
   - `--color-brand-{50…950}`: the accent.
2. **Semantic roles** point at a step of a scale. Components use only these, through Tailwind (`bg-background`, `text-muted-foreground`, `decoration-brand`…).

| Role | Light | Dark | Use |
| --- | --- | --- | --- |
| `--background` | base-0 | base-950 | Page background |
| `--foreground` | base-950 | base-50 | Main text |
| `--muted-foreground` | base-600 | base-400 | Secondary text, labels |
| `--muted` | base-100 | base-800 | Inline code background |
| `--border` | base-200 | white 10% | Rules and dividers |
| `--brand` | brand-600 | brand-400 | Hovered arrows, link underlines on hover, active nav underline, pull quote rule |

A palette swaps primitives and nothing else. Without an accent, `--brand` falls back to `--foreground`, so every place that uses it stays monochrome.

### Why OKLCH

*Refactoring UI* recommends HSL, but HSL lightness isn't perceptual: a yellow and a blue at 50% look nothing alike. In OKLCH, `L` is perceived lightness, so the same step in every scale has about the same contrast. Text contrast can then be reasoned about per step instead of per colour. OKLCH also makes "don't let lightness kill your saturation" explicit: chroma peaks mid-scale and the hue drifts a few degrees towards the ends.

### Palettes

The live site uses **neutral greys with the Bronze accent**, on a `#fafafa` ground rather than pure white. The candidates below can be compared on `/tinkering/design-system`.

**Two modes (light and dark):**

| Greys | Character |
| --- | --- |
| Neutral (live) | Tailwind `neutral`, zero chroma; ground `#fafafa` |
| Pedra (stone) | Hue 250, chroma up to 0.018: cool, slate-like |
| Papel (paper) | Hue 55–85, chroma up to 0.02: warm, much whiter than Allie's cream. Works in light mode; the dark side reads muddy |

**Single mode (light only, no dark mode):** the ground sits at L ≈ 0.95 instead of near-white, and text is softer than black. In these scales `base-0` is the ground and `950` is the text.

| Greys | Ground | Text | Reference |
| --- | --- | --- | --- |
| Areia (sand) | `oklch(0.955 0.012 82)` | `oklch(0.26 0.014 55)` | Warm, close to Allie's `#f3ecdf` (L 0.945, C 0.019). Too close to use with a warm accent |
| Grafite (graphite) | `oklch(0.955 0 0)` (`#f0f0f0`) | `oklch(0.252 0 0)` (`#222`) | The plain grey of the Minimal theme (minimal.guide) |
| Nord | nord6 `oklch(0.951 0.007 261)` | nord0 `oklch(0.324 0.023 264)` | Nord's Snow Storm and Polar Night |

**Accents:**

| Accent | Base (500) | Text (600) | Note |
| --- | --- | --- | --- |
| Bronze (live) | `oklch(0.64 0.13 60)` | `oklch(0.52 0.115 56)` | The name |
| Cobalto | `oklch(0.58 0.17 263)` | `oklch(0.5 0.17 264)` | Safe, saturated blue |
| Musgo | `oklch(0.61 0.12 157)` | `oklch(0.5 0.105 158)` | Moss green |
| Gelo | `oklch(0.594 0.077 254)` (nord10) | `oklch(0.51 0.08 256)` | Nord's Frost |
| Ardósia | `oklch(0.604 0.039 232)` | `oklch(0.514 0.036 232)` | Minimal theme's slate blue |

Every grey and accent combination passes AA for accent text, in every mode. The lowest is 4.9:1 (Bronze or Musgo on Nord). Main text runs from about 11:1 (Nord) to 19:1 (two-mode palettes), and secondary text from 6.4:1 to 7.7:1.

The candidates are switched on by `data-greys` and `data-accent` on `<html>`. Only the design system page sets them, and nothing is persisted. Picking a single-mode grey forces light mode there. A combination can be shared as a link: `/tinkering/design-system?greys=nord&accent=gelo`.

**Promoting a palette to live:** copy its values into the default `:root` primitive block, set `--brand-on-light` and `--brand-on-dark` there, and delete the candidate blocks you no longer need. No component changes. Going single mode also means removing the `.dark` blocks and the theme script in `Layout.astro`.

### Contrast

Body text must reach **4.5:1 (WCAG AA)** on its background, in both modes. The design system page calculates every role pair live. A palette that fails there doesn't ship.

## Typography

| Role | Font | Size / line height | Where |
| --- | --- | --- | --- |
| Display | Newsreader 500 | 44 → 84px (7vw) / 0.94 | Home name |
| Page title | Newsreader 500 | `clamp(32px, 4vw, 46px)` / 1.15 | Inner page headline |
| Number | Newsreader 500 | 40px / 1 | `Stats` |
| Section title | Newsreader 500 | 24px / 1.2 | Project `##`, project cards |
| Quote | Newsreader | 20px / 1.4 | Pull quotes, `Steps` titles |
| Long text | Geist | 18px / 1.75 | About, project body, inner intros |
| Text | Geist | 16px / 1.6 | Descriptions, lists |
| Navigation | Geist Mono | 14px | Nav, section links |
| Label | Geist Mono | 12px, uppercase, 0.06em | Eyebrows, small section labels |

- Sizes are in `px` or `rem`, never `em`, so nested text stays on the scale.
- 16, 18 and 20px are closer than the 25% the book recommends. That's on purpose, for body and quote text. Everything else keeps the gap.
- Two weights: 400 for text and 500 for serif headings. Nothing below 400.
- Labels are in caps through CSS; the source text stays in sentence case (`src/lib/site.ts`).

## Spacing

The scale, in px: **4 · 8 · 12 · 16 · 24 · 32 · 48 · 64**. It's tight at the small end and opens up at the large end, so no step is within about 25% of its neighbour. Start with too much space and take it away.

Off the scale and in use today, to review: 6, 14, 20, 40, 44, 56. Several come from matching alliethu.com's measurements (44px after the intro, 20px between paragraphs). Fold them into the scale or document them as exceptions; don't add more.

How space is applied:

- **Every block spaces itself with `margin-bottom`**, as on alliethu.com. Paragraphs get `mb-5`, section labels `mb-4`, page sections `mb-14`/`mb-16`. No `margin-top`, no `space-y` wrappers, no negative margins to undo a gap.
- **Headings that open a section in long text are the exception.** The `h2` in project text and the `h3` labels on the design system page keep a top margin, because the block before them can't know a section ends. Adjacent margins collapse, so the larger one wins and nothing adds up.
- **Pages are flat.** Content sits directly in `PageLayout`'s `<section>`, so each block gets its own entrance animation. A wrapper `div` is only for real grouping (a grid, a language variant), never for spacing.
- **The last block's margin is dropped** by `PageLayout`, so the end of every page is the layout's job.
- **Inside a component**, use `gap` on a flex or grid parent rather than margins on the children.

Widths:

- Page column: 1024px (`max-w-5xl`), with 16px gutters on phones and 24px from `sm`.
- Reading column: 720px on inner pages.

## Components

| Component | File | Use |
| --- | --- | --- |
| `SectionLink` | `src/components/site/SectionLink.astro` | Mono label, arrow that nudges on hover, blurb below |
| `ProjectBody` | `src/components/project/ProjectBody.astro` | Long-form project text: headings, paragraphs, lists, links, code, pull quotes |
| `Stats` | `src/components/project/Stats.astro` | Big result numbers with an optional "before" |
| `Steps` | `src/components/project/Steps.astro` | Numbered 01/02/03 sequence |
| `Rows` | `src/components/project/Rows.astro` | Label/description rows, e.g. a timeline |
| `T` | `src/components/site/T.astro` | Bilingual text: renders PT and EN, CSS hides one |

Patterns:

- **Arrows:** `→` for internal links, `↗` for external. On hover, `→` moves 4px right and `↗` moves 2px up and right; both take `--brand`.
- **Links in text:** underlined at 30% of the text colour, turning `--brand` on hover.
- **Borders:** 1px `--border`, used sparingly: rules between rows, above and below `Stats`. No cards with shadows.
- **Text selection:** inverted, `--foreground` behind `--background` text, in both modes.
- **Radius:** small (`rounded-md`) on swatches and boxes, full on pills. Nothing in between.

## Motion

- **Page enter:** each block in `main > .reveal` rises 14px and fades in over 0.8s, `cubic-bezier(.22,.61,.36,1)`, staggered 60/160/240/320/420ms.
- **Between pages:** native cross-document view transitions. The header stays put and the old page fades out in 160ms.
- **Hover:** colour and transform transitions only, at Tailwind's default 150ms.
- `prefers-reduced-motion: reduce` turns all of it off.

## Accessibility

- Contrast: AA minimum for text in every palette and mode (see above).
- Visible focus: `outline-ring/50` everywhere; don't remove outlines.
- Decorative arrows are `aria-hidden`; screen readers get words ("Next:", "Back to").
- Every label exists in both languages, including `aria-label`s (`ariaLabel()` in `src/lib/site.ts`).

## Adding to the system

1. **Reuse first.** Check whether a role, a step or a component already does the job.
2. **If something new is needed, add it to the scale or the role table**, then use it. Never add a one-off value.
3. **Update this file and, if it's visual, `/tinkering/design-system`** in the same commit.
