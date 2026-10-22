import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Der Vorstand",
  description:
    "Der Vorstand des Schäferhundevereins Heidelberg & Dossenheim e.V. – die Ansprechpartner rund um Verein, Training und Sport.",
  alternates: { canonical: "/vorstand/" },
};

const board = [
  { role: "Vorsitzende", name: "Kathrin Fischer" },
  { role: "Stv. Vorsitzender", name: "Roland Horneck" },
  { role: "Kassenwartin", name: "Minttu Vainio" },
  { role: "Übungswartin", name: "Nadja Trumpf" },
  { role: "Stv. Übungswartin", name: "Beate Horneck" },
  { role: "Schriftwartin", name: "Diana Horneck" },
  { role: "Sportbeauftragte", name: "Miriam Duarte" },
  { role: "Website", name: "Patrice Bender" },
];

export default function VorstandPage() {
  return (
    <>
      <PageHero
        eyebrow="Der Vorstand"
        title="Unser Team"
        subtitle="Die gewählten Ansprechpartner rund um Verein, Training und Sport."
      />

      <section className="container-page py-16 lg:py-20">
        <dl className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {board.map((member) => (
            <div
              key={member.role}
              className="rounded-2xl border border-border bg-muted/40 p-5"
            >
              <dt className="eyebrow">{member.role}</dt>
              <dd className="mt-1 text-lg font-semibold">{member.name}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
