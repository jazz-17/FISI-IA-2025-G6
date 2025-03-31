import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://jazz-17.github.io/FISI-IA-2025-G6/",
  root: "src",
  publicDir: "../public",
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },

})
