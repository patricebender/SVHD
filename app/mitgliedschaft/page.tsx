import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mitgliedschaft & Schnuppertraining",
  description:
    "Mitglied werden im Schäferhundeverein Heidelberg & Dossenheim e.V.: Schnuppertraining, Beiträge (15 € Aufnahme, 30 € jährlich) und Formulare. Für alle Rassen, auch Nichtmitglieder.",
  alternates: { canonical: "/mitgliedschaft/" },
};

const forms = [
  { label: "Beitrittserklärung", href: "/formulare/beitrittserklaerung.pdf" },
  { label: "SEPA-Lastschriftmandat", href: "/formulare/sepa-lastschriftmandat.pdf" },
  { label: "Einwilligung nach DSGVO", href: "/formulare/dsgvo-einwilligung.pdf" },
];

export default function MitgliedschaftPage() {
  return (
    <>
      <PageHero
        eyebrow="Zum Verein"
        title="Werde Teil unseres Vereins"
        subtitle="Herzlich willkommen beim ältesten Schäferhundeverein in Heidelberg und Umgebung. Jeder kann bei uns Mitglied werden."
      />

      {/* Über den Verein */}
      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Was machen wir?</h2>
            <div className="prose-club mt-4">
              <p>
                Wir, die Ortsgruppe Heidelberg und Dossenheim (gegründet 1922),
                sind eine der ältesten Ortsgruppen des 1899 gegründeten Vereins
                für Deutsche Schäferhunde (SV). Der SV gehört dem Verband für das
                Hundewesen (VDH) und der Weltorganisation FCI an.
              </p>
              <p>
                Wir bilden Deinen Hund zu sicheren Begleit- und Sporthunden aus und
                bieten Training für Prüfungen und Wettkämpfe in Agility sowie im
                Vielseitigkeitsbereich gemäß IGP. Ebenso bereiten wir jedes Team
                auf den VDH-Hundeführerschein und die Begleithundeprüfung vor.
              </p>
              <p>
                <strong>Bei uns können auch Nichtmitglieder</strong> mit ihrem
                Hund, unabhängig von der Rasse, an unserem Ausbildungsangebot
                teilnehmen.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl">Wie werde ich Mitglied?</h2>
            <div className="prose-club mt-4">
              <p>
                Gerne kannst Du auch ohne Mitgliedschaft für ein Schnuppertraining
                vorbeischauen. Melde Dich einfach kurz bei uns, einen Kontakt
                findest Du{" "}
                <Link href="/kontakt/">hier</Link>.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-brand/20 bg-brand-light p-6">
              <h3 className="text-base text-brand-dark">Beiträge</h3>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-foreground/70">Aufnahmegebühr (einmalig)</dt>
                  <dd className="font-semibold text-brand-dark">15,00 €</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-foreground/70">Mitgliedsbeitrag (jährlich)</dt>
                  <dd className="font-semibold text-brand-dark">30,00 €</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Formulare */}
      <section className="bg-muted py-16 lg:py-20">
        <div className="container-page">
          <div className="eyebrow">Mitgliedsantrag</div>
          <h2 className="text-2xl lg:text-3xl">Benötigte Formulare</h2>
          <p className="mt-3 max-w-2xl text-foreground/70">
            Für den Antrag der Mitgliedschaft fülle bitte folgende Formulare aus.
            Lade sie hier herunter und bringe sie ausgedruckt mit oder sende sie
            uns digital zu.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {forms.map((f) => (
              <li key={f.label}>
                <a
                  href={f.href}
                  download
                  className="card group flex items-center gap-3 transition hover:border-brand/40 hover:shadow-md"
                >
                  <svg className="h-6 w-6 flex-none text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                  <span className="text-sm font-medium text-brand-dark">{f.label}</span>
                  <svg className="ml-auto h-5 w-5 flex-none text-foreground/40 transition group-hover:text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.anmeldung.email}?subject=Mitgliedschaft%20%2F%20Formulare`}
              className="btn-secondary"
            >
              Fragen? Schreib uns
            </a>
            <Link href="/platzordnung/" className="btn-secondary">
              Zur Platzordnung
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
