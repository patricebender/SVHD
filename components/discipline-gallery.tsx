import Link from "next/link";
import Image from "next/image";
import { disciplines } from "@/lib/content";

type DisciplineGalleryProps = {
  /** Show each discipline's tagline below the title. */
  showTagline?: boolean;
  /** Label for the link at the bottom of each card. */
  cta?: string;
};

// Gallery order (independent of the nav/sitemap order in lib/content): a
// didactic progression — from first steps (Welpen, Unterordnung, BH) through
// the hobby offering to the sports. Any discipline not listed is appended.
// With eight disciplines this fills two even rows of four on lg.
const order = [
  "welpentraining",
  "unterordnung",
  "begleithundepruefung",
  "wochenstart",
  "agility",
  "rally-obedience",
  "hoopers",
  "longieren",
];
const bySlug = new Map(disciplines.map((d) => [d.slug, d]));
const ordered = [
  ...order.map((slug) => bySlug.get(slug)).filter((d): d is NonNullable<typeof d> => Boolean(d)),
  ...disciplines.filter((d) => !order.includes(d.slug)),
];

/**
 * Gallery of all disciplines, shared between the home page and the trainings
 * page. Uniform tile heights (fixed image crop); on lg the tiles sit four per
 * row (two even rows for the eight disciplines).
 */
export function DisciplineGallery({
  showTagline = false,
  cta = "Mehr erfahren",
}: DisciplineGalleryProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {ordered.map((d) => (
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
          {showTagline && (
            <p className="mt-1 text-sm font-medium text-brand">{d.tagline}</p>
          )}
          <p className="mt-2 flex-1 text-sm text-foreground/70">{d.summary}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
            {cta}
            <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
