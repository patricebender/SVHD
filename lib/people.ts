import { contact } from "@/lib/site";

/**
 * Single source of truth for every person named on the site: trainers,
 * Ansprechpartner and Vorstand. A person's name and contact details live here
 * exactly once; everything else (disciplines, weekly schedule, board) refers to
 * them by id. Contact fields are optional — a person without a personal address
 * falls back to the club contact where one is shown.
 */
export type Person = {
  name: string;
  phone?: string;
  email?: string;
};

export const people = {
  "kathrin-fischer": {
    name: contact.anmeldung.name,
    phone: contact.anmeldung.phone,
    email: contact.anmeldung.email,
  },
  "katrin-rempp": { name: "Katrin Rempp" },
  "ivonne-schaefer": { name: "Ivonne Schäfer" },
  "gaby-moell": { name: "Gaby Möll" },
  "beate-horneck": { name: "Beate Horneck" },
  "roland-horneck": { name: "Roland Horneck" },
  "sabine-palm": { name: "Sabine Palm" },
  "minttu-vainio": { name: "Minttu Vainio" },
  "nadja-trumpf": { name: "Nadja Trumpf" },
  "alexandra-knoll": { name: "Alexandra Knoll" },
  "izaskun-gutierrez": { name: "Izaskun Gutierrez" },
  "patrice-bender": { name: "Patrice Bender" },
  elke: { name: "Elke" },
  "susanne-weber": { name: "Susanne Weber", phone: "0171 / 403 15 77", email: "weber-hd@freenet.de" },
} as const satisfies Record<string, Person>;

export type PersonId = keyof typeof people;

export function getPerson(id: PersonId): Person {
  return people[id];
}

/** Resolve ids to people, in order. Unknown ids are dropped (type-safe anyway). */
export function getPeople(ids: readonly PersonId[]): Person[] {
  return ids.map((id) => people[id]);
}

/** Display string for one or more people, e.g. "Kathrin Fischer & Minttu Vainio". */
export function peopleNames(ids: readonly PersonId[]): string {
  return getPeople(ids)
    .map((p) => p.name)
    .join(" & ");
}
