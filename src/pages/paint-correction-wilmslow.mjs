import {
  hero, answerBlock, faqBlock, ctaBand, priceTable, beforeAfter,
} from "../lib/components.mjs";

const faqs = [
  {
    q: "Do you offer mobile paint correction in Wilmslow?",
    a: `<p>Yes — we cover all of Wilmslow (SK9) mobile, including Lindow, Handforth and the lanes out towards Alderley Edge. A driveway and a power socket is all we need. Full multi-stage correction and ceramic coating are done at our Urmston studio, around 25 minutes away.</p>`,
  },
  {
    q: "My car gets stone chips from country lanes — can you help?",
    a: `<p>Stone chips themselves need touch-up paint, not polishing — but the haze, swirls and general dullness that come with high-mileage Cheshire driving absolutely respond to machine polishing. Many Wilmslow customers book a 2-stage correction to reset the paint, then ceramic coating so the lanes do less damage going forward.</p>`,
  },
  {
    q: "Do you work on supercars and performance cars?",
    a: `<p>Regularly. Wilmslow and the Cheshire golden triangle are supercar country, and we're fully insured for high-value vehicles. Paint-depth readings on every panel, specialist lighting, and the patience these cars demand — that's the job.</p>`,
  },
  {
    q: "How much is paint correction in Wilmslow?",
    a: `<p>Stage 1 enhancement from £299, 2-stage correction from £549, ceramic coating from £349 — identical pricing to everywhere we work, confirmed as a fixed quote before we begin. A small travel fee may apply for the Cheshire fringe; it's always stated upfront.</p>`,
  },
];

export default {
  path: "paint-correction-wilmslow",
  title: "Paint Correction Wilmslow | Mobile & Studio | From £299",
  description: "Paint correction in Wilmslow, Cheshire: mobile enhancement or studio correction for prestige and performance cars. Fully insured. From £299 — free quote.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "Areas We Cover", url: "/areas-we-cover/" }, { name: "Wilmslow" }],
  faqs,
  service: {
    name: "Paint Correction Wilmslow",
    description: "Paint correction in Wilmslow, Cheshire: mobile enhancement across SK9 and concours-level studio correction in Urmston. Supercar experienced, fully insured.",
    price: "299",
  },
  body: `
${hero({
  eyebrow: "SK9 · Cheshire golden triangle",
  h1: "Paint Correction in Wilmslow",
  lede: "Supercar country deserves specialist paintwork care. From Bank Square to the lanes of Alderley Edge, we correct and protect the North West's finest cars — mobile across SK9 or at our Urmston studio.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>We provide paint correction throughout Wilmslow and the Cheshire golden triangle — mobile stage 1 enhancement, swirl and scratch removal across SK9, and multi-stage correction with ceramic coating at our Urmston studio. We're experienced with supercars and performance cars, fully insured for high-value vehicles, and measure paint depth on every panel.</p>`)}
    <h2>Cheshire roads <span class="hl">vs paintwork</span></h2>
    <p>Wilmslow cars live a particular life: narrow country lanes towards Alderley Edge and Prestbury throw up grit and cause stone chips; the A34 and M56 coat cars in motorway film; and cars that do low miles under covers can still suffer from improper washing when they do emerge. The result we see most in SK9 isn't neglect — it's well-loved cars dulled by the wrong maintenance.</p>
    <p>Our answer is the same discipline we apply everywhere, tuned for high-value paint: careful decontamination, measured machine polishing, and <a href="/ceramic-coating/">ceramic coating</a> so Cheshire's lanes do less damage between details. For cars heading to shows or up for sale, our <a href="/multi-stage-paint-correction/">multi-stage correction</a> delivers concours standard.</p>
    <h2>Popular in <span class="hl">Wilmslow</span></h2>
    ${priceTable([
      ["2-stage correction + 2-year ceramic coating", "The reset-and-protect package for prestige cars", "£799"],
      ["Stage 1 enhancement (mobile)", "Gloss restoration on your driveway", "£299"],
      ["Multi-stage correction + 5-year coating", "Concours preparation, studio only", "£1,149"],
    ], "Paint correction prices in Wilmslow")}
    ${beforeAfter("paint correction in Wilmslow")}
    <p>Also serving: Alderley Edge, Handforth, Knutsford and Prestbury — <a href="/areas-we-cover/">see all areas</a>.</p>
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand("Cheshire's cars, corrected properly.", "Supercar-experienced, fully insured, measured to the micron. Get your fixed quote in 30 seconds.")}`,
};
