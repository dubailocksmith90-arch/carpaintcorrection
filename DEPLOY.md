# Deploying to Cloudflare Pages

Target: `https://carpaintcorrection.co.uk` (domain is already on Cloudflare — it only needs adding as a custom domain).

## Option A — Dashboard (recommended)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the `carpaintcorrection` repository.
4. Build settings:
   - **Build command:** `node src/assets/make-icon.mjs && node build.mjs`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (repo root)
   - No environment variables needed. No Node version override needed (Pages default Node 18+ works; zero npm dependencies so no install step runs).
5. **Save and Deploy.** Cloudflare builds and gives you a `*.pages.dev` URL.
6. **Custom domain:** Pages project → **Custom domains** → **Set up a custom domain** → enter `carpaintcorrection.co.uk` → **Activate**.
   - Because the domain is already on Cloudflare, DNS is handled automatically (a CNAME is added for you).
   - Also add `www.carpaintcorrection.co.uk` if you want the www variant, and set up a redirect rule (www → apex) under **Rules → Redirect Rules**.
7. Verify: visit `https://carpaintcorrection.co.uk/`, check `https://carpaintcorrection.co.uk/sitemap.xml` and `/robots.txt` load.

## Option B — Wrangler CLI

```bash
# one-time login
npx wrangler login

# build locally, then deploy the output directly
node src/assets/make-icon.mjs && node build.mjs
npx wrangler pages deploy dist --project-name=carpaintcorrection

# add the custom domain (first deploy via dashboard Connect-to-Git is still the
# simplest way to get automatic preview deploys; for CLI-only setups run:)
npx wrangler pages domain add carpaintcorrection.co.uk --project-name=carpaintcorrection
```

## Notes

- Every push to the connected branch rebuilds automatically (`node src/assets/make-icon.mjs && node build.mjs` → `dist/`).
- The build self-verifies: broken internal links, placeholder leaks, missing SEO tags or invalid page metadata fail the build before deploy.
- `dist/robots.txt` explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.); `dist/llms.txt` is served for LLM crawlers.
- After going live: submit `https://carpaintcorrection.co.uk/sitemap.xml` in Google Search Console and Bing Webmaster Tools, and request indexing of `/`.
