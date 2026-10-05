import {
  hero, answerBlock, faqBlock, ctaBand, priceTable, beforeAfter, reviewsSection,
} from "../lib/components.mjs";

const faqs = [
  {
    q: "How much is multi-stage paint correction in Manchester?",
    a: `<p>From £749 depending on vehicle size and paint condition. Heavily neglected or very hard paint can take longer — you'll always get a fixed quote before we start, never an open-ended bill.</p>`,
  },
  {
    q: "How long does multi-stage correction take?",
    a: `<p>Four to five days at our Urmston studio. This is slow, meticulous work: multiple compounding stages, localised wet sanding where needed, then refining to a concours finish.</p>`,
  },
  {
    q: "What cars need multi-stage correction?",
    a: `<p>Show and concours cars, heavily neglected paint, very hard paint systems (common on German cars) that won't fully correct in two stages, and restorations where the goal is as close to perfect as the paint allows.</p>`,
  },
  {
    q: "Is multi-stage correction done mobile?",
    a: `<p>No — multi-stage work is studio-only. It needs days under colour-matched lighting in a dust-free environment, plus controlled conditions for the ceramic coating that should follow it.</p>`,
  },
];

export default {
  path: "multi-stage-paint-correction",
  title: "Multi-Stage Paint Correction Manchester | Show-Car Finish",
  description: "Multi-stage paint correction in Manchester for 90%+ defect removal. Concours-level finish at our Urmston studio, 4–5 days. From £749 — get a free quote.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "Multi-Stage Paint Correction" }],
  faqs,
  service: {
    name: "Multi-Stage Paint Correction",
    description: "Multi-stage machine polishing in Manchester: 90%+ defect removal for show cars, neglected paint and concours preparation. Studio only.",
    price: "749",
  },
  body: `
${hero({
  eyebrow: "90%+ defect removal · Studio only · 4–5 days",
  h1: "Multi-Stage Paint Correction in Manchester",
  lede: "For show cars, concours preparation and paint that two stages can't save. Multiple compounding and refining stages, localised wet sanding, and a finish measured in gloss — from £749.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>Multi-stage paint correction is three or more stages of machine polishing — successive compounding passes with diminishing abrasives, localised wet sanding for the worst defects, then refining stages to a concours-level finish. It removes 90% or more of correctable defects and takes four to five days. This is the highest level of paint rectification available.</p>`)}
    <h2>When 2-stage <span class="hl">isn't enough</span></h2>
    <ul class="tick">
      <li><strong>Show &amp; concours cars</strong> — judged under harsh light, where every remaining defect counts</li>
      <li><strong>Neglected paint</strong> — years of automatic car washes, oxidation and heavy swirling</li>
      <li><strong>Hard paint systems</strong> — common on German marques, where two stages leave defects behind</li>
      <li><strong>Restorations</strong> — bringing tired paint as close to perfect as the clear coat allows</li>
    </ul>
    <h2>Pricing</h2>
    ${priceTable([
      ["Multi-stage correction", "3+ stages, wet sanding where needed, 4–5 days studio", "£749"],
      ["Multi-stage + 5-year ceramic coating", "Concours finish locked in with long-term protection", "£1,149"],
    ], "Multi-stage paint correction prices")}
    ${beforeAfter("multi-stage paint correction, Manchester")}
  </div>
</section>
${reviewsSection()}
<section class="section alt">
  <div class="wrap">
    <h2>The honest <span class="hl">limits</span></h2>
    ${answerBlock(`<p>Multi-stage correction removes defects in the paint — not damage through it. Stone chips, deep scratches through the clear coat, and areas with dangerously thin paint can't be polished away, and we won't pretend otherwise. Every multi-stage job starts with full paint-depth mapping, and we'll show you exactly what's achievable before we begin.</p>`)}
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand("Show-car standard, measured in gloss.", "Multi-stage correction from £749. Talk to a specialist before you book anywhere else.")}`,
};
