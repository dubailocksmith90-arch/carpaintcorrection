import {
  hero, answerBlock, faqBlock, ctaBand, priceTable, beforeAfter,
} from "../lib/components.mjs";

const faqs = [
  {
    q: "What areas do you cover mobile?",
    a: `<p>All of Greater Manchester — from Bury and Bolton to Stockport and Wigan — plus the Cheshire fringe (Wilmslow, Alderley Edge, Knutsford). Most of Greater Manchester has no call-out fee; further out, any travel fee is confirmed in your quote upfront.</p>`,
  },
  {
    q: "What do you need from me for a mobile visit?",
    a: `<p>A safe place to park near a power socket, and ideally access to a water supply. A driveway, quiet street or workplace car park all work. We bring the rest: water management, power, lighting, and full correction kit.</p>`,
  },
  {
    q: "Can you do mobile car scratch repair near me?",
    a: `<p>Yes — light scratch and scuff removal is one of our most popular mobile services. If the scratch is deeper than machine polishing can fix, we'll tell you from photos before booking, so there's never a wasted visit.</p>`,
  },
  {
    q: "What can't be done mobile?",
    a: `<p>Multi-stage correction and ceramic coating are studio-only — they need controlled lighting, a dust-free environment and proper curing conditions. Everything else in our range can come to you.</p>`,
  },
  {
    q: "Do I need to be there while you work?",
    a: `<p>No. Plenty of customers leave the keys and go about their day — the car is simply transformed when you return. We'll confirm access details when booking.</p>`,
  },
];

export default {
  path: "mobile-paint-correction",
  title: "Mobile Paint Correction Manchester | We Come to You",
  description: "Mobile paint correction in Manchester: stage 1 enhancement, swirl and scratch removal at your home or workplace. Fully equipped vans. From £299 — free quote.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "Mobile Paint Correction" }],
  faqs,
  service: {
    name: "Mobile Paint Correction",
    description: "Mobile paint correction across Greater Manchester: stage 1 machine polishing, swirl mark and scratch removal at your home or workplace.",
    price: "299",
  },
  body: `
${hero({
  eyebrow: "We come to you · Greater Manchester",
  h1: "Mobile Paint Correction in Manchester",
  lede: "Specialist machine polishing on your driveway. Stage 1 enhancement, swirl mark removal and mobile scratch repair — professional kit, professional finish, zero travel for you. From £299.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>Mobile paint correction brings single-stage machine polishing to your home or workplace anywhere in Greater Manchester. We arrive with water, power management, lighting and full correction kit — you provide a parking spot and a power socket. Stage 1 enhancement, swirl mark removal, light scratch repair and headlight restoration are all available mobile; multi-stage correction and ceramic coating stay at our Urmston studio.</p>`)}
    <h2>What's available <span class="hl">mobile</span></h2>
    <ul class="tick">
      <li><strong><a href="/stage-1-paint-enhancement/">Stage 1 paint enhancement</a></strong> — gloss rescue in a day, from £299</li>
      <li><strong><a href="/swirl-mark-removal/">Swirl mark removal</a></strong> — permanent removal, not fillers, from £299</li>
      <li><strong><a href="/scratch-removal/">Mobile scratch repair</a></strong> — light scratches and scuffs polished out on your drive</li>
      <li><strong><a href="/headlight-restoration/">Headlight restoration</a></strong> — cloudy lenses restored in about an hour, from £59</li>
    </ul>
    <h2>What we <span class="hl">need from you</span></h2>
    <ol class="steps">
      <li><strong>A parking spot</strong><p>Driveway, quiet street or workplace car park — somewhere safe to work around the car.</p></li>
      <li><strong>A power socket</strong><p>Standard 13A socket within reach. We manage the rest.</p></li>
      <li><strong>Water access (ideal)</strong><p>An outside tap helps; if not, we carry our own supply.</p></li>
    </ol>
    <h2>Mobile <span class="hl">pricing</span></h2>
    ${priceTable([
      ["Stage 1 enhancement (mobile)", "Machine polish on your driveway, 1 day", "£299"],
      ["Mobile scratch repair", "Light scratches and scuffs, assessed from photos", "from £80"],
      ["Headlight restoration (pair, mobile)", "Wet sand, polish, UV seal", "£59"],
    ], "Mobile paint correction prices")}
    ${beforeAfter("mobile paint correction, Manchester")}
    <p>Looking for full correction? That's <a href="/2-stage-paint-correction/">2-stage</a> and <a href="/multi-stage-paint-correction/">multi-stage</a> work at our Urmston studio. Everywhere we travel: <a href="/areas-we-cover/">areas we cover</a>.</p>
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand("Your driveway is our workshop.", "Mobile correction from £299. Get a fixed quote in 30 seconds — open 24 hours.")}`,
};
