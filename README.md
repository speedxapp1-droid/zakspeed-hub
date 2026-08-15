# ZakSpeed Hub

Personal brand website for **ZakSpeed** — athlete, creator, and founder of SpeedX.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## Brand assets

Place images in `src/assets/` using these exact filenames:

| File | Purpose |
| --- | --- |
| `src/assets/zakspeed-profile.png` | Profile portrait in the hero |
| `src/assets/zakspeed-logo.png` | Navbar and footer logo |
| `src/assets/speedx-logo.png` | SpeedX section logo |

The UI stays intact without these files and shows placeholders instead. Restart the dev server after adding images.

Optional social preview image:

- `public/og-image.png`

## What to customize

Most copy and links live in one file:

- `src/data/site.js`

Set `siteUrl` (and `ogImage` once `public/og-image.png` exists) in `src/data/site.js`. That is the only production URL config.

Analytics can be added later in `src/analytics/index.js` without changing the layout.
