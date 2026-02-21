# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
pnpm dev        # Start dev server at localhost:4321
pnpm build      # Build for production (output: ./dist/)
pnpm preview    # Preview production build locally
pnpm astro check  # Type-check the project
```

Package manager: **pnpm** (not npm or yarn).

## Architecture

This is a personal portfolio site built with **Astro 5** + **Tailwind CSS v4** + **Starwind UI**.

### Key conventions

- `@/` path alias maps to `src/` (configured in `tsconfig.json`)
- Tailwind CSS is loaded via the `@tailwindcss/vite` plugin (not PostCSS config)
- All global styles and CSS design tokens live in `src/styles/starwind.css`
- Dark mode uses the `.dark` class on `<html>`, toggled via `localStorage` in a blocking inline script in `src/layouts/Layout.astro`

### Component layers

- `src/components/starwind/` — Starwind UI base components (button, dialog, sheet, separator, toggle). Managed via `starwind.config.json`; add new ones with `pnpm starwind add <component>`
- `src/components/starwind-pro/` — Starwind Pro blocks (navbar-01, theme-switcher-02). Require `STARWIND_LICENSE_KEY` env var; add via `pnpm shadcn add @starwind-pro/<block-name>`
- `src/components/` root — custom project components
- `src/layouts/Layout.astro` — the single base layout; wraps all pages with theme init and global CSS import

### Theming

`src/styles/starwind.css` defines CSS custom properties (`--background`, `--foreground`, `--primary`, etc.) for both `:root` (light) and `.dark`. Tailwind color utilities like `bg-background`, `text-foreground` map to these tokens via `@theme inline` declarations in the same file. The base color palette is **neutral**.

### Deployment

Deployed to **Vercel** with `pnpm run build` as the build command and `cleanUrls: true`.
