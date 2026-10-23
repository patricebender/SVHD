import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { EventTimeline } from "@/components/event-timeline";
import { events } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terminkalender",
  description:
    "Alle Termine 2026 der OG Heidelberg & Dossenheim: Jahreshauptversammlung, Arbeitseinsätze, BH-Prüfung, Agility-Turnier Baden-Cup, Vereinsfeste und Social Walks.",
  alternates: { canonical: "/terminkalender/" },
};

export default function TerminkalenderPage() {
  return (
    <>
      <PageHero
        eyebrow="Terminkalender"
        title="Termine & Veranstaltungen 2026"
        subtitle="Versammlungen, Prüfungen, Turniere und Feste. Plant euer Hundesportjahr mit uns."
      />

      <section className="container-page py-16 lg:py-20">
        <EventTimeline events={events} />

        <p className="mt-8 max-w-2xl text-sm text-foreground/70">
          Vergangene Termine sind ausgegraut, der nächste Termin ist
          hervorgehoben. Scrolle nach oben, um zurückliegende Veranstaltungen zu
          sehen.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-foreground/70">
          Social Walks sind unsere monatliche Gassirunde in der Gruppe,
          geleitet von Kathrin Fischer. Der Startort wird jeweils kurzfristig per
          E-Mail bekannt gegeben. Wer teilnehmen möchte, meldet sich rechtzeitig
          bei uns.{" "}
          <Link href="/kontakt/" className="font-semibold text-brand hover:underline">
            Hier geht es zum Kontakt.
          </Link>
        </p>
      </section>
    </>
  );
}
