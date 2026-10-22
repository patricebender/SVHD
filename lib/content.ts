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
  /** Placeholder image (Unsplash) until real photos are supplied. */
  image: string;
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
    image:
      "https://images.unsplash.com/photo-1558929996-da64ba858215?auto=format&fit=crop&w=1200&q=70",
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
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=70",
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
    image:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=70",
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
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=70",
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
    image:
      "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=1200&q=70",
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
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=70",
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
    image:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1200&q=70",
  },
];

export function getDiscipline(slug: string) {
  return disciplines.find((d) => d.slug === slug);
}

/** Weekly training schedule, grouped by day. */
export type ScheduleSlot = { time: string; what: string; trainer: string };
export const trainingSchedule: { day: string; slots: ScheduleSlot[] }[] = [
  {
    day: "Montag",
    slots: [
      { time: "17:30 – 18:30 Uhr", what: "Rally Obedience", trainer: "Gaby Möll" },
      { time: "17:30 – 18:30 Uhr", what: "Agility Anfänger", trainer: "Katrin Rempp" },
      { time: "18:30 – 19:30 Uhr", what: "Agility Fun & Fortgeschrittene", trainer: "Katrin Rempp" },
    ],
  },
  {
    day: "Dienstag",
    slots: [
      { time: "17:00 – 18:00 Uhr", what: "Hoopers Anfänger", trainer: "Gaby Möll" },
      { time: "17:45 – 18:30 Uhr", what: "Welpenstunde (8–16 Wochen)", trainer: "Kathrin Fischer & Minttu Vainio" },
      { time: "18:30 – 19:15 Uhr", what: "Welpenstunde (17–24 Wochen)", trainer: "Kathrin Fischer & Minttu Vainio" },
    ],
  },
  {
    day: "Mittwoch",
    slots: [
      { time: "17:00 – 20:00 Uhr", what: "Agility Anfänger & Fortgeschrittene", trainer: "Ivonne Schäfer" },
      { time: "17:45 – 18:30 Uhr", what: "Unterordnung Anfänger", trainer: "Kathrin Fischer" },
      { time: "18:30 – 19:15 Uhr", what: "Unterordnung Anfänger", trainer: "Kathrin Fischer" },
      { time: "19:15 – 20:00 Uhr", what: "Unterordnung Fortgeschrittene", trainer: "Kathrin Fischer" },
    ],
  },
  {
    day: "Donnerstag",
    slots: [
      { time: "18:00 – 20:00 Uhr", what: "Training für Begleithundeprüfung", trainer: "Nadja Trumpf" },
    ],
  },
  {
    day: "Freitag",
    slots: [
      { time: "17:00 – 17:30 Uhr", what: "Hoopers Anfänger", trainer: "Beate Horneck" },
      { time: "17:30 – 18:00 Uhr", what: "Hoopers Fortgeschrittene", trainer: "Gaby Möll" },
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
      { time: "10:00 Uhr", what: "Longieren", trainer: "Sabine Palm" },
    ],
  },
];

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
  date: string;
  title: string;
  excerpt: string;
  body: string[];
}[] = [
  {
    date: "2026-01-12",
    title: "Hunde aller Rassen sind bei uns willkommen",
    excerpt:
      "Aktuell sind in Unterordnung, Agility & Longieren alle Plätze vergeben. Bei Interesse trotzdem melden, wir finden eine Lösung.",
    body: [
      "Aktuell können wir im Bereich Unterordnung, Agility & Longieren keine weiteren Teams aufnehmen, alle Plätze sind vergeben.",
      "Falls Du dennoch Interesse haben solltest, zögere nicht uns zu kontaktieren. Wir finden eine Lösung.",
      "Anmeldung über die Homepage oder per SMS an +49 175 5245250.",
    ],
  },
  {
    date: "2026-01-05",
    title: "Terminkalender 2026 ist online",
    excerpt:
      "Alle Termine von der Jahreshauptversammlung über das Agility-Turnier bis zum Jahresabschluss findest Du jetzt im Terminkalender.",
    body: [
      "Der Terminkalender für 2026 steht bereit: Jahreshauptversammlung, Arbeitseinsätze, BH-Prüfung, das Agility-Turnier Baden-Cup, Vereinsfeste und mehr.",
    ],
  },
  {
    date: "2025-12-15",
    title: "Social Walks 2026 mit Kathrin Fischer",
    excerpt:
      "Lust auf eine Gassirunde mit uns? Die Social Walks gehen 2026 in die nächste Runde. Termine im Kalender.",
    body: [
      "Auch 2026 leitet Kathrin Fischer wieder regelmäßige Social Walks, entspannte Gassirunden in der Gruppe. Wer teilnehmen möchte, meldet sich rechtzeitig bei uns.",
    ],
  },
];

/** Calendar events 2026. */
export const events: {
  date: string;
  time?: string;
  title: string;
  location?: string;
  note?: string;
}[] = [
  { date: "2026-01-25", time: "16:00 Uhr", title: "Jahreshauptversammlung", location: "Vereinsgelände" },
  {
    date: "2026-03-01",
    time: "ganztags",
    title: "LG Baden Delegiertenversammlung",
    location: "Öschelbronn",
    note: "Freiwillige Teilnahme möglich, bitte frühzeitig über Kathrin Fischer voranmelden (0175 / 524 52 50 oder k.fischer@hotmail.com).",
  },
  { date: "2026-03-21", time: "10:00 Uhr", title: "Arbeitseinsatz", location: "Vereinsgelände" },
  { date: "2026-04-19", time: "13:15 Uhr", title: "Sommertagszug, Teilnahme des Vereins", location: "Dossenheim" },
  { date: "2026-04-26", time: "ganztags", title: "Agility-Turnier Baden-Cup 2026", location: "Vereinsgelände" },
  { date: "2026-05-01", time: "10:00 Uhr", title: "Wandertag und Grillfest", location: "Vereinsgelände", note: "Details folgen" },
  { date: "2026-05-31", time: "8:30 Uhr", title: "BH-Prüfung mit Richter D. Breunig", location: "Vereinsgelände" },
  {
    date: "2026-07-18",
    time: "ganztags",
    title: "Internationales Fest der Gemeinde Dossenheim, Teilnahme des Vereins",
    location: "Dossenheim, Rathausplatz",
    note: "18. und 19. Juli, Details folgen",
  },
  { date: "2026-10-24", time: "10:00 Uhr", title: "Arbeitseinsatz", location: "Vereinsgelände", note: "Details folgen" },
  {
    date: "2026-12-05",
    time: "ganztags",
    title: "Dossenheimer Weihnachtstrubel, Teilnahme des Vereins",
    location: "Dossenheim, Rathausplatz",
    note: "5. und 6. Dezember",
  },
  { date: "2026-12-12", time: "16:00 Uhr", title: "Jahresabschluss bei Glühwein und Imbiss", location: "Vereinsgelände" },
];

/** Social Walk dates 2026, led by Kathrin Fischer. */
export const socialWalks: string[] = [
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
