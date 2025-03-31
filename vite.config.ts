import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "https://jazz-17.github.io/FISI-IA-2025-G6/",
  root: "src",
  publicDir: "../public",
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
