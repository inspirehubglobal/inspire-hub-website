// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://inspirehubglobal.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  }
});
