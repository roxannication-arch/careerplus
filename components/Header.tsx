import Link from "next/link";
import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { localeLabels } from "@/lib/i18n";
import { navItems } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-page/95 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-ink/70 transition-colors hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden overflow-hidden rounded-full border border-ink/15 bg-white sm:flex" aria-label="Переключатель языка">
            <span className="bg-accent px-3 py-1.5 text-xs font-semibold text-white">{localeLabels.ru}</span>
            <Link
              href="/en"
              className="px-3 py-1.5 text-xs font-semibold text-ink/60 transition-colors hover:text-accent"
              aria-label="English version placeholder"
            >
              {localeLabels.en}
            </Link>
          </div>
          <ButtonLink href="/#formats" variant="secondary" className="hidden px-5 py-2.5 sm:inline-flex">
            Выбрать формат
          </ButtonLink>
        </div>
      </Container>
      <Container className="flex gap-4 overflow-x-auto border-t border-ink/15 py-3 lg:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 text-sm font-medium text-ink/70 transition-colors hover:text-accent">
            {item.label}
          </Link>
        ))}
        <ButtonLink href="/#formats" variant="secondary" className="shrink-0 px-4 py-2 text-sm">
          Выбрать формат
        </ButtonLink>
      </Container>
    </header>
  );
}
