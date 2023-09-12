import { defineConfig } from 'astro/config';
import { SITE_URL } from "./src/consts";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: import.meta.env.MODE === 'production' ? SITE_URL : 'http://localhost4321',
  integrations: [tailwind()]
});