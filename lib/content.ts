export type Discipline = {
  slug: string;
  title: string;
  tagline: string;
  /** Short line for the overview grid. */
  summary: string;
  /** Longer descriptive paragraphs for the subpage. */
  body: string[];
  /** Highlights shown as a bullet list on the subpage. */
  highlights: string[];
  trainer: { name: string; note?: string };
  /** Optional notice shown prominently on the detail page (e.g. waitlist, full). */
  disclaimer?: {
    text: string;
    link?: { href: string; label: string };
  };
  /** Discipline image (real photos from our Vereinsgelände). */
  image: string;
  /** Intrinsic image size, used for accurate OpenGraph/Twitter previews. */
  imageWidth: number;
  imageHeight: number;
  /** Optional object-position for the image crop in grids/cards (e.g. "center 30%"). */
  imagePosition?: string;
  /** Optional object-position for the wider detail-page image; falls back to imagePosition. */
  imagePositionDetail?: string;
};

export const disciplines: Discipline[] = [
  {
    slug: "agility",
    title: "Agility",
    tagline: "Beweglichkeit, Tempo und Teamwork",
    summary:
      "Parcourstraining mit Hürden, Tunneln und Slalom für Anfänger bis Fortgeschrittene.",
    body: [
      "Beim Agility durchläuft das Hund-Mensch-Team einen Parcours aus Hürden, Tunneln, Slalom und weiteren Hindernissen, möglichst fehlerfrei und in guter Zeit.",
      "Im Vordergrund stehen die Freude an der Bewegung, präzise Führung und eine saubere Kommunikation zwischen Hund und HalterIn. Wir trainieren vom Grundaufbau einzelner Geräte bis hin zu kompletten Turnierparcours.",
    ],
    highlights: [
      "Agility Anfänger sowie Fun & Fortgeschrittene",
      "Grundaufbau aller Geräte für Einsteiger",
      "Sequenz- und Parcourstraining für Fortgeschrittene",
      "Vorbereitung auf Agility-Turniere",
    ],
    trainer: { name: "Katrin Rempp, Ivonne Schäfer" },
    disclaimer: {
      text: "Agility ist derzeit ausgebucht. Neue Plätze werden über eine Warteliste vergeben, Mitglieder haben dabei Vorrang. Nichtmitglieder sind aber herzlich willkommen, zum Beispiel bei Kathrin in der Unterordnung – frag einfach nach.",
      link: { href: "/trainingsangebote/unterordnung/", label: "Zur Unterordnung" },
    },
    image: "/training/agility.webp",
    imageWidth: 1600,
    imageHeight: 1155,
  },
  {
    slug: "unterordnung",
    title: "Unterordnung",
    tagline: "Grundlagen von Gehorsam und sozialem Verhalten",
    summary:
      "Sitz, Platz, Fuß und Abruf als Basis für Alltag und Sport, Anfänger bis Fortgeschrittene.",
    body: [
      "Die Unterordnung bildet das Fundament jeder weiteren Ausbildung. Wir erarbeiten die klassischen Signale wie Sitz, Platz, Bleib, Fuß und einen zuverlässigen Rückruf.",
      "Mit positiver Motivation und klarer Körpersprache entsteht ein Hund, der aufmerksam mitarbeitet, im Alltag ebenso wie als Vorbereitung auf Begleithund- und IGP-Prüfungen.",
    ],
    highlights: [
      "Unterordnung Anfänger und Fortgeschrittene",
      "Aufbau der Grundsignale mit positiver Bestärkung",
      "Leinenführigkeit und zuverlässiger Rückruf",
      "Basis für Begleithundeprüfung und IGP",
    ],
    trainer: { name: "Kathrin Fischer" },
    image: "/training/unterordnung.webp",
    imageWidth: 1066,
    imageHeight: 1600,
    imagePosition: "center 30%",
    imagePositionDetail: "center 27%",
  },
  {
    slug: "rally-obedience",
    title: "Rally Obedience",
    tagline: "Teamarbeit entlang eines Schilderparcours",
    summary:
      "Gehorsamsübungen an nummerierten Stationen, gelenkschonend und für jedes Team geeignet.",
    body: [
      "Rally Obedience verbindet Gehorsam mit einem abwechslungsreichen Parcours: An nummerierten Stationen absolviert das Team unterschiedliche Übungen, vom Richtungswechsel bis zur Position.",
      "Die Sportart fördert Konzentration, Führung und die Bindung zwischen Hund und HalterIn, ohne hohe körperliche Belastung und daher für fast jedes Team geeignet.",
    ],
    highlights: [
      "Übungen an nummerierten Stationen",
      "Fördert Konzentration und Führung",
      "Gelenkschonend, für jedes Alter",
      "Guter Einstieg in den Hundesport",
    ],
    trainer: { name: "Gaby Möll" },
    image: "/training/rally-obedience.webp",
    imageWidth: 720,
    imageHeight: 1280,
    // Portrait source (9:16); subject (Team) sitzt rechts unten – Crop dorthin ziehen.
    imagePosition: "70% 58%",
  },
  {
    slug: "hoopers",
    title: "Hoopers",
    tagline: "Geschicklichkeit und Distanzarbeit, gelenkschonend",
    summary:
      "Ein gelenkschonender Hundesport mit Tonnen, Hoops und Gates, Anfänger bis Fortgeschrittene.",
    body: [
      "Hoopers ist ein moderner, gelenkschonender Hundesport: Der Hund wird aus der Distanz durch einen Parcours aus Hoops (Bögen), Tonnen und Gates geführt, ganz ohne Sprünge.",
      "Weil keine hohe körperliche Belastung entsteht, eignet sich Hoopers für Hunde jeden Alters und jeder Größe und schult vor allem die Distanzarbeit und Kommunikation.",
    ],
    highlights: [
      "Hoopers Anfänger und Fortgeschrittene",
      "Gelenkschonend, ohne Sprünge",
      "Distanzführung und Körpersprache",
      "Für Hunde jeden Alters und jeder Größe",
    ],
    trainer: { name: "Gaby Möll, Beate Horneck" },
    image: "/training/hoopers.webp",
    imageWidth: 1600,
    imageHeight: 1200,
  },
  {
    slug: "longieren",
    title: "Longieren",
    tagline: "Distanzarbeit rund um den Kreis",
    summary:
      "Der Hund arbeitet außen um einen abgesteckten Kreis, geführt allein über Körpersprache.",
    body: [
      "Beim Longieren bewegt sich der Hund außen um einen abgesteckten Kreis, während die HalterIn im Inneren bleibt und ausschließlich über Körpersprache und Signale führt.",
      "Das schult Distanzarbeit, Impulskontrolle und Aufmerksamkeit und stärkt die Bindung im Team, ganz ohne Hektik.",
    ],
    highlights: [
      "Führung über Distanz und Körpersprache",
      "Fördert Impulskontrolle und Konzentration",
      "Ruhige, gelenkschonende Sportart",
      "Sonntags um 10 Uhr",
    ],
    trainer: { name: "Sabine Palm" },
    image: "/training/longieren.webp",
    imageWidth: 1600,
    imageHeight: 1200,
  },
  {
    slug: "welpentraining",
    title: "Welpentraining",
    tagline: "Frühförderung für die Kleinsten",
    summary:
      "Sozialisierung und ein guter Start ins Hundeleben, in zwei Altersgruppen (8 bis 24 Wochen).",
    body: [
      "In der Welpengruppe legen wir das Fundament für ein entspanntes Hundeleben: positive Begegnungen mit Artgenossen und Menschen, Umweltreize und erste einfache Signale.",
      "Wir trainieren in zwei Altersgruppen (8 bis 16 Wochen und 17 bis 24 Wochen), spielerisch, in kleinen Gruppen und mit Rücksicht auf das individuelle Tempo des Welpen.",
    ],
    highlights: [
      "Welpenstunde 8 bis 16 Wochen",
      "Welpenstunde 17 bis 24 Wochen",
      "Sozialisierung und Gewöhnung an Umweltreize",
      "Erste Signale und Impulskontrolle",
    ],
    trainer: { name: "Kathrin Fischer & Minttu Vainio" },
    image: "/training/welpentraining.webp",
    imageWidth: 1200,
    imageHeight: 1600,
    // Portrait source (3:4); Kopf des Welpen oben. Hero-Band ist sehr flach/breit,
    // daher der Detail-Wert stärker nach oben gezogen als in den Karten.
    imagePosition: "center 38%",
    imagePositionDetail: "center 22%",
  },
  {
    slug: "begleithundepruefung",
    title: "Begleithundeprüfung",
    tagline: "Vorbereitung auf BH/VT, Prüfung bei uns im Verein ablegbar",
    summary:
      "Gezieltes Training für die Begleithundeprüfung und den VDH-Hundeführerschein.",
    body: [
      "Die Begleithundeprüfung (BH/VT) weist nach, dass ein Hund im Alltag und im Straßenverkehr sicher und sozialverträglich geführt werden kann. Sie ist Voraussetzung für viele weitere Hundesportprüfungen.",
      "Wir bereiten jedes Hund-Mensch-Team strukturiert auf den Gehorsams- und den Verkehrsteil vor. Die Prüfung kann direkt bei uns im Verein abgelegt werden.",
    ],
    highlights: [
      "Gehorsamsteil auf dem Übungsplatz",
      "Verkehrsteil im öffentlichen Raum",
      "Vorbereitung auf den VDH-Hundeführerschein",
      "Prüfungsabnahme im Verein möglich",
    ],
    trainer: { name: "Nadja Trumpf" },
    image: "/training/begleithundepruefung.webp",
    imageWidth: 1600,
    imageHeight: 1111,
  },
];

export function getDiscipline(slug: string) {
  return disciplines.find((d) => d.slug === slug);
}

/** Weekly training schedule, grouped by day. */
export type ScheduleSlot = {
  time: string;
  what: string;
  trainer: string;
  /** Discipline slug this slot belongs to, if it has a detail page. */
  slug?: Discipline["slug"];
};
export const trainingSchedule: { day: string; slots: ScheduleSlot[] }[] = [
  {
    day: "Montag",
    slots: [
      { time: "17:30 – 18:30 Uhr", what: "Rally Obedience", trainer: "Gaby Möll", slug: "rally-obedience" },
      { time: "17:30 – 18:30 Uhr", what: "Agility Anfänger", trainer: "Katrin Rempp", slug: "agility" },
      { time: "18:30 – 19:30 Uhr", what: "Agility Fun & Fortgeschrittene", trainer: "Katrin Rempp", slug: "agility" },
    ],
  },
  {
    day: "Dienstag",
    slots: [
      { time: "17:00 – 18:00 Uhr", what: "Hoopers Anfänger", trainer: "Gaby Möll", slug: "hoopers" },
      { time: "17:45 – 18:30 Uhr", what: "Welpenstunde (8–16 Wochen)", trainer: "Kathrin Fischer & Minttu Vainio", slug: "welpentraining" },
      { time: "18:30 – 19:15 Uhr", what: "Welpenstunde (17–24 Wochen)", trainer: "Kathrin Fischer & Minttu Vainio", slug: "welpentraining" },
    ],
  },
  {
    day: "Mittwoch",
    slots: [
      { time: "17:00 – 20:00 Uhr", what: "Agility Anfänger & Fortgeschrittene", trainer: "Ivonne Schäfer", slug: "agility" },
      { time: "17:45 – 18:30 Uhr", what: "Unterordnung Anfänger", trainer: "Kathrin Fischer", slug: "unterordnung" },
      { time: "18:30 – 19:15 Uhr", what: "Unterordnung Anfänger", trainer: "Kathrin Fischer", slug: "unterordnung" },
      { time: "19:15 – 20:00 Uhr", what: "Unterordnung Fortgeschrittene", trainer: "Kathrin Fischer", slug: "unterordnung" },
    ],
  },
  {
    day: "Donnerstag",
    slots: [
      { time: "18:00 – 20:00 Uhr", what: "Training für Begleithundeprüfung", trainer: "Nadja Trumpf", slug: "begleithundepruefung" },
    ],
  },
  {
    day: "Freitag",
    slots: [
      { time: "17:00 – 17:30 Uhr", what: "Hoopers Anfänger", trainer: "Beate Horneck", slug: "hoopers" },
      { time: "17:30 – 18:00 Uhr", what: "Hoopers Fortgeschrittene", trainer: "Gaby Möll", slug: "hoopers" },
    ],
  },
  {
    day: "Samstag",
    slots: [
      { time: "16:00 Uhr", what: "Gruppenarbeit", trainer: "Beate Horneck" },
    ],
  },
  {
    day: "Sonntag",
    slots: [
      { time: "10:00 Uhr", what: "Longieren", trainer: "Sabine Palm", slug: "longieren" },
    ],
  },
];

/** All weekly slots for a discipline, with the day attached, in weekly order. */
export function getScheduleForDiscipline(slug: Discipline["slug"]) {
  return trainingSchedule.flatMap((day) =>
    day.slots
      .filter((slot) => slot.slug === slug)
      .map((slot) => ({ day: day.day, ...slot })),
  );
}

/** Notice shown on the training overview (capacity status). */
export const trainingNotice = {
  heading: "Hunde aller Rassen sind bei uns willkommen",
  text: "Aktuell können wir im Bereich Unterordnung, Agility & Longieren keine weiteren Teams aufnehmen, alle Plätze sind vergeben. Falls Du dennoch Interesse hast, zögere nicht uns zu kontaktieren. Wir finden eine Lösung.",
};

/** Prerequisites for active participation. */
export const trainingRequirements =
  "Generelle Voraussetzungen für die aktive Teilnahme an unserem Ausbildungsangebot sind eine gültige Schutzimpfung des Hundes sowie der Nachweis über den Abschluss einer Haftpflichtversicherung für Deinen Hund. Die Dokumente sind dem bzw. der jeweiligen Ausbilder-/in vorzulegen.";

/** News / Aktuelles entries. */
export const news: {
  /** Stable anchor id, used to deep-link from the landing page teaser. */
  slug: string;
  date: string;
  /** Short topic tag shown as a pill (e.g. "Training", "Termine"). */
  category: string;
  title: string;
  excerpt: string;
  body: string[];
  /**
   * Optional photos for the post. The first image is shown large (hero),
   * the rest as a thumbnail row below. Dimensions keep the layout stable
   * and the OpenGraph preview accurate.
   */
  images?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    /** object-position for the crop (e.g. "center" or "75% center"). */
    position?: string;
  }[];
  /** Contextual links to related pages, shown under the article. */
  links?: { label: string; href: string }[];
}[] = [
  {
    slug: "arbeitseinsatz-erfolg-oktober",
    date: "2026-10-25",
    category: "Rückblick",
    title: "Danke! Arbeitseinsatz war ein voller Erfolg",
    excerpt:
      "Viele helfende Hände, jede Menge entsorgtes Laub und Müll: Der Arbeitseinsatz am 24. Oktober hat unser Gelände auf Vordermann gebracht. Danke an alle!",
    body: [
      "Was für ein Tag! Beim Arbeitseinsatz am Samstag, den 24. Oktober, haben viele helfende Hände mit angepackt, und das Ergebnis kann sich sehen lassen.",
      "Gemeinsam haben wir jede Menge Laub zusammengekehrt, Müll entsorgt und das Vereinsgelände winterfit gemacht. Mit so viel Unterstützung ging die Arbeit leicht von der Hand.",
      "Ein herzliches Dankeschön an alle, die dabei waren und mit angepackt haben. Ihr seid großartig! Im Anschluss haben wir den Tag bei der Vereinsparty gemütlich ausklingen lassen.",
    ],
    images: [
      {
        src: "/aktuelles/arbeitseinsatz-gruppe.webp",
        alt: "Große Gruppe von Helferinnen und Helfern beim Arbeitseinsatz auf dem Vereinsgelände",
        width: 1600,
        height: 740,
        // Source is wider than 16:9; pull the crop left so the leftmost
        // person stays in frame.
        position: "30% center",
      },
      {
        src: "/aktuelles/arbeitseinsatz-werkzeug.webp",
        alt: "Besen, Schaufeln und Rechen stehen nach dem Einsatz am Zaun bereit",
        width: 800,
        height: 1732,
      },
      {
        src: "/aktuelles/arbeitseinsatz-transport.webp",
        alt: "Zwei Helfer transportieren einen beladenen Wagen über das Gelände",
        width: 900,
        height: 1599,
      },
    ],
  },
  {
    slug: "arbeitseinsatz-vereinsparty-oktober",
    date: "2026-10-22",
    category: "Termine",
    title: "Arbeitseinsatz und Vereinsparty am 24. Oktober",
    excerpt:
      "Am Samstag, den 24. Oktober, stehen zwei Termine an: Arbeitseinsatz um 10:00 Uhr und ab 18:00 Uhr die Vereinsparty.",
    body: [
      "Kurze Erinnerung: Am Samstag, den 24. Oktober, gibt es gleich zwei Termine auf dem Vereinsgelände.",
      "Um 10:00 Uhr startet der Arbeitseinsatz, bei dem wir gemeinsam das Gelände auf Vordermann bringen. Über jede helfende Hand freuen wir uns.",
      "Ab 18:00 Uhr lassen wir den Tag bei unserer Vereinsparty gemütlich ausklingen. Kommt vorbei, wir freuen uns auf euch!",
    ],
    links: [{ label: "Zum Terminkalender", href: "/terminkalender/" }],
  },
  {
    slug: "plaetze-vergeben",
    date: "2026-01-12",
    category: "Training",
    title: "Hunde aller Rassen sind bei uns willkommen",
    excerpt:
      "Aktuell sind in Unterordnung, Agility & Longieren alle Plätze vergeben. Bei Interesse trotzdem melden, wir finden eine Lösung.",
    body: [
      "Aktuell können wir im Bereich Unterordnung, Agility & Longieren keine weiteren Teams aufnehmen, alle Plätze sind vergeben.",
      "Falls Du dennoch Interesse haben solltest, zögere nicht uns zu kontaktieren. Wir finden eine Lösung.",
      "Anmeldung über die Homepage oder per SMS an Kathrin Fischer unter +49 175 5245250.",
    ],
    links: [
      { label: "Trainingsangebote ansehen", href: "/trainingsangebote/" },
      { label: "Kontakt aufnehmen", href: "/kontakt/" },
    ],
  },
  {
    slug: "terminkalender-2026",
    date: "2026-01-05",
    category: "Termine",
    title: "Terminkalender 2026 ist online",
    excerpt:
      "Alle Termine von der Jahreshauptversammlung über das Agility-Turnier bis zum Jahresabschluss findest Du jetzt im Terminkalender.",
    body: [
      "Der Terminkalender für 2026 steht bereit: Jahreshauptversammlung, Arbeitseinsätze, BH-Prüfung, das Agility-Turnier Baden-Cup, Vereinsfeste und mehr.",
    ],
    links: [{ label: "Zum Terminkalender", href: "/terminkalender/" }],
  },
  {
    slug: "social-walks-2026",
    date: "2025-12-15",
    category: "Veranstaltung",
    title: "Social Walks 2026 mit Kathrin Fischer",
    excerpt:
      "Lust auf eine Gassirunde mit uns? Die Social Walks gehen 2026 in die nächste Runde. Termine im Kalender.",
    body: [
      "Auch 2026 leitet Kathrin Fischer wieder regelmäßige Social Walks, entspannte Gassirunden in der Gruppe. Wer teilnehmen möchte, meldet sich rechtzeitig bei uns.",
    ],
    links: [
      { label: "Social-Walk-Termine", href: "/terminkalender/" },
      { label: "Kontakt aufnehmen", href: "/kontakt/" },
    ],
  },
];

/** Calendar events 2026. */
export type CalendarEvent = {
  /** Stable anchor id (date + title), used to deep-link to a single event. */
  id: string;
  date: string;
  time?: string;
  title: string;
  location?: string;
  note?: string;
  /** "walk" marks a Social Walk (recurring series); undefined is a normal Termin. */
  kind?: "walk";
};

/**
 * Derive a stable anchor id from an event's date and title, e.g.
 * "2026-10-24-arbeitseinsatz". The date prefix keeps same-day events apart
 * (the two 2026-10-24 entries differ by title). German umlauts are folded so
 * the id stays URL-clean.
 */
function slugifyEvent(date: string, title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${date}-${slug}`;
}

/** Events without their derived id; the id is filled in when `events` is built. */
const baseEvents: Omit<CalendarEvent, "id">[] = [
  { date: "2026-01-25", time: "16:00 Uhr", title: "Jahreshauptversammlung", location: "Vereinsgelände" },
  {
    date: "2026-03-01",
    time: "ganztags",
    title: "LG Baden Delegiertenversammlung",
    location: "Öschelbronn",
    note: "Freiwillige Teilnahme möglich, bitte frühzeitig über Kathrin Fischer voranmelden (0175 / 524 52 50 oder k.fischer@schaeferhundeverein-heidelberg.de).",
  },
  { date: "2026-03-21", time: "10:00 Uhr", title: "Arbeitseinsatz", location: "Vereinsgelände" },
  { date: "2026-04-19", time: "13:15 Uhr", title: "Sommertagszug, Teilnahme des Vereins", location: "Dossenheim" },
  { date: "2026-04-26", time: "ganztags", title: "Agility-Turnier Baden-Cup 2026", location: "Vereinsgelände" },
  { date: "2026-05-01", time: "10:00 Uhr", title: "Wandertag und Grillfest", location: "Vereinsgelände", note: "Details folgen" },
  { date: "2026-05-31", time: "8:30 Uhr", title: "BH-Prüfung mit Richter D. Breunig", location: "Vereinsgelände" },
  {
    date: "2026-07-18",
    time: "ganztags",
    title: "Internationales Fest der Gemeinde Dossenheim",
    location: "Dossenheim, Rathausplatz",
    note: "18. und 19. Juli, Teilnahme des Vereins, Details folgen",
  },
  { date: "2026-10-24", time: "10:00 Uhr", title: "Arbeitseinsatz", location: "Vereinsgelände" },
  { date: "2026-10-24", time: "ab 18:00 Uhr", title: "Vereinsparty", location: "Vereinsgelände" },
  {
    date: "2026-12-05",
    time: "ganztags",
    title: "Dossenheimer Weihnachtstrubel",
    location: "Dossenheim, Rathausplatz",
    note: "5. und 6. Dezember, Teilnahme des Vereins",
  },
  { date: "2026-12-12", time: "16:00 Uhr", title: "Jahresabschluss bei Glühwein und Imbiss", location: "Vereinsgelände" },
];

/**
 * Social Walk dates 2026, led by Kathrin Fischer. The series repeats monthly;
 * only the date is fixed ahead, the start location is announced per E-Mail
 * before each walk. Kept as a compact list for easy editing, then turned into
 * full calendar events below so they flow through the same timeline as the
 * other Termine.
 */
const socialWalkDates: string[] = [
  "2026-01-30",
  "2026-02-27",
  "2026-03-27",
  "2026-05-29",
  "2026-06-26",
  "2026-07-24",
  "2026-09-25",
  "2026-10-30",
  "2026-11-27",
];

/** All calendar events: regular Termine plus the Social Walk series, one source. */
export const events: CalendarEvent[] = [
  ...baseEvents,
  ...socialWalkDates.map(
    (date): Omit<CalendarEvent, "id"> => ({
      date,
      title: "Social Walk",
      location: "Startort wird per E-Mail bekannt gegeben",
      note: "Monatliche Gassirunde in der Gruppe mit Kathrin Fischer.",
      kind: "walk",
    }),
  ),
].map((e) => ({ ...e, id: slugifyEvent(e.date, e.title) }));
