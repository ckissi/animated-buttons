import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://zenith-x.local',
  server: { port: Number(process.env.PORT) || 4321 },
});
