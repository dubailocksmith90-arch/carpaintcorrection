import {
  hero, answerBlock, faqBlock, ctaBand, photoSlot,
} from "../lib/components.mjs";
import { SITE } from "../lib/site.mjs";

const faqs = [
  {
    q: "Who is behind Car Paint Correction?",
    a: `<p>We're the paint-correction division of <a href="${SITE.sisterUrl}" target="_blank" rel="noopener">Latin King Detailing</a>, the mobile detailing company based in Urmston, Manchester. This site exists for one reason: paint correction done to a specialist standard, without being one service among twenty.</p>`,
  },
  {
    q: "Are you insured?",
    a: `<p>Fully — including for high-value and prestige vehicles. Certificates are available on request before you book.</p>`,
  },
  {
    q: "Where are you based?",
    a: `<p>Our studio is at 426 Flixton Rd, Urmston, Manchester M41 6QT. Mobile services cover the whole of Greater Manchester plus the Cheshire fringe. We're open 24 hours for bookings and quotes.</p>`,
  },
];

export default {
  path: "about",
  title: "About Us | Manchester Paint Correction Specialists",
  description: "Meet the paint correction specialists behind carpaintcorrection.co.uk — part of Latin King Detailing, Urmston Manchester. Fully insured — get a free quote.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "About Us" }],
  faqs,
  body: `
${hero({
  eyebrow: "The specialists",
  h1: "About Car Paint Correction",
  lede: "One trade, done properly. We're the paint-correction arm of Latin King Detailing — a Manchester detailing company that decided correction deserved its own home, its own standards, and its own site.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>Car Paint Correction is the specialist paint-correction division of Latin King Detailing, based at 426 Flixton Rd, Urmston, Manchester. While the parent brand handles mobile detailing across Greater Manchester, this operation does one thing: machine polishing, swirl and scratch removal, and ceramic coating — at a standard that general valeting can't touch.</p>`)}
    <h2>Why a <span class="hl">separate brand?</span></h2>
    <p>Because correction is a different discipline from detailing. It needs paint-depth gauges, colour-matched inspection lighting, a dust-controlled studio, and days — not hours — per car. Mixing it into a general valeting menu undersells the craft and confuses customers. So it got its own name, its own studio bays, and this site.</p>
    <h2>How we <span class="hl">work</span></h2>
    <ul class="tick">
      <li><strong>Measured, not guessed.</strong> Paint depth is read on every panel before polishing. If the clear coat is too thin somewhere, we say so and work around it.</li>
      <li><strong>Honest assessment.</strong> If your scratch needs a bodyshop, we'll tell you — and won't charge you for finding out.</li>
      <li><strong>Fixed quotes.</strong> The price we quote from your photos is the price you pay. No "while we're in there" upsells.</li>
      <li><strong>Protected results.</strong> We finish with proper protection — because correction without coating is unfinished work.</li>
      <li><strong>Fully insured</strong> for high-value vehicles, and open 24 hours for bookings.</li>
    </ul>
    ${photoSlot("The studio — photo slot", "Real photo of the Urmston studio: correction bays, inspection lighting and dust-controlled coating area. Replace this slot with actual studio photography.")}
    ${photoSlot("The team — photo slot", "Real photo of the correction specialists at work. Replace this slot with actual team photography — no stock images.")}
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand("Put a specialist on your paint.", "Talk to the team that does nothing else. Free quote in 30 seconds, open 24 hours.")}`,
};
