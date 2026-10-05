import {
  hero, answerBlock, faqBlock, ctaBand, priceTable, beforeAfter,
} from "../lib/components.mjs";

const faqs = [
  {
    q: "Do you offer mobile paint correction in Didsbury?",
    a: `<p>Yes — Didsbury is ideal for mobile work. Most houses have driveways, which is all we need alongside a power socket. We regularly work across M20, from Didsbury Village to West Didsbury and East Didsbury. Full multi-stage correction still happens at our Urmston studio, about 15 minutes away.</p>`,
  },
  {
    q: "My car is parked under trees near Fletcher Moss — is the paintwork at risk?",
    a: `<p>Tree sap, pollen and bird droppings are genuinely damaging: sap etches into clear coat if left in sun, and droppings are acidic enough to mark paint within hours in summer. If your car lives under Didsbury's street trees, a decontamination and <a href="/ceramic-coating/">ceramic coating</a> is the best defence — contamination washes off coated paint instead of bonding to it.</p>`,
  },
  {
    q: "How much is paint correction in Didsbury?",
    a: `<p>Same as everywhere we work: stage 1 enhancement from £299, 2-stage correction from £549, ceramic coating from £349. No "posh postcode" surcharge — the price depends on your car's size and condition, confirmed as a fixed quote before we start.</p>`,
  },
  {
    q: "Where do I bring the car for studio work?",
    a: `<p>Our studio is at 426 Flixton Rd, Urmston, Manchester M41 6QT — roughly 15 minutes from Didsbury via the M60. We can also arrange collection for multi-day corrections.</p>`,
  },
];

export default {
  path: "paint-correction-didsbury",
  title: "Paint Correction Didsbury | Mobile & Studio | From £299",
  description: "Paint correction in Didsbury, Manchester: mobile enhancement at your home or multi-stage correction at our Urmston studio. From £299 — free 30-second quote.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "Areas We Cover", url: "/areas-we-cover/" }, { name: "Didsbury" }],
  faqs,
  service: {
    name: "Paint Correction Didsbury",
    description: "Paint correction in Didsbury, Manchester: mobile stage 1 enhancement on your driveway, or full multi-stage correction at our Urmston studio.",
    price: "299",
  },
  body: `
${hero({
  eyebrow: "M20 · Mobile on your driveway",
  h1: "Paint Correction in Didsbury",
  lede: "Didsbury's leafy streets are beautiful — and brutal on paintwork. Tree sap, pollen and bird droppings from the Village to Fletcher Moss etch into unprotected clear coat. We correct the damage and protect against the next lot.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>We provide paint correction throughout Didsbury (M20) — mobile stage 1 enhancement, swirl and scratch removal on your driveway, and full multi-stage correction with ceramic coating at our Urmston studio, about 15 minutes away via the M60. Prices from £299 with fixed quotes before we start.</p>`)}
    <h2>Why Didsbury cars <span class="hl">need us</span></h2>
    <p>Didsbury is one of Manchester's leafiest suburbs — and trees are a paintwork hazard. Cars parked along the tree-lined roads around Didsbury Park, or near Fletcher Moss Botanical Garden, collect sap, honeydew and pollen that bond to the paint. Leave sap baking in summer sun and it etches clear coat permanently. Add the usual Manchester car-wash swirls, and most Didsbury cars we see need both decontamination and machine polishing.</p>
    <p>The fix is a two-part job we do constantly in M20: a thorough decontamination to strip everything the trees left behind, then machine polishing to remove the etching and swirls — finished with <a href="/ceramic-coating/">ceramic coating</a> so the next season's sap washes straight off instead of bonding.</p>
    <h2>Mobile in Didsbury — <span class="hl">how it works</span></h2>
    <p>Didsbury suits mobile work perfectly: Victorian semis and terraces with driveways from West Didsbury to East Didsbury give us exactly what we need — a safe parking spot and a power socket. We bring water, power management and full kit. You don't even need to be home; plenty of customers leave the keys and come back to a transformed car.</p>
    <h2>Popular in <span class="hl">Didsbury</span></h2>
    ${priceTable([
      ["Stage 1 enhancement (mobile)", "Gloss rescue on your driveway, 1 day", "£299"],
      ["Decontamination + ceramic coating", "The tree-sap defence package", "£449"],
      ["2-stage correction (studio)", "Full transformation, 2–3 days in Urmston", "£549"],
    ], "Paint correction prices in Didsbury")}
    ${beforeAfter("paint correction in Didsbury")}
    <p>Also serving nearby: <a href="/areas-we-cover/">Chorlton</a>, Withington, Burnage and all of South Manchester — <a href="/areas-we-cover/">see all areas</a>.</p>
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand("Didsbury paintwork, properly fixed.", "Mobile or studio, from £299. Get your fixed quote in 30 seconds.")}`,
};
