import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { disciplines, getDiscipline } from "@/lib/content";

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
