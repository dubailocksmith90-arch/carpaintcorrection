import {
  hero, answerBlock, faqBlock, ctaBand, priceTable, beforeAfter,
} from "../lib/components.mjs";

const faqs = [
  {
    q: "How much does it cost to repair a scratch on a car in Manchester?",
    a: `<p>Light scratches that haven't gone through the clear coat: machine polished out from £299 as part of a stage 1 enhancement. Isolated deeper scratches: assessed individually — minor smart repairs start around £80–£150 per panel. Scratches through to primer or metal need a bodyshop respray, typically £200+ per panel. Send a photo for an honest answer.</p>`,
  },
  {
    q: "Do car scratch remover products work?",
    a: `<p>Over-the-counter scratch removers are mild abrasives — they can improve very light surface marks, but they can't fix anything you can feel with a fingernail, and aggressive use thins your clear coat unevenly. For anything beyond the lightest marks, machine polishing by a specialist is safer and far more effective.</p>`,
  },
  {
    q: "How do I remove scratches from my car?",
    a: `<p>First, the fingernail test: run your nail across the scratch. If it doesn't catch, it's in the clear coat and machine polishing will remove it. If it catches, the scratch is too deep to polish out — it needs touch-up paint or a respray. Never sand a scratch without measuring paint depth; clear coat is thinner than most people think.</p>`,
  },
  {
    q: "When should I call a specialist instead of DIY?",
    a: `<p>Call a specialist when the scratch catches your fingernail, when there are many scratches across panels, when the car is high-value, or when you've already tried a DIY product and it looks worse. A professional assessment is free — a botched DIY repair isn't.</p>`,
  },
  {
    q: "Can mobile scratch repair come to me?",
    a: `<p>Yes — light scratch and scuff removal is available through our <a href="/mobile-paint-correction/">mobile service</a> across Greater Manchester. Deeper correction work happens at our Urmston studio.</p>`,
  },
];

export default {
  path: "scratch-removal",
  title: "Car Scratch Removal Manchester | Paint Correction",
  description: "Car scratch removal in Manchester: honest assessment first, then machine polishing for scratches within the clear coat. From £299 — get a free quote today.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "Scratch Removal" }],
  faqs,
  service: {
    name: "Scratch Removal",
    description: "Car scratch removal in Manchester: honest assessment and machine polishing for scratches within the clear coat. Fixed quotes, no guesswork.",
    price: "299",
  },
  body: `
${hero({
  eyebrow: "Honest assessment first",
  h1: "Car Scratch Removal in Manchester",
  lede: "Not every scratch can be polished out — and we'll tell you which ones can't before you spend a penny. Light scratches machine-polished away; honest advice on the rest. From £299.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>Whether a scratch can be removed depends on one thing: depth. Scratches confined to the clear coat can be machine polished out permanently. Scratches through to the colour coat, primer or metal cannot be polished away — they need touch-up or respray. The fingernail test tells you which: if your nail catches in the scratch, it's too deep for polishing.</p>`)}
    <h2>What we <span class="hl">can fix</span></h2>
    <ul class="tick">
      <li><strong>Light scratches &amp; scuffs</strong> — clear-coat only, polished out from £299</li>
      <li><strong>Swirl clusters around scratches</strong> — blended by machine polishing the panel</li>
      <li><strong>Isolated deeper marks</strong> — localised wet sanding and refinement, quoted per panel</li>
      <li><strong>Key scratches (light)</strong> — if they haven't broken the clear coat, they polish out</li>
    </ul>
    <h2>What we <span class="hl">won't</span> pretend to fix</h2>
    <p>Scratches through to primer or bare metal, deep key scratches, and bumper damage need paint — not polish. Any company promising to "buff out" those is selling you disappointment. We'll assess from photos and tell you straight whether it's us or a bodyshop you need.</p>
    <h2>Pricing</h2>
    ${priceTable([
      ["Light scratch removal (machine polish)", "Clear-coat scratches, per panel or as part of enhancement", "£299"],
      ["Isolated deeper scratch", "Localised wet sanding + refinement, quoted per scratch", "from £80"],
      ["Scratch + 2-stage correction", "Whole-car correction including scratch removal", "£549"],
    ], "Scratch removal prices")}
    ${beforeAfter("scratch removal, Manchester")}
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    <h2>The fingernail <span class="hl">test</span></h2>
    <p>Run your fingernail gently across the scratch. <strong>Doesn't catch?</strong> It's in the clear coat — we can almost certainly remove it completely. <strong>Catches slightly?</strong> It may improve dramatically but leave a faint trace. <strong>Catches hard / shows primer or metal?</strong> That's bodyshop territory. Send us a photo and we'll confirm in minutes.</p>
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand("Send a photo. Get an honest answer.", "Free assessment — we'll tell you if it's polishable or bodyshop work before you spend anything.")}`,
};
