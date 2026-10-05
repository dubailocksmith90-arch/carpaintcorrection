// Reusable HTML components — all copy is authored, no placeholders
import { SITE, SERVICES_NAV } from "./site.mjs";

export const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));

/* AEO/GEO: quotable factual answer block (40-60 words of authored copy) */
export function answerBlock(html) {
  return `<div class="answer">\n${html}\n</div>`;
}

/* FAQ accordion — native details/summary, zero JS */
export function faqBlock(faqs) {
  const items = faqs
    .map(
      (f) => `<details>\n<summary>${f.q}</summary>\n<div class="faq-a">\n${f.a}\n</div>\n</details>`
    )
    .join("\n");
  return `<section class="faq" aria-label="Frequently asked questions">\n<h2>Frequently asked <span class="hl">questions</span></h2>\n${items}\n</section>`;
}

/* Standard CTA band */
export function ctaBand(
  title = "Ready to see your paint properly again?",
  text = "Get a fixed quote in 30 seconds — or just call. We're open 24 hours."
) {
  return `<section class="cta-band">
  <div class="wrap">
    <h2>${title}</h2>
    <p>${text}</p>
    <div class="btn-row" style="justify-content:center">
      <a class="btn" href="/get-a-quote/">Get a free quote</a>
      <a class="btn btn-ghost" href="${SITE.phoneHref}">Call ${SITE.phoneDisplay}</a>
      <a class="btn btn-ghost" href="${SITE.whatsapp}" target="_blank" rel="noopener">WhatsApp us</a>
    </div>
  </div>
</section>`;
}

/* Before/after slider — clearly-marked real-photo slots, no stock imagery */
export function beforeAfter(label) {
  return `<div class="ba" data-ba>
  <div class="ba-img ba-before"><span class="ba-tag">Before</span><span class="ba-note">Photo slot — real &ldquo;before&rdquo; image of a ${esc(label)} job goes here</span></div>
  <div class="ba-img ba-after"><span class="ba-tag">After</span><span class="ba-note">Photo slot — real &ldquo;after&rdquo; image of the same ${esc(label)} job goes here</span></div>
  <div class="ba-handle" aria-hidden="true"></div>
  <input type="range" min="0" max="100" value="50" aria-label="Drag to compare before and after photos of a ${esc(label)} job">
</div>`;
}

/* Generic dashed photo placeholder */
export function photoSlot(title, text) {
  return `<div class="photo-slot" role="img" aria-label="${esc(title)} — photo placeholder">
  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="3.5"/><path d="M8 6l1.5-2.5h5L16 6"/></svg>
  <strong>${title}</strong>
  <p>${text}</p>
</div>`;
}

/* Reviews — placeholder slots only, never invented review text */
export function reviewsSection() {
  return `<section class="section" aria-label="Customer reviews">
  <div class="wrap">
    <h2>What Manchester <span class="hl">drivers say</span></h2>
    <p class="lede">Real reviews from our Google Business Profile will appear here — unedited, as customers leave them.</p>
    <div class="review-grid">
      <div class="review-slot"><div class="stars" aria-hidden="true">★★★★★</div><strong>Google review slot</strong><br>Live customer review 1 appears here once the Google feed is connected.</div>
      <div class="review-slot"><div class="stars" aria-hidden="true">★★★★★</div><strong>Google review slot</strong><br>Live customer review 2 appears here once the Google feed is connected.</div>
      <div class="review-slot"><div class="stars" aria-hidden="true">★★★★★</div><strong>Google review slot</strong><br>Live customer review 3 appears here once the Google feed is connected.</div>
    </div>
  </div>
</section>`;
}

/* Price table */
export function priceTable(rows, caption) {
  const trs = rows
    .map(
      (r) => `<tr><td><strong>${r[0]}</strong><br><span style="color:var(--muted);font-size:.9rem">${r[1]}</span></td><td class="price-cell">${r[2]}</td></tr>`
    )
    .join("\n");
  return `<div class="table-wrap"><table${caption ? ` aria-label="${esc(caption)}"` : ""}>
  <thead><tr><th scope="col">Service</th><th scope="col">From price</th></tr></thead>
  <tbody>\n${trs}\n</tbody>\n</table></div>
  <p style="font-size:.88rem;color:var(--muted)">All prices include VAT where applicable. Final fixed quote confirmed before we start — the price we quote is the price you pay.</p>`;
}

/* Service cards grid */
export function serviceCards(cards) {
  const html = cards
    .map(
      (c) => `<div class="card">
      <h3><a href="${c.url}">${c.name}</a></h3>
      <p>${c.text}</p>
      <div class="price">${c.price} <small>from</small></div>
      <p style="margin-top:.8rem"><a class="go" href="${c.url}">Learn more →</a></p>
    </div>`
    )
    .join("\n");
  return `<div class="grid cols-3">\n${html}\n</div>`;
}

/* Trust signals bar */
export function trustBar() {
  return `<div class="trustbar">
    <div><strong>Sister brand</strong>of Latin King Detailing, Urmston</div>
    <div><strong>Fully insured</strong>for high-value vehicles</div>
    <div><strong>Paint-depth readings</strong>on every panel, every job</div>
    <div><strong>Open 24 hours</strong>for bookings &amp; quotes</div>
  </div>`;
}

/* Visible breadcrumb */
export function breadcrumbNav(items) {
  const lis = items
    .map((it, i) =>
      i < items.length - 1
        ? `<li><a href="${it.url}">${esc(it.name)}</a></li>`
        : `<li aria-current="page">${esc(it.name)}</li>`
    )
    .join("\n");
  return `<nav class="crumbs" aria-label="Breadcrumb"><div class="wrap"><ol>\n${lis}\n</ol></div></nav>`;
}

/* Hero */
export function hero({ eyebrow, h1, lede, ctas = true }) {
  return `<section class="hero">
  <div class="wrap">
    <span class="eyebrow">${eyebrow}</span>
    <h1>${h1}</h1>
    <p class="lede">${lede}</p>
    ${ctas ? `<div class="btn-row">
      <a class="btn" href="/get-a-quote/">Get a free 30-second quote</a>
      <a class="btn btn-ghost" href="${SITE.phoneHref}">Call ${SITE.phoneDisplay}</a>
    </div>
    <p class="trustline"><strong>Part of ${SITE.sisterBrand}</strong> · Open 24 hours · Fully insured · Studio in Urmston + mobile across Greater Manchester</p>` : ""}
  </div>
</section>`;
}

/* Area chips list */
export function areaChips(areas) {
  const lis = areas.map((a) => `<li><a href="${a.url}">${a.name} <span style="color:var(--muted)">${a.postcode}</span></a></li>`).join("\n");
  return `<ul class="area-chips">\n${lis}\n</ul>`;
}

/* All-areas text list for hub page */
export function allAreasList(areas) {
  return `<p>${areas.join(" · ")}</p>`;
}

export { SERVICES_NAV };
