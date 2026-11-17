# Patrick Fitzgerald — Website (React)

A multi-page website — Home, Services, Portfolio and Contact — built with
React, [Vite](https://vitejs.dev) and
[React Router](https://reactrouter.com). Same design and content as the
original static version, restructured as a proper React app with
components, routes and data kept separate from markup.

## Structure

```
patrick-fitzgerald-website/
├── index.html              Vite's HTML entry point (just mounts React)
├── package.json
├── vite.config.js
├── public/
│   └── images/               Put your own images/photos here
├── src/
│   ├── main.jsx              App entry: renders <App/> inside a router
│   ├── App.jsx                Route definitions
│   ├── components/
│   │   ├── Layout.jsx          Header + page content + Footer shell
│   │   ├── Header.jsx           Nav bar (incl. mobile menu toggle)
│   │   ├── Footer.jsx           Footer
│   │   └── CtaBand.jsx          Reusable "call to action" band
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx           Includes the contact form
│   ├── data/
│   │   └── content.js            All the placeholder text/content, as data
│   └── styles/
│       └── style.css              One shared stylesheet, imported once
└── .vscode/extensions.json     Recommends ESLint/Prettier/React snippets
```

Every page renders inside `Layout`, so the header and footer only exist
once in the codebase no matter how many pages you add.

## Running it

Requires [Node.js](https://nodejs.org) (18+).

```bash
npm install
npm run dev
```

Then open the URL it prints (typically `http://localhost:5173`). Vite
hot-reloads on save — no need to restart the server while you edit.

Other scripts:

- `npm run build` — produces a production build in `dist/`
- `npm run preview` — serves that production build locally, to sanity-check it

## Opening it in VS Code

**File → Open Folder…** and select `patrick-fitzgerald-website`, then open
a terminal inside VS Code (`` Ctrl+` ``/`` Cmd+` ``) and run the commands
above. The recommended extensions (ESLint, Prettier, ES7+ React snippets)
will prompt to install when you open the folder.

## What to customise first

- **Content/copy**: almost everything text-based lives in
  `src/data/content.js` as plain arrays — the home page highlights,
  services list, process steps, portfolio items and contact details. Edit
  the data there and it updates everywhere it's used; you shouldn't need
  to touch JSX for a copy change.
- **Your name/branding**: `Patrick Fitzgerald` appears in `index.html`
  (the `<title>`) and `src/components/Header.jsx` (`.nav-brand`) — update
  both, or swap the brand text for a logo image.
- **Home page intro/bio**: the hero intro sentence and About paragraph in
  `src/pages/Home.jsx` are placeholder text (marked with comments) rather
  than data, since they're one-off blocks of prose.
- **Portfolio images**: each project card in `src/pages/Portfolio.jsx`
  renders a grey `.portfolio-media` placeholder box. Add real images to
  `public/images/` and replace that `<div>` with something like
  `<img src="/images/your-file.jpg" alt="..." />`.
- **Contact form**: `src/pages/Contact.jsx`'s `handleSubmit` function only
  shows a confirmation message right now — it doesn't send anywhere. The
  `TODO` comment there shows where to plug in a real submission, e.g.:
  - [Formspree](https://formspree.io) or a similar form backend (easiest,
    no server needed), or
  - your own backend endpoint with `fetch()`.
- **Colours/fonts**: all defined as CSS variables at the top of
  `src/styles/style.css` (`:root { ... }`) — change them once and they
  apply across the whole site.

## Deploying

`npm run build` produces a static `dist/` folder you can host anywhere
that serves static files (Netlify, Vercel, GitHub Pages, S3, etc.) — there's
no backend to deploy alongside it, since the contact form is front-end
only until you wire it up to something real.
