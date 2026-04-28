# Ruturaj Dixit — Portfolio

Personal portfolio site built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed to be deployed on **Vercel** in one click.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel (3 steps)

1. **Push this folder to a new GitHub repo** (e.g. `ruturaj-portfolio`).
2. Go to https://vercel.com/new, click **Import Project**, and select the repo.
3. Click **Deploy**. Vercel auto-detects Next.js — no env vars or build settings needed.

You'll get a live URL like `ruturaj-portfolio.vercel.app`. Add a custom domain (e.g. `ruturajdixit.com`) under **Project → Settings → Domains**.

## Customizing

- **Content**: edit the `EXPERIENCE`, `PROJECTS`, `SKILLS`, and `CERTS` arrays at the top of `app/page.tsx`.
- **Styling**: edit `app/globals.css` and `tailwind.config.ts`.
- **Resume PDF**: drop your resume in `public/resume.pdf` — the nav button links to `/resume.pdf`.
- **OpenGraph image**: put `public/og.png` (1200×630) for nicer link previews; reference it in `app/layout.tsx`.

## Stack

- Next.js 14 (App Router, RSC-ready)
- React 18
- TypeScript
- Tailwind CSS 3
- Zero runtime dependencies beyond React/Next

## Notes

- Single-file site (`app/page.tsx`) on purpose — easy to edit, fast to ship.
- Smooth-scroll nav, dark theme, subtle grid background, fade-up animations.
- Fully responsive (mobile-first).
