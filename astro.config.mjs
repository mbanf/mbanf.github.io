// @ts-check
import { defineConfig } from 'astro/config';

// For a user site (repo named <username>.github.io) keep base at '/'.
// For a project site (repo named e.g. "homepage") set base: '/homepage'.
export default defineConfig({
  site: 'https://mbanf.github.io',
  base: '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
