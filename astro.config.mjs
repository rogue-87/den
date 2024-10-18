import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://rogue-87.github.io",
  base: "/den",
  integrations: [sitemap(), svelte()],
});
