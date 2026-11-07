# alishba — Portfolio
## [link](https://alishba-portfolio-roan.vercel.app/)

A modern, fully-animated personal portfolio. Dark "neon glow" aesthetic with an aurora background, glassmorphism, scroll-reveal motion, 3D-tilt project cards and a magnetic-button hero.

Built with **Next.js 15 (App Router)** · **TypeScript** · **Tailwind CSS v4** · **Framer Motion** · **lucide-react**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Editing content


Update your name, roles, about, skills, experience, projects, education, certifications and contact details there — every component reads from it. No need to touch the components for copy changes.

## Swapping your photo

1. Save the image  inside the `public/` folder (replace the existing file).
2. Prefer a portrait-oriented image (~4:5) for the best fit. A clean, front-facing shot works best.


## Design system

- Colors & tokens: defined in [`src/app/globals.css`](src/app/globals.css) under `@theme`
  (accents: cyan `#22d3ee`, violet `#8b5cf6`, blue `#3b82f6`).
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (code) via `next/font`.
- Motion respects `prefers-reduced-motion`.

## Deploying to Vercel

1. Push this folder to a GitHub/GitLab repo.
2. Import it at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected, no config needed.
3. Deploy. (Update `siteUrl` in `src/app/layout.tsx` to your final domain for correct SEO/OG metadata.)

## Structure

```
src/
  app/            layout, page, global styles, favicon
  components/     Navbar, Hero, About, Skills, Experience, Projects, Education, Contact, Footer
    ui/           SectionHeading, MagneticButton
  lib/content.ts  ← all site content
public/           photo + résumé
```
