import {
  hero, answerBlock, faqBlock, ctaBand, priceTable,
} from "../lib/components.mjs";

const faqs = [
  {
    q: "How much does car detailing cost in Manchester?",
    a: `<p>It depends what you mean by detailing. A maintenance valet is £30–£60; a full detail £150–£300. But we specialise in paint correction, which is priced by stage: stage 1 enhancement from £299, 2-stage correction from £549, multi-stage from £749, ceramic coating from £349. Correction is a different league from valeting — it permanently fixes the paint rather than just cleaning it.</p>`,
  },
  {
    q: "How much does it cost to repair a scratch on a car?",
    a: `<p>Light scratches confined to the clear coat: polished out from £299 as part of a stage 1 enhancement, or from £80 for an isolated deeper scratch treated individually. Scratches through to primer or metal need bodyshop paintwork — typically £200+ per panel. The honest answer depends on depth: send a photo and we'll tell you which category yours falls into.</p>`,
  },
  {
    q: "Why do prices say 'from'?",
    a: `<p>Because a Fiesta and a Range Rover are different jobs — size, paint hardness and condition all affect time. The 'from' price is real and most standard cars land near it. You always get an exact fixed quote before we start, and the quoted price is the price you pay.</p>`,
  },
  {
    q: "Do you charge extra for larger vehicles?",
    a: `<p>Larger vehicles — 4x4s, large SUVs, vans — take more time and product, so they sit above the 'from' price. Tell us the make and model in the quote builder and we'll price it exactly.</p>`,
  },
  {
    q: "Is there a mobile call-out fee?",
    a: `<p>Mobile stage 1 enhancement across most of Greater Manchester carries no call-out fee. Further afield — Cheshire fringe and beyond — a small travel fee may apply, confirmed in your quote upfront.</p>`,
  },
];

export default {
  path: "prices",
  title: "Paint Correction Prices Manchester | Honest Cost Guide",
  description: "Honest paint correction prices in Manchester: stage 1 from £299, 2-stage from £549, ceramic coating from £349. Every job gets a fixed quote — no surprises.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "Prices" }],
  faqs,
  body: `
${hero({
  eyebrow: "Fixed quotes · No surprises",
  h1: "Paint Correction Prices in Manchester",
  lede: "Honest, published pricing — an increasingly rare thing in this trade. Every job gets a fixed quote before we start, and the quoted price is the price you pay.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>Paint correction in Manchester costs from £299 for a stage 1 enhancement, from £549 for a 2-stage correction, and from £749 for multi-stage show-car work. Ceramic coating starts at £349 standalone, with correction + coating bundles from £549. Every price below is a genuine "from" price — confirmed as a fixed quote before any work begins.</p>`)}
    <h2>Correction <span class="hl">packages</span></h2>
    ${priceTable([
      ["Stage 1 paint enhancement", "Single-stage machine polish, ~60% defect removal, 1 day", "£299"],
      ["2-stage paint correction", "Cutting + refining, 80–85% defect removal, 2–3 days", "£549"],
      ["Multi-stage paint correction", "3+ stages, 90%+ removal, show-car standard, 4–5 days", "£749"],
    ], "Paint correction package prices")}
    <h2>Ceramic <span class="hl">coating</span></h2>
    ${priceTable([
      ["2-year ceramic coating", "Standalone, for paint in good condition", "£349"],
      ["Stage 1 + 2-year ceramic coating", "Enhancement plus protection — best value", "£549"],
      ["2-stage + 2-year ceramic coating", "Our most booked package", "£799"],
      ["2-stage + 5-year ceramic coating", "Maximum correction, long-term defence", "£949"],
      ["Multi-stage + 5-year ceramic coating", "Concours finish, locked in", "£1,149"],
    ], "Ceramic coating package prices")}
    <h2>Individual <span class="hl">services</span></h2>
    ${priceTable([
      ["Swirl mark removal", "Machine polishing, from stage 1 enhancement", "£299"],
      ["Scratch removal", "Light scratches polished out; deeper assessed per panel", "£299"],
      ["Isolated deeper scratch", "Localised wet sanding + refinement", "from £80"],
      ["Headlight restoration (pair)", "Wet sand, polish, UV seal", "£59"],
      ["New car detail", "Decontamination, enhancement, sealant", "£349"],
    ], "Individual service prices")}
    <p>For the full breakdown of what each stage includes, see <a href="/paint-correction/">the complete guide</a>.</p>
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand("Get your exact fixed price.", "Thirty seconds, a few photos, and a fixed quote — no 'from' games after that point.")}`,
};
