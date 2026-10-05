import {
  hero, answerBlock, faqBlock, ctaBand, priceTable, beforeAfter,
} from "../lib/components.mjs";

const faqs = [
  {
    q: "How much is a stage 1 paint enhancement in Manchester?",
    a: `<p>From £299 for most cars. It's the most affordable way into professional machine polishing — a single day, dramatic gloss improvement. Get an exact fixed quote via the <a href="/get-a-quote/">quote builder</a>.</p>`,
  },
  {
    q: "What does a stage 1 enhancement actually remove?",
    a: `<p>Around 60% of light defects: fine swirl marks, wash marring, haze and light oxidation. It won't remove deeper scratches or heavy swirling — that's <a href="/2-stage-paint-correction/">2-stage</a> territory. We'll tell you honestly which your car needs from photos.</p>`,
  },
  {
    q: "Can stage 1 be done mobile at my home?",
    a: `<p>Yes — stage 1 enhancement is our most popular mobile service. We need a safe place to park, access to a power socket, and ideally a water supply. We cover the whole of Greater Manchester; a small travel fee may apply further out.</p>`,
  },
  {
    q: "Should I add ceramic coating to a stage 1?",
    a: `<p>We recommend it. A stage 1 + 2-year ceramic coating bundle is £549 — you get the gloss rescue plus years of protection in a single booking, which works out cheaper than doing them separately.</p>`,
  },
];

export default {
  path: "stage-1-paint-enhancement",
  title: "Stage 1 Paint Enhancement Manchester | From £299",
  description: "Stage 1 machine polish in Manchester: removes light swirls and haze, restores gloss in a single day. Mobile or studio. From £299 — get a free quote today.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "Stage 1 Paint Enhancement" }],
  faqs,
  service: {
    name: "Stage 1 Paint Enhancement",
    description: "Single-stage machine polishing in Manchester: gloss enhancement removing around 60% of light swirl marks and haze in one day.",
    price: "299",
  },
  body: `
${hero({
  eyebrow: "Gloss rescue · 1 day · Mobile available",
  h1: "Stage 1 Paint Enhancement in Manchester",
  lede: "One careful machine-polishing stage that brings back the gloss in a single day. Removes light swirls, wash marring and haze — from £299, at our studio or your driveway.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>A stage 1 paint enhancement is a single stage of machine polishing — one pad, one compound, one careful pass over the whole car. It removes around 60% of light defects: fine swirl marks, wash marring, haze and light oxidation. It takes one day, costs from £299, and is the sweet spot for newer cars or paint that's only lightly marked.</p>`)}
    <h2>What <span class="hl">you get</span></h2>
    <ul class="tick">
      <li>Decontamination wash — snow foam, two-bucket wash, tar and iron fallout removal, clay bar</li>
      <li>Paint-depth readings before polishing begins</li>
      <li>Single-stage machine polish over every panel, checked under specialist lighting</li>
      <li>Panel wipe and final inspection</li>
      <li>Optional ceramic coating or sealant to lock in the gloss</li>
    </ul>
    <h2>Pricing</h2>
    ${priceTable([
      ["Stage 1 enhancement", "Single-stage machine polish, 1 day", "£299"],
      ["Stage 1 + 2-year ceramic coating", "Enhancement plus long-term protection — our best-value bundle", "£549"],
    ], "Stage 1 paint enhancement prices")}
    ${beforeAfter("stage 1 paint enhancement, Manchester")}
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    <h2>Stage 1 vs <span class="hl">2-stage</span> — which do you need?</h2>
    ${answerBlock(`<p>If your paint looks good in shade but shows fine swirls in direct sun, stage 1 is enough. If the whole car looks dull, hazy or heavily swirled even in normal light, you need <a href="/2-stage-paint-correction/">2-stage correction</a>. Not sure? Send photos in the quote builder — we'll recommend the cheapest option that actually fixes your paint.</p>`)}
    <h2>Perfect for</h2>
    <ul class="tick">
      <li>Nearly-new and new cars with light dealer or wash marring — see our <a href="/new-car-detail/">new car detail</a></li>
      <li>Well-kept daily drivers that have lost their gloss</li>
      <li>Cars about to be photographed for sale</li>
      <li>Anyone who wants a dramatic improvement in a single day</li>
    </ul>
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand("Gloss rescue in a single day.", "From £299, mobile or studio. Get your fixed quote in 30 seconds.")}`,
};
