import ogImageSrc from "@images/mainlogo.svg";

export const SITE = {
  title: "TEDxNCIT",
  tagline: "TED event",
  description: "TEDxNCIT is an independently organized TED event that we are hosting here at the Nepal College of Information Technology (NCIT). Like other TEDx events, TEDxNCIT operates under a license from TED, a nonprofit organization devoted to spreading ideas in the form of short, powerful talks.",
  description_short: "TEDxNCIT, hosted by Nepal College of Information Technology (NCIT), is an independently organized TED event. It features short, powerful talks under a license from TED. ",
  url: "https://tedx.ncit.edu.np/",
  author: "Pradip Dhungana",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : An Independently organized TED event`,
  description: "TEDxNCIT is an independently organized TED event that we are hosting here at the Nepal College of Information Technology (NCIT). Like other TEDx events, TEDxNCIT operates under a license from TED, a nonprofit organization devoted to spreading ideas in the form of short, powerful talks.",
  image: ogImageSrc,
};
