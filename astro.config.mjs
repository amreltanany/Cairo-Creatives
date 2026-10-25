// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://amreltanany.github.io/Cairo-Creatives/
  site: 'https://amreltanany.github.io',
  base: '/Cairo-Creatives',
  // hide Astro's dev-only toolbar (the dark pill at the bottom of the page while running `npm run dev`)
  devToolbar: { enabled: false },
});
