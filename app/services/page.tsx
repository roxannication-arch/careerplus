import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { ConsultationButton } from "@/components/ConsultationQuiz";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "CareerPlus DFY",
  description:
    "Премиальное сопровождение под ключ для специалистов, которые целятся в США/UK и хотят, чтобы команда вела процесс.",
  alternates: {
    canonical: "/services"
  }
};

const included = [
  "Диагностика профиля и выбор реалистичного рынка",
  "Позиционирование, резюме, LinkedIn и pitch под зарубежного работодателя",
  "Поисковая стратегия: target-компании, воронка, outreach и рефералки",
  "Подготовка к интервью на английском и коммуникации с рекрутёрами",
  "Сопровождение до переговоров по офферу"
];

const bestFor = [
  "Уже есть профессиональный опыт и понятная специализация",
  "Приоритет — США/UK, global teams или удалённые роли",
  "Нужна команда, которая держит процесс, а не ещё один список советов",
  "Готовность вкладываться в системный карьерный переход"
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-surface py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent-hover">
              CareerPlus DFY
            </p>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Премиальное сопровождение под ключ
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
              Для специалистов, которые целятся в США/UK и хотят, чтобы команда вела процесс: от стратегии и упаковки
              профиля до интервью и переговоров.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ConsultationButton>Записаться на консультацию</ConsultationButton>
              <ButtonLink href="/courses" variant="secondary">
                Сначала посмотреть курсы
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-[2rem] border border-accent bg-secondary p-8">
            <p className="text-sm text-muted">Инвестиция</p>
            <div className="mt-3 text-5xl font-bold tracking-tight text-white">$2 500+</div>
            <p className="mt-5 text-sm leading-6 text-muted">
              Финальный формат и объём работы определяются после диагностики профиля и цели.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Что входит"
            title="Команда ведёт карьерный переход как проект"
            description="Мы работаем с воронкой, позиционированием и коммуникацией, а не только с резюме."
          />
          <div className="grid gap-4">
            {included.map((item, index) => (
              <div key={item} className="rounded-2xl border border-border bg-secondary p-6">
                <p className="text-sm font-semibold text-accent-hover">0{index + 1}</p>
                <p className="mt-3 text-base leading-7 text-white">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <Container>
          <SectionHeader eyebrow="Кому подходит" title="Когда формат под ключ оправдан" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {bestFor.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-secondary p-6 text-sm leading-6 text-muted">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="rounded-[2rem] border border-border bg-secondary p-8 md:p-12">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Обсудим вашу цель и реалистичный маршрут
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              На консультации определим рынок, формат поддержки и следующий шаг без давления и универсальных обещаний.
            </p>
            <ConsultationButton className="mt-8">
              Записаться на консультацию
            </ConsultationButton>
          </div>
        </Container>
      </section>
    </>
  );
}
