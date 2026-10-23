import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { contact, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum des Vereins für Deutsche Schäferhunde, OG Heidelberg & Dossenheim e.V.: Anschrift, Vertretungsberechtigte und Vereinsregister.",
  alternates: { canonical: "/impressum/" },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Impressum" title="Angaben gemäß § 5 TMG" />

      <section className="container-page py-16 lg:py-20">
        <div className="prose-club max-w-3xl">
          <h2>Verein</h2>
          <p>
            Verein für Deutsche Schäferhunde
            <br />
            OG Heidelberg und Dossenheim e.V.
            <br />
            {contact.address.street}
            <br />
            {contact.address.city}
          </p>

          <h2>Kontakt</h2>
          <p>
            Tel.:{" "}
            <a href={contact.phoneHref} className="text-brand hover:underline">
              {contact.phone}
            </a>
            <br />
            E-Mail:{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-brand hover:underline"
            >
              {contact.email}
            </a>
            <br />
            Internet:{" "}
            <a
              href={`https://www.${siteConfig.domain}`}
              className="text-brand hover:underline"
            >
              www.{siteConfig.domain}
            </a>
          </p>

          <h2>Vertretungsberechtigt und inhaltlich verantwortlich</h2>
          <p>
            Kathrin Fischer
            <br />
            Anschrift wie oben
          </p>

          <h2>Vereinsregister</h2>
          <p>
            Registergericht Mannheim
            <br />
            Registernummer: VR&nbsp;331347
          </p>
        </div>
      </section>
    </>
  );
}
