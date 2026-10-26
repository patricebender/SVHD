import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/nav";
import { siteConfig, contact } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-brand-ink text-white/80">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt=""
              width={40}
              height={50}
              className="h-11 w-auto"
            />
            <span className="font-bold leading-tight text-white">
              SV Heidelberg &amp;<br />Dossenheim e.V.
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Eine der ältesten Ortsgruppen des Vereins für Deutsche Schäferhunde
            (SV), gegründet {siteConfig.foundingYear}. Hundesport für alle Rassen.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/mitgliedschaft/" className="transition hover:text-white">
                Mitglied werden
              </Link>
            </li>
            <li>
              <Link href="/vorstand/" className="transition hover:text-white">
                Der Vorstand
              </Link>
            </li>
            <li>
              <Link href="/platzordnung/" className="transition hover:text-white">
                Platzordnung
              </Link>
            </li>
            <li>
              <a
                href="https://www.schaeferhunde.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                SV Hauptverein
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>{contact.address.street}</li>
            <li>{contact.address.city}</li>
            <li>
              <a href={contact.phoneHref} className="transition hover:text-white">
                Tel. {contact.phone}
              </a>
            </li>
            <li>
              <a href={contact.smsHref} className="transition hover:text-white">
                SMS {contact.sms}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Folgen
          </h3>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm transition hover:text-white"
          >
            <Image
              src="/instagram.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
              aria-hidden
            />
            Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {siteConfig.name}
          </p>
          <div className="flex gap-5">
            <Link href="/impressum/" className="hover:text-white/80">
              Impressum
            </Link>
            <Link href="/datenschutz/" className="hover:text-white/80">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
