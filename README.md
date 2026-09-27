# Alimi Muhammed Adebayo — Portfolio

A personal developer portfolio built with React, Vite and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

> These commands haven't been run in the environment this project was generated in
> (no network access there), so run `npm install` first and fix anything `npm run build`
> reports before you deploy — see "Before you deploy" below.

## Personalize it

Almost everything you'll want to change lives in two files:

- **`src/data/config.js`** — your name, title, location, email, GitHub, LinkedIn and
  WhatsApp. LinkedIn and WhatsApp are placeholders (`ADD_LINKEDIN_URL`,
  `ADD_WHATSAPP_NUMBER`) — their buttons stay hidden until you fill them in, so nothing
  links anywhere broken in the meantime.
- **`src/data/projects.js`** — add future projects here; each one becomes a card
  automatically. Set `githubUrl` on a project to show its "Code" button.

Other data files:
- `src/data/skills.js` — your skills, grouped by category.
- `src/data/experience.js` — work experience, education and certifications.

### Images

Replace these two files with your own images, keeping the same filenames:
- `src/assets/profile.jpg` — your photo, shown in the Hero section.
- `src/assets/projects/digitcare.png` — the DigitCare project screenshot.

Both are currently placeholder graphics so the site builds and looks intentional
before you add real photos. Add new project images under `src/assets/projects/`.

## Before you deploy

This project was put together without a working internet connection, so
`npm install` / `npm run build` have not actually been run against it yet. Before
pushing to Vercel:

1. Run `npm install` and `npm run build` locally and fix anything that comes up
   (this is standard for any freshly generated project, but don't skip it).
2. Open `npm run dev` in a browser and click through every section, the mobile
   menu, and the contact form.
3. Replace the placeholder images and the LinkedIn/WhatsApp values described above.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, click **New Project** and import that repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**.

No environment variables are required for the current version of this site.
