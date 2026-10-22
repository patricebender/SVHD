export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border bg-muted">
      <div className="container-page py-14 lg:py-20">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-foreground/70">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
