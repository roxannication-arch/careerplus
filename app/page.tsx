import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { QualificationButton } from "@/components/QualificationQuiz";
import { SalaryCalculator } from "@/components/SalaryCalculator";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Работа за рубежом для профессионалов",
  description:
    "CareerPlus помогает русскоязычным специалистам выходить на международный рынок труда под ключ или через курсы.",
  alternates: {
    canonical: "/"
  }
};

const metrics = [
  { value: "4 года", label: "команде CareerPlus" },
  { value: "5 человек", label: "в команде: стратегия, исполнение, поддержка" },
  { value: "US / UK / Remote", label: "рынки, на которые выходим" }
];

const companies = ["Apple", "TikTok", "Meta", "Pinterest", "Zoom", "Disney", "Universal"];

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
              {["US / UK", "REMOTE", "DIGITAL SPECIALISTS"].map((chip) => (
                <span key={chip} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink/70">
                  {chip}
                </span>
              ))}
            </div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-accent">
              CAREER CONSULTING FOR GLOBAL ROLES
            </p>
            <h1 className="text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-7xl">
              Карьерный переход как проект, а не хаотичный поиск
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-ink/70 md:text-lg">
              Помогаем русскоязычным специалистам выходить на международный рынок труда. Команда делает работу под
              ключ — стратегия, упаковка профиля, точечный поиск, переговоры. Без слепых рассылок и сказок про работу
              мечты.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <QualificationButton>Записаться</QualificationButton>
              <ButtonLink href="/courses" variant="secondary">
                Посмотреть курсы
              </ButtonLink>
            </div>
          </div>
          <div className="brand-panel rounded-[2rem] border border-ink/20 p-7 md:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">КАК МЫ РАБОТАЕМ</p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-5xl">
              От первой стратегии до подписанного оффера
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
              <div key={metric.value} className="rounded-[1.75rem] border border-ink/20 bg-white p-6">
                <div className="text-4xl font-extrabold tracking-tight text-accent">{metric.value}</div>
                <p className="mt-3 text-sm font-medium leading-6 text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.75rem] border border-ink/20 bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Наши клиенты работают здесь</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {companies.map((company) => (
                <span key={company} className="rounded-full border border-ink/15 bg-page px-4 py-2 text-sm font-extrabold uppercase tracking-tight text-ink/70">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="О CareerPlus" title="Мы строим карьерный переход как проект, а не как хаотичный поиск." />
          <div className="grid gap-5 text-base leading-8 text-muted">
            <p>
              CareerPlus — карьерный центр для русскоязычных иммигрантов. Мы первые, кто делает поиск работы в США и
              UK под ключ: не разовая консультация, не курс, а команда, которая ведёт переход от стратегии до оффера.
            </p>
            <p>
              Работаем с теми, у кого уже есть профессия — digital и corporate специалистами, которые хотят выйти на
              международный рынок осознанно. Без рассылки 300 резюме вслепую и без обещаний работы мечты за две недели.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/15 bg-soft/70 py-20">
        <Container className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[1.75rem] border border-ink/20 bg-white p-6">
            <div className="flex aspect-square items-center justify-center rounded-2xl bg-soft text-6xl font-extrabold text-accent">R</div>
            <p className="mt-4 text-center text-xs text-muted">Фото Роксаны можно заменить перед запуском</p>
          </div>
          <div className="rounded-[1.75rem] border border-ink/20 bg-white p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">КТО Я</p>
            <h2 className="mt-4 text-3xl font-semibold text-ink">Роксана, основательница CareerPlus</h2>
            <div className="mt-5 grid gap-4 text-base leading-8 text-muted">
              <p>
                Карьерный центр CareerPlus я начала делать сама — четыре года назад, потому что видела, как
                русскоязычные специалисты приезжают в США и UK и теряются. Рассылают сотни резюме, идут на первое
                предложение, через год выгорают.
              </p>
              <p>
                Я за то, чтобы каждый кайфовал от своей работы в найме. Не любил её обязательно — а понимал, во что
                вписался и зачем. Это и есть та самая «карьера с умом», которую мы строим вместе с клиентами.
              </p>
              <p>
                Сейчас в команде CareerPlus нас пятеро. Я держу стратегию и продажи, команда ведёт клиентов от первой
                консультации до подписанного оффера.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Два формата"
            title="Выбирайте, как удобнее"
            description="Хотите, чтобы команда вела процесс — берите сопровождение. Хотите идти сами по понятной системе — берите курс."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[1.75rem] border border-accent bg-ink p-8 text-white">
              <p className="text-sm font-semibold text-white/70">Сопровождение под ключ</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">CareerPlus DFY</h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                Команда ведёт ваш переход — стратегия рынка, упаковка профиля, поиск через точечный outreach и
                рефералки, подготовка к интервью, переговоры по офферу. Вы фокусируетесь на собеседованиях, мы — на
                воронке.
              </p>
              <ButtonLink href="/services" className="mt-8 border-white bg-white text-ink hover:border-white hover:bg-white/90">
                Узнать о сопровождении
              </ButtonLink>
            </article>

            <article className="rounded-[1.75rem] border border-ink/20 bg-white p-8">
              <p className="text-sm font-semibold text-accent">От $79</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">Курсы для самостоятельного поиска</h2>
              <p className="mt-4 text-base leading-7 text-muted">
                Программа для тех, кто хочет идти сам, но не наугад. Метод выхода на международный рынок: резюме под
                ATS, LinkedIn под зарубежных рекрутёров, поиск без слепых рассылок.
              </p>
              <ButtonLink href="/courses" className="mt-8">
                Смотреть курсы
              </ButtonLink>
            </article>
          </div>
        </Container>
      </section>

      <SalaryCalculator />
    </>
  );
}
