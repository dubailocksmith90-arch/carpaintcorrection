import {
  hero, answerBlock, faqBlock, ctaBand, priceTable, reviewsSection,
} from "../lib/components.mjs";

const faqs = [
  {
    q: "How long does ceramic coating last?",
    a: `<p>Two to five years depending on the coating and how the car is washed. Automatic car washes will kill any coating fast — safe hand washing keeps it performing for its full rated life.</p>`,
  },
  {
    q: "How much is ceramic coating in Manchester?",
    a: `<p>From £349 standalone, or from £799 bundled with a 2-stage correction — the combination we recommend, because coating should always go onto corrected paint. See the full <a href="/prices/">price list</a>.</p>`,
  },
  {
    q: "Is ceramic coating worth it on a daily driver?",
    a: `<p>Yes — arguably more so than on a garage queen. Daily drivers face the most contamination: road salt, bird droppings, car-wash swirls. The easier washing alone saves hours, and the paint stays protected through winter.</p>`,
  },
  {
    q: "Ceramic coating vs wax — what's the difference?",
    a: `<p>Wax sits on the paint and lasts weeks to a few months. Ceramic coating chemically bonds to the clear coat and lasts years, with far stronger hydrophobicity and chemical resistance. Wax is maintenance; coating is protection.</p>`,
  },
  {
    q: "Can you apply ceramic coating mobile?",
    a: `<p>Application is studio-only at Urmston — coating needs a controlled, dust-free environment to cure properly. Assessment and prep can be discussed mobile.</p>`,
  },
];

export default {
  path: "ceramic-coating",
  title: "Ceramic Coating Manchester | 2–5 Year Paint Protection",
  description: "Ceramic coating in Manchester from £349. Locks in your paint correction with years of hydrophobic protection. Studio + mobile — get a free quote today.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "Ceramic Coating" }],
  faqs,
  service: {
    name: "Ceramic Coating",
    description: "Professional ceramic coating in Manchester: 2 to 5 year hydrophobic paint protection, applied in a controlled studio environment.",
    price: "349",
  },
  body: `
${hero({
  eyebrow: "2–5 year protection · Studio, Urmston",
  h1: "Ceramic Coating in Manchester",
  lede: "The essential second step after paint correction. A liquid polymer that bonds to your clear coat — extreme hydrophobicity, UV and chemical resistance, for years. From £349.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>Ceramic coating is a liquid polymer that bonds to your car's clear coat, forming a hard, glass-like layer. It creates extreme hydrophobicity — water sheets straight off — and protects against UV, road salt, bird droppings and wash marring for 2 to 5 years, depending on the coating. It's the essential second step after paint correction.</p>`)}
    <h2>Why coat <span class="hl">after correction?</span></h2>
    ${answerBlock(`<p>Freshly corrected paint is "naked" — flawless but unprotected. Manchester weather, road salt and car washes will reintroduce swirls within months. Ceramic coating locks in the mirror finish and makes the car dramatically easier to wash safely. Correction without coating is a transformation with no defence.</p>`)}
    <h2>Packages &amp; <span class="hl">pricing</span></h2>
    ${priceTable([
      ["2-year ceramic coating", "Standalone — for paint already in good condition", "£349"],
      ["Stage 1 enhancement + 2-year coating", "Gloss rescue plus protection in one booking", "£549"],
      ["2-stage correction + 2-year coating", "Our most booked package", "£799"],
      ["2-stage correction + 5-year coating", "Maximum gloss with long-term defence", "£949"],
    ], "Ceramic coating prices")}
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    <h2>What it does — and <span class="hl">doesn't</span> do</h2>
    <div class="grid cols-2">
      <div class="card"><h3>It does</h3><ul class="tick"><li>Repel water and dirt — extreme hydrophobicity</li><li>Resist UV fading and chemical staining</li><li>Make washing easier and safer</li><li>Keep the gloss locked in for years</li></ul></div>
      <div class="card"><h3>It doesn't</h3><ul class="tick"><li>Make your car scratch-proof — nothing does</li><li>Remove existing swirls — that's <a href="/paint-correction/">correction's</a> job</li><li>Mean you never wash it again</li></ul></div>
    </div>
    <p style="margin-top:1.2rem">Anyone promising "scratch-proof" coating is lying. We won't.</p>
    <h2>The <span class="hl">process</span></h2>
    <ol class="steps">
      <li><strong>Decontamination</strong><p>Wash + clay bar — or a full correction first, if booked. Coating only bonds to bare, clean paint.</p></li>
      <li><strong>Panel wipe</strong><p>Polishing oils stripped so the coating bonds directly to the clear coat.</p></li>
      <li><strong>Application</strong><p>Applied panel by panel in our Urmston studio — controlled environment, proper cure.</p></li>
      <li><strong>Curing &amp; inspection</strong><p>Curing time, then final inspection under specialist lighting.</p></li>
      <li><strong>Aftercare guide</strong><p>How to wash safely — two-bucket method, pH-neutral shampoo, no automatic car washes.</p></li>
    </ol>
  </div>
</section>
${reviewsSection()}
<section class="section alt">
  <div class="wrap">
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand("Correct first, then coat.", "The best results come from correction + coating together. Get a fixed bundle quote in 30 seconds.")}`,
};
