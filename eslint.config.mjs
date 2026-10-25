// pnpm lint. Checks code, not formatting (that's Prettier): unused
// variables, likely bugs, and accessibility in .astro templates.
import js from '@eslint/js'
import astro from 'eslint-plugin-astro'
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
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      // `catch {}` is how this code says "if storage fails, carry on".
      'no-empty': ['error', { allowEmptyCatch: true }],
    },
  },
)
