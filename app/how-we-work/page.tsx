import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Как работаем",
  description:
    "Процесс CareerPlus: диагностика, стратегия, упаковка профиля, поиск, интервью и переговоры по офферу.",
  alternates: {
    canonical: "/how-we-work"
  }
};

const steps = [
  {
    title: "Диагностика",
    body: "Разбираем опыт, цель, ограничения, уровень английского и рынки, где есть реалистичный путь."
  },
  {
    title: "Стратегия",
    body: "Определяем позиционирование, target-роли, geography, тип компаний и структуру карьерной воронки."
  },
  {
    title: "Упаковка",
    body: "Перестраиваем резюме, LinkedIn и короткий pitch под международный стандарт и ATS."
  },
  {
    title: "Поиск",
    body: "Собираем каналы, компании, outreach-сообщения и систему регулярных точечных касаний."
  },
  {
    title: "Интервью",
    body: "Готовим ответы на английском, behavioral-истории, культурные коды и обсуждение визовых вопросов."
  },
  {
    title: "Оффер",
    body: "Помогаем оценить предложение, подготовить переговоры и понять следующие административные шаги."
  }
];

export default function HowWeWorkPage() {
  return (
    <>
      <section className="hero-surface py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Процесс"
            title="Как мы работаем"
            description="Работа строится по этапам: от диагностики до оффера. Каждый шаг имеет понятный результат и следующую точку принятия решения."
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-border bg-secondary p-8">
                <p className="text-sm font-semibold text-accent-hover">Этап {index + 1}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">{step.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Что важно" title="Без хаоса и массовых рассылок" />
          <div className="grid gap-5 text-base leading-8 text-muted">
            <p>
              Мы не обещаем одинаковый срок всем кандидатам: скорость зависит от рынка, профессии, английского,
              визовых ограничений и готовности регулярно работать с воронкой.
            </p>
            <p>
              Вместо этого CareerPlus помогает собрать управляемую систему: понятная цель, корректная упаковка,
              качественные касания и подготовка к каждому разговору.
            </p>
            <div>
              <ButtonLink href={site.calendly}>Обсудить мой маршрут</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
