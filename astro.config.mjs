import { defineConfig } from 'astro/config'
import { SITE_URL } from './src/data/config'
import tailwindcss from '@tailwindcss/vite'
// import tailwindcss from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  // integrations: [tailwindcss()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: SITE_URL,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
