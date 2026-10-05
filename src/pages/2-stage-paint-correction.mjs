import {
  hero, answerBlock, faqBlock, ctaBand, priceTable, beforeAfter, reviewsSection,
} from "../lib/components.mjs";

const faqs = [
  {
    q: "How much is a 2-stage paint correction in Manchester?",
    a: `<p>From £549 for most cars, depending on size and condition. Adding ceramic coating takes it to £799 for a 2-year coating or £949 for 5-year. You get a fixed quote before we start — no surprises. See the full <a href="/prices/">price list</a>.</p>`,
  },
  {
    q: "How long does a 2-stage correction take?",
    a: `<p>Two to three days at our Urmston studio. We don't rush correction — proper decontamination, two full polishing stages, curing and inspection take the time they take.</p>`,
  },
  {
    q: "Will it get rid of swirl marks completely?",
    a: `<p>A 2-stage removes around 80–85% of defects — every swirl visible in normal light, gone. The last few percent need <a href="/multi-stage-paint-correction/">multi-stage work</a>; most daily drivers don't need it.</p>`,
  },
  {
    q: "Can a 2-stage correction be done mobile?",
    a: `<p>No — the full 2-stage is a studio job. Controlled lighting and a dust-free environment matter at this level of correction. <a href="/stage-1-paint-enhancement/">Stage 1 enhancement</a> is available mobile across Greater Manchester.</p>`,
  },
];

export default {
  path: "2-stage-paint-correction",
  title: "2-Stage Paint Correction Manchester | 80%+ Defect Removal",
  description: "2-stage machine polishing in Manchester removes 80%+ of swirls & scratches. Studio in Urmston + mobile. From £549. Free 30-second quote — open 24 hours.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "2-Stage Paint Correction" }],
  faqs,
  service: {
    name: "2-Stage Paint Correction",
    description: "Two-stage machine polishing in Manchester: cutting then refining stages removing 80-85% of swirl marks, scratches and oxidation.",
    price: "549",
  },
  body: `
${hero({
  eyebrow: "Most booked · Studio, Urmston",
  h1: "2-Stage Paint Correction in Manchester",
  lede: "The transformation most cars need. A cutting stage removes 80–85% of defects, a refining stage brings the mirror gloss. Two to three days at our Urmston studio — from £549.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>A 2-stage paint correction is a cutting stage followed by a refining stage of machine polishing. The first stage removes around 80–85% of swirl marks, light scratches, oxidation and haze; the second refines the finish to a deep, mirror gloss. It takes 2–3 days and is the most popular correction we do — the point where a tired car starts looking better than new.</p>`)}
    <h2>What's <span class="hl">included</span></h2>
    <ul class="tick">
      <li>Full decontamination wash — snow foam, two-bucket wash, tar and iron fallout removal, clay bar</li>
      <li>Paint-depth readings, panel by panel, before any machine touches the car</li>
      <li>Stage 1: heavy cutting to remove swirls, scratches and oxidation</li>
      <li>Stage 2: refining to a mirror finish, checked under specialist lighting</li>
      <li>Panel wipe-down and final multi-light inspection</li>
      <li>Ceramic coating options to lock it all in — recommended</li>
    </ul>
    <h2>Bundles &amp; <span class="hl">pricing</span></h2>
    ${priceTable([
      ["2-stage correction", "Cutting + refining, 2–3 days at our Urmston studio", "£549"],
      ["2-stage + 2-year ceramic coating", "Our most booked package — correct, then protect", "£799"],
      ["2-stage + 5-year ceramic coating", "Maximum correction with long-term protection", "£949"],
    ], "2-stage paint correction prices")}
    ${beforeAfter("2-stage paint correction, Manchester")}
  </div>
</section>
${reviewsSection()}
<section class="section alt">
  <div class="wrap">
    <h2>Is 2-stage right for <span class="hl">your car?</span></h2>
    ${answerBlock(`<p>Choose 2-stage if your paint looks dull or hazy in sunlight, is covered in swirl marks from car washes, or has light scratches all over. If the defects are light, save money with <a href="/stage-1-paint-enhancement/">stage 1</a>. If the paint is heavily neglected or you want show-car standard, step up to <a href="/multi-stage-paint-correction/">multi-stage</a>. Send photos — we'll recommend honestly.</p>`)}
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand()}`,
};
