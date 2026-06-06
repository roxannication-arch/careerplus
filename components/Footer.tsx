import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { navItems, site } from "@/lib/site";

const socials = [
  { label: "Instagram", href: site.instagram },
  { label: "Threads", href: site.threads },
  { label: "Telegram", href: site.telegram }
];

export function Footer() {
  return (
    <footer className="border-t border-ink/20 bg-page py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
              CareerPlus — карьерный центр для русскоязычных иммигрантов. Помогаем профессионалам выходить на международный рынок труда — под ключ или через консультации.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ink">Навигация</h3>
            <div className="mt-4 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-ink">
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="text-sm text-muted transition-colors hover:text-ink">
                Контакты
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ink">Контакты</h3>
            <div className="mt-4 grid gap-3">
              <a href={`mailto:${site.email}`} className="text-sm text-muted transition-colors hover:text-ink">
                {site.email}
              </a>
              {socials.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-muted transition-colors hover:text-ink">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-ink/20 pt-6 text-xs text-muted">
          © {new Date().getFullYear()} CareerPlus. Все права защищены.
        </div>
      </Container>
    </footer>
  );
}
