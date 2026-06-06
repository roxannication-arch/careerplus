import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { QualificationButton } from "@/components/QualificationQuiz";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Услуги CareerPlus",
  description: "Курс, консультация и сопровождение под ключ для выхода на международный рынок труда.",
  alternates: {
    canonical: "/services"
  }
};

const companies = ["Apple", "TikTok", "Meta", "Pinterest", "Zoom", "Disney", "Universal"];

const serviceFormats = [
  {
    eyebrow: "$79 · курс",
    title: "Курс для самостоятельного поиска",
    body: "Метод выхода на международный рынок: выбор страны, упаковка профиля, точечный поиск, рефералки, интервью и переговоры.",
    cta: "Смотреть курс",
    href: "/courses/work-abroad",
    variant: "light"
  },
  {
    eyebrow: "$100 · консультация",
    title: "Час с Роксаной",
    body: "Разбор вашей карьерной ситуации, честная оценка и план следующих шагов без обязательства идти в сопровождение.",
    cta: "Записаться на консультацию",
    href: "/consultation",
    variant: "light"
  },
  {
    eyebrow: "от $2 500 · под ключ",
    title: "CareerPlus DFY",
    body: "Команда помогает строить поиск: стратегия, упаковка профиля, точечная воронка, интервью и переговоры.",
    cta: "Узнать о сопровождении",
    href: "#dfy",
    variant: "dark"
  }
];

const forWhom = [
  "Уже работаете в digital или corporate и хотите выйти на международный рынок",
  "Есть разрешение на работу в США или UK (Green Card, EAD, H-1B, ILR, Skilled Worker и подобные)",
  "Готовы плотно работать 3–6 месяцев — это процесс, не разовая консультация",
  "Хотите команду, которая делает работу за вас, а не учит вас делать её самостоятельно"
];

const notFor = [
  "Если ещё нет разрешения на работу — мы не помогаем с поиском спонсорства визы",
  "Если вы только начинаете карьеру с нуля без профессии",
  "Если ищете магию: «верните мне работу мечты за две недели»"
];

const included = [
  {
    title: "Стратегия рынка",
    body: "Выбираем целевые компании, роли, географию. Не «откликайся куда попало», а конкретный список из 30–50 компаний под вас."
  },
  {
    title: "Упаковка профиля",
    body: "Резюме под международный стандарт и ATS. LinkedIn, который находят зарубежные рекрутёры."
  },
  {
    title: "Поиск через outreach и рефералки",
    body: "Точечный заход в компании из списка. Один реферал работает как 20 холодных откликов."
  },
  {
    title: "Подготовка к интервью",
    body: "Формат, культурные коды, поведенческие вопросы, моки на английском."
  },
  {
    title: "Переговоры и оффер",
    body: "Ведём переговоры вместе с вами или за вас. Здесь обычно ещё +20–40% к первому предложению."
  }
];

const startSteps = [
  {
    title: "Бесплатная стратегическая консультация",
    body: "Час разговора: ваша цель, рынок, ситуация. Решаем вместе, есть ли смысл идти под ключ или вам подойдёт другой формат."
  },
  {
    title: "Предложение по работе",
    body: "Если работаем вместе — описываем подход, объём, сроки и ориентир по цене. Никаких сюрпризов на середине."
  },
  {
    title: "Старт сопровождения",
    body: "Собираем стратегию, материалы и систему поиска. Команда подключается, вы фокусируетесь на интервью."
  }
];

const faq = [
  ["Сколько времени занимает поиск работы с CareerPlus?", "Обычно поиск занимает около 3–4 месяцев. Срок зависит от рынка, профессии, документов, уровня позиции и вашей готовности включаться в интервью."],
  ["Что если оффер не появится за оговоренный срок?", "Мы заранее обсуждаем рамки работы и точки пересмотра. Если рынок отвечает не так, как ожидали, меняем список компаний, позиционирование и тактику поиска."],
  ["Гарантируете ли вы оффер?", "Нет. Мы не продаём гарантию результата. Мы делаем поиск управляемым: стратегия, упаковка, воронка, подготовка и переговоры."],
  ["Работаете ли вы с тем, у кого нет разрешения на работу?", "Нет, в формате DFY мы работаем с теми, у кого уже есть право работать в США или UK."],
  ["Какие отрасли и роли вы ведёте?", "Digital и corporate: product, project, marketing, operations, analytics, HR, finance, design, engineering и смежные роли."],
  ["Как происходит оплата?", "После консультации и согласования формата. До этого вы понимаете объём работы, цену и следующий шаг."],
  ["Можно ли совмещать с текущей работой?", "Да. Но понадобится время на интервью, согласование материалов и регулярную коммуникацию с командой."],
  ["Что входит в цену, а что не входит?", "Входит работа команды по поиску и подготовке. Не входят сторонние расходы: переводы, юристы, пошлины, платные сервисы и похожие вещи." ]
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-surface border-b border-ink/15 py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Услуги"
            title="Выберите формат работы"
            description="Курс, разовая консультация или сопровождение под ключ. Все варианты живут здесь — выберите то, что сейчас подходит по задаче."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {serviceFormats.map((item) => (
              <article
                key={item.title}
                className={
                  item.variant === "dark"
                    ? "rounded-[1.75rem] border border-accent bg-ink p-8 text-white"
                    : "rounded-[1.75rem] border border-ink/20 bg-white p-8"
                }
              >
                <p className={item.variant === "dark" ? "text-sm font-semibold text-white/70" : "text-sm font-semibold text-accent"}>
                  {item.eyebrow}
                </p>
                <h2 className={item.variant === "dark" ? "mt-4 text-2xl font-semibold text-white" : "mt-4 text-2xl font-semibold text-ink"}>
                  {item.title}
                </h2>
                <p className={item.variant === "dark" ? "mt-4 text-sm leading-6 text-white/70" : "mt-4 text-sm leading-6 text-muted"}>
                  {item.body}
                </p>
                <ButtonLink
                  href={item.href}
                  variant={item.variant === "dark" ? "light" : "primary"}
                  className="mt-8"
                >
                  {item.cta}
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="dfy" className="hero-surface border-b border-ink/15 py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-accent">CAREERPLUS DFY</p>
            <h1 className="text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-7xl">
              Сопровождение под ключ в США или UK
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
              Команда ведёт ваш карьерный переход от первой стратегии до подписанного оффера. Вы фокусируетесь на
              интервью — мы на всём остальном.
            </p>
            <QualificationButton className="mt-8">
              Записаться на бесплатную консультацию
            </QualificationButton>
          </div>
          <div className="rounded-[2rem] border border-ink/20 bg-white p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Цена</p>
            <h2 className="mt-4 text-5xl font-extrabold tracking-tight text-ink">От $2 500</h2>
            <p className="mt-5 text-sm leading-6 text-muted">
              Финальная цена обсуждается на консультации — зависит от рынка, уровня позиции и объёма работы. Мы честно
              говорим, во что обойдётся работа с нами, прежде чем вы что-то платите.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-ink/20 bg-white p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-ink">Для кого это</h2>
            <ul className="mt-6 grid gap-4 text-sm leading-6 text-muted">
              {forWhom.map((item) => (
                <li key={item} className="flex gap-3"><span className="text-accent">✓</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.75rem] border border-ink/20 bg-white p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-ink">Для кого это НЕ подойдёт</h2>
            <ul className="mt-6 grid gap-4 text-sm leading-6 text-muted">
              {notFor.map((item) => (
                <li key={item} className="flex gap-3"><span className="text-accent">×</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/15 bg-soft/70 py-20">
        <Container>
          <SectionHeader title="Что делает команда" />
          <div className="mt-10 grid gap-4">
            {included.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-ink/20 bg-white p-6">
                <p className="text-sm font-semibold text-accent">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader title="Где работают клиенты" />
          <div className="mt-8 flex flex-wrap gap-3">
            {companies.map((company) => (
              <span key={company} className="rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-tight text-ink/70">
                {company}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/15 bg-soft/70 py-20">
        <Container>
          <SectionHeader
            eyebrow="КАК НАЧАТЬ"
            title="Сначала консультация, потом работа"
            description="Мы специально разделяем первый бесплатный звонок и само сопровождение — чтобы обе стороны поняли, можем ли реально работать вместе, прежде чем что-то начинать."
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
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="FAQ" title="Частые вопросы" />
          <div className="mt-10 grid gap-3">
            {faq.map(([question, answer]) => (
              <details key={question} className="group rounded-[1.5rem] border border-ink/20 bg-white p-6 open:border-accent">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-ink">
                  {question}
                  <span className="text-2xl text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-muted">{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-accent bg-accent p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Не уверены, подходит ли вам сопровождение?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85">
            Запишитесь на бесплатную консультацию. За час разберём вашу ситуацию и честно скажем, можем ли быть полезны.
          </p>
          <QualificationButton variant="light" className="mt-8">
            Записаться на бесплатную консультацию
          </QualificationButton>
        </div>
      </section>
    </>
  );
}
