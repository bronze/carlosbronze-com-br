# carlosbronze.com.br

## Plugins used:

[astro-icon](https://github.com/natemoo-re/astro-icon)
[astro-compress](https://github.com/Playform/astro-compress)
[@astrojs/sitemap](https://github.com/withastro/astro/tree/main/packages/integrations/sitemap/)
[GoogleFontsOptimizer](https://github.com/sebholstein/astro-google-fonts-optimizer)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components or layouts.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

### 💻 Dev Corner

To update packages: `pnpm up -L -i`  
[Explanation on pnpm](https://pnpm.io/cli/update) and [bonus video](https://www.youtube.com/watch?v=lnj7NUtgnEg)

https://matthiasott.com/notes/how-i-structure-my-css

```
@charset "UTF-8";

// 1. Settings
@import
	"1-settings/global";

// 2. Design Tokens
@import
  "2-design-tokens/colors",
  "2-design-tokens/fonts",
  "2-design-tokens/media-queries",
  "2-design-tokens/spacing",
  "2-design-tokens/typography";
...
```

```
/scss/
├── 1-settings
├── 2-design-tokens
├── 3-tools
├── 4-generic
├── 5-elements
├── 6-skeleton
├── 7-components
├── 8-utilities
├── _shame.scss
└── main.scss
```
