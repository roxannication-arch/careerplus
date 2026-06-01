import { ButtonLink } from "./ButtonLink";

export function PricingCard({
  name,
  price,
  features,
  href,
  cta,
  featured
}: {
  name: string;
  price: string;
  features: string[];
  href: string;
  cta: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-secondary p-8 ${
        featured ? "border-accent" : "border-border"
      }`}
    >
      {featured ? (
        <div className="mb-4 w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
          Оптимальный старт
        </div>
      ) : null}
      <h3 className="text-2xl font-semibold tracking-tight text-white">{name}</h3>
      <div className="mt-4 text-4xl font-bold tracking-tight text-white">{price}</div>
      <ul className="mt-6 grid flex-1 gap-3 text-sm text-muted">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-0.5 text-accent">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <ButtonLink href={href} className="mt-8 w-full" target="_blank" rel="noreferrer">
        {cta}
      </ButtonLink>
    </article>
  );
}
