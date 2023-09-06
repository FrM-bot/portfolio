import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { SITE_URL } from "./src/data/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: SITE_URL
})
