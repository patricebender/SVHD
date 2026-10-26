import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { getPerson, type PersonId } from "@/lib/people";

export const metadata: Metadata = {
  title: "Der Vorstand",
  description:
    "Der Vorstand des Schäferhundevereins Heidelberg & Dossenheim e.V. – die Ansprechpartner rund um Verein, Training und Sport.",
  alternates: { canonical: "/vorstand/" },
};

const board: { role: string; personId: PersonId }[] = [
  { role: "Vorsitzende", personId: "kathrin-fischer" },
  { role: "Stv. Vorsitzender", personId: "roland-horneck" },
  { role: "Kassenwartin", personId: "minttu-vainio" },
  { role: "Übungswartin", personId: "nadja-trumpf" },
  { role: "Stv. Übungswartin", personId: "beate-horneck" },
  { role: "Schriftwartin", personId: "alexandra-knoll" },
  { role: "Sportbeauftragte", personId: "ivonne-schaefer" },
  { role: "Beisitzerin", personId: "izaskun-gutierrez" },
  { role: "Website", personId: "patrice-bender" },
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
              <dd className="mt-1 text-lg font-semibold">{getPerson(member.personId).name}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
