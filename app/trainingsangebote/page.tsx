import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import {
  disciplines,
  trainingSchedule,
  trainingNotice,
  trainingRequirements,
} from "@/lib/content";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trainingsangebote & Trainingszeiten",
  description:
    "Unser Trainingsangebot im Überblick: Agility, Unterordnung, Rally Obedience, Hoopers, Longieren, Welpentraining und Begleithundeprüfung, inklusive wöchentlicher Trainingszeiten und Ansprechpartner.",
  alternates: { canonical: "/trainingsangebote/" },
};

export default function TrainingsangebotePage() {
  return (
    <>
      <PageHero
        eyebrow="Trainingsangebote"
        title="Training für jedes Hund-Mensch-Team"
        subtitle="Ob Welpe oder erfahrener Sporthund, ob Mitglied oder nicht, ob Schäferhund oder andere Rasse: Bei uns findet jedes Team das passende Angebot."
      />

      {/* Notice */}
      <section className="container-page pt-12">
        <div className="rounded-2xl border border-brand/20 bg-brand-light p-6">
          <h2 className="text-lg text-brand-dark">{trainingNotice.heading}</h2>
          <p className="mt-2 text-sm text-foreground/80">{trainingNotice.text}</p>
          <p className="mt-3 text-sm text-foreground/80">
            Anmeldung über die Homepage oder per SMS an Kathrin Fischer unter{" "}
            <a href={contact.smsHref} className="font-semibold text-brand hover:underline">
              {contact.sms}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Trainingszeiten */}
      <section id="trainingszeiten" className="container-page py-14 lg:py-16 scroll-mt-24">
        <div className="eyebrow">Trainingszeiten</div>
        <h2 className="text-2xl lg:text-3xl">Wöchentlicher Überblick</h2>
        <p className="mt-3 max-w-2xl text-sm text-foreground/70">
          {trainingRequirements}{" "}
          <Link href="/platzordnung/" className="font-semibold text-brand hover:underline">
            Hier geht es zu unserer Platzordnung.
          </Link>
        </p>

        <div className="mt-8 space-y-6">
          {trainingSchedule.map((day) => (
            <div
              key={day.day}
              className="overflow-hidden rounded-2xl border border-border"
            >
              <div className="bg-brand px-5 py-3 text-sm font-bold uppercase tracking-wider text-white">
                {day.day}
              </div>

              {/* Mobile: stacked cards (no horizontal overflow) */}
              <ul className="divide-y divide-border sm:hidden">
                {day.slots.map((slot) => (
                  <li
                    key={`${day.day}-${slot.time}-${slot.what}`}
                    className="px-5 py-4"
                  >
                    {slot.slug ? (
                      <Link
                        href={`/trainingsangebote/${slot.slug}/`}
                        className="font-medium text-brand hover:underline"
                      >
                        {slot.what}
                      </Link>
                    ) : (
                      <p className="font-medium text-brand-dark">{slot.what}</p>
                    )}
                    <p className="mt-1 text-sm tabular-nums text-foreground/80">
                      {slot.time}
                    </p>
                    <p className="mt-1 text-sm text-foreground/60">
                      <span className="text-foreground/50">Ansprechpartner/-in: </span>
                      {slot.trainer}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Tablet and up: table */}
              <table className="hidden w-full table-fixed text-left text-sm sm:table">
                <colgroup>
                  <col className="w-[28%]" />
                  <col className="w-[42%]" />
                  <col className="w-[30%]" />
                </colgroup>
                <thead className="bg-muted text-foreground/60">
                  <tr>
                    <th className="px-5 py-2.5 font-semibold">Uhrzeit</th>
                    <th className="px-5 py-2.5 font-semibold">Angebot</th>
                    <th className="px-5 py-2.5 font-semibold">Ansprechpartner/-in</th>
                  </tr>
                </thead>
                <tbody>
                  {day.slots.map((slot, i) => (
                    <tr
                      key={`${day.day}-${slot.time}-${slot.what}`}
                      className={i % 2 ? "bg-muted/40" : "bg-white"}
                    >
                      <td className="whitespace-nowrap px-5 py-3 tabular-nums text-foreground/80">
                        {slot.time}
                      </td>
                      <td className="px-5 py-3 font-medium">
                        {slot.slug ? (
                          <Link
                            href={`/trainingsangebote/${slot.slug}/`}
                            className="text-brand hover:underline"
                          >
                            {slot.what}
                          </Link>
                        ) : (
                          <span className="text-brand-dark">{slot.what}</span>
                        )}
                      </td>
                      <td className="px-5 py-3 text-foreground/70">{slot.trainer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      {/* Disciplines */}
      <section className="bg-muted py-16 lg:py-20">
        <div className="container-page">
          <div className="eyebrow">Disziplinen</div>
          <h2 className="text-2xl lg:text-3xl">Unsere Angebote im Detail</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((d) => (
              <Link
                key={d.slug}
                href={`/trainingsangebote/${d.slug}/`}
                className="group card flex flex-col"
              >
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src={d.image}
                    alt={d.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    style={{ objectPosition: d.imagePosition }}
                  />
                </div>
                <h3 className="text-xl text-brand-dark">{d.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand">{d.tagline}</p>
                <p className="mt-2 flex-1 text-sm text-foreground/70">{d.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Zur Disziplin
                  <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
