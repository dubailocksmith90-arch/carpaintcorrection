import { hero, ctaBand } from "../lib/components.mjs";
import { SITE } from "../lib/site.mjs";

const faqs = [
  {
    q: "How fast will I get my quote?",
    a: `<p>Usually within the hour during the day — we're open 24 hours, so even late-night requests get a quick response. The quote is fixed: the price we give is the price you pay.</p>`,
  },
  {
    q: "What should I include in the notes?",
    a: `<p>Anything about the car's condition: scratches, scuffs, how bad the swirls are, previous paintwork or repairs, and where the car is kept. Photos help enormously — you can send them straight over WhatsApp after submitting.</p>`,
  },
];

export default {
  path: "get-a-quote",
  title: "Get a Free Quote | Paint Correction Manchester",
  description: "Get a free paint correction quote in 30 seconds. Tell us about your car and we'll reply fast with a fixed price. Call +44 7482 225323 — open 24 hours.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "Get a Quote" }],
  faqs,
  body: `
${hero({
  eyebrow: "Fixed price · No obligation",
  h1: "Get a Free Paint Correction Quote in 30 Seconds",
  lede: "Tell us about your car below and we'll reply with a fixed quote — usually within the hour. Prefer to talk? Call or WhatsApp any time, we're open 24 hours.",
  ctas: false,
})}
<section class="section">
  <div class="wrap">
    <form class="form-card" data-quote-form novalidate>
      <div class="field">
        <label for="q-name">Your name *</label>
        <input id="q-name" name="name" type="text" autocomplete="name" required>
      </div>
      <div class="field">
        <label for="q-phone">Phone number *</label>
        <input id="q-phone" name="phone" type="tel" autocomplete="tel" required>
        <p class="hint">So we can call or WhatsApp your quote back.</p>
      </div>
      <div class="field">
        <label for="q-car">Car make &amp; model *</label>
        <input id="q-car" name="car" type="text" placeholder="e.g. BMW 3 Series 2021" required>
      </div>
      <div class="field">
        <label for="q-service">Service needed</label>
        <select id="q-service" name="service">
          <option value="">Not sure — please advise</option>
          <option>Stage 1 paint enhancement — from £299</option>
          <option>2-stage paint correction — from £549</option>
          <option>Multi-stage paint correction — from £749</option>
          <option>Ceramic coating (2-year) — from £349</option>
          <option>Stage 1 + 2-year ceramic coating — from £549</option>
          <option>2-stage + 2-year ceramic coating — from £799</option>
          <option>2-stage + 5-year ceramic coating — from £949</option>
          <option>Swirl mark removal — from £299</option>
          <option>Scratch removal — from £299</option>
          <option>Headlight restoration — from £59</option>
          <option>New car detail — from £349</option>
        </select>
      </div>
      <div class="field">
        <label for="q-notes">Condition notes</label>
        <textarea id="q-notes" name="notes" placeholder="Describe swirls, scratches, scuffs, previous paintwork — anything relevant."></textarea>
        <p class="hint">Photos help enormously — after submitting, send them straight to us on WhatsApp.</p>
      </div>
      <button class="btn" type="submit" style="width:100%">Send via WhatsApp →</button>
      <p class="hint" style="margin-top:.8rem;text-align:center">No account needed — submitting opens WhatsApp with your details pre-filled. Nothing is stored on this site.</p>
    </form>
    <div class="form-alt">
      <p><strong>Prefer to talk?</strong></p>
      <div class="btn-row" style="justify-content:center">
        <a class="btn" href="${SITE.phoneHref}">Call ${SITE.phoneDisplay}</a>
        <a class="btn btn-ghost" href="${SITE.whatsapp}" target="_blank" rel="noopener">WhatsApp us directly</a>
      </div>
      <p style="margin-top:1rem">Open 24 hours · Studio: ${SITE.street}, ${SITE.locality}, ${SITE.region} ${SITE.postcode}</p>
    </div>
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    <h2>What happens <span class="hl">next?</span></h2>
    <ol class="steps">
      <li><strong>You send your details</strong><p>Thirty seconds in the form above — it opens WhatsApp with everything pre-filled. Nothing is stored on this website.</p></li>
      <li><strong>We reply with a fixed price</strong><p>Usually within the hour. If photos would help us price accurately, we'll ask you to send a few over WhatsApp — paintwork in daylight, close enough to see the defects.</p></li>
      <li><strong>You choose studio or mobile</strong><p>Stage 1 enhancement, scratch repair and headlight restoration can come to your driveway anywhere in Greater Manchester. Multi-stage correction and ceramic coating happen at our Urmston studio.</p></li>
      <li><strong>We book you in</strong><p>A date that suits you — including evenings and weekends. The quoted price is the price you pay, confirmed before any work begins.</p></li>
    </ol>
    <h2>Why quote with a <span class="hl">specialist?</span></h2>
    <p>Paint correction is priced by condition, not just by service name — and condition is exactly what most quotes get wrong. A photo-based assessment by someone who corrects paint every day means your quote reflects reality: the right stage for your paint, no overselling, and an honest flag when the answer is "you don't need us" or "that's bodyshop work". That honesty is free. The quote is free. The only thing it costs is thirty seconds.</p>
  </div>
</section>
${ctaBand("Or just call.", "Sometimes a two-minute call beats a form. +44 7482 225323 — open 24 hours.")}`,
};
