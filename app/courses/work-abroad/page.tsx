import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

const courseAccessDate = "20 июня";

export const metadata: Metadata = {
  title: "Курс: работа за рубежом для digital-специалистов",
  description:
    "Курс CareerPlus: 8 уроков и метод выхода на международный рынок для digital-специалистов. Доступ к курсу — 20 июня.",
  alternates: {
    canonical: "/courses/work-abroad"
  },
  openGraph: {
    title: "Работа за рубежом для digital-специалистов",
    description:
      "Найди удалённую работу за рубежом — не выходя из своего города. Курс CareerPlus от $79, доступ — 20 июня.",
    images: ["/og.svg"]
  }
};

const pricing = [
  {
    name: "Базовый",
    price: "$79",
    cta: "Купить $79",
    href: site.whop.course,
    label: "Доступ к курсу — 20 июня",
    popular: false,
    features: [
      ["Все 8 уроков", true],
      ["Бонус-пак", true],
      ["Async-разбор резюме от Роксаны", false],
      ["3 созвона 1:1", false],
      ["Чат с Роксаной на месяц", false]
    ]
  },
  {
    name: "С разбором",
    price: "$199",
    cta: "Купить $199",
    href: site.whop.review,
    label: "Популярный",
    popular: true,
    features: [
      ["Все 8 уроков", true],
      ["Бонус-пак", true],
      ["Async-разбор резюме от Роксаны", true],
      ["3 созвона 1:1", false],
      ["Чат с Роксаной на месяц", false]
    ]
  },
  {
    name: "С сопровождением",
    price: "$499",
    cta: "Купить $499",
    href: site.whop.premium,
    label: "Максимум поддержки",
    popular: false,
    features: [
      ["Все 8 уроков", true],
      ["Бонус-пак", true],
      ["Async-разбор резюме от Роксаны", true],
      ["3 созвона 1:1", true],
      ["Чат с Роксаной на месяц", true]
    ]
  }
] as const;

const professions = [
  "Разработчик",
  "UX/UI дизайнер",
  "Маркетолог",
  "Product / Project Manager",
  "Аналитик / Data",
  "QA",
  "DevOps",
  "Technical writer",
  "Customer success"
];

const lessons = [
  {
    title: "Сдвиг рамки + честная воронка",
    duration: "10–15 мин",
    body:
      "Почему ты не привязан к локальному рынку. Реальная воронка: 300–500 откликов ради оффера. Рыночные ограничения и как учитывать их без серых схем."
  },
  {
    title: "Выбрать рынок",
    duration: "15–20 мин",
    body: "Куда реально есть путь для твоей профессии. Где спрос, меньше ограничений и что выбрать: удалёнку или релокацию."
  },
  {
    title: "Что ты продаёшь на мировом рынке",
    duration: "15–20 мин",
    body: "Твой навык глазами зарубежного работодателя. Чем конкурируешь с местными кандидатами и какой английский реально нужен."
  },
  {
    title: "Резюме под международный стандарт + ATS",
    duration: "20–30 мин",
    body: "Не русское CV. Workday, Greenhouse, Lever, ключевые слова и формат. На выходе — готовое резюме."
  },
  {
    title: "LinkedIn под зарубежных рекрутёров",
    duration: "20–25 мин",
    body: "Headline, About, поиск и сигналы для рекрутеров. На выходе — перестроенный профиль."
  },
  {
    title: "Поиск без рассылок + рефералки",
    duration: "25–35 мин",
    body: "Сердце курса: где искать, как делать точечный outreach и как заходить через людей, а не массовую рассылку."
  },
  {
    title: "Интервью на английском",
    duration: "20–25 мин",
    body: "Формат, культурные коды, behavioral-вопросы и как спокойно обсуждать спонсорство визы."
  },
  {
    title: "Оффер и деньги",
    duration: "15–20 мин",
    body: "Переговоры, обзор вариантов оплаты: LLC/W-8BEN как один из вариантов, плюс когда идти к профильному специалисту."
  }
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
      "Минимум — рабочий B1/B2, чтобы объяснять опыт и проходить интервью. Курс показывает, где английский критичен, а где достаточно понятной схемы ответов."
  },
  {
    question: "Подходит ли курс, если я уже работаю?",
    answer:
      "Да. Курс рассчитан на специалистов, которые уже работают в digital и хотят параллельно подготовить выход на международный рынок."
  },
  {
    question: "Как происходит оплата из разных стран?",
    answer:
      "Оплата идёт через Whop. Доступные способы зависят от платформы и вашей страны. Мы не даём схем обхода ограничений, только обзор легальных вариантов."
  },
  {
    question: "Можно ли задать вопрос перед покупкой?",
    answer: "Если хотите уточнить, подходит ли вам курс, напишите нам до оплаты — подскажем по вашей ситуации и формату."
  },
  {
    question: "Можно ли проходить с телефона?",
    answer: "Да, уроки можно смотреть с телефона. Для резюме, LinkedIn и outreach-шаблонов удобнее использовать ноутбук."
  },
  {
    question: "Сколько времени займёт прохождение?",
    answer: "Видео займут около 3 часов. Практика — ещё несколько фокус-сессий на резюме, LinkedIn, список компаний и outreach."
  },
  {
    question: "Когда будет доступ к материалам?",
    answer: `Доступ к материалам откроется ${courseAccessDate}. После оплаты вы получите информацию о доступе через Whop.`
  }
];

function BuyButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full border border-accent bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-hover hover:bg-accent-hover ${className}`}
    >
      {children}
    </a>
  );
}

function PricingCard({ tier }: { tier: (typeof pricing)[number] }) {
  return (
    <article className={`relative flex h-full flex-col rounded-[1.75rem] border bg-white p-8 ${tier.popular ? "border-accent" : "border-ink/20"}`}>
      {tier.popular ? (
        <div className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">популярный</div>
      ) : null}
      <p className="text-sm font-semibold text-accent">{tier.label}</p>
      <h3 className="mt-4 text-2xl font-extrabold uppercase leading-tight tracking-tight text-ink">{tier.name}</h3>
      <div className="mt-4 text-5xl font-extrabold tracking-tight text-ink">{tier.price}</div>
      <ul className="mt-7 grid flex-1 gap-3 text-sm text-muted">
        {tier.features.map(([feature, enabled]) => (
          <li key={feature} className="flex items-start gap-3">
            <span className={enabled ? "text-accent" : "text-ink/25"}>{enabled ? "✓" : "—"}</span>
            <span className={enabled ? "" : "text-muted/60"}>{feature}</span>
          </li>
        ))}
      </ul>
      <BuyButton href={tier.href} className="mt-8 w-full">
        {tier.cta}
      </BuyButton>
    </article>
  );
}

export default function WorkAbroadCoursePage() {
  return (
    <>
      <Script
        defer
        data-domain="courses.careerplus.us"
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />

      <div className="fixed inset-x-4 bottom-4 z-40 sm:hidden">
        <BuyButton href={site.whop.course} className="w-full shadow-[0_8px_32px_rgba(23,23,23,0.16)]">
          Купить за $79
        </BuyButton>
      </div>

      <section className="hero-surface border-b border-ink/15 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-accent">Курс CareerPlus · от $79</p>
            <h1 className="text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-7xl">
              Найди удалённую работу за рубежом — не выходя из своего города
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-ink/70 md:text-lg">
              8 уроков, ~3 часа видео. Метод выхода на международный рынок для digital-специалистов, у которых уже есть профессия.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <BuyButton href={site.whop.course}>Получить доступ за $79</BuyButton>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-white px-8 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent">
                Смотреть тарифы
              </a>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">
              Оплата через Whop · доступ к курсу — {courseAccessDate}
            </p>
            <div className="mt-8 rounded-[1.75rem] border border-ink/20 bg-white p-6">
              <p className="text-sm font-bold text-ink">Доступ к курсу</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Доступ к материалам откроется {courseAccessDate}. После оплаты вы получите информацию о доступе через Whop.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-ink/20 bg-white p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-sm font-bold text-ink">Тарифы видны сразу</p>
              <span className="rounded-full border border-ink/15 px-3 py-1 text-xs text-muted">Whop checkout</span>
            </div>
            <div className="grid gap-3">
              {pricing.map((tier) => (
                <a
                  key={tier.name}
                  href={tier.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-2xl border p-4 transition-colors hover:border-accent ${tier.popular ? "border-accent bg-soft" : "border-ink/20 bg-page"}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-ink">{tier.name}</p>
                      <p className="mt-1 text-xs text-muted">{tier.label}</p>
                    </div>
                    <div className="text-2xl font-extrabold text-ink">{tier.price}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/15 bg-soft/70 py-12">
        <Container>
          <blockquote className="max-w-5xl text-2xl font-semibold leading-10 text-ink md:text-4xl md:leading-[1.25]">
            «Глобализация уже случилась. Специалист из любого города может работать на компанию из Берлина, Сиднея, Нью-Йорка. Вопрос только в том, знаешь ли ты, как туда зайти.»
          </blockquote>
          <p className="mt-5 text-sm text-muted">— Роксана, основатель CareerPlus</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader title="Это курс для тебя, если ты —" />
          <div className="mt-10 flex flex-wrap gap-3">
            {professions.map((profession) => (
              <span key={profession} className="rounded-full border border-ink/20 bg-white px-5 py-3 text-sm font-semibold text-ink">
                {profession}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted">
            У тебя уже есть digital-профессия, и ты хочешь выйти на международный рынок. Курс НЕ для новичков с нуля.
          </p>
        </Container>
      </section>

      <section className="border-y border-ink/15 bg-soft/70 py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-ink/20 bg-white p-8">
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-ink">Было</h2>
            <ul className="mt-6 grid gap-4 text-muted">
              <li>Ищешь работу на местном рынке</li>
              <li>Конкурируешь за местные зарплаты</li>
              <li>Потолок — то, что платят в твоём городе</li>
            </ul>
          </div>
          <div className="rounded-[1.75rem] border border-accent bg-white p-8">
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-ink">Стало</h2>
            <ul className="mt-6 grid gap-4 text-muted">
              <li>Выходишь на мировой рынок удалённо</li>
              <li>Конкурируешь за международные роли</li>
              <li>Потолок — то, что платит весь мир</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader
            title="8 уроков · ~3 часа видео · доступ навсегда"
            description="Программа построена как практический путь: рынок, упаковка, поиск, интервью и оффер."
          />
          <div className="mt-10 grid gap-3">
            {lessons.map((lesson, index) => (
              <details key={lesson.title} className="group rounded-[1.5rem] border border-ink/20 bg-white p-5 open:border-accent md:p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold text-accent">Урок {index + 1} · {lesson.duration}</p>
                    <h3 className="mt-2 text-xl font-semibold text-ink">{lesson.title}</h3>
                  </div>
                  <span className="text-2xl text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-5 text-sm leading-7 text-muted">{lesson.body}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 rounded-[1.75rem] border border-ink/20 bg-white p-8">
            <h3 className="text-2xl font-extrabold uppercase tracking-tight text-ink">Бонус-пак</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {bonuses.map((bonus) => (
                <div key={bonus} className="rounded-2xl border border-ink/20 bg-page p-4 text-sm text-muted">
                  {bonus}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="px-5 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-ink/20 bg-white p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Честно — чего тут нет</p>
          <h2 className="mt-4 text-2xl font-semibold text-ink">Чтобы ты не ждал того, чего я не обещаю:</h2>
          <ul className="mt-6 grid gap-3 text-sm leading-6 text-muted md:grid-cols-2">
            <li>Не обещаю конкретную сумму заработка</li>
            <li>Не «с нуля без профессии»</li>
            <li>Не схемы обхода санкций — оплата и легальность даны как обзор, не инструкции</li>
            <li>Не волшебную таблетку — это работа, метод и время</li>
          </ul>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Тарифы"
            title="Выбери формат первой волны"
            description="Каждая кнопка ведёт на отдельный Whop SKU. Замените placeholder URL на финальные ссылки перед запуском."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pricing.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/15 bg-soft/70 py-20">
        <Container>
          <SectionHeader title="Прошёл курс и хочешь больше поддержки?" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="rounded-[1.75rem] border border-ink/20 bg-white p-8">
              <h3 className="text-xl font-semibold text-ink">Целишься в США/UK</h3>
              <p className="mt-4 text-sm leading-6 text-muted">CareerPlus под ключ. Команда помогает выстроить процесс до переговоров. От $3 500.</p>
              <ButtonLink href="https://careerplus.us" className="mt-6">CareerPlus.us</ButtonLink>
            </div>
            <div className="rounded-[1.75rem] border border-ink/20 bg-white p-8">
              <h3 className="text-xl font-semibold text-ink">Не в США, нужно сопровождение</h3>
              <p className="mt-4 text-sm leading-6 text-muted">Индивидуальное сопровождение для UK, EU и remote-рынков. От $1 000.</p>
              <ButtonLink href="/contact" className="mt-6">Узнать больше</ButtonLink>
            </div>
            <div className="rounded-[1.75rem] border border-ink/20 bg-white p-8">
              <h3 className="text-xl font-semibold text-ink">С группой и другими людьми</h3>
              <p className="mt-4 text-sm leading-6 text-muted">Лист ожидания комьюнити для тех, кому нужен темп, поддержка и окружение.</p>
              <ButtonLink href={`mailto:${site.email}?subject=Лист ожидания комьюнити`} className="mt-6">Записаться в лист</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[1.75rem] border border-ink/20 bg-white p-6">
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-soft text-6xl font-extrabold text-accent">R</div>
            <p className="mt-4 text-center text-xs text-muted">Фото Роксаны можно заменить перед запуском</p>
          </div>
          <div className="rounded-[1.75rem] border border-ink/20 bg-white p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Об авторе</p>
            <h2 className="mt-4 text-3xl font-semibold text-ink">Роксана, основатель CareerPlus.</h2>
            <p className="mt-5 text-base leading-8 text-muted">
              5+ лет в US immigration paralegal и corporate Global Mobility. Помогаю русскоязычным выходить на международный рынок труда осознанно — без слепых рассылок и без сказок про лёгкие деньги.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/15 bg-soft/70 py-20">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="FAQ" title="Частые вопросы" />
          <div className="mt-10 grid gap-3">
            {faq.map((item) => (
              <details key={item.question} className="group rounded-[1.5rem] border border-ink/20 bg-white p-6 open:border-accent">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-ink">
                  {item.question}
                  <span className="text-2xl text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-accent bg-accent p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Перестань искать только там, где живёшь</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85">
            8 уроков · доступ навсегда · работает для большинства digital-профессий
          </p>
          <a
            href={site.whop.course}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-white bg-white px-8 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white/90"
          >
            Получить доступ за $79
          </a>
          <p className="mt-5 text-sm text-white/80">Оплата через Whop · доступ к курсу — {courseAccessDate}</p>
        </div>
      </section>
    </>
  );
}
