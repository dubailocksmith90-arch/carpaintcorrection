// Full HTML page shell — semantic landmarks, SEO head, JSON-LD @graph
import { SITE } from "./site.mjs";
import { buildGraph } from "./schema.mjs";
import { breadcrumbNav } from "./components.mjs";

const NAV_LINKS = [
  { name: "Paint Correction", url: "/paint-correction/" },
  { name: "Ceramic Coating", url: "/ceramic-coating/" },
  { name: "Prices", url: "/prices/" },
  { name: "Areas We Cover", url: "/areas-we-cover/" },
  { name: "About", url: "/about/" },
  { name: "FAQ", url: "/faq/" },
];

function brandMark() {
  return `<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
    <rect x="1" y="1" width="38" height="38" rx="9" fill="#141419" stroke="#f5a524" stroke-width="2"/>
    <circle cx="20" cy="20" r="9" fill="none" stroke="#f5a524" stroke-width="3"/>
    <circle cx="20" cy="20" r="3.4" fill="#f5a524"/>
    <path d="M29 8l1.2 2.6L33 11.8l-2.8 1.2L29 15.6l-1.2-2.6-2.8-1.2 2.8-1.2z" fill="#ffcf6b"/>
  </svg>`;
}

function header() {
  const links = NAV_LINKS.map((l) => `<li><a href="${l.url}">${l.name}</a></li>`).join("\n");
  return `<header class="site-header">
  <div class="header-in">
    <a class="brand" href="/" aria-label="Car Paint Correction — home">
      ${brandMark()}
      <span class="brand-name">Car Paint Correction<small>Manchester</small></span>
    </a>
    <button class="nav-toggle" data-nav-toggle aria-expanded="false" aria-controls="mainnav" aria-label="Open menu">☰</button>
    <nav class="main-nav" data-nav id="mainnav" aria-label="Main navigation">
      <ul>
        ${links}
        <li><a class="btn" href="/get-a-quote/" style="padding:.6rem 1.2rem">Get a Quote</a></li>
      </ul>
    </nav>
  </div>
</header>`;
}

function footer() {
  const svcLinks = [
    ["2-Stage Paint Correction", "/2-stage-paint-correction/"],
    ["Stage 1 Enhancement", "/stage-1-paint-enhancement/"],
    ["Multi-Stage Correction", "/multi-stage-paint-correction/"],
    ["Ceramic Coating", "/ceramic-coating/"],
    ["Swirl Mark Removal", "/swirl-mark-removal/"],
    ["Scratch Removal", "/scratch-removal/"],
  ].map(([n, u]) => `<li><a href="${u}">${n}</a></li>`).join("\n");
  const areaLinks = [
    ["Paint Correction Didsbury", "/paint-correction-didsbury/"],
    ["Paint Correction Hale", "/paint-correction-hale/"],
    ["Paint Correction Wilmslow", "/paint-correction-wilmslow/"],
    ["Mobile Paint Correction", "/mobile-paint-correction/"],
    ["All Areas", "/areas-we-cover/"],
  ].map(([n, u]) => `<li><a href="${u}">${n}</a></li>`).join("\n");
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <h3>Car Paint Correction</h3>
        <address class="nap">
          <strong>${SITE.name}</strong><br>
          ${SITE.street}, ${SITE.locality}<br>
          ${SITE.region} ${SITE.postcode}<br>
          <a href="${SITE.phoneHref}">${SITE.phoneDisplay}</a><br>
          ${SITE.hoursNote}
        </address>
      </div>
      <div>
        <h3>Services</h3>
        <ul>${svcLinks}</ul>
      </div>
      <div>
        <h3>Areas</h3>
        <ul>${areaLinks}</ul>
      </div>
      <div>
        <h3>Company</h3>
        <ul>
          <li><a href="/about/">About us</a></li>
          <li><a href="/prices/">Prices</a></li>
          <li><a href="/faq/">FAQs</a></li>
          <li><a href="/get-a-quote/">Get a quote</a></li>
          <li><a href="${SITE.sisterUrl}" target="_blank" rel="noopener">Latin King Detailing — sister brand</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-base">
      <span>© 2026 ${SITE.name}, Manchester. Part of ${SITE.sisterBrand}.</span>
      <span>Studio + mobile across Greater Manchester</span>
    </div>
  </div>
</footer>
<div class="sticky-bar" role="navigation" aria-label="Quick contact">
  <a class="call" href="${SITE.phoneHref}">📞 Call now</a>
  <a class="wa" href="${SITE.whatsapp}" target="_blank" rel="noopener">💬 WhatsApp</a>
</div>`;
}

/* page: { path, title, description, breadcrumb, service?, faqs?, body, noindex? } */
export function render(page, { criticalCss }) {
  const canonical = page.path === "" ? `${SITE.url}/` : `${SITE.url}/${page.path}/`;
  const ogImage = `${SITE.url}/og-image.svg`;
  const graph = JSON.stringify(buildGraph(page));
  const robots = page.noindex ? `<meta name="robots" content="noindex, nofollow">` : `<meta name="robots" content="index, follow, max-image-preview:large">`;
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="${SITE.themeColor}">
<title>${page.title}</title>
<meta name="description" content="${page.description}">
<link rel="canonical" href="${canonical}">
${robots}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name} Manchester">
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:alt" content="${SITE.name} — paint correction specialists in Manchester">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${page.title}">
<meta name="twitter:description" content="${page.description}">
<meta name="twitter:image" content="${ogImage}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<style>${criticalCss}</style>
<link rel="stylesheet" href="/styles.css">
<script type="application/ld+json">${graph}</script>
</head>
<body>
<a class="skip" href="#main">Skip to main content</a>
${header()}
<main id="main">
${breadcrumbNav(page.breadcrumb)}
${page.body}
</main>
${footer()}
<script src="/app.js" defer></script>
</body>
</html>
`;
}
