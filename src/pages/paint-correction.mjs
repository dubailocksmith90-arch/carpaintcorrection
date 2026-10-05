import {
  hero, answerBlock, faqBlock, ctaBand, priceTable, beforeAfter,
} from "../lib/components.mjs";

const faqs = [
  {
    q: "Does paint correction damage the paint?",
    a: `<p>No — when done properly. We measure paint depth on every panel first and remove only microns of clear coat. That's why correction is a specialist job, not a car-wash upsell.</p>`,
  },
  {
    q: "How long do paint correction results last?",
    a: `<p>The correction itself is permanent — removed defects don't come back. How long the gloss lasts depends on protection and washing. With ceramic coating and safe hand washing, expect years.</p>`,
  },
  {
    q: "Can you fix my specific scratch?",
    a: `<p>Send a photo in the <a href="/get-a-quote/">quote builder</a>. If your fingernail catches in the scratch, it's likely through the clear coat and needs touch-up or respray — we'll tell you honestly rather than sell you a polish that can't fix it.</p>`,
  },
  {
    q: "Is paint correction worth it on an older car?",
    a: `<p>Often it's where the transformation is most dramatic — dull, hazed paint coming back to a deep gloss. It also lifts resale value: a car that photographs well sells faster and for more. For heavily neglected paint, ask about <a href="/multi-stage-paint-correction/">multi-stage correction</a>.</p>`,
  },
];

export default {
  path: "paint-correction",
  title: "Paint Correction | Machine Polishing Manchester — All Stages",
  description: "Everything about paint correction in Manchester: stages 1–3 explained, honest pricing, how long it takes and whether it's worth it. Free 30-second quote.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "Paint Correction" }],
  faqs,
  service: {
    name: "Paint Correction",
    description: "Multi-stage machine polishing in Manchester that permanently removes swirl marks, scratches, oxidation and haze from vehicle clear coat.",
    price: "299",
  },
  body: `
${hero({
  eyebrow: "The complete guide",
  h1: "Paint Correction: The Complete Guide",
  lede: "What paint correction actually is, what the stages mean, what it costs in Manchester, and how to tell what your car needs. Written by specialists who do this every day.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>Paint correction is a multi-stage machine polishing process that permanently removes paint defects — swirl marks, light scratches, oxidation, water spots and haze — from your vehicle's clear coat. It doesn't hide damage like wax does; it levels the paint itself, restoring gloss, depth and clarity.</p>`)}
    <h2>The stages, <span class="hl">explained</span></h2>
    <div class="table-wrap"><table aria-label="Paint correction stages compared">
      <thead><tr><th scope="col"></th><th scope="col">Stage 1 Enhancement</th><th scope="col">2-Stage Correction</th><th scope="col">Multi-Stage</th></tr></thead>
      <tbody>
        <tr><td><strong>Defect removal</strong></td><td>~60%</td><td>80–85%</td><td>90%+</td></tr>
        <tr><td><strong>Time</strong></td><td>1 day</td><td>2–3 days</td><td>4–5 days</td></tr>
        <tr><td><strong>Best for</strong></td><td>Newer cars, light swirls</td><td>Moderate swirls, dull paint</td><td>Show cars, neglected paint</td></tr>
        <tr><td><strong>From</strong></td><td class="price-cell">£299</td><td class="price-cell">£549</td><td class="price-cell">£749</td></tr>
      </tbody>
    </table></div>
    <div class="btn-row">
      <a class="btn btn-ghost" href="/stage-1-paint-enhancement/">Stage 1 details →</a>
      <a class="btn btn-ghost" href="/2-stage-paint-correction/">2-Stage details →</a>
      <a class="btn btn-ghost" href="/multi-stage-paint-correction/">Multi-stage details →</a>
    </div>
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    <h2>Our <span class="hl">process</span></h2>
    <ol class="steps">
      <li><strong>Decontamination wash</strong><p>Snow foam, two-bucket wash, tar and iron fallout removal, clay bar. No machine touches dirty paint.</p></li>
      <li><strong>Paint-depth readings</strong><p>Measured panel by panel, so we know exactly how much clear coat we have to work with.</p></li>
      <li><strong>Machine polishing</strong><p>Compounding then refining stages, checked under specialist colour-matched lighting.</p></li>
      <li><strong>Panel wipe &amp; inspection</strong><p>Polishing oils stripped, finish verified in multiple light sources.</p></li>
      <li><strong>Protection</strong><p><a href="/ceramic-coating/">Ceramic coating</a> or sealant locks in the result for years.</p></li>
    </ol>
    ${beforeAfter("multi-stage paint correction")}
  </div>
</section>
<section class="section">
  <div class="wrap">
    <h2>Correction vs valeting <span class="hl">vs wax</span></h2>
    ${answerBlock(`<p>A valet cleans. Wax and glazes fill and hide swirls temporarily — then wash off. Paint correction is the only process that permanently removes the defects. If your paint looks dull in direct sunlight, no amount of waxing will fix it. Correction will.</p>`)}
    <h2>Is it <span class="hl">worth it?</span></h2>
    <p>Yes — if you care how your car looks or what it's worth. A corrected car photographs better, sells faster and for more, and with ceramic coating it stays that way for years. For daily drivers with light swirls, a <a href="/stage-1-paint-enhancement/">stage 1 enhancement</a> is the sweet spot of cost versus transformation.</p>
    <h2>Studio or <span class="hl">mobile?</span></h2>
    <p>Full multi-stage correction happens at our Urmston studio — dust-free, controlled lighting, the right environment for coatings to cure. Stage 1 enhancement and maintenance can be done mobile at your home or workplace across Greater Manchester. <a href="/mobile-paint-correction/">See how mobile correction works →</a></p>
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand("Not sure what stage your car needs?", "Send photos in the 30-second quote builder and we'll recommend honestly — including telling you when you don't need us.")}`,
};
