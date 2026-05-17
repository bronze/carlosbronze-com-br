<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the carlosbronze.com.br portfolio site. Key changes made:

- **`src/components/posthog.astro`** — Updated to use environment variables (`PUBLIC_POSTHOG_PROJECT_TOKEN`, `PUBLIC_POSTHOG_HOST`) via Astro's `define:vars` directive, replacing the previously hardcoded token. The `<script is:inline>` directive is retained to prevent TypeScript processing issues.
- **`.env`** — Created with `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` values. The file is covered by `.gitignore`.
- **`src/pages/index.astro`** — Added two event captures: `language_switched` (fires when the user toggles PT/EN with a `language` property) and `obsidian_link_clicked` (fires when the Obsidian Notes link is clicked).
- **`src/components/Footer.astro`** — Added `social_link_clicked` event capture on all social anchor links, with a `platform` property (LinkedIn, GitHub, Email).

| Event                   | Description                                                       | File                          |
| ----------------------- | ----------------------------------------------------------------- | ----------------------------- |
| `language_switched`     | User switches the tagline language between Portuguese and English | `src/pages/index.astro`       |
| `obsidian_link_clicked` | User clicks the Obsidian Notes link on the homepage               | `src/pages/index.astro`       |
| `social_link_clicked`   | User clicks a social link (LinkedIn, GitHub, Email) in the footer | `src/components/Footer.astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1596013)
- [Unique visitors](/insights/HnuwI9NN) — Daily unique visitors to the portfolio
- [Obsidian Notes link clicks](/insights/sQhxwMt1) — Daily clicks on the Obsidian Notes link
- [Obsidian click-through rate](/insights/oQt35Wb9) — Ratio of Obsidian clicks to total pageviews
- [Language switcher usage](/insights/h3vF5kni) — Language switch events broken down by PT/EN
- [Social link clicks by platform](/insights/Hm6H18q1) — Social link clicks broken down by LinkedIn/GitHub/Email

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
