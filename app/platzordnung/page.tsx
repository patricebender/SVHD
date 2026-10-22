import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Platzordnung",
  description:
    "Die Platzordnung des Schäferhundevereins Heidelberg & Dossenheim e.V. für ein harmonisches und sicheres Miteinander auf dem Vereinsgelände.",
  alternates: { canonical: "/platzordnung/" },
};

const rules = [
  "Die Regeln und Vorschriften des Tierschutzgesetzes sind bindend. Unsere Erziehungsmethoden sind Zuneigung, Geduld und Konsequenz in Verbindung mit Motivationsmitteln, wie z. B. Futter oder Spielzeug. Jede unnötige Härte ist untersagt.",
  "Auf unserem Vereinsgelände gilt grundsätzlich Leinenpflicht. Das Ableinen der Hunde ist nur auf den Trainingsplätzen und in Absprache mit den anderen anwesenden Hundehaltern erlaubt. Bitte habt eure Hunde stets unter Kontrolle, um Konflikte mit anderen Hunden oder Menschen zu vermeiden.",
  "Unsere Trainingsplätze sind bevorzugt für die Übungsstunden des Vereins vorgesehen. Wenn die Plätze gerade nicht für Trainings genutzt werden, dürfen sie gerne für privates Training genutzt werden.",
  "Die Teilnahme am Training ist nur nach Vorlage eines gültigen Impfausweises und des Versicherungsnachweises möglich. Der Hundehalter ist verpflichtet, eine Hundehalterhaftpflichtversicherung für seine Hunde abzuschließen und seine Hunde altersentsprechend impfen zu lassen.",
  "Bitte in der Zeit der Läufigkeit von der Platznutzung absehen.",
  "Die Übungsleiter haben das Recht, Hunde, die nicht ordnungsgemäß geimpft, krank oder krankheitsverdächtig sind, vom Übungsbetrieb fernzuhalten und wenn nötig sogar auszuschließen. Dies gilt auch bei grobem Verstoß gegen das Tierschutzgesetz.",
  "Vor dem Betreten des Vereinsgeländes sollte der Hund ausreichend Möglichkeit zum Lösen haben. Das Lösen auf dem Platz ist nicht gestattet. Jede Verunreinigung durch den Hund ist unverzüglich zu beseitigen. Durch Urinieren entstandene Pfützen an Geräten sollten vom Hundeführer mit etwas Wasser weggespült werden.",
  "Bitte verteilt keine Leckerlis an fremde Hunde ohne die Erlaubnis des Hundebesitzers. Jeder Hundeführer arbeitet mit seinem eigenen Hund.",
  "Beim Betreten bzw. Verlassen des Vereinsgeländes sind alle Tore ordnungsgemäß zu verschließen. Bitte räumt alle benötigten Trainingsmaterialien ordentlich auf. Nach den Trainingsstunden bitte alle Wassereimer und Näpfe leeren.",
  "Der Verein übernimmt keine Haftung für Personen-, Sach- oder Vermögensschäden. Jeder Hundehalter ist für das Verhalten seines Hundes verantwortlich und haftet für etwaige Schäden.",
  "Um weiterhin ein freundschaftliches Verhältnis zu unseren Nachbarn und Bauern zu haben, bitten wir euch, die Hinterlassenschaften eures Hundes immer einzusammeln und ordnungsgemäß zu entsorgen. Hierfür steht auf unserem Vereinsgelände ein Mülleimer zur Verfügung.",
];

export default function PlatzordnungPage() {
  return (
    <>
      <PageHero
        eyebrow="Platzordnung"
        title="Regeln für ein gutes Miteinander"
      />

      <section className="container-page py-16 lg:py-20">
        <div className="prose-club max-w-3xl">
          <p>Liebe Hundefreunde,</p>
          <p>
            um unser Vereinsleben für alle Zweibeiner und Vierpfoter so schön wie
            möglich zu gestalten, ist es wichtig, dass wir uns an einige Regeln
            halten. Diese Platzordnung soll uns dabei helfen, ein harmonisches
            Miteinander auf unserem Vereinsgelände zu gewährleisten und sowohl die
            Sicherheit als auch das Wohlbefinden unserer geliebten Vierbeiner zu
            fördern. Wir bitten daher jedes Mitglied, jeden Besucher und Gast, die
            folgenden Regeln aufmerksam zu lesen und zu respektieren.
          </p>
          <p>
            Gemeinsam wollen wir eine positive und freundliche Umgebung für uns und
            unsere Hunde schaffen.
          </p>
        </div>

        <ol className="mt-10 max-w-3xl space-y-5">
          {rules.map((rule, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="pt-0.5 text-sm leading-relaxed text-foreground/80">
                {rule}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
