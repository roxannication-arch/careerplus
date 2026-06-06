export function SectionHeader({
  eyebrow,
  title,
  description,
  className = ""
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-muted">{description}</p> : null}
    </div>
  );
}
