import {
  hero, answerBlock, faqBlock, ctaBand, priceTable, beforeAfter,
} from "../lib/components.mjs";

const faqs = [
  {
    q: "Do you offer mobile paint correction in Hale?",
    a: `<p>Yes — and Hale is perfect for it. Large detached houses with gated driveways around Hale and Hale Barns give us ample space and privacy to work. We bring everything; you just provide a power socket. Discretion is standard: unmarked setup, no fuss, no neighbours watching.</p>`,
  },
  {
    q: "My car is high-value — are you insured for prestige vehicles?",
    a: `<p>Fully. A large share of our correction work is on prestige and performance cars — Range Rovers, Porsches, Mercedes-AMG and similar — and our insurance covers high-value vehicles. Every panel is paint-depth measured before polishing, which is exactly the caution expensive paint deserves.</p>`,
  },
  {
    q: "How much is paint correction in Hale?",
    a: `<p>Stage 1 enhancement from £299, 2-stage correction from £549, ceramic coating from £349 — the same honest pricing as everywhere we work. Prestige cars sometimes need extra stages for harder paint systems; your fixed quote will say so upfront if that's the case.</p>`,
  },
  {
    q: "Can you work around my schedule?",
    a: `<p>We're open 24 hours for bookings, and mobile work can be arranged around your day — many Hale customers have us work while they're at the office or out. The car is simply ready when you are.</p>`,
  },
];

export default {
  path: "paint-correction-hale",
  title: "Paint Correction Hale | Mobile & Studio | From £299",
  description: "Paint correction in Hale for prestige and performance cars: discreet mobile service or studio correction in Urmston. Fully insured. From £299 — free quote.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "Areas We Cover", url: "/areas-we-cover/" }, { name: "Hale" }],
  faqs,
  service: {
    name: "Paint Correction Hale",
    description: "Paint correction in Hale: discreet mobile enhancement for prestige cars on your driveway, or full correction at our Urmston studio. Fully insured.",
    price: "299",
  },
  body: `
${hero({
  eyebrow: "WA15 · Prestige car specialists",
  h1: "Paint Correction in Hale",
  lede: "Hale driveways hold some of the finest cars in the North West — and they deserve specialist care. Discreet mobile correction at your home, or concours-level studio work in Urmston. Fully insured for high-value vehicles.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>We provide paint correction throughout Hale and Hale Barns (WA15) — mobile stage 1 enhancement and swirl removal on your driveway with full discretion, and multi-stage correction with ceramic coating at our Urmston studio. We specialise in prestige and performance cars, are fully insured for high-value vehicles, and every panel is paint-depth measured before polishing.</p>`)}
    <h2>Built for <span class="hl">Hale's cars</span></h2>
    <p>Ashley Road to Hale Barns, the cars are different here — and so is the standard expected. Prestige paint systems are often harder, metallic and pearl finishes show holograms mercilessly under showroom light, and a £60,000 car with swirled paint is a £60,000 car that looks cheap. Our correction work is judged the way Hale judges cars: in daylight, up close, with no excuses.</p>
    <p>We also understand that privacy matters. Mobile bookings are handled quietly — no signwritten circus on your drive, no audience. Just a specialist, professional kit, and a car that comes back looking better than the day it was collected.</p>
    <h2>Prestige <span class="hl">packages</span></h2>
    ${priceTable([
      ["Stage 1 enhancement (mobile)", "Discreet gloss restoration on your driveway", "£299"],
      ["2-stage correction + 2-year ceramic coating", "Our most booked prestige package", "£799"],
      ["Multi-stage correction + 5-year coating", "Concours preparation, studio only", "£1,149"],
    ], "Paint correction prices in Hale")}
    ${beforeAfter("paint correction in Hale")}
    <p>Also serving: Bowdon, Altrincham, Timperley and the wider WA14/WA15 area — <a href="/areas-we-cover/">see all areas</a>.</p>
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand("Prestige paint, specialist hands.", "Fully insured, discreet, and measured to the micron. Get your fixed quote in 30 seconds.")}`,
};
