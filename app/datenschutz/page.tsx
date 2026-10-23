import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { contact, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung des Schäferhundevereins Heidelberg & Dossenheim e.V.: Welche Daten beim Besuch unserer Webseite verarbeitet werden – ohne Cookies und ohne Tracking.",
  alternates: { canonical: "/datenschutz/" },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Datenschutz"
        title="Datenschutzerklärung"
        subtitle="Wir erheben und verwenden Ihre personenbezogenen Daten ausschließlich im Rahmen der Bestimmungen des Datenschutzrechts der Bundesrepublik Deutschland."
      />

      <section className="container-page py-16 lg:py-20">
        <div className="prose-club max-w-3xl">
          <p>
            Im Folgenden unterrichten wir Sie über Art, Umfang und Zwecke der
            Erhebung und Verwendung personenbezogener Daten. Sie können diese
            Unterrichtung jederzeit auf unserer Webseite abrufen.
          </p>

          <h2>Zugriffsdaten (Server-Logfiles)</h2>
          <p>
            Ihr Internet-Browser übermittelt beim Zugriff auf unsere Webseite aus
            technischen Gründen automatisch Daten an den Server unseres Hosting-
            Anbieters. Dazu gehören unter anderem Datum und Uhrzeit des Zugriffs,
            die abgerufene Datei, die zuvor besuchte Webseite, Browsertyp und
            -version, das Betriebssystem sowie Ihre IP-Adresse. Diese Daten werden
            ausschließlich zur Sicherstellung eines störungsfreien Betriebs der
            Webseite und zur statistischen Auswertung verarbeitet und nach kurzer
            Zeit gelöscht. Eine Zusammenführung dieser Daten mit anderen
            Datenquellen oder eine Zuordnung zu einer bestimmten Person nehmen wir
            nicht vor.
          </p>

          <h2>Keine Cookies, kein Tracking</h2>
          <p>
            Unsere Webseite setzt keine Cookies ein und bindet keine Analyse-,
            Tracking- oder Werbedienste ein. Es werden keine Nutzungsprofile
            erstellt. Die Seite ist eine rein informative Darstellung unseres
            Vereins; eine Registrierung oder Anmeldung ist nicht erforderlich.
          </p>

          <h2>Kontaktaufnahme</h2>
          <p>
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die
            von Ihnen übermittelten Daten ausschließlich zur Bearbeitung Ihrer
            Anfrage. Eine Weitergabe an Dritte erfolgt nicht.
          </p>

          <h2>Externe Inhalte</h2>
          <p>
            Zur Darstellung unseres Standorts binden wir eine Karte von
            OpenStreetMap ein. Beim Laden der Karte wird Ihre IP-Adresse an die
            Server der OpenStreetMap Foundation übermittelt. Links zu externen
            Angeboten (z. B. Instagram) führen auf Seiten Dritter, für deren
            Datenverarbeitung die jeweiligen Betreiber verantwortlich sind.
          </p>

          <h2>Auskunftsrecht</h2>
          <p>
            Sie haben das Recht, von uns Auskunft über die zu Ihrer Person
            gespeicherten Daten zu verlangen sowie deren Berichtigung oder Löschung
            zu fordern. Auf Ihr Verlangen kann die Auskunft auch elektronisch
            erteilt werden.
          </p>

          <h2>Verantwortlicher</h2>
          <p>
            {contact.address.name}
            <br />
            {contact.address.street}
            <br />
            {contact.address.city}
            <br />
            E-Mail:{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-brand hover:underline"
            >
              {contact.email}
            </a>
          </p>
          <p className="text-sm text-foreground/70">
            Weitere Angaben finden Sie im{" "}
            <a href="/impressum/" className="text-brand hover:underline">
              Impressum
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
