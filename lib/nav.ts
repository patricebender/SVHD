import { disciplines } from "./content";

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Aktuelles", href: "/aktuelles/" },
  {
    label: "Trainingsangebote",
    href: "/trainingsangebote/",
    children: [
      { label: "Übersicht & Trainingszeiten", href: "/trainingsangebote/" },
      ...disciplines.map((d) => ({
        label: d.title,
        href: `/trainingsangebote/${d.slug}/`,
      })),
    ],
  },
  { label: "Hundeplatz", href: "/hundeplatz/" },
  { label: "Terminkalender", href: "/terminkalender/" },
  { label: "Kontakt", href: "/kontakt/" },
];
