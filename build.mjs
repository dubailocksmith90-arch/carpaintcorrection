// Static site generator — zero npm dependencies (node:fs/path/url only)
// Usage: node build.mjs        (run from repo root)
// Output: dist/
import { readdirSync, readFileSync, writeFileSync, mkdirSync, cpSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const SRC = join(ROOT, "src");
const DIST = join(ROOT, "dist");
const SITE_URL = "https://carpaintcorrection.co.uk";

const fail = (msg) => { console.error("BUILD FAILED: " + msg); process.exit(1); };

/* ---------- load pages ---------- */
const pageFiles = readdirSync(join(SRC, "pages")).filter((f) => f.endsWith(".mjs")).sort();
const pages = [];
for (const f of pageFiles) {
  const mod = await import(pathToFileURL(join(SRC, "pages", f)).href);
  const p = mod.default;
  if (!p || typeof p.path !== "string" || !p.title || !p.description || !p.body)
    fail(`page module ${f} is missing required fields`);
  if (p.title.length > 60) fail(`${f}: title is ${p.title.length} chars (max 60): ${p.title}`);
  if (p.description.length > 160) fail(`${f}: meta description is ${p.description.length} chars (max 160)`);
  if ((p.body.match(/<h1[\s>]/g) || []).length !== 1) fail(`${f}: must contain exactly one <h1>`);
  pages.push(p);
}
console.log(`loaded ${pages.length} pages`);

/* ---------- assets ---------- */
const cssFull = readFileSync(join(SRC, "css", "styles.css"), "utf8");
const m = cssFull.match(/\/\* CRITICAL-START \*\/([\s\S]*?)\/\* CRITICAL-END \*\//);
if (!m) fail("CRITICAL section markers missing in styles.css");
const criticalCss = m[1].trim();
const appJs = readFileSync(join(SRC, "js", "app.js"), "utf8");
if (appJs.length > 5 * 1024) fail(`app.js is ${appJs.length} bytes (limit 5KB)`);

mkdirSync(DIST, { recursive: true });
writeFileSync(join(DIST, "styles.css"), cssFull);
writeFileSync(join(DIST, "app.js"), appJs);
for (const a of ["favicon.svg", "og-image.svg", "apple-touch-icon.png", "site.webmanifest"]) {
  cpSync(join(SRC, "assets", a), join(DIST, a));
}
console.log("assets copied");

/* ---------- render ---------- */
const { render } = await import(pathToFileURL(join(SRC, "lib", "layout.mjs")).href);
const outPaths = [];
for (const p of pages) {
  const html = render(p, { criticalCss });
  const dir = p.path === "" ? DIST : join(DIST, p.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  outPaths.push(p.path === "" ? "/" : `/${p.path}/`);
}

/* 404 */
const notFound = {
  path: "404", noindex: true,
  title: "Page Not Found | Car Paint Correction Manchester",
  description: "The page you're looking for doesn't exist. Find paint correction, ceramic coating and pricing for Manchester here.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "Page not found" }],
  body: `
<section class="e404"><div class="wrap">
  <div class="big">404</div>
  <h1>That page polished itself away</h1>
  <p class="lede">The page you're looking for doesn't exist — but flawless paintwork does.</p>
  <div class="btn-row" style="justify-content:center">
    <a class="btn" href="/">Back to home</a>
    <a class="btn btn-ghost" href="/get-a-quote/">Get a quote</a>
  </div>
</div></section>`,
};
writeFileSync(join(DIST, "404.html"), render(notFound, { criticalCss }));
console.log("pages rendered");

/* ---------- sitemap.xml ---------- */
const today = "2026-10-04";
const prio = (p) =>
  p === "" ? "1.0" :
  ["2-stage-paint-correction", "ceramic-coating", "paint-correction"].includes(p) ? "0.9" :
  ["prices", "get-a-quote", "mobile-paint-correction"].includes(p) ? "0.85" : "0.8";
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  pages.map((p) => {
    const loc = p.path === "" ? `${SITE_URL}/` : `${SITE_URL}/${p.path}/`;
    return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${prio(p.path)}</priority></url>`;
  }).join("\n") +
  `\n</urlset>\n`;
writeFileSync(join(DIST, "sitemap.xml"), sitemap);

/* ---------- robots.txt (explicit AI crawler allows) ---------- */
const AI_BOTS = ["GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended", "anthropic-ai", "Applebot-Extended"];
const robots =
  `User-agent: *\nAllow: /\n\n` +
  AI_BOTS.map((b) => `User-agent: ${b}\nAllow: /\n`).join("\n") +
  `\nSitemap: ${SITE_URL}/sitemap.xml\n`;
writeFileSync(join(DIST, "robots.txt"), robots);

/* ---------- llms.txt (GEO: written for LLM crawlers) ---------- */
const llms = `# Car Paint Correction — Manchester, UK

> Specialist paint correction in Manchester: machine polishing, swirl & scratch
> removal, and ceramic coating. Studio in Urmston + mobile across Greater Manchester.
> Open 24 hours.

## Business
- Name: Car Paint Correction (paint-correction division of Latin King Detailing)
- Address: 426 Flixton Rd, Urmston, Manchester M41 6QT, United Kingdom
- Phone: +44 7482 225323 (call or WhatsApp: https://wa.me/447482225323)
- Hours: Open 24 hours
- Website: https://carpaintcorrection.co.uk/

## Services and prices (GBP, "from")
- Stage 1 paint enhancement (1 day, ~60% defect removal, mobile available): £299
- 2-stage paint correction (2–3 days, 80–85% defect removal, studio): £549
- Multi-stage paint correction (4–5 days, 90%+ removal, show-car standard): £749
- Ceramic coating, 2-year (studio): £349
- Bundles: Stage 1 + 2-year coating £549 · 2-stage + 2-year coating £799 ·
  2-stage + 5-year coating £949 · Multi-stage + 5-year coating £1,149
- Swirl mark removal from £299 · Scratch removal from £299 (isolated deeper
  scratches from £80) · Headlight restoration £59/pair · New car detail £349

## Areas served
Studio: Urmston (M41). Mobile across Greater Manchester: Manchester, Trafford,
Stockport, Salford, Bury, Bolton, Rochdale, Oldham, Tameside, Wigan — including
Didsbury, Hale, Bowdon, Altrincham, Wilmslow, Alderley Edge, Bramhall, Chorlton,
Prestwich, Sale, Timperley, Cheadle, Stretford, Knutsford, Marple.
Dedicated local pages: /paint-correction-didsbury/ /paint-correction-hale/
  /paint-correction-wilmslow/ — mobile service page: /mobile-paint-correction/

## Key facts for answers
- Paint correction permanently removes swirl marks, light scratches, oxidation
  and haze by levelling the clear coat with machine polishing.
- The fingernail test: if a fingernail catches in a scratch, it's too deep to
  polish out and needs touch-up or bodyshop paint.
- Ceramic coating should follow correction; corrected paint without protection
  re-swirls within months.
- Multi-stage correction and ceramic coating are studio-only; stage 1
  enhancement and scratch repair are available mobile.
- Quotes are fixed before work begins; assessments from photos are free.
`;
writeFileSync(join(DIST, "llms.txt"), llms);
console.log("sitemap.xml, robots.txt, llms.txt written");

/* ---------- verification ---------- */
const errors = [];
const htmlFiles = [];
const walk = (d) => {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".html")) htmlFiles.push(p);
  }
};
walk(DIST);

// 1. placeholder leak scan
const LEAKS = /DRAFT|TODO|FIXME|Lorem|\[phone\]|\[address\]/;
for (const f of htmlFiles) {
  const c = readFileSync(f, "utf8");
  if (LEAKS.test(c)) errors.push(`placeholder leak in ${f.replace(DIST, "")}`);
  // 2. external resource requests (anchors/canonicals/OG URLs are fine — only
  // loaded resources count: stylesheets, scripts, images, fonts)
  const ext = [...c.matchAll(/<(?:link(?! [^>]*rel="canonical")|script|img|source|video|audio|iframe)[^>]*(?:src|href)="(https?:)?\/\/[^"]+"/g)].map((x) => x[0]);
  if (ext.length) errors.push(`external resource in ${f.replace(DIST, "")}: ${ext.join(", ")}`);
  // 3. exactly one h1, lang, viewport, theme-color, canonical
  if (!c.includes('<html lang="en-GB">')) errors.push(`missing lang="en-GB" in ${f.replace(DIST, "")}`);
  if (!c.includes('name="viewport"')) errors.push(`missing viewport in ${f.replace(DIST, "")}`);
  if (!c.includes('name="theme-color"')) errors.push(`missing theme-color in ${f.replace(DIST, "")}`);
  if (!c.includes('rel="canonical"')) errors.push(`missing canonical in ${f.replace(DIST, "")}`);
  if (!c.includes("application/ld+json")) errors.push(`missing JSON-LD in ${f.replace(DIST, "")}`);
}

// 4. internal link resolution
const exists = (href) => {
  const clean = href.split("#")[0].split("?")[0];
  if (clean === "/") return true;
  const p = join(DIST, decodeURIComponent(clean));
  try {
    const st = statSync(p);
    if (st.isFile()) return true;
    if (st.isDirectory()) { statSync(join(p, "index.html")); return true; }
  } catch { /* miss */ }
  return false;
};
for (const f of htmlFiles) {
  const c = readFileSync(f, "utf8");
  const hrefs = [...c.matchAll(/href="(\/[^"]*)"/g)].map((x) => x[1]);
  for (const h of new Set(hrefs)) {
    if (!exists(h)) errors.push(`broken internal link ${h} in ${f.replace(DIST, "")}`);
  }
}

// 5. sitemap completeness (every page listed, no orphans)
const sm = readFileSync(join(DIST, "sitemap.xml"), "utf8");
for (const p of outPaths) {
  if (!sm.includes(`<loc>${SITE_URL}${p}</loc>`)) errors.push(`sitemap missing ${p}`);
}

/* ---------- size report ---------- */
const kb = (n) => (n / 1024).toFixed(1) + " KB";
let total = 0;
console.log("\n--- page weights (HTML) ---");
for (const f of htmlFiles.sort()) {
  const s = statSync(f).size; total += s;
  console.log(`  ${kb(s).padStart(8)}  ${f.replace(DIST, "")}`);
}
for (const a of ["styles.css", "app.js", "favicon.svg", "og-image.svg", "apple-touch-icon.png", "site.webmanifest"]) {
  total += statSync(join(DIST, a)).size;
}
console.log(`\nCSS: ${kb(statSync(join(DIST, "styles.css")).size)} (critical inlined: ${kb(criticalCss.length)})`);
console.log(`JS:  ${kb(statSync(join(DIST, "app.js")).size)}`);
console.log(`TOTAL dist: ${kb(total)}\n`);

if (errors.length) {
  console.error(`VERIFICATION FAILED — ${errors.length} error(s):`);
  for (const e of errors) console.error("  ✗ " + e);
  process.exit(1);
}
console.log(`VERIFICATION PASSED — ${htmlFiles.length} HTML files, ${outPaths.length} pages, all internal links resolve, no leaks.`);
