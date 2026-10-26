import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { contact, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zum Schäferhundeverein Heidelberg & Dossenheim e.V.: Anschrift Im Fennenberger 2, 69121 Heidelberg, Vereinsheim-Telefon und Anmeldung zum Schnuppertraining.",
  alternates: { canonical: "/kontakt/" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="So erreichst Du uns"
        subtitle="Fragen zum Training, zur Mitgliedschaft oder Anmeldung zum Schnuppertraining? Melde Dich gerne."
      />

      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Anschrift</h2>
            <div className="mt-6 card">
              <p className="font-semibold text-brand-dark">{contact.address.name}</p>
              <p className="mt-2 text-sm text-foreground/80">
                {contact.address.street}
                <br />
                {contact.address.city}
              </p>
              <dl className="mt-5 space-y-3 border-t border-border pt-5 text-sm">
                <div className="flex gap-3">
                  <dt className="w-28 flex-none font-semibold text-foreground/70">
                    Vereinsheim
                  </dt>
                  <dd>
                    <a href={contact.phoneHref} className="font-medium text-brand hover:underline">
                      {contact.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <h2 className="mt-10 text-2xl">Anmeldung & Schnuppertraining</h2>
            <div className="mt-6 card">
              <p className="text-sm text-foreground/80">
                Für die Anmeldung zum Training oder ein Schnuppertraining erreichst
                Du uns am schnellsten per SMS oder E-Mail.
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="w-28 flex-none font-semibold text-foreground/70">
                    Kontakt
                  </dt>
                  <dd className="font-medium text-foreground">{contact.anmeldung.name}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-28 flex-none font-semibold text-foreground/70">
                    SMS / Telefon
                  </dt>
                  <dd>
                    <a href={contact.smsHref} className="font-medium text-brand hover:underline">
                      {contact.sms}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-28 flex-none font-semibold text-foreground/70">
                    E-Mail
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${contact.anmeldung.email}`}
                      className="font-medium text-brand hover:underline"
                    >
                      {contact.anmeldung.email}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={`mailto:${contact.anmeldung.email}?subject=Anfrage%20Schnuppertraining`}
                className="btn-primary mt-6 w-full"
              >
                E-Mail schreiben
              </a>
            </div>

            <p className="mt-6 text-sm text-foreground/70">
              Aktuelle Eindrücke aus dem Vereinsleben gibt es auf{" "}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand hover:underline"
              >
                Instagram
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col">
            <h2 className="text-2xl">Anfahrt</h2>
            <p className="mt-4 text-sm text-foreground/70">
              Unser Vereinsgelände liegt in der Straße Im Fennenberger 2, 69121
              Heidelberg.
            </p>
            <div className="mt-6 min-h-80 flex-1 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Karte Im Fennenberger 2, Heidelberg"
                src="https://www.openstreetmap.org/export/embed.html?bbox=8.6447%2C49.4330%2C8.6547%2C49.4396&layer=mapnik&marker=49.436278%2C8.649694"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.openstreetmap.org/search?query=Im%20Fennenberger%202%2C%2069121%20Heidelberg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 self-start text-sm font-medium text-brand hover:underline"
            >
              Größere Karte öffnen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
