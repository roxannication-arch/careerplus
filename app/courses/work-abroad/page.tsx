import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { PricingCard } from "@/components/PricingCard";
import { SectionHeader } from "@/components/SectionHeader";
import { pricingTiers, workAbroadLessons } from "@/lib/courses";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Курс: Работа за рубежом для digital-специалистов",
  description:
    "8 уроков о поиске удалённой работы на зарубежную компанию: рынок, резюме, LinkedIn, outreach, интервью и оффер.",
  alternates: {
    canonical: "/courses/work-abroad"
  },
  openGraph: {
    title: "Работа за рубежом для digital-специалистов",
    description: "Найди удалённую работу на зарубежную компанию, не уезжая из своего города."
  }
};

const professions = [
  "Разработка",
  "UX/UI",
  "Маркетинг",
  "Product",
  "Аналитика",
  "QA",
  "DevOps",
  "Technical writing",
  "Customer success"
];

const honestPoints = [
  "Не обещаю конкретную сумму заработка",
  "Не «с нуля без профессии»",
  "Не схемы обхода санкций",
  "Не волшебную таблетку"
];

const bonuses = [
  "Шаблоны международного резюме",
  "Шаблоны outreach-сообщений",
  "Чек-лист оффера",
  "Переговорный скрипт"
];

const faq = [
  {
    question: "Какой уровень английского нужен?",
    answer:
      "Достаточный, чтобы проходить интервью и объяснять свой опыт. Для многих digital-ролей это уверенный B1/B2, но требования зависят от профессии и рынка."
  },
  {
    question: "Подходит ли курс, если я уже работаю?",
    answer:
      "Да. Курс рассчитан на специалистов с текущей профессией, которые хотят перестроить поиск на международный рынок без хаотичных откликов."
  },
  {
    question: "Как происходит оплата из РФ/СНГ?",
    answer:
      "Оплата идёт через Whop. Если стандартный способ не подходит, оставьте заявку — подскажем доступные варианты без обещаний нестандартных обходных схем."
  },
  {
    question: "Что если курс не подойдёт?",
    answer:
      "Напишите нам после покупки: разберём ситуацию и найдём корректный вариант по правилам платформы оплаты."
  },
  {
    question: "Можно ли проходить с телефона?",
    answer:
      "Да, уроки и материалы доступны с мобильного устройства. Для резюме, LinkedIn и outreach удобнее дополнительно использовать ноутбук."
  },
  {
    question: "Сколько времени займёт курс?",
    answer:
      "Видео занимают около 2.5-3.5 часов. Практическая часть обычно требует дополнительных фокус-сессий на резюме, LinkedIn и поиск."
  }
];

export default function WorkAbroadCoursePage() {
  return (
    <>
      <section className="hero-surface border-b border-ink/15 py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-accent">Курс</p>
            <h1 className="text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-accent md:text-7xl">
              Работа за рубежом для digital-специалистов
            </h1>
            <p className="mt-6 text-2xl font-semibold leading-8 text-ink">
              Найди удалённую работу на зарубежную компанию, не уезжая из своего города.
            </p>
            <p className="mt-5 text-base leading-7 text-muted">
              8 уроков · 2.5-3.5 часа · доступ навсегда · от $79
            </p>
            <ButtonLink href={site.whop.course} className="mt-9" target="_blank" rel="noreferrer">
              Купить за $79
            </ButtonLink>
          </div>
          <div className="rounded-[2rem] border border-ink/20 bg-white p-8">
            <p className="text-sm font-semibold text-accent">Что внутри</p>
            <div className="mt-6 grid gap-4">
              {["Рынок", "Профиль", "Поиск", "Интервью", "Оффер"].map((item) => (
                <div key={item} className="rounded-2xl border border-ink/20 bg-soft/80 p-4 text-sm text-ink">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Для кого"
            title="Для специалистов, у которых уже есть digital-профессия"
            description="НЕ для новичков с нуля. Программа помогает перенести существующий опыт на международный рынок и выстроить реалистичный поиск."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {professions.map((profession) => (
              <span key={profession} className="rounded-full border border-ink/20 bg-white px-4 py-2 text-sm text-ink">
                {profession}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/15 bg-soft/70 py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Честно" title="Что я НЕ обещаю" />
          <div className="grid gap-4 sm:grid-cols-2">
            {honestPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-ink/20 bg-white p-6 text-sm leading-6 text-muted">
                {point}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Программа"
            title="8 уроков без воды"
            description="Каждый урок закрывает конкретный участок карьерной воронки: от выбора рынка до переговоров по офферу."
          />
          <div className="mt-10 grid gap-4">
            {workAbroadLessons.map((lesson, index) => (
              <article key={lesson.title} className="rounded-2xl border border-ink/20 bg-white p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-accent">
                      Урок {index + 1} · {lesson.duration}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{lesson.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted">{lesson.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/15 bg-soft/70 py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Bonus pack" title="Материалы, которые экономят часы подготовки" />
          <div className="grid gap-4 sm:grid-cols-2">
            {bonuses.map((bonus) => (
              <div key={bonus} className="rounded-2xl border border-ink/20 bg-white p-6 text-sm text-ink">
                {bonus}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Тарифы"
            title="Выберите формат прохождения"
            description="Все кнопки ведут на Whop placeholder URL — SKU можно заменить в одном файле."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/15 bg-soft/70 py-20">
        <Container>
          <SectionHeader eyebrow="Больше поддержки" title="Хочешь больше сопровождения?" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-ink/20 bg-white p-8">
              <h3 className="text-xl font-semibold text-ink">Целишься в США/UK</h3>
              <p className="mt-4 text-sm leading-6 text-muted">Выбирай CareerPlus под ключ с командным сопровождением.</p>
              <ButtonLink href="/services" className="mt-7">
                CareerPlus под ключ
              </ButtonLink>
            </div>
            <div className="rounded-2xl border border-ink/20 bg-white p-8">
              <h3 className="text-xl font-semibold text-ink">Нужна другая страна</h3>
              <p className="mt-4 text-sm leading-6 text-muted">Оставь заявку, чтобы обсудить индивидуальный маршрут.</p>
              <ButtonLink href="/contact" variant="secondary" className="mt-7">
                Оставить заявку
              </ButtonLink>
            </div>
            <div className="rounded-2xl border border-ink/20 bg-white p-8">
              <h3 className="text-xl font-semibold text-ink">Хочешь с группой</h3>
              <p className="mt-4 text-sm leading-6 text-muted">Присоединись к листу ожидания будущего комьюнити.</p>
              <ButtonLink href="/contact" variant="secondary" className="mt-7">
                В лист ожидания
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Автор" title="Роксана, основатель CareerPlus" />
          <div className="rounded-2xl border border-ink/20 bg-white p-8 text-base leading-8 text-muted">
            <p>
              Роксана — основатель CareerPlus, с опытом в US immigration paralegal и corporate Global Mobility.
              Она сама из российского города и работает на международный рынок, поэтому строит курс вокруг практичных,
              честных шагов без громких обещаний.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/15 bg-soft/70 py-20">
        <Container>
          <SectionHeader eyebrow="FAQ" title="Частые вопросы" />
          <div className="mt-10">
            <FAQ items={faq} />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="rounded-[2rem] border border-ink/20 bg-white p-8 md:p-12">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Перестань искать только там, где живёшь
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              Начни строить системный выход на международный рынок без таймеров, давления и обещаний «быстрых денег».
            </p>
            <ButtonLink href={site.whop.course} className="mt-8" target="_blank" rel="noreferrer">
              Купить за $79
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
