import {
  hero, answerBlock, faqBlock, ctaBand, priceTable,
} from "../lib/components.mjs";

const faqs = [
  {
    q: "How much is a new car detail in Manchester?",
    a: `<p>From £349. That covers full decontamination, light machine enhancement to remove factory and dealer marring, and a durable sealant. Adding ceramic coating takes it to £549 for 2-year protection.</p>`,
  },
  {
    q: "Does a brand-new car really need detailing?",
    a: `<p>Yes — "new" cars are rarely flawless. Transport, storage compounds and dealer valeting leave light swirls, holograms and bonded contamination on most new cars. A new car detail removes all of it, then protects the paint before any damage accumulates.</p>`,
  },
  {
    q: "Should I get ceramic coating on a new car?",
    a: `<p>It's the ideal time. Coating bonds best to fresh, uncontaminated paint — and starting protection from day one means the paint never gets the chance to deteriorate. Our new car detail + 2-year coating is £549.</p>`,
  },
  {
    q: "How soon after buying should I book?",
    a: `<p>As soon as possible — ideally before the car sees an automatic car wash or a dealership "complimentary valet". Every wash before protection risks adding swirls you'll later pay to remove.</p>`,
  },
];

export default {
  path: "new-car-detail",
  title: "New Car Detail Manchester | Protection From Day One",
  description: "New car paint protection in Manchester: full decontamination, light enhancement and ceramic coating options. Protect from day one. From £349 — free quote.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "New Car Detail" }],
  faqs,
  service: {
    name: "New Car Detail",
    description: "New car detailing in Manchester: decontamination, light paint enhancement and ceramic coating to protect your car from day one.",
    price: "349",
  },
  body: `
${hero({
  eyebrow: "From £349 · Protect from day one",
  h1: "New Car Detail in Manchester",
  lede: "Your new car isn't as flawless as you think — transport, storage and dealer valeting leave their marks. We remove them all, then protect the paint before damage starts. From £349.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>A new car detail is a decontamination, light machine-polish enhancement and protection package for brand-new or nearly-new cars. It removes factory transport contamination, dealer-installed swirls and holograms, then seals the paint with a durable sealant or ceramic coating — so the paint stays flawless instead of deteriorating from the first wash.</p>`)}
    <h2>What's <span class="hl">wrong</span> with new paint?</h2>
    <ul class="tick">
      <li><strong>Transport contamination</strong> — rail dust and industrial fallout bond to paint in transit and storage</li>
      <li><strong>Dealer marring</strong> — "complimentary valets" and showroom prep leave fine swirls and holograms</li>
      <li><strong>Zero protection</strong> — factory paint has no meaningful protection against the elements</li>
    </ul>
    <p>Under our inspection lights, most "new" cars show all three. The fix is straightforward — and far cheaper now than correcting accumulated damage later.</p>
    <h2>What's <span class="hl">included</span></h2>
    <ol class="steps">
      <li><strong>Full decontamination</strong><p>Snow foam, two-bucket wash, tar and iron fallout removal, clay bar — every contaminant off.</p></li>
      <li><strong>Light enhancement polish</strong><p>Single-stage machine polish removes dealer marring and holograms.</p></li>
      <li><strong>Protection</strong><p>Durable sealant as standard, or ceramic coating for 2–5 years of hydrophobic defence.</p></li>
      <li><strong>Aftercare briefing</strong><p>How to wash safely so the paint stays flawless — including what to tell the dealer.</p></li>
    </ol>
    <h2>Pricing</h2>
    ${priceTable([
      ["New car detail", "Decontamination, light enhancement, durable sealant", "£349"],
      ["New car detail + 2-year ceramic coating", "Full detail with long-term ceramic protection", "£549"],
    ], "New car detail prices")}
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    <h2>One <span class="hl">request</span> for new owners</h2>
    ${answerBlock(`<p>Decline the dealership's complimentary valet. It sounds generous, but it's the single biggest source of swirls on new cars — one rushed wash with dirty mitts can undo everything a detail achieves. Bring the car to us first; we'll show you how to keep it perfect.</p>`)}
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand("Start perfect. Stay perfect.", "New car detail from £349. Book before the first wash — your paint will thank you.")}`,
};
