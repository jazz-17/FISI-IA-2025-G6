// @ts-check
import { defineConfig } from "astro/config";


import vue from "@astrojs/vue";


import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  base: "https://jazz-17.github.io/FISI-IA-2025-G6/",
  vite: {
    plugins: [tailwindcss()],
  }
});