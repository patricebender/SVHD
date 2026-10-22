import { siteConfig, contact } from "@/lib/site";

/** SportsClub structured data for rich results. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: `https://${siteConfig.domain}`,
    logo: `https://${siteConfig.domain}/logo.svg`,
    foundingDate: String(siteConfig.foundingYear),
    description: siteConfig.description,
    sport: "Hundesport",
    areaServed: "Heidelberg, Dossenheim",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      postalCode: "69121",
      addressLocality: "Heidelberg",
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
    email: contact.anmeldung.email,
    telephone: contact.phone,
    sameAs: [siteConfig.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
