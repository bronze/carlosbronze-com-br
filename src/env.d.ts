// PostHog's snippet (components/posthog.astro) puts this on window. Optional:
// an ad blocker, or a page without analytics, leaves it out.
interface Window {
  posthog?: { capture(event: string, properties?: Record<string, unknown>): void }
}
