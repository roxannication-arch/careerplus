import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { ConsultationButton } from "@/components/ConsultationQuiz";
import { MetricCard } from "@/components/MetricCard";
import { SalaryCalculator } from "@/components/SalaryCalculator";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Работа за рубежом для профессионалов",
  description:
    "CareerPlus помогает русскоязычным специалистам выходить на международный рынок труда под ключ или через структурированные курсы.",
  alternates: {
    canonical: "/"
  }
};

const paths = [
  {
    title: "Сопровождение под ключ",
    description:
      "Для тех, кто хочет, чтобы команда вела процесс: стратегия, упаковка профиля, поиск, коммуникация и подготовка к интервью.",
    price: "От $2 500",
    href: "/services",
    cta: "Перейти к CareerPlus"
  },
  {
    title: "Курсы для самостоятельного поиска",
    description:
      "Структурированные программы для специалистов, которые хотят сами выстроить поиск на зарубежном рынке и двигаться по понятной системе.",
    price: "От $79",
    href: "/courses",
    cta: "Смотреть курсы"
  }
];

const metrics = [
  { value: "5+", label: "лет на рынке карьерного консалтинга и global mobility" },
  { value: "100+", label: "клиентов с офферами и переходами на международный рынок" },
  { value: "US / UK / EU", label: "рынки, удалённые роли и команды без привязки к городу" }
];

export default function HomePage() {
  return (
    <>
      <section className="hero-surface border-b border-ink/15">
        <Container className="grid min-h-[calc(100vh-8rem)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <div className="mb-7 flex flex-wrap gap-3">
              {["US / UK / EU", "remote", "digital specialists"].map((chip) => (
                <span key={chip} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink/70">
                  {chip}
                </span>
              ))}
            </div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-accent">
              Career consulting for global roles
            </p>
            <h1 className="text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-7xl">
              Работа за рубежом для профессионалов
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-ink/70 md:text-lg">
              Помогаем русскоязычным специалистам выходить на международный рынок труда — под ключ или через
              структурированные курсы.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/services">Под ключ → CareerPlus</ButtonLink>
              <ButtonLink href="/courses" variant="secondary">
                Курсы для самостоятельного поиска
              </ButtonLink>
              <ButtonLink href="/#salary-calculator" variant="ghost">
                Проверить зарплату
              </ButtonLink>
            </div>
          </div>
          <div className="brand-panel rounded-[2rem] border border-ink/20 p-7 md:p-9">
            <div className="mb-8 flex justify-end">
              <span className="rounded-full bg-white px-6 py-2 text-xs font-extrabold uppercase tracking-wide text-ink">только онлайн</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">CareerPlus маршрут</p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-5xl">
              От профиля до оффера — спокойно и по системе
            </h2>
            <div className="mt-9 grid gap-3">
              {["Стратегия рынка", "Резюме и LinkedIn", "Точечный outreach", "Интервью и оффер"].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-full border border-white/35 px-5 py-3 text-sm font-bold text-white">
                  <span>{item}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Два формата"
            title="Выберите уровень поддержки"
            description="Можно передать процесс команде или пройти путь самостоятельно по структурированной программе."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {paths.map((path) => (
              <article key={path.title} className="rounded-[1.75rem] border border-ink/20 bg-white p-8">
                <p className="text-sm font-semibold text-accent">{path.price}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{path.title}</h2>
                <p className="mt-4 text-base leading-7 text-muted">{path.description}</p>
                <ButtonLink href={path.href} className="mt-8">
                  {path.cta}
                </ButtonLink>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/15 bg-soft/70 py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {metrics.map((metric) => (
              <MetricCard key={metric.value} value={metric.value} label={metric.label} />
            ))}
          </div>
        </Container>
      </section>

      <SalaryCalculator />

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="О CareerPlus" title="Мы строим карьерный переход как проект, а не как хаотичный поиск." />
          <div className="grid gap-5 text-base leading-8 text-muted">
            <p>
              CareerPlus работает с русскоязычными digital- и corporate-специалистами, которые уже имеют профессию и
              хотят выйти на международный рынок: удалённые роли, США, UK, EU и глобальные команды.
            </p>
            <p>
              Мы помогаем упаковать опыт под зарубежного работодателя, выбрать реалистичные рынки, построить воронку
              поиска, подготовиться к интервью и спокойно пройти путь до оффера.
            </p>
            <div>
              <ConsultationButton>Записаться на консультацию</ConsultationButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
