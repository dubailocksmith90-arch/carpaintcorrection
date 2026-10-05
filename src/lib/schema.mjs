// JSON-LD schema builders — @graph per page
import { SITE, AREAS } from "./site.mjs";

const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

function orgNode() {
  return {
    "@type": "AutoBodyShop",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneDisplay,
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Bank Transfer, Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.street,
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      postalCode: SITE.postcode,
      addressCountry: SITE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAYS,
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: AREAS.map((t) => ({ "@type": "City", name: t })),
    sameAs: [SITE.sisterUrl],
  };
}

function breadcrumbNode(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.url ? { item: `${SITE.url}${it.url}` } : {}),
    })),
  };
}

function serviceNode(svc) {
  return {
    "@type": "Service",
    name: svc.name,
    serviceType: "Paint correction",
    description: svc.description,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: AREAS.map((t) => ({ "@type": "City", name: t })),
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: svc.price,
      availability: "https://schema.org/InStock",
      url: `${SITE.url}${svc.url}`,
    },
  };
}

function faqNode(faqs) {
  const strip = (html) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: strip(f.a) },
    })),
  };
}

/* Build the @graph for a page. page: { breadcrumb, service?, faqs? } */
export function buildGraph(page) {
  const graph = [orgNode(), breadcrumbNode(page.breadcrumb)];
  if (page.service) graph.push(serviceNode({ ...page.service, url: page.path === "" ? "/" : `/${page.path}/` }));
  if (page.faqs && page.faqs.length) graph.push(faqNode(page.faqs));
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
