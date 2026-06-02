import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "English version coming soon",
  description: "CareerPlus English pages are prepared in the routing architecture and will be added later.",
  alternates: {
    canonical: "/en"
  }
};

export default function EnglishPlaceholderPage() {
  return (
    <section className="hero-surface border-b border-ink/15 py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-accent">EN</p>
          <h1 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-7xl">
            English version is coming soon
          </h1>
          <p className="mt-6 text-base leading-8 text-muted">
            The site is currently available in Russian. The locale structure is ready for future English pages.
          </p>
          <ButtonLink href="/" className="mt-8">
            Back to RU
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
