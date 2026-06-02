import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

const recordingStartDate = "17 июня 2026";
const accessWindow = "3–4 недели";

export const metadata: Metadata = {
  title: "Курс: работа за рубежом для digital-специалистов",
  description:
    "Предзаказ курса CareerPlus: 8 уроков и метод выхода на международный рынок для digital-специалистов. Доступ через 3–4 недели.",
  alternates: {
    canonical: "/courses/work-abroad"
  },
  openGraph: {
    title: "Работа за рубежом для digital-специалистов",
    description:
      "Найди удалённую работу за рубежом — не выходя из своего города. Предзаказ курса CareerPlus от $79.",
    images: ["/og.svg"]
  }
};

const pricing = [
  {
    name: "Базовый",
    price: "$79",
    cta: "Купить $79",
    href: site.whop.course,
    note: "Предзаказ: $97 после старта",
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
    note: "Популярный",
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
    note: "Максимум поддержки",
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
      "Почему ты не привязан к локальному рынку. Реальная воронка: 300–500 откликов ради оффера. Барьеры для РФ/СНГ и как учитывать их без серых схем."
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
    body: "Не русское CV. Workday, Greenhouse, Lever, ключевые слова и структура. На выходе — готовое резюме."
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
      "Минимум — рабочий B1/B2, чтобы объяснять опыт и проходить интервью. Курс показывает, где английский критичен, а где достаточно понятной структуры ответов."
  },
  {
    question: "Подходит ли курс, если я уже работаю?",
    answer:
      "Да. Курс рассчитан на специалистов, которые уже работают в digital и хотят параллельно подготовить выход на международный рынок."
  },
  {
    question: "Как происходит оплата из РФ/СНГ?",
    answer:
      "Оплата идёт через Whop. Доступные способы зависят от платформы и вашей страны. Мы не даём схем обхода ограничений, только обзор легальных вариантов."
  },
  {
    question: "Что если курс не подойдёт?",
    answer: "Есть гарантия возврата 14 дней после открытия доступа к материалам. Напишите нам, и мы обработаем запрос по правилам платформы."
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
    answer: `Это предзаказ: старт записи — ${recordingStartDate}. Доступ откроется через ${accessWindow} после оплаты. Вы покупаете место в первой волне по предпродажной цене.`
  }
];

function BuyButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full border border-[#6C63FF] bg-[#6C63FF] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#8B82FF] hover:bg-[#8B82FF] ${className}`}
    >
      {children}
    </a>
  );
}

function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8B82FF]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-[#A0A4B8]">{description}</p> : null}
    </div>
  );
}

function PricingCard({ tier }: { tier: (typeof pricing)[number] }) {
  return (
    <article className={`relative flex h-full flex-col rounded-2xl border bg-[#0D1226] p-6 md:p-8 ${tier.popular ? "border-[#6C63FF]" : "border-[#1F2438]"}`}>
      {tier.popular ? (
        <div className="absolute right-5 top-5 rounded-full bg-[#6C63FF] px-3 py-1 text-xs font-semibold text-white">популярный</div>
      ) : null}
      <p className="text-sm font-medium text-[#8B82FF]">{tier.note}</p>
      <h3 className="mt-4 text-2xl font-semibold text-white">{tier.name}</h3>
      <div className="mt-4 text-5xl font-bold tracking-tight text-white">{tier.price}</div>
      <ul className="mt-7 grid flex-1 gap-3 text-sm text-[#A0A4B8]">
        {tier.features.map(([feature, enabled]) => (
          <li key={feature} className="flex items-start gap-3">
            <span className={enabled ? "text-[#8B82FF]" : "text-[#4A5068]"}>{enabled ? "✓" : "—"}</span>
            <span className={enabled ? "" : "text-[#6F748A]"}>{feature}</span>
          </li>
        ))}
      </ul>
      <BuyButton href={tier.href} className="mt-8 w-full">
        {tier.cta}
      </BuyButton>
    </article>
  );
}

export default function WorkAbroadLandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      <Script
        defer
        data-domain="courses.careerplus.us"
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1F2438] bg-[#0A0E27]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="CareerPlus course landing">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6C63FF] text-sm font-bold text-white">C+</span>
            <span className="text-base font-bold tracking-tight text-white">CareerPlus</span>
          </a>
          <div className="flex items-center gap-3">
            <a href="/en" className="hidden rounded-full border border-[#1F2438] px-3 py-1.5 text-xs font-semibold text-[#A0A4B8] transition-colors hover:text-white sm:inline-flex">
              EN
            </a>
            <BuyButton href={site.whop.course} className="hidden px-5 py-2.5 sm:inline-flex">
              Купить за $79
            </BuyButton>
          </div>
        </div>
      </header>

      <div className="fixed inset-x-4 bottom-4 z-40 sm:hidden">
        <BuyButton href={site.whop.course} className="w-full shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
          Купить за $79
        </BuyButton>
      </div>

      <main id="top" className="overflow-hidden">
        <section className="relative pt-28 md:pt-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_10%,rgba(108,99,255,0.22),transparent_34rem)]" />
          <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 sm:px-6 md:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B82FF]">Курс CareerPlus · от $79</p>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Найди удалённую работу за рубежом — не выходя из своего города
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#A0A4B8]">
                8 уроков, ~3 часа видео. Метод выхода на международный рынок для digital-специалистов, у которых уже есть профессия.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <BuyButton href={site.whop.course}>Получить доступ за $79</BuyButton>
                <a href="#pricing" className="inline-flex items-center justify-center rounded-full border border-[#1F2438] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#6C63FF]">
                  Смотреть тарифы
                </a>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#A0A4B8]">
                Оплата через Whop · доступ через {accessWindow} · гарантия возврата 14 дней
              </p>
              <div className="mt-8 rounded-2xl border border-[#1F2438] bg-[#0D1226] p-5">
                <p className="text-sm font-semibold text-white">Предзаказ честно:</p>
                <p className="mt-2 text-sm leading-6 text-[#A0A4B8]">
                  Курс ещё не записан. Старт записи — {recordingStartDate}. Первая цена $79 действует на предпродаже, после старта базовый тариф планируется от $97.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#1F2438] bg-[#0D1226]/90 p-5 md:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-white">Тарифы видны сразу</p>
                <span className="rounded-full border border-[#1F2438] px-3 py-1 text-xs text-[#A0A4B8]">Whop checkout</span>
              </div>
              <div className="grid gap-3">
                {pricing.map((tier) => (
                  <a
                    key={tier.name}
                    href={tier.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-2xl border p-4 transition-colors hover:border-[#6C63FF] ${tier.popular ? "border-[#6C63FF] bg-[#6C63FF]/10" : "border-[#1F2438] bg-[#0A0E27]"}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-white">{tier.name}</p>
                        <p className="mt-1 text-xs text-[#A0A4B8]">{tier.note}</p>
                      </div>
                      <div className="text-2xl font-bold text-white">{tier.price}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#1F2438] bg-[#0D1226] py-10">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <blockquote className="text-xl font-medium leading-9 text-white md:text-3xl md:leading-[1.35]">
              «Глобализация уже случилась. Специалист из любого города может работать на компанию из Берлина, Сиднея, Нью-Йорка. Вопрос только в том, знаешь ли ты, как туда зайти.»
            </blockquote>
            <p className="mt-5 text-sm text-[#A0A4B8]">— Роксана, основатель CareerPlus</p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <SectionHeader title="Это курс для тебя, если ты —" />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {professions.map((profession) => (
                <span key={profession} className="rounded-full border border-[#1F2438] bg-[#0D1226] px-5 py-3 text-sm font-medium text-white">
                  {profession}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-7 text-[#A0A4B8]">
              У тебя уже есть digital-профессия, и ты хочешь выйти на международный рынок. Курс НЕ для новичков с нуля.
            </p>
          </div>
        </section>

        <section className="border-y border-[#1F2438] bg-[#0D1226]/50 py-20">
          <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
            <div className="rounded-2xl border border-[#1F2438] bg-[#0D1226] p-8">
              <h2 className="text-2xl font-semibold text-white">Было</h2>
              <ul className="mt-6 grid gap-4 text-[#A0A4B8]">
                <li>Ищешь работу на местном рынке</li>
                <li>Конкурируешь за местные зарплаты</li>
                <li>Потолок — то, что платят в твоём городе</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#6C63FF] bg-[#6C63FF]/10 p-8">
              <h2 className="text-2xl font-semibold text-white">Стало</h2>
              <ul className="mt-6 grid gap-4 text-[#D8D6FF]">
                <li>Выходишь на мировой рынок удалённо</li>
                <li>Конкурируешь за международные роли</li>
                <li>Потолок — то, что платит весь мир</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <SectionHeader title="8 уроков · ~3 часа видео · доступ навсегда" description="Программа построена как практический путь: рынок, упаковка, поиск, интервью и оффер." />
            <div className="mt-10 grid gap-3">
              {lessons.map((lesson, index) => (
                <details key={lesson.title} className="group rounded-2xl border border-[#1F2438] bg-[#0D1226] p-5 open:border-[#6C63FF] md:p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <div>
                      <p className="text-sm font-semibold text-[#8B82FF]">Урок {index + 1} · {lesson.duration}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{lesson.title}</h3>
                    </div>
                    <span className="text-2xl text-[#6C63FF] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-5 text-sm leading-7 text-[#A0A4B8]">{lesson.body}</p>
                </details>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-[#1F2438] bg-[#0D1226] p-8">
              <h3 className="text-2xl font-semibold text-white">Бонус-пак</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {bonuses.map((bonus) => (
                  <div key={bonus} className="rounded-2xl border border-[#1F2438] bg-[#0A0E27] p-4 text-sm text-[#A0A4B8]">
                    {bonus}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl border border-[#1F2438] bg-[#0D1226] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B82FF]">Честно — чего тут нет</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Чтобы ты не ждал того, чего я не обещаю:</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-[#A0A4B8] md:grid-cols-2">
              <li>Не обещаю конкретную сумму заработка</li>
              <li>Не «с нуля без профессии»</li>
              <li>Не схемы обхода санкций — оплата и легальность даны как обзор, не инструкции</li>
              <li>Не волшебную таблетку — это работа, метод и время</li>
            </ul>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="Тарифы" title="Выбери формат первой волны" description="Каждая кнопка ведёт на отдельный Whop SKU. Замените placeholder URL на финальные ссылки перед запуском." />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {pricing.map((tier) => (
                <PricingCard key={tier.name} tier={tier} />
              ))}
            </div>
            <p className="mt-6 text-center text-sm leading-6 text-[#A0A4B8]">
              Описание для Whop checkout: «Вы покупаете предзаказ. Старт записи — {recordingStartDate}, доступ откроется через {accessWindow}. Гарантия возврата 14 дней».
            </p>
          </div>
        </section>

        <section className="border-y border-[#1F2438] bg-[#0D1226]/50 py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <SectionHeader title="Прошёл курс и хочешь больше поддержки?" />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#1F2438] bg-[#0D1226] p-7">
                <h3 className="text-xl font-semibold text-white">Целишься в США/UK</h3>
                <p className="mt-4 text-sm leading-6 text-[#A0A4B8]">CareerPlus под ключ. Команда ведёт тебя до оффера. От $3 500.</p>
                <a href="https://careerplus.us" className="mt-6 inline-flex text-sm font-semibold text-[#8B82FF]">CareerPlus.us →</a>
              </div>
              <div className="rounded-2xl border border-[#1F2438] bg-[#0D1226] p-7">
                <h3 className="text-xl font-semibold text-white">Не в США, нужно сопровождение</h3>
                <p className="mt-4 text-sm leading-6 text-[#A0A4B8]">Индивидуальное сопровождение для UK, EU и remote-рынков. От $1 000.</p>
                <a href="/contact" className="mt-6 inline-flex text-sm font-semibold text-[#8B82FF]">Узнать больше →</a>
              </div>
              <div className="rounded-2xl border border-[#1F2438] bg-[#0D1226] p-7">
                <h3 className="text-xl font-semibold text-white">С группой и другими людьми</h3>
                <p className="mt-4 text-sm leading-6 text-[#A0A4B8]">Лист ожидания комьюнити для тех, кому нужен темп, поддержка и окружение.</p>
                <a href={`mailto:${site.email}?subject=Лист ожидания комьюнити`} className="mt-6 inline-flex text-sm font-semibold text-[#8B82FF]">Записаться в лист →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div className="rounded-2xl border border-[#1F2438] bg-[#0D1226] p-6">
              <div className="flex aspect-square items-center justify-center rounded-2xl bg-[#6C63FF]/15 text-6xl font-bold text-[#8B82FF]">R</div>
              <p className="mt-4 text-center text-xs text-[#A0A4B8]">Фото Роксаны можно заменить перед запуском</p>
            </div>
            <div className="rounded-2xl border border-[#1F2438] bg-[#0D1226] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B82FF]">Об авторе</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Роксана, основатель CareerPlus.</h2>
              <p className="mt-5 text-base leading-8 text-[#A0A4B8]">
                5+ лет в US immigration paralegal и corporate Global Mobility. Помогаю русскоязычным выходить на международный рынок труда осознанно — без слепых рассылок и без сказок про лёгкие деньги.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#1F2438] bg-[#0D1226]/50 py-20">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
            <SectionHeader eyebrow="FAQ" title="Частые вопросы" />
            <div className="mt-10 grid gap-3">
              {faq.map((item) => (
                <details key={item.question} className="group rounded-2xl border border-[#1F2438] bg-[#0D1226] p-6 open:border-[#6C63FF]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-white">
                    {item.question}
                    <span className="text-2xl text-[#6C63FF] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-[#A0A4B8]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#6C63FF] bg-[#6C63FF] p-8 text-center md:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Перестань искать только там, где живёшь</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85">
              8 уроков · доступ навсегда · работает для большинства digital-профессий
            </p>
            <BuyButton href={site.whop.course} className="mt-8 border-white bg-white text-[#0A0E27] hover:border-white hover:bg-white/90">
              Получить доступ за $79
            </BuyButton>
            <p className="mt-5 text-sm text-white/80">Гарантия возврата 14 дней · оплата через Whop</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1F2438] pb-24 pt-10 sm:pb-10">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 text-sm text-[#A0A4B8] sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3 text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6C63FF] text-xs font-bold">C+</span>
              <span className="font-semibold">CareerPlus</span>
            </div>
            <p className="mt-4 max-w-sm leading-6">Курс для digital-специалистов, которые хотят выйти на международный рынок без хаоса и массовых рассылок.</p>
          </div>
          <div className="grid gap-3">
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">{site.email}</a>
            <a href={site.telegram} className="transition-colors hover:text-white">Telegram</a>
          </div>
          <div className="grid gap-3">
            <a href={site.instagram} className="transition-colors hover:text-white">Instagram</a>
            <a href={site.threads} className="transition-colors hover:text-white">Threads</a>
            <a href="https://careerplus.us" className="transition-colors hover:text-white">CareerPlus.us</a>
            <a href="/privacy" className="transition-colors hover:text-white">Политика конфиденциальности</a>
            <a href="/terms" className="transition-colors hover:text-white">Условия</a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl px-5 text-xs text-[#6F748A] sm:px-6 lg:px-8">
          © {new Date().getFullYear()} CareerPlus. Все права защищены.
        </div>
      </footer>
    </div>
  );
}
