# AGENTS.md

Repository-specific knowledge and context for the **legal-page-generator** project.

## 1. Purpose

LexCraft — a free, client-side **Legal Page Generator** built with React + Vite.
Users fill out a form (company name, website URL, email, jurisdiction, etc.) and
the app instantly generates clean, ready-to-paste HTML for common legal pages:

- Privacy Policy
- Terms of Service
- Cookie Policy
- EULA
- Refund Policy
- Disclaimer
- About Us
- Contact Us

Everything runs entirely in the browser — there is no backend, no database, and
no sign-up. Output is plain HTML that can be copied / printed / downloaded and
embedded on any website.

## 2. Setup

Requires Node.js (npm). From the repository root:

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server (HMR) at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## 3. Repository Structure

```
legal-page-generator/
├── index.html          # App shell + SEO/OpenGraph/Twitter/structured-data meta
├── vite.config.js      # Vite config (React + Tailwind v4 plugins)
├── eslint.config.js    # Flat ESLint config
├── package.json        # Scripts & dependencies
├── vercel.json         # Vercel deployment config
├── public/             # Static assets served as-is
│   ├── favicon.svg
│   ├── icons.svg
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── main.jsx        # App entry — mounts <App/> into #root
    ├── App.jsx         # Main UI: template picker, form, live preview, output
    ├── App.css         # Component-scoped styles
    ├── index.css       # Global styles + Tailwind import + Google Fonts import
    ├── generator.js    # Template-rendering logic (fills {{placeholders}})
    ├── templates.js    # Legal page template definitions & form field schemas
    └── assets/         # In-bundled images (hero.png, react.svg, vite.svg)
```

### Key modules

- **`templates.js`** — array of template definitions; each entry has an `id`,
  `name`, `icon`, `description`, and a `fields` schema describing the form
  inputs used to generate that page.
- **`generator.js`** — pure functions that take a template + filled fields and
  produce the final HTML document string.
- **`App.jsx`** — the React UI that ties everything together (template
  selection, dynamic form rendering, live HTML preview, copy/print/download).

## 4. CI/CD

There is currently **no `.github/` folder**, so no GitHub Actions workflows are
defined. The project is configured for **Vercel** deployment via `vercel.json`.
Add CI workflows under `.github/workflows/` if automated testing/deployment is
needed in the future.

## 5. Tech Stack

- **React 19** (with React Compiler available)
- **Vite 8** (build tooling, HMR)
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin)
- **ESLint** (flat config, react-hooks + react-refresh plugins)
