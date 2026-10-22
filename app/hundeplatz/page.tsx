import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { HeroVideo } from "@/components/hero-video";

export const metadata: Metadata = {
  title: "Unser Hundeplatz",
  description:
    "Unser Vereinsgelände in Heidelberg: ein großer Trainingsplatz mit Geräten, Vereinsheim und Terrasse. Mitglieder können den Platz unter Beachtung der Platzordnung auch außerhalb der Trainingszeiten nutzen.",
  alternates: { canonical: "/hundeplatz/" },
};

export default function HundeplatzPage() {
  return (
    <>
      <PageHero
        eyebrow="Unser Hundeplatz"
        title="Viel Platz zum Trainieren"
        subtitle="Unser Vereinsgelände liegt idyllisch am Neckar, umgeben von Feldern und Bäumen, mit Blick auf die Bergstraße."
      />

      {/* Rundflug video */}
      <section className="container-page py-14 lg:py-16">
        <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-border bg-brand-ink">
          <HeroVideo className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <p className="mt-3 text-center text-sm text-foreground/60">
          Rundflug über unseren Hundeplatz
        </p>
      </section>

      {/* Info + photos */}
      <section className="container-page pb-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl">Großer Platz mit Geräten</h2>
            <div className="prose-club mt-5">
              <p>
                Auf unserem weitläufigen Vereinsgelände findest Du jede Menge Raum
                zum Trainieren, inklusive der Geräte für Agility, Hoopers und die
                weiteren Disziplinen.
              </p>
              <p>
                <strong>Mitglieder haben jederzeit Zugriff</strong> und können den
                Platz unter Beachtung der Platzordnung auch außerhalb der
                Trainingszeiten zum Trainieren nutzen.
              </p>
            </div>
            <Link href="/platzordnung/" className="btn-secondary mt-6">
              Zur Platzordnung
            </Link>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-soft">
            <Image
              src="/hundeplatz/gelaende.jpg"
              alt="Luftaufnahme unseres Vereinsgeländes mit Trainingsplatz, umgeben von Feldern und Wasser"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Vereinsheim */}
      <section className="container-page py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-last aspect-[16/9] overflow-hidden rounded-3xl shadow-soft lg:order-first">
            <Image
              src="/hundeplatz/vereinsheim.jpg"
              alt="Unser Vereinsheim mit überdachter Terrasse und Sitzgelegenheiten"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl">Vereinsheim & Terrasse</h2>
            <div className="prose-club mt-5">
              <p>
                Unser Vereinsheim mit überdachter Terrasse lädt zum Verweilen ein,
                für den Austausch vor und nach dem Training und bei unseren
                Veranstaltungen übers Jahr.
              </p>
              <p>
                Hier treffen sich unsere Mitglieder, feiern Vereinsfeste und lassen
                das Hundesportjahr gemeinsam ausklingen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impressionen vom Platz */}
      <section className="container-page pb-6">
        <div className="eyebrow">Impressionen</div>
        <h2 className="text-2xl lg:text-3xl">Unsere Hunde auf dem Platz</h2>
        <p className="mt-3 max-w-2xl text-foreground/70">
          Ob auf dem Laufsteg, der Rampe oder beim Balancieren, auf unseren
          Geräten ist für jedes Team etwas dabei.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/hundeplatz/agility-slalom.webp"
              alt="Hund und Hundeführerin beim Slalom im Agility-Parcours"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/hundeplatz/husky-sonnenuntergang.webp"
              alt="Husky auf dem Trainingsplatz bei Sonnenuntergang"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft sm:col-span-2 sm:aspect-[16/9] lg:col-span-1 lg:aspect-[3/4]">
            <Image
              src="/hundeplatz/agility-steg.webp"
              alt="Hund auf dem Laufsteg bei einem Agility-Turnier"
              fill
              className="object-cover object-[20%_center]"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Anfahrt */}
      <section className="bg-muted py-14 lg:py-20">
        <div className="container-page">
          <div className="eyebrow">Anfahrt</div>
          <h2 className="text-2xl lg:text-3xl">So findest Du zu uns</h2>
          <p className="mt-3 max-w-2xl text-foreground/70">
            Unser Hundeplatz liegt in der Straße Im Fennenberger 2, 69121
            Heidelberg.
          </p>
          <div className="mt-8 aspect-[21/9] overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Karte Im Fennenberger 2, Heidelberg"
              src="https://www.openstreetmap.org/export/embed.html?bbox=8.65%2C49.42%2C8.72%2C49.47&layer=mapnik"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <Link href="/kontakt/" className="mt-6 inline-block text-sm font-medium text-brand hover:underline">
            Kontakt & Anmeldung
          </Link>
        </div>
      </section>
    </>
  );
}
