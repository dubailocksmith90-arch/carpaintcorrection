import { hero, faqBlock, ctaBand } from "../lib/components.mjs";

const faqs = [
  {
    q: "How much does paint correction cost in Manchester?",
    a: `<p>Stage 1 enhancement from £299, 2-stage correction from £549, multi-stage from £749, ceramic coating from £349. Bundles (correction + coating) run £549–£1,149. You always get an exact fixed quote before work begins.</p>`,
  },
  {
    q: "How long does paint correction take?",
    a: `<p>Stage 1: one day. 2-stage: two to three days. Multi-stage: four to five days. Ceramic coating adds curing time, handled within the booking.</p>`,
  },
  {
    q: "What's the difference between stage 1, 2-stage and multi-stage?",
    a: `<p>Stage 1 is a single polishing pass removing ~60% of light defects. 2-stage adds a cutting stage first, removing 80–85%. Multi-stage uses three or more stages plus targeted wet sanding for 90%+ removal — show-car standard.</p>`,
  },
  {
    q: "Does paint correction remove scratches?",
    a: `<p>Scratches confined to the clear coat — yes, permanently. Scratches you can feel with a fingernail are usually too deep and need touch-up or bodyshop paint. We assess honestly from photos before you book.</p>`,
  },
  {
    q: "Does paint correction damage paint?",
    a: `<p>Not when done properly. We measure paint depth panel-by-panel and remove only microns of clear coat. It's a specialist process — which is why it shouldn't be a car-wash upsell.</p>`,
  },
  {
    q: "Is ceramic coating worth it?",
    a: `<p>After correction, yes — it's the protection that keeps the result. Coating lasts 2–5 years, makes washing far easier, and resists UV, road salt and chemical staining. Correction without coating leaves flawless paint defenceless.</p>`,
  },
  {
    q: "Ceramic coating vs wax — which is better?",
    a: `<p>Coating, for longevity and protection: years versus weeks. Wax is fine as a top-up product but it's not protection in the same league. Anyone selling you a "ceramic wax" as equivalent to a real coating is stretching the truth.</p>`,
  },
  {
    q: "Do you offer mobile service?",
    a: `<p>Yes — stage 1 enhancement, swirl and scratch removal, and headlight restoration come to your home or workplace across Greater Manchester. Multi-stage correction and ceramic coating are studio-only at Urmston for the controlled environment they need.</p>`,
  },
  {
    q: "How do I keep the paint looking good afterwards?",
    a: `<p>Two-bucket hand washing with grit guards, pH-neutral shampoo, quality microfibre towels — and never automatic car washes. We'll give you a full aftercare guide with every job.</p>`,
  },
  {
    q: "Are you open on weekends? What are your hours?",
    a: `<p>We're open 24 hours for bookings and quotes — call or WhatsApp any time. Studio and mobile appointments are scheduled around your availability, including evenings and weekends.</p>`,
  },
];

export default {
  path: "faq",
  title: "Paint Correction FAQs | Manchester | Honest Answers",
  description: "Honest answers about paint correction in Manchester: cost, stages, timing, ceramic coating and mobile service. Ask us anything — free quote. Open 24 hours.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "FAQs" }],
  faqs,
  body: `
${hero({
  eyebrow: "Straight answers",
  h1: "Paint Correction FAQs",
  lede: "The questions Manchester drivers actually ask us — answered honestly, including the ones where the answer is 'you don't need us'.",
})}
<section class="section">
  <div class="wrap">
    ${faqBlock(faqs)}
    <p style="margin-top:1.6rem">Question not covered? <a href="/get-a-quote/">Ask us directly</a> — call <a href="tel:+447482225323">+44 7482 225323</a>, open 24 hours.</p>
  </div>
</section>
${ctaBand()}`,
};
