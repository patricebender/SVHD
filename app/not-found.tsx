import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-6xl font-bold text-brand">404</p>
      <h1 className="mt-4 text-2xl">Seite nicht gefunden</h1>
      <p className="mt-2 max-w-md text-foreground/70">
        Die angeforderte Seite existiert nicht oder wurde verschoben.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Zur Startseite
      </Link>
    </section>
  );
}
