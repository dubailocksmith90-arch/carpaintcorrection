import {
  hero, answerBlock, faqBlock, ctaBand, areaChips,
} from "../lib/components.mjs";
import { AREAS, AREA_PAGES } from "../lib/site.mjs";

const faqs = [
  {
    q: "Do you offer mobile paint correction across Greater Manchester?",
    a: `<p>Yes. Stage 1 enhancement, swirl and scratch removal, and headlight restoration are all available mobile — we come to your home or workplace anywhere in Greater Manchester, from Bury to Stockport to Wigan. Full multi-stage correction and ceramic coating are studio-only at Urmston.</p>`,
  },
  {
    q: "What do you need for a mobile visit?",
    a: `<p>A safe place to park near a power socket, and ideally access to a water supply. A driveway or quiet street is perfect. If you're unsure whether your spot works, send a photo or just ask — we'll confirm before booking.</p>`,
  },
  {
    q: "Is there a travel fee?",
    a: `<p>Most of Greater Manchester carries no call-out fee. For the Cheshire fringe — Wilmslow, Alderley Edge, Knutsford — a small travel fee may apply, always confirmed in your quote upfront.</p>`,
  },
  {
    q: "Where is your studio?",
    a: `<p>426 Flixton Rd, Urmston, Manchester M41 6QT — easy to reach from the M60, with dedicated correction bays, colour-matched lighting and a dust-controlled environment for coatings. Open 24 hours for bookings.</p>`,
  },
];

const BOROUGHS = [
  ["Manchester", "City centre, Didsbury, Chorlton, Withington, Fallowfield"],
  ["Trafford", "Urmston, Stretford, Sale, Altrincham, Timperley, Hale, Bowdon"],
  ["Stockport", "Stockport, Bramhall, Cheadle, Marple, Hazel Grove"],
  ["Salford", "Salford, Eccles, Swinton, Worsley, Walkden"],
  ["Bury", "Bury, Prestwich, Whitefield, Ramsbottom, Radcliffe"],
  ["Bolton", "Bolton, Horwich, Farnworth, Westhoughton"],
  ["Rochdale", "Rochdale, Middleton, Heywood, Littleborough"],
  ["Oldham", "Oldham, Shaw, Royton, Chadderton, Uppermill"],
  ["Tameside", "Ashton-under-Lyne, Hyde, Denton, Droylsden, Stalybridge"],
  ["Wigan", "Wigan, Leigh, Atherton, Tyldesley, Standish"],
  ["Cheshire fringe", "Wilmslow, Alderley Edge, Knutsford, Lymm"],
];

export default {
  path: "areas-we-cover",
  title: "Areas We Cover | Paint Correction Greater Manchester",
  description: "Mobile + studio paint correction across Greater Manchester — see all areas we cover: Didsbury, Hale, Wilmslow, Altrincham, Bolton. Free 30-second quote.",
  breadcrumb: [{ name: "Home", url: "/" }, { name: "Areas We Cover" }],
  faqs,
  body: `
${hero({
  eyebrow: "Studio in Urmston · Mobile everywhere",
  h1: "Areas We Cover",
  lede: "Our studio sits in Urmston, ten minutes from the M60 — and our mobile units cover every corner of Greater Manchester plus the Cheshire fringe. Wherever your car lives, we can reach it.",
})}
<section class="section">
  <div class="wrap">
    ${answerBlock(`<p>We provide paint correction across all ten Greater Manchester boroughs — Manchester, Trafford, Stockport, Salford, Bury, Bolton, Rochdale, Oldham, Tameside and Wigan — plus the Cheshire fringe including Wilmslow, Alderley Edge and Knutsford. Mobile services come to your driveway; studio work happens at 426 Flixton Rd, Urmston.</p>`)}
    <h2>Dedicated <span class="hl">area pages</span></h2>
    <p class="lede">In-depth local pages with area-specific advice, FAQs and booking notes:</p>
    ${areaChips(AREA_PAGES)}
    <h2>Everywhere <span class="hl">else</span></h2>
    <div class="table-wrap"><table aria-label="Coverage by borough">
      <thead><tr><th scope="col">Borough</th><th scope="col">Towns &amp; districts</th></tr></thead>
      <tbody>
        ${BOROUGHS.map(([b, t]) => `<tr><td><strong>${b}</strong></td><td>${t}</td></tr>`).join("\n")}
      </tbody>
    </table></div>
    <p>Don't see your town? If you're within Greater Manchester or nearby Cheshire, we almost certainly cover you — <a href="/get-a-quote/">ask in the quote builder</a>.</p>
  </div>
</section>
<section class="section alt">
  <div class="wrap">
    ${faqBlock(faqs)}
  </div>
</section>
${ctaBand()}`,
};
