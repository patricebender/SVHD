import { siteConfig, contact } from "@/lib/site";
import type { Discipline } from "@/lib/content";
import { getScheduleForDiscipline } from "@/lib/content";

/** SportsClub structured data for rich results. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: `https://${siteConfig.domain}`,
    logo: `https://${siteConfig.domain}/logo.svg`,
    foundingDate: String(siteConfig.foundingYear),
    description: siteConfig.description,
    sport: "Hundesport",
    areaServed: "Heidelberg, Dossenheim",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      postalCode: "69121",
      addressLocality: "Heidelberg",
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
    email: contact.anmeldung.email,
    telephone: contact.phone,
    sameAs: [siteConfig.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Maps our German weekday names to schema.org DayOfWeek identifiers. */
const dayOfWeek: Record<string, string> = {
  Montag: "https://schema.org/Monday",
  Dienstag: "https://schema.org/Tuesday",
  Mittwoch: "https://schema.org/Wednesday",
  Donnerstag: "https://schema.org/Thursday",
  Freitag: "https://schema.org/Friday",
  Samstag: "https://schema.org/Saturday",
  Sonntag: "https://schema.org/Sunday",
};

/** Extracts "HH:MM" start/end from strings like "17:30 – 18:30 Uhr" or "16:00 Uhr". */
function parseTimes(time: string): { start?: string; end?: string } {
  const matches = time.match(/\d{1,2}:\d{2}/g);
  if (!matches) return {};
  return { start: matches[0], end: matches[1] };
}

/** Course structured data for a single discipline, incl. its weekly schedule. */
export function CourseJsonLd({ discipline }: { discipline: Discipline }) {
  const base = `https://${siteConfig.domain}`;
  const slots = getScheduleForDiscipline(discipline.slug);

  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: discipline.title,
    description: `${discipline.tagline}. ${discipline.summary}`,
    url: `${base}/trainingsangebote/${discipline.slug}/`,
    image: `${base}${discipline.image}`,
    inLanguage: "de",
    provider: {
      "@type": "SportsClub",
      name: siteConfig.name,
      url: base,
    },
    ...(slots.length > 0 && {
      hasCourseInstance: slots.map((slot) => {
        const { start, end } = parseTimes(slot.time);
        return {
          "@type": "CourseInstance",
          courseMode: "onsite",
          name: slot.what,
          location: {
            "@type": "Place",
            name: "Vereinsgelände",
            address: {
              "@type": "PostalAddress",
              streetAddress: contact.address.street,
              postalCode: "69121",
              addressLocality: "Heidelberg",
              addressCountry: "DE",
            },
          },
          courseSchedule: {
            "@type": "Schedule",
            repeatFrequency: "P1W",
            byDay: dayOfWeek[slot.day],
            ...(start && { startTime: start }),
            ...(end && { endTime: end }),
          },
        };
      }),
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
