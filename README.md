# Car Paint Correction — carpaintcorrection.co.uk

Custom static website for a Manchester paint-correction specialist (sister brand of Latin King Detailing, Urmston). Hand-written semantic HTML5 + custom CSS + vanilla JS. No frameworks, no build-time dependencies.

## Build

Requires Node.js 18+ (tested on Node v24). Zero npm dependencies — nothing to install.

```bash
node src/assets/make-icon.mjs && node build.mjs
```

Output goes to `dist/` — pure static HTML, ready to serve from any static host.

The build script also verifies itself: every internal link must resolve, no placeholder text may leak, every page must carry exactly one H1, a ≤60-char title, a ≤160-char meta description, `lang="en-GB"`, viewport, theme-color, canonical and JSON-LD. It exits non-zero if any check fails.

## Project layout

```
build.mjs            # static-site generator + verifier (node build.mjs)
src/
  pages/             # 19 page modules (content + SEO metadata)
  lib/               # layout, components, JSON-LD schema builders, site constants
  css/styles.css     # full stylesheet (critical section marked, inlined by build)
  js/app.js          # vanilla JS: mobile nav, before/after slider, quote→WhatsApp
  assets/            # favicon.svg, og-image.svg, apple-touch-icon.png, site.webmanifest
dist/                # build output (generated — not committed)
DEPLOY.md            # Cloudflare Pages deploy steps
```

## Deploy target

Cloudflare Pages → custom domain `carpaintcorrection.co.uk` (already on Cloudflare). See DEPLOY.md.
