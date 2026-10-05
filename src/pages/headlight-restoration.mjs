import {
  hero, answerBlock, faqBlock, ctaBand, priceTable,
} from "../lib/components.mjs";

const faqs = [
  {
    q: "How much is headlight restoration in Manchester?",
    a: `<p>From £59 for the pair. Both headlights are wet-sanded, machine polished and sealed in one visit — mobile or at our Urmston studio.</p>`,
  },
  {
    q: "How long does headlight restoration last?",
    a: `<p>With a proper UV sealant applied after polishing — which we always do — expect 1–2 years of clarity. Cheap "polish-only" jobs without sealing haze over again within months.</p>`,
  },
  {
    q: "Can cloudy headlights fail an MOT?",
    a: `<p>Yes. Headlights badly affected by clouding or yellowing can fail the MOT on light output and beam pattern. Restoration is far cheaper than replacement headlight units, which can run into hundreds.</p>`,
  },
  {
    q: "Is it better to restore or replace headlights?",
    a: `<p>Restore, in almost every case. Modern headlight units are expensive and often on back-order; restoration brings the originals back to near-new clarity for a fraction of the cost — from £59 the pair.</p>`,
  },
];

export default {
  path: "headlight-restoration",
  title: "Headlight Restoration Manchester | From £59",
  description: "Cloudy, yellowed headlights restored in Manchester — wet-sanded, machine polished and UV-sealed for lasting clarity. From £59 per pair. Get a free quote today.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "Headlight Restoration" }],
  faqs,
  service: {
    name: "Headlight Restoration",
    description: "Headlight restoration in Manchester: cloudy and yellowed headlights wet-sanded, machine polished and UV-sealed. From £59 per pair, mobile available.",
    price: "59",
  },
  body: `
${hero({
  eyebrow: "From £59 the pair · Mobile available",
  h1: "Headlight Restoration in Manchester",
  lede: "Cloudy, yellowed headlights make any car look tired — and can fail an MOT. We wet-sand, machine polish and UV-seal them back to clarity. From £59 for the pair.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>Headlight restoration removes the cloudy, yellowed oxidation from polycarbonate headlight lenses. The process is wet sanding with progressively finer abrasives, machine polishing to optical clarity, then a UV sealant to stop the haze returning. It takes about an hour for the pair and costs from £59 — versus hundreds for replacement units.</p>`)}
    <h2>Why headlights <span class="hl">go cloudy</span></h2>
    <p>Modern headlights are polycarbonate plastic with a factory UV coating. Sunlight breaks that coating down over 5–8 years, and the exposed plastic oxidises — first hazy, then yellow, eventually opaque. It's cosmetic at first, then a safety and MOT issue as light output drops.</p>
    <h2>The <span class="hl">process</span></h2>
    <ol class="steps">
      <li><strong>Mask &amp; protect</strong><p>Paintwork around the lights is masked off before any abrasive work.</p></li>
      <li><strong>Wet sanding</strong><p>Progressively finer grades remove the oxidised layer completely.</p></li>
      <li><strong>Machine polishing</strong><p>Refined to optical clarity — the same polishing discipline as paint correction.</p></li>
      <li><strong>UV sealing</strong><p>A dedicated UV sealant protects the fresh lens. Skipping this step is why cheap jobs haze over again in months.</p></li>
    </ol>
    <h2>Pricing</h2>
    ${priceTable([
      ["Headlight restoration (pair)", "Wet sand, machine polish, UV seal — mobile or studio", "£59"],
      ["Headlight restoration + ceramic coating", "Pair restored with long-term ceramic protection", "£99"],
    ], "Headlight restoration prices")}
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand("See the road clearly again.", "Headlight restoration from £59 the pair — mobile across Greater Manchester.")}`,
};
