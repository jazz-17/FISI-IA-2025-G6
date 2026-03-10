# IA 2025-I — Grupo 6 (UNMSM FISI)

Course showcase site for **Inteligencia Artificial 2025-I (CS4080)**. It centralizes the syllabus, weekly materials, and interactive demos built by **Grupo 06**.

**Live site:** https://jazz-17.github.io/FISI-IA-2025-G6/

## Highlights

- **Data-driven course hub**: weeks/topics/materials are modeled in `src/data/courseData.ts`.
- **Interactive AI demos**
  - **Tic‑Tac‑Toe Minimax** + **Alpha‑Beta pruning** toggle, with node-visit counter (`/tictactoe`).
  - **In-browser Prolog interpreter** (Tau Prolog) for expert systems & logic programming exercises (`/prolog/...`).
- **Static visualizations** published as standalone HTML pages (graphs/knowledge bases) in `public/`.
- **Modern UI stack** with reusable components and responsive layout (desktop sidebar ToC + mobile-friendly navigation).

## Tech stack

- **Astro** (static site + routing) with **Vue 3** islands
- **TypeScript**
- **Tailwind CSS**
- **Tau Prolog** (client-side Prolog runtime)

## Quick links

- Home / course timeline: https://jazz-17.github.io/FISI-IA-2025-G6/
- Tic‑Tac‑Toe (Minimax): https://jazz-17.github.io/FISI-IA-2025-G6/tictactoe
- Prolog demo (expert system): https://jazz-17.github.io/FISI-IA-2025-G6/prolog/13/sistema-paraderos
- Example visualization pages:
  - https://jazz-17.github.io/FISI-IA-2025-G6/fungi_taxonomy_chart.html
  - https://jazz-17.github.io/FISI-IA-2025-G6/mina_familiar_updated.html
  - https://jazz-17.github.io/FISI-IA-2025-G6/sistema_experto_legal.html

## Run locally

Prerequisites: **Node.js 18+** (LTS recommended)

```bash
npm ci
npm run dev
```

Build + preview:

```bash
npm run build
npm run preview
```

## Project structure

- `src/pages/` — Astro routes (`index.astro`, `tictactoe.astro`, `prolog/[week]/[homework].astro`)
- `src/components/` — Vue UI + interactive demos (e.g. `TicTacToe.vue`, `PrologInterpreter.vue`)
- `src/data/` — content models (`courseData.ts`, `prologData.ts`)
- `public/` — static assets + exported HTML visualizations + `tau-prolog.js`
