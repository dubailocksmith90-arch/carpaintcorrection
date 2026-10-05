import {
  hero, answerBlock, faqBlock, ctaBand, priceTable, beforeAfter,
} from "../lib/components.mjs";

const faqs = [
  {
    q: "How much does swirl mark removal cost in Manchester?",
    a: `<p>From £299 for a stage 1 enhancement, which removes around 60% of light swirls. Heavily swirled paint needs a <a href="/2-stage-paint-correction/">2-stage correction</a> from £549, removing 80–85%. Photos in the <a href="/get-a-quote/">quote builder</a> get you a fixed price.</p>`,
  },
  {
    q: "What causes swirl marks?",
    a: `<p>Almost always washing: automatic car washes, dirty sponges, one-bucket washing, and drying with rough towels. Each wash drags grit across the paint in circles — hence "swirls". They're the single most common paint defect we correct.</p>`,
  },
  {
    q: "Can I remove swirl marks by hand?",
    a: `<p>Hand polishing can improve very light marring, but true swirl removal needs a machine polisher — a dual-action polisher with the right pad and compound. Done wrong, hand or machine polishing adds holograms. If you're unsure, it's cheaper to let a specialist do it once than to fix a DIY attempt.</p>`,
  },
  {
    q: "How do I stop swirls coming back?",
    a: `<p>Two-bucket hand washing with grit guards, pH-neutral shampoo, quality microfibre, and never automatic car washes. Add <a href="/ceramic-coating/">ceramic coating</a> and the paint resists wash marring far better.</p>`,
  },
];

export default {
  path: "swirl-mark-removal",
  title: "Swirl Mark Removal Manchester | Machine Polishing",
  description: "Swirl marks permanently removed in Manchester by machine polishing — not hidden by wax that washes off. From £299, studio + mobile. Get a free quote today.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "Swirl Mark Removal" }],
  faqs,
  service: {
    name: "Swirl Mark Removal",
    description: "Permanent swirl mark removal in Manchester by machine polishing — defects removed from the clear coat, not hidden by fillers.",
    price: "299",
  },
  body: `
${hero({
  eyebrow: "Permanent removal · Not hidden",
  h1: "Swirl Mark Removal in Manchester",
  lede: "Those spider-web scratches in your paint under sunlight? We remove them permanently with machine polishing — not fillers that wash off. From £299.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>Swirl marks are thousands of fine circular scratches in the clear coat, caused by automatic car washes, dirty sponges and poor washing technique. Machine polishing permanently removes them by levelling the clear coat — unlike waxes and glazes, which just fill swirls temporarily and wash away within weeks.</p>`)}
    <h2>How we <span class="hl">remove them</span></h2>
    <ol class="steps">
      <li><strong>Inspect under specialist lighting</strong><p>Swirls invisible in shade show clearly under colour-matched light. We map the true condition first.</p></li>
      <li><strong>Decontaminate</strong><p>Full wash, tar and iron removal, clay bar — polishing dirty paint just adds more swirls.</p></li>
      <li><strong>Machine polish</strong><p>Stage 1 for light swirling (~60% removal), 2-stage for heavy swirling (80–85%). Paint depth checked throughout.</p></li>
      <li><strong>Protect</strong><p><a href="/ceramic-coating/">Ceramic coating</a> resists future wash marring — the swirls stay gone.</p></li>
    </ol>
    <h2>Pricing</h2>
    ${priceTable([
      ["Stage 1 enhancement", "Light swirling, gloss restoration, 1 day", "£299"],
      ["2-stage correction", "Heavy swirling, dull paint, 2–3 days", "£549"],
      ["Stage 1 + 2-year ceramic coating", "Remove swirls and keep them away", "£549"],
    ], "Swirl mark removal prices")}
    ${beforeAfter("swirl mark removal, Manchester")}
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    <h2>The test: <span class="hl">sunlight</span></h2>
    <p>Look at your bonnet in direct sunlight. If you see a web of fine circular scratches, that's swirling — and it's on nearly every car that's ever been through an automatic car wash. The good news: it's the easiest defect to fix permanently, and the transformation is dramatic.</p>
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand("See your paint without the swirls.", "From £299. Send photos for a fixed quote in 30 seconds.")}`,
};
