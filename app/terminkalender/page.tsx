import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { EventTimeline } from "@/components/event-timeline";
import { events, socialWalks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terminkalender",
  description:
    "Alle Termine 2026 der OG Heidelberg & Dossenheim: Jahreshauptversammlung, Arbeitseinsätze, BH-Prüfung, Agility-Turnier Baden-Cup, Vereinsfeste und Social Walks.",
  alternates: { canonical: "/terminkalender/" },
};

function fmtDay(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", { day: "2-digit" });
}
function fmtMonth(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", { month: "short", year: "numeric" });
}

export default function TerminkalenderPage() {
  const walks = [...socialWalks].sort();

  return (
    <>
      <PageHero
        eyebrow="Terminkalender"
        title="Termine & Veranstaltungen 2026"
        subtitle="Versammlungen, Prüfungen, Turniere und Feste. Plant euer Hundesportjahr mit uns."
      />

      <section className="container-page py-16 lg:py-20">
        <EventTimeline events={events} />

        <p className="mt-8 text-sm text-foreground/60">
          Vergangene Termine sind ausgegraut, der nächste Termin ist
          hervorgehoben. Scrolle nach oben, um zurückliegende Veranstaltungen zu
          sehen. Alle Angaben ohne Gewähr; kurzfristige Änderungen geben wir über
          unser Forum und Instagram bekannt.
        </p>
      </section>

      {/* Social Walks */}
      <section className="bg-muted py-16 lg:py-20">
        <div className="container-page">
          <div className="eyebrow">Social Walks 2026</div>
          <h2 className="text-2xl lg:text-3xl">Gassirunden in der Gruppe</h2>
          <p className="mt-3 max-w-2xl text-foreground/70">
            Die Social Walks werden von Kathrin Fischer geleitet. Wer teilnehmen
            möchte, meldet sich rechtzeitig bei uns.{" "}
            <Link href="/kontakt/" className="font-semibold text-brand hover:underline">
              Hier geht es zum Kontakt.
            </Link>
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {walks.map((w) => (
              <div
                key={w}
                className="rounded-xl border border-border bg-white px-4 py-3 text-center"
              >
                <span className="block text-xl font-bold text-brand">{fmtDay(w)}</span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-foreground/60">
                  {fmtMonth(w)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
