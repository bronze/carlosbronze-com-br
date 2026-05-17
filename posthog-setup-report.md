<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the carlosbronze.com.br portfolio site. Key changes made:

- **`src/components/posthog.astro`** — Fixed the `api_host` fallback to use `https://us.i.posthog.com` instead of an empty string. Environment variables (`PUBLIC_POSTHOG_PROJECT_TOKEN`, `PUBLIC_POSTHOG_HOST`) are used via Astro's `define:vars` directive with `<script is:inline>`.
- **`.env`** — Updated with the correct `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` values. The file is covered by `.gitignore`.
- **`src/pages/index.astro`** — Existing event captures: `language_switched` (fires when the user toggles PT/EN with a `language` property) and `obsidian_link_clicked` (fires when the Obsidian Notes link is clicked).
- **`src/components/Footer.astro`** — Existing `social_link_clicked` event capture on all social anchor links, with a `platform` property (LinkedIn, GitHub, Email).

| Event                   | Description                                                       | File                          |
| ----------------------- | ----------------------------------------------------------------- | ----------------------------- |
| `language_switched`     | User switches the tagline language between Portuguese and English | `src/pages/index.astro`       |
| `obsidian_link_clicked` | User clicks the Obsidian Notes link on the homepage               | `src/pages/index.astro`       |
| `social_link_clicked`   | User clicks a social link (LinkedIn, GitHub, Email) in the footer | `src/components/Footer.astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1596028)
- [All interactions over time](/insights/s9bCQE00) — Daily trend of all three tracked events
- [Language preference](/insights/cFwp9Xlr) — Language switch events broken down by PT/EN
- [Obsidian link clicks (total)](/insights/bvksnVeZ) — Bold number: total Obsidian link clicks (last 30 days)
- [Social link clicks by platform](/insights/MEpDMWME) — Social link clicks broken down by LinkedIn/GitHub/Email
- [Unique visitors engaging with site](/insights/BmHpycVY) — Daily unique users per interaction type

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
