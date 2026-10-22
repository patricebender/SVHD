import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { disciplines, getDiscipline, getScheduleForDiscipline } from "@/lib/content";

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
  return {
    title: d.title,
    description: `${d.tagline}. ${d.summary}`,
    alternates: { canonical: `/trainingsangebote/${d.slug}/` },
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

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-ink text-white">
        <Image
          src={d.image}
          alt={d.title}
          fill
          priority
          className="object-cover opacity-35"
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

      {/* Body */}
      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="prose-club">
            {d.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <h2 className="mb-4 mt-10 text-2xl">Das erwartet Euch</h2>
            <ul>
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
                      <p className="mt-0.5 text-xs text-foreground/60">
                        {slot.what} · {slot.trainer}
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
              <p className="mt-2 text-sm font-semibold text-foreground">{d.trainer.name}</p>
              {d.trainer.note && (
                <p className="mt-2 text-sm text-foreground/70">{d.trainer.note}</p>
              )}
            </div>
            <div className="card bg-muted">
              <h3 className="text-base text-brand-dark">Schnuppern?</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Nach vorheriger Anmeldung kannst Du unverbindlich an einem
                Training teilnehmen, auch als Nichtmitglied und mit jeder Rasse.
              </p>
              <Link href="/mitgliedschaft/" className="btn-primary mt-4 w-full">
                Anmelden
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
