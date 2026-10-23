import Link from "next/link";
import Image from "next/image";
import { HeroVideo } from "@/components/hero-video";
import { disciplines, news } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  const latest = [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-ink text-white">
        <HeroVideo className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/80 to-brand-ink/40" />
        <div className="container-page relative py-24 lg:py-32 lg:min-h-[32rem]">
          <div className="eyebrow text-brand-mid">Gegründet {siteConfig.foundingYear}</div>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hundesport in Heidelberg &amp; Dossenheim
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Wir bilden Deinen Hund zu sicheren Begleit- und Sporthunden aus, für
            alle Rassen. Agility, IGP, Begleithund­prüfung, Welpentraining und
            mehr.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/mitgliedschaft/" className="btn-primary">
              Schnuppertraining &amp; Mitglied werden
            </Link>
            <Link
              href="/trainingsangebote/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Trainingsangebote ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="eyebrow">Willkommen</div>
            <h2 className="text-3xl lg:text-4xl">
              Eine der ältesten Ortsgruppen Deutschlands
            </h2>
            <div className="prose-club mt-6">
              <p>
                Wir, die Ortsgruppe Heidelberg und Dossenheim (gegründet 1922),
                sind eine der ältesten Ortsgruppen des 1899 gegründeten{" "}
                <a
                  href="https://www.schaeferhunde.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vereins für Deutsche Schäferhunde (SV)
                </a>
                . Der SV gehört dem Verband für das Hundewesen (VDH) und der
                Weltorganisation FCI an.
              </p>
              <p>
                Wir bieten Training für Prüfungen und Wettkämpfe in{" "}
                <Link href="/trainingsangebote/agility/">Agility</Link> sowie im
                Vielseitigkeitsbereich gemäß{" "}
                <Link href="/trainingsangebote/unterordnung/">IGP</Link>. Jedes
                Hund-Mensch-Team kann sich bei uns auf den VDH-Hundeführerschein
                und die{" "}
                <Link href="/trainingsangebote/begleithundepruefung/">
                  Begleithundeprüfung
                </Link>{" "}
                vorbereiten. Eine vollständige Übersicht unseres
                Trainingsangebots findet ihr in unseren{" "}
                <Link href="/trainingsangebote/">Trainingsangeboten</Link>.
              </p>
              <p>
                <strong>Auch Nichtmitglieder</strong> können mit ihrem Hund,
                unabhängig von der Rasse, am Ausbildungsangebot teilnehmen,{" "}
                <Link href="/kontakt/">sprich uns einfach an</Link>. Wer dauerhaft
                dabei sein möchte, wird am besten{" "}
                <Link href="/mitgliedschaft/">Mitglied</Link>.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
            <Image
              src="/training/gsd-daisies.webp"
              alt="Deutscher Schäferhund auf dem Vereinsgelände"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* HUNDEPLATZ SHOWCASE */}
      <section className="bg-brand-ink text-white">
        <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft lg:aspect-[16/11]">
            <Image
              src="/hundeplatz/gelaende.webp"
              alt="Luftaufnahme unseres Vereinsgeländes mit Trainingsplatz am Wasser"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center lg:pl-4">
            <div className="eyebrow text-brand-mid">Unser Hundeplatz</div>
            <h2 className="text-3xl text-white lg:text-4xl">
              Großer Platz mit Geräten, idyllisch am Wasser
            </h2>
            <p className="mt-5 max-w-xl text-white/80">
              Auf unserem weitläufigen Vereinsgelände findest Du jede Menge Raum
              zum Trainieren, inklusive der Geräte für Agility, Hoopers und mehr.
              Mitglieder haben jederzeit Zugriff und können den Platz unter
              Beachtung der Platzordnung auch außerhalb der Trainingszeiten nutzen.
            </p>
            <div className="mt-8">
              <Link
                href="/hundeplatz/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-white/90"
              >
                Hundeplatz ansehen
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING GRID */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <div className="eyebrow">Trainingsangebot</div>
            <h2 className="text-3xl lg:text-4xl">Das bieten wir an</h2>
            <p className="mt-4 text-foreground/70">
              Von den ersten Schritten im Welpentraining bis zum Turniersport,
              für jedes Team das passende Angebot.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                    style={{ objectPosition: d.imagePosition }}
                  />
                </div>
                <h3 className="text-xl text-brand-dark">{d.title}</h3>
                <p className="mt-2 flex-1 text-sm text-foreground/70">{d.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Mehr erfahren
                  <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="container-page py-16 lg:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow">Aktuelles</div>
            <h2 className="text-3xl lg:text-4xl">Neuigkeiten aus dem Verein</h2>
          </div>
          <Link
            href="/aktuelles/"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
          >
            Alle Neuigkeiten
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {latest.map((n) => (
            <Link
              key={n.slug}
              href={`/aktuelles/#${n.slug}`}
              className="group card flex flex-col"
            >
              <time className="text-xs font-semibold uppercase tracking-wider text-brand">
                {new Date(n.date).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h3 className="mt-3 text-lg leading-snug text-brand-dark">{n.title}</h3>
              <p className="mt-3 flex-1 text-sm text-foreground/70">{n.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Weiterlesen
                <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="rounded-3xl bg-brand px-8 py-14 text-center text-white lg:px-16">
          <h2 className="text-3xl text-white lg:text-4xl">
            Lerne uns unverbindlich kennen
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/95">
            Du bist nach vorheriger Anmeldung herzlich zu einem Schnuppertraining
            eingeladen. So lernst Du unser Angebot und unsere Trainerinnen in Ruhe
            kennen.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/mitgliedschaft/"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-white/90"
            >
              Zum Schnuppertraining anmelden
            </Link>
            <Link
              href="/kontakt/"
              className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
