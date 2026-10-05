import {
  hero, answerBlock, serviceCards, trustBar, beforeAfter,
  reviewsSection, faqBlock, ctaBand, allAreasList,
} from "../lib/components.mjs";
import { AREAS, SERVICES_NAV } from "../lib/site.mjs";

const faqs = [
  {
    q: "How much does paint correction cost in Manchester?",
    a: `<p>Stage 1 enhancement starts from £299, a 2-stage correction from £549, and multi-stage show-car work from £749. Ceramic coating is usually added on top, from £349. Every car is different — send photos through the <a href="/get-a-quote/">quote builder</a> for an exact fixed quote.</p>`,
  },
  {
    q: "How long does paint correction take?",
    a: `<p>A stage 1 enhancement takes a day; a 2-stage correction takes 2–3 days; multi-stage work takes 4–5 days. Mobile enhancement work can be done at your home or office across Greater Manchester.</p>`,
  },
  {
    q: "Will paint correction remove all scratches?",
    a: `<p>Machine polishing permanently removes swirls, haze, oxidation and light-to-moderate scratches. Deep scratches through the clear coat can't be polished out — we'll tell you honestly at assessment what to expect from your car.</p>`,
  },
  {
    q: "Do you come to me, or do I come to you?",
    a: `<p>Both. Mobile paint enhancement is available across Greater Manchester — we come to your home or workplace. Full multi-stage correction and ceramic coating happen at our Urmston studio, where controlled lighting and a dust-free environment give the best finish. We're open 24 hours for bookings.</p>`,
  },
];

export default {
  path: "",
  title: "Paint Correction Manchester | Machine Polishing Experts",
  description: "Specialist paint correction in Manchester. Machine polishing, swirl & scratch removal and ceramic coating — studio + mobile. Get a free quote in 30 seconds.",
  breadcrumb: [{ name: "Home" }],
  faqs,
  body: `
${hero({
  eyebrow: "Manchester · Studio + Mobile",
  h1: "Paint Correction in Manchester",
  lede: "Manchester's paint correction specialists. We remove swirl marks, scratches and oxidation with precision machine polishing — then lock it in with ceramic coating. Studio in Urmston, mobile across Greater Manchester.",
})}
<section class="section">
  <div class="wrap">
    <h2>What is <span class="hl">paint correction?</span></h2>
    ${answerBlock(`<p>Paint correction is the machine polishing process that permanently removes swirl marks, light scratches, oxidation and haze from your car's clear coat. Unlike a valet or wax, which hides defects, correction levels the paint itself — restoring depth, gloss and clarity, often better than the day the car left the showroom.</p>`)}
    <p><a href="/paint-correction/">Read the complete guide to paint correction →</a></p>
    ${trustBar()}
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    <h2>Correction <span class="hl">services</span></h2>
    <p class="lede">One specialism, done properly. Every job starts with paint-depth readings and ends with protection.</p>
    ${serviceCards([
      { name: "2-Stage Paint Correction", url: "/2-stage-paint-correction/", text: "Our most booked transformation. Cutting + refining stages remove 80–85% of defects for a deep mirror gloss.", price: "£549" },
      { name: "Stage 1 Paint Enhancement", url: "/stage-1-paint-enhancement/", text: "Gloss rescue in a single day. Removes light swirls and haze — ideal for newer cars. Mobile available.", price: "£299" },
      { name: "Multi-Stage Correction", url: "/multi-stage-paint-correction/", text: "Show-car standard. 90%+ defect removal for neglected paint and concours preparation. Studio only.", price: "£749" },
      { name: "Ceramic Coating", url: "/ceramic-coating/", text: "Lock in the gloss with 2–5 years of hydrophobic protection. The essential second step after correction.", price: "£349" },
      { name: "Swirl Mark Removal", url: "/swirl-mark-removal/", text: "Swirls permanently removed by machine polishing — not hidden by fillers that wash off.", price: "£299" },
      { name: "Scratch Removal", url: "/scratch-removal/", text: "Honest assessment first: we polish out what can be saved and tell you plainly what can't.", price: "£299" },
    ])}
  </div>
</section>
<section class="section">
  <div class="wrap">
    <h2>How it <span class="hl">works</span></h2>
    <ol class="steps">
      <li><strong>Get a quote</strong><p>30 seconds in the quote builder — tell us about your car and upload photos of the paint.</p></li>
      <li><strong>Assessment</strong><p>We confirm the right stage for your car's condition. Fixed price before we start.</p></li>
      <li><strong>Correction</strong><p>Studio or mobile, 1–5 days depending on stage. Paint-depth checked throughout.</p></li>
      <li><strong>Protection</strong><p>Ceramic coating locks in the finish for years, not weeks.</p></li>
    </ol>
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    <h2>Real <span class="hl">transformations</span></h2>
    <p class="lede">Drag the slider. Every slot below is reserved for a genuine before-and-after from our own jobs — never stock photos.</p>
    ${beforeAfter("2-stage paint correction in Manchester")}
  </div>
</section>
${reviewsSection()}
<section class="section alt">
  <div class="wrap">
    <h2>Areas we <span class="hl">cover</span></h2>
    <p class="lede">Mobile enhancement at your home or workplace, or visit our Urmston studio — serving:</p>
    ${allAreasList(AREAS)}
    <p><a class="btn btn-ghost" href="/areas-we-cover/">See all areas →</a></p>
  </div>
</section>
<section class="section">
  <div class="wrap">
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand()}`,
};
