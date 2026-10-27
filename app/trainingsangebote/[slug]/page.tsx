import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  disciplines,
  getDiscipline,
  getDisciplineContactEmail,
  getScheduleForDiscipline,
} from "@/lib/content";
import { getPeople, peopleNames } from "@/lib/people";
import { CourseJsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return disciplines.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDiscipline(slug);
  if (!d) return {};
  const url = `/trainingsangebote/${d.slug}/`;
  const description = `${d.tagline}. ${d.summary}`;
  const images = [
    {
      url: d.image,
      width: d.imageWidth,
      height: d.imageHeight,
      alt: `${d.title} beim Schäferhundeverein Heidelberg & Dossenheim`,
    },
  ];
  return {
    title: d.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: d.title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: d.title,
      description,
      images: [d.image],
    },
  };
}

export default async function DisciplinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDiscipline(slug);
  if (!d) notFound();

  const slots = getScheduleForDiscipline(d.slug);

  // Prefilled E-Mail für Schnupper-Anfragen: freundliche Anrede plus ein kurzes
  // Formular, das Interessierte nur noch ausfüllen müssen.
  const mailBody = [
    `Hallo liebes Team,`,
    ``,
    `ich interessiere mich für ein Schnuppertraining im Bereich ${d.title} und würde gerne unverbindlich vorbeikommen.`,
    ``,
    `Hier meine Angaben:`,
    `• Name des Hundehalters/der Hundehalterin: `,
    `• Name des Hundes: `,
    `• Rasse des Hundes: `,
    `• Alter des Hundes: `,
    ``,
    `Viele Grüße`,
  ].join("\n");
  const mailtoHref = `mailto:${getDisciplineContactEmail(d)}?subject=${encodeURIComponent(
    `Schnuppertraining ${d.title}`,
  )}&body=${encodeURIComponent(mailBody)}`;

  return (
    <>
      <CourseJsonLd discipline={d} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-ink text-white">
        <Image
          src={d.image}
          alt={d.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
          style={{ objectPosition: d.imagePositionDetail ?? d.imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/80 to-brand-ink/40" />
        <div className="container-page relative py-20 lg:py-28">
          <Link
            href="/trainingsangebote/"
            className="inline-flex items-center gap-1 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
            </svg>
            Alle Trainingsangebote
          </Link>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold text-white lg:text-5xl">
            {d.title}
          </h1>
          <p className="mt-3 text-lg text-brand-mid">{d.tagline}</p>
        </div>
      </section>

      {/* Disclaimer */}
      {d.disclaimer && (
        <section className="container-page pt-10 lg:pt-12">
          <div className="flex gap-3 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-amber-900">
            <svg className="mt-0.5 h-5 w-5 flex-none text-amber-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 6a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 6Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
            </svg>
            <div className="text-sm leading-relaxed">
              <p>{d.disclaimer.text}</p>
              {d.disclaimer.link && (
                <Link
                  href={d.disclaimer.link.href}
                  className="mt-2 inline-flex items-center gap-1 font-semibold underline underline-offset-2 hover:text-amber-700"
                >
                  {d.disclaimer.link.label}
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Body */}
      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            {/* Highlights float right so the body text flows alongside and then
                wraps full-width beneath it, framing the box instead of leaving a
                tall empty column. Floats collapse to a stacked block on mobile. */}
            <div className="prose-club">
              <div className="mb-6 rounded-2xl border border-border bg-muted/40 p-6 md:float-right md:mb-4 md:ml-8 md:w-72 md:p-6">
                <h2 className="mb-4 mt-0 text-2xl">Das erwartet Euch</h2>
                <ul className="my-0">
                  {d.highlights.map((h) => (
                    <li key={h}>
                      <svg className="mt-1 h-4 w-4 flex-none text-brand" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                      </svg>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {d.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Image sits directly below the text in the left column; clear-both
                drops it past the floated highlights box. */}
            <div className="relative mt-8 clear-both aspect-[16/9] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src={d.image}
                alt={`${d.title} Training auf dem Vereinsgelände in Heidelberg`}
                fill
                className="object-cover"
                style={{ objectPosition: d.imagePositionDetail ?? d.imagePosition }}
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>
          </div>

          <aside className="space-y-6">
            {slots.length > 0 && (
              <div className="card overflow-hidden p-0">
                <div className="flex items-center gap-2 bg-brand px-5 py-3 text-sm font-bold uppercase tracking-wider text-white">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5a.75.75 0 0 0-.75.75v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5a.75.75 0 0 0-.75-.75H4.75Z" clipRule="evenodd" />
                  </svg>
                  Trainingszeiten
                </div>
                <ul className="divide-y divide-border">
                  {slots.map((slot, i) => (
                    <li key={`${slot.day}-${slot.time}-${i}`} className="px-5 py-3">
                      <p className="text-sm font-semibold text-brand-dark">
                        {slot.day}
                      </p>
                      <p className="mt-0.5 text-sm tabular-nums text-foreground/80">
                        {slot.time}
                      </p>
                      <p className="mt-0.5 text-xs text-foreground/70">
                        {slot.what} · {peopleNames(slot.trainerIds)}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border bg-muted/50 px-5 py-3">
                  <Link
                    href="/trainingsangebote/#trainingszeiten"
                    className="text-sm font-semibold text-brand hover:underline"
                  >
                    Zum vollständigen Wochenplan
                  </Link>
                </div>
              </div>
            )}
            <div className="card">
              <h3 className="text-base text-brand-dark">Ansprechpartner</h3>
              <ul className="mt-3 space-y-3 text-sm">
                {getPeople(d.trainer.coachIds).map((c, i) => (
                  <li key={i}>
                    <p className="font-semibold text-foreground">{c.name}</p>
                  </li>
                ))}
              </ul>
              {d.trainer.note && (
                <p className="mt-4 border-t border-border pt-4 text-sm text-foreground/70">
                  {d.trainer.note}
                </p>
              )}
            </div>
            <div className="card bg-muted">
              <h3 className="text-base text-brand-dark">Interesse geweckt?</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Komm nach vorheriger Anmeldung unverbindlich zum Schnuppern
                vorbei, auch als Nichtmitglied und mit jeder Rasse. Schreib uns
                einfach, wir melden uns bei Dir.
              </p>
              <a href={mailtoHref} className="btn-primary mt-4 w-full">
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M3 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3Zm.4 2h13.2L10 10.75 3.4 6ZM3 8.08l6.47 4.66a.9.9 0 0 0 1.06 0L17 8.08V14H3V8.08Z" />
                </svg>
                Unverbindlich anfragen
              </a>
              <Link
                href="/mitgliedschaft/"
                className="btn-secondary mt-3 w-full"
              >
                Mitglied werden
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
