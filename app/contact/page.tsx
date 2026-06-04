import type { Metadata } from "next";
import { QualificationButton } from "@/components/QualificationQuiz";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Связаться с CareerPlus: email, Telegram и форма заявки на консультацию.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-surface border-b border-ink/15 py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Контакты"
            title="Расскажите, куда хотите выйти"
            description="Опишите текущую профессию, целевой рынок и формат поддержки. Мы ответим и предложим следующий шаг."
          />
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-2xl border border-ink/20 bg-white p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Связаться напрямую</h2>
            <div className="mt-6 grid gap-4 text-sm text-muted">
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-ink">
                {site.email}
              </a>
              <a href={site.telegram} className="transition-colors hover:text-ink">
                Telegram
              </a>
              <a href={site.instagram} className="transition-colors hover:text-ink">
                Instagram
              </a>
              <a href={site.threads} className="transition-colors hover:text-ink">
                Threads
              </a>
            </div>
            <QualificationButton className="mt-8">
              Пройти квиз и записаться
            </QualificationButton>
          </div>

          <form
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-ink/20 bg-white p-8"
          >
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-medium text-ink">
                Имя
                <input
                  name="name"
                  className="rounded-2xl border border-ink/20 bg-page px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent"
                  placeholder="Как к вам обращаться"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink">
                Email или Telegram
                <input
                  name="contact"
                  className="rounded-2xl border border-ink/20 bg-page px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent"
                  placeholder="Куда ответить"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink">
                Что хотите обсудить
                <textarea
                  name="message"
                  rows={6}
                  className="rounded-2xl border border-ink/20 bg-page px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent"
                  placeholder="Профессия, опыт, целевой рынок, формат поддержки"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-fit items-center justify-center rounded-full border border-accent bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-hover hover:bg-accent-hover"
              >
                Отправить заявку
              </button>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
}
