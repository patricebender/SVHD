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
              <Link href="/platzordnung/" className="transition hover:text-white">
                Platzordnung
              </Link>
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
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.98c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.41-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.17.42-.36 1.04-.41 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.41 2.19.21.55.47.94.88 1.35.41.41.8.67 1.35.88.42.17 1.04.36 2.19.41 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.41.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.17-.42.36-1.04.41-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.41-2.19a3.63 3.63 0 0 0-.88-1.35 3.63 3.63 0 0 0-1.35-.88c-.42-.17-1.04-.36-2.19-.41-1.24-.06-1.61-.07-4.76-.07Zm0 3.38a4.48 4.48 0 1 0 0 8.96 4.48 4.48 0 0 0 0-8.96Zm0 7.39a2.91 2.91 0 1 1 0-5.82 2.91 2.91 0 0 1 0 5.82Zm5.71-7.58a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z" />
            </svg>
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
            <Link href="/kontakt/" className="hover:text-white/80">
              Impressum
            </Link>
            <Link href="/kontakt/" className="hover:text-white/80">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
