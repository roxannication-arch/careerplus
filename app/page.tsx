import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { MetricCard } from "@/components/MetricCard";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Работа за рубежом для профессионалов",
  description:
    "CareerPlus помогает русскоязычным digital- и corporate-специалистам выходить на международный рынок труда под ключ или через структурированные курсы.",
  alternates: {
    canonical: "/"
  }
};

const metrics = [
  { value: "5+", label: "лет на рынке карьерного консалтинга и global mobility" },
  { value: "100+", label: "клиентов с международными карьерными переходами" },
  { value: "US / UK / EU", label: "рынки, удалённые роли и команды без привязки к городу" }
];

const routeSteps = [
  "Стратегия рынка",
  "Упаковка профиля (резюме + LinkedIn)",
  "Воронка поиска (точечный outreach + рефералки)",
  "Подготовка к интервью",
  "Переговоры и оффер"
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
              Карьерный переход как проект, а не хаотичный поиск
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-ink/70 md:text-lg">
              Помогаем русскоязычным digital- и corporate-специалистам выходить на международный рынок труда — под
              ключ или через структурированные курсы.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={site.calendlyPaid}>Записаться на консультацию</ButtonLink>
              <ButtonLink href="/courses" variant="secondary">
                Посмотреть курсы
              </ButtonLink>
            </div>
          </div>
          <div className="brand-panel rounded-[2rem] border border-ink/20 p-7 md:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">CareerPlus маршрут</p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-5xl">
              От профиля до переговоров — спокойно и по системе
            </h2>
            <div className="mt-9 grid gap-3">
              {routeSteps.map((item, index) => (
                <div key={item} className="flex items-center justify-between gap-5 rounded-full border border-white/35 px-5 py-3 text-sm font-bold text-white">
                  <span>{item}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink/15 bg-soft/70 py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {metrics.map((metric) => (
              <MetricCard key={metric.value} value={metric.value} label={metric.label} />
            ))}
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
            <article className="rounded-[1.75rem] border border-accent bg-ink p-8 text-white">
              <p className="text-sm font-semibold text-white/70">Флагманский формат</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">Сопровождение под ключ</h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                Для тех, кто хочет, чтобы команда вела процесс: стратегия, упаковка профиля, поиск, коммуникация и
                подготовка к интервью.
              </p>
              <ButtonLink href="/services" className="mt-8 border-white bg-white text-ink hover:border-white hover:bg-white/90">
                Узнать о сопровождении
              </ButtonLink>
            </article>

            <article className="rounded-[1.75rem] border border-ink/20 bg-white p-8">
              <p className="text-sm font-semibold text-accent">От $79</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">Курсы для самостоятельного поиска</h2>
              <p className="mt-4 text-base leading-7 text-muted">
                Структурированные программы для специалистов, которые хотят сами выстроить поиск на зарубежном рынке
                и двигаться по понятной системе.
              </p>
              <ButtonLink href="/courses" className="mt-8">
                Смотреть курсы
              </ButtonLink>
            </article>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/15 bg-soft/70 py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="О CareerPlus" title="Мы строим карьерный переход как проект, а не как хаотичный поиск." />
          <div className="grid gap-5 text-base leading-8 text-muted">
            <p>
              CareerPlus работает с русскоязычными digital- и corporate-специалистами, которые уже имеют профессию и
              хотят выйти на международный рынок: удалённые роли, США, UK, EU и глобальные команды.
            </p>
            <p>
              Мы помогаем упаковать опыт под зарубежного работодателя, выбрать реалистичные рынки, построить
              управляемую воронку поиска, подготовиться к интервью и переговорам.
            </p>
            <div>
              <ButtonLink href={site.calendlyPaid}>Записаться на консультацию</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
