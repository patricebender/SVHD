import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { news } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aktuelles",
  description:
    "Neuigkeiten aus dem Schäferhundeverein Heidelberg & Dossenheim e.V.: freie Trainingsplätze, Terminkalender, Social Walks und mehr.",
  alternates: { canonical: "/aktuelles/" },
};

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const ArrowRight = () => (
  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
      clipRule="evenodd"
    />
  </svg>
);

/** Quick links to the pages people most often want after reading news. */
const relatedPages = [
  {
    href: "/trainingsangebote/",
    title: "Trainingsangebote",
    text: "Agility, IGP, Hoopers, Welpentraining und mehr, für jedes Team.",
  },
  {
    href: "/terminkalender/",
    title: "Terminkalender",
    text: "Alle Termine 2026: Prüfungen, Turniere, Feste und Social Walks.",
  },
  {
    href: "/mitgliedschaft/",
    title: "Mitglied werden",
    text: "Schnuppertraining, Beiträge und Formulare auf einen Blick.",
  },
];

export default function AktuellesPage() {
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));
  const [lead, ...rest] = sorted;

  return (
    <>
      <PageHero
        eyebrow="Aktuelles"
        title="Neuigkeiten aus dem Verein"
        subtitle="Was es bei uns gerade Neues gibt, von freien Trainingsplätzen bis zu Terminen und Social Walks."
      />

      {/* FEATURED / LEAD */}
      {lead && (
        <section className="container-page py-14 lg:py-20">
          <article
            id={lead.slug}
            className="relative scroll-mt-24 overflow-hidden rounded-3xl bg-brand-ink px-7 py-10 text-white shadow-soft sm:px-12 sm:py-14"
          >
            {/* decorative glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/30 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Neu
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-mid">
                  {lead.category}
                </span>
                <time dateTime={lead.date} className="text-sm text-white/60">
                  {fmtDate(lead.date)}
                </time>
              </div>
              <h2 className="mt-4 text-3xl text-white lg:text-4xl">{lead.title}</h2>
              <div className="prose-club mt-5 text-white/80 [&_p]:text-white/80">
                {lead.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {lead.links && lead.links.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {lead.links.map((l, i) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={
                        i === 0
                          ? "inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-white/90"
                          : "inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                      }
                    >
                      {l.label}
                      <ArrowRight />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </article>
        </section>
      )}

      {/* MORE NEWS — timeline rail */}
      {rest.length > 0 && (
        <section className="container-page pb-16 lg:pb-20">
          <h2 className="mb-8 text-2xl lg:text-3xl">Weitere Neuigkeiten</h2>
          <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
            {rest.map((n) => (
              <li key={n.slug} id={n.slug} className="relative scroll-mt-24">
                <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-white bg-brand sm:-left-[39px]" />
                <article className="card">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                      {n.category}
                    </span>
                    <time
                      dateTime={n.date}
                      className="text-xs font-semibold uppercase tracking-wider text-foreground/70"
                    >
                      {fmtDate(n.date)}
                    </time>
                  </div>
                  <h3 className="mt-3 text-xl text-brand-dark">{n.title}</h3>
                  <div className="prose-club mt-3">
                    {n.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {n.links && n.links.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {n.links.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                        >
                          {l.label}
                          <ArrowRight />
                        </Link>
                      ))}
                    </div>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* RELATED PAGES */}
      <section className="bg-muted py-16 lg:py-20">
        <div className="container-page">
          <div className="eyebrow">Mehr entdecken</div>
          <h2 className="text-2xl lg:text-3xl">Das könnte Dich auch interessieren</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPages.map((p) => (
              <Link key={p.href} href={p.href} className="group card flex flex-col">
                <h3 className="text-lg text-brand-dark">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-foreground/70">{p.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Ansehen
                  <span className="transition group-hover:translate-x-1">
                    <ArrowRight />
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-sm text-foreground/70">
            Kurzfristige Änderungen geben wir über unser Forum und Instagram bekannt.{" "}
            <Link href="/kontakt/" className="font-semibold text-brand hover:underline">
              Zum Kontakt.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
