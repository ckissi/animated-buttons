CSS BUTTON LIBRARY
==================

A single-page Astro site showcasing a library of buttons built with
pure-CSS hover effects — no JavaScript, no dependencies. Click any
button to view and copy its CSS. Each snippet is self-contained and
respects prefers-reduced-motion.


PROJECT STRUCTURE
-----------------
src/
  pages/
    index.astro       Home page — the CSS button library
  layouts/
    Layout.astro      Base HTML layout (fonts, head, slots)
  components/
    Loader.astro
  styles/
    global.css
  utils/
    loaderCss.ts
  data/
    loaders.ts
astro.config.mjs       Astro configuration
package.json           Scripts and dependencies


GETTING STARTED
---------------
Install dependencies:
    npm install

Start the dev server (http://localhost:4321):
    npm run dev

Build for production (outputs to dist/):
    npm run build

Preview the production build:
    npm run preview


LICENSE
-------
MIT


HOSTING
-------
This project is hosted on Sevalla (https://sevalla.com).
