import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "CareerPlus DFY",
  description:
    "Премиальное сопровождение под ключ для специалистов, которые целятся в США/UK и хотят, чтобы команда вела процесс.",
  alternates: {
    canonical: "/services"
  }
};

const startSteps = [
  {
    title: "Бесплатная стратегическая консультация",
    body: "Коротко обсуждаем цель, рынок, текущую ситуацию и понимаем, есть ли смысл рассматривать формат под ключ."
  },
  {
    title: "Предложение формата",
    body: "Если есть fit, описываем возможный маршрут, объём работы, ориентир по инвестиции и роли команды."
  },
  {
    title: "Старт сопровождения",
    body: "После согласования формата собираем стратегию, материалы и систему поиска как управляемый проект."
  }
];

const included = [
  "Диагностика профиля и выбор реалистичного рынка",
  "Позиционирование, резюме, LinkedIn и pitch под зарубежного работодателя",
  "Поисковая стратегия: target-компании, воронка, outreach и рефералки",
  "Подготовка к интервью на английском и коммуникации с рекрутёрами",
  "Подготовка к переговорам по офферу"
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
      <section className="hero-surface border-b border-ink/15 py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-accent">CareerPlus DFY</p>
            <h1 className="text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-7xl">
              Премиальное сопровождение под ключ
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
              Для специалистов, которые целятся в США/UK и хотят, чтобы команда помогала держать процесс: от
              стратегии и упаковки профиля до интервью и переговоров.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.calendlyFree}>Записаться на бесплатную консультацию</ButtonLink>
              <ButtonLink href="#how-to-start" variant="secondary">
                Как это работает
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-accent bg-ink p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Первый шаг</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Бесплатная стратегическая консультация
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/70">
                Это вход в формат под ключ: обсуждаем цель, контекст и возможное сотрудничество. Без оплаты и без
                обязательств.
              </p>
              <ButtonLink href={site.calendlyFree} className="mt-7 border-white bg-white text-ink hover:border-white hover:bg-white/90">
                Выбрать время
              </ButtonLink>
              <p className="mt-4 text-xs leading-5 text-white/55">
                Консультация — это разговор о возможном сотрудничестве, а не аудит или обучение.
              </p>
            </div>

            <div className="rounded-[2rem] border border-ink/20 bg-white p-8">
              <p className="text-sm text-muted">Инвестиция в сопровождение</p>
              <div className="mt-3 text-5xl font-bold tracking-tight text-ink">$2 500+</div>
              <p className="mt-5 text-sm leading-6 text-muted">
                Финальный формат и объём работы определяются после консультации и диагностики цели.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="how-to-start" className="border-b border-ink/15 bg-soft/70 py-20">
        <Container>
          <SectionHeader
            eyebrow="Как начать"
            title="Сначала — консультация, потом решение по формату"
            description="Мы специально разделяем бесплатную стратегическую консультацию и само сопровождение, чтобы обе стороны понимали fit до старта работы."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {startSteps.map((step, index) => (
              <article key={step.title} className="rounded-[1.75rem] border border-ink/20 bg-white p-8">
                <p className="text-sm font-semibold text-accent">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{step.body}</p>
              </article>
            ))}
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
              <div key={item} className="rounded-2xl border border-ink/20 bg-white p-6">
                <p className="text-sm font-semibold text-accent">0{index + 1}</p>
                <p className="mt-3 text-base leading-7 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/15 bg-soft/70 py-20">
        <Container>
          <SectionHeader eyebrow="Кому подходит" title="Когда формат под ключ оправдан" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {bestFor.map((item) => (
              <div key={item} className="rounded-2xl border border-ink/20 bg-white p-6 text-sm leading-6 text-muted">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="rounded-[2rem] border border-ink/20 bg-white p-8 md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Следующий шаг</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Запишитесь на бесплатную стратегическую консультацию
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              Обсудим цель, текущую ситуацию и возможный формат сотрудничества без давления и универсальных обещаний.
            </p>
            <ButtonLink href={site.calendlyFree} className="mt-8">
              Выбрать время
            </ButtonLink>
            <p className="mt-4 text-xs leading-5 text-muted">
              Консультация — это разговор о возможном сотрудничестве, а не аудит или обучение.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
