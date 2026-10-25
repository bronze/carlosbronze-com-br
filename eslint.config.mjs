// pnpm lint. Checks code, not formatting (that's Prettier): unused
// variables, likely bugs, accessibility in .astro templates, and Tailwind
// classes.
import js from '@eslint/js'
import astro from 'eslint-plugin-astro'
import tailwind from 'eslint-plugin-better-tailwindcss'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig(
  // Same exceptions as .prettierignore: generated files, and the components
  // the Starwind and shadcn CLIs own.
  globalIgnores([
    'dist/',
    '.astro/',
    '.vercel/',
    'src/components/starwind/',
    'src/components/starwind-pro/',
    'src/components/ui/',
    'src/components/ModeToggle.tsx',
    'src/lib/utils/starwind/',
  ]),
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  astro.configs['jsx-a11y-recommended'],
  // Tailwind: classes that clash or repeat, retired ones, and the canonical
  // spelling the editor suggests (aria-[current]:x, not [&[aria-current]]:x).
  // Order and wrapping are Prettier's job.
  tailwind.configs.correctness,
  {
    rules: {
      // It can't see the classes components define in their own <style>
      // (.scene, .cloud, .stats…), so it would flag every one of them.
      'better-tailwindcss/no-unknown-classes': 'off',
      'better-tailwindcss/enforce-canonical-classes': 'error',
      'better-tailwindcss/no-deprecated-classes': 'error',
      'better-tailwindcss/no-duplicate-classes': 'error',
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/styles/starwind.css',
        // Lets it turn pixel values into the scale, as the editor does:
        // max-w-[720px] is max-w-180.
        rootFontSize: 16,
      },
    },
  },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      // `catch {}` is how this code says "if storage fails, carry on".
      'no-empty': ['error', { allowEmptyCatch: true }],
    },
  },
)
