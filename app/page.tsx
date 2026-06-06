import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
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

const companies = ["Apple", "TikTok", "Meta", "Pinterest", "Zoom", "Disney", "Universal"];

const routeSteps = [
  "Стратегия рынка",
  "Упаковка профиля (резюме + LinkedIn)",
  "Воронка поиска (точечный outreach + рефералки)",
  "Подготовка к интервью",
  "Переговоры и оффер"
];

function LogoStrip() {
  return (
    <div className="rounded-[1.75rem] border border-ink/20 bg-white p-6">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Наши клиенты работают здесь</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {companies.map((company) => (
          <span key={company} className="rounded-full border border-ink/15 bg-page px-4 py-2 text-sm font-extrabold uppercase tracking-tight text-ink/70">
            {company}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="hero-surface border-b border-ink/15">
        <Container className="grid min-h-[calc(100vh-8rem)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <div className="mb-7 flex flex-wrap gap-3">
              {["US", "UK", "REMOTE", "DIGITAL & CORPORATE"].map((chip) => (
                <span key={chip} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink/70">
                  {chip}
                </span>
              ))}
            </div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-accent">
              CAREER CONSULTING FOR GLOBAL ROLES
            </p>
            <h1 className="text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-7xl">
              Не учим искать работу — ищем её вместе с вами.
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-ink/70 md:text-lg">
              Помогаем русскоязычным специалистам выходить на международный рынок труда. Команда делает работу под
              ключ — стратегия, упаковка профиля, точечный поиск, переговоры. Без слепых рассылок и сказок про работу
              мечты.
            </p>
            <div className="mt-9">
              <ButtonLink href="#formats" variant="secondary">Выбрать формат</ButtonLink>
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
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-ink/20 bg-white p-6">
              <div className="text-4xl font-extrabold tracking-tight text-accent">4 года</div>
              <p className="mt-3 text-sm font-medium leading-6 text-muted">на рынке</p>
            </div>
            <div className="rounded-[1.75rem] border border-ink/20 bg-white p-6">
              <div className="text-4xl font-extrabold tracking-tight text-accent">5 человек</div>
              <p className="mt-3 text-sm font-medium leading-6 text-muted">команда: стратегия, исполнение, поддержка</p>
            </div>
          </div>
          <div className="mt-4">
            <LogoStrip />
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
            </div>
          </div>
        </Container>
      </section>

      <section id="formats" className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Три формата"
            title="Выбирайте, как удобнее"
            description="Курс — если идёте сами. Консультация — если нужен час честного разбора. Под ключ — если хотите, чтобы команда делала поиск вместе с вами."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <article className="rounded-[1.75rem] border border-ink/20 bg-white p-8">
              <p className="text-sm font-semibold text-accent">$79 · курс</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">Работа за рубежом для digital-специалистов</h2>
              <div className="mt-5 grid gap-4 text-sm leading-6 text-muted">
                <p><strong className="text-ink">Кому подходит:</strong> есть профессия, хотите идти сами, но не наугад.</p>
                <p><strong className="text-ink">Что получите:</strong> 8 уроков, шаблоны, чек-листы, метод поиска без слепых рассылок.</p>
              </div>
              <ButtonLink href="/courses/work-abroad" className="mt-8">Смотреть курс</ButtonLink>
            </article>

            <article className="rounded-[1.75rem] border border-ink/20 bg-white p-8">
              <p className="text-sm font-semibold text-accent">$100 · 1 час</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">Консультация с Роксаной</h2>
              <div className="mt-5 grid gap-4 text-sm leading-6 text-muted">
                <p><strong className="text-ink">Кому подходит:</strong> нужен честный взгляд со стороны и план следующих шагов.</p>
                <p><strong className="text-ink">Что получите:</strong> разбор ситуации, оценку рынка и конкретные 3 шага дальше.</p>
              </div>
              <ButtonLink href="/consultation" className="mt-8">Записаться на консультацию</ButtonLink>
            </article>

            <article className="rounded-[1.75rem] border border-accent bg-ink p-8 text-white">
              <p className="text-sm font-semibold text-white/70">от $2 500 · под ключ</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">CareerPlus DFY</h2>
              <div className="mt-5 grid gap-4 text-sm leading-6 text-white/70">
                <p><strong className="text-white">Кому подходит:</strong> есть право работать в US/UK и вы готовы к плотному поиску.</p>
                <p><strong className="text-white">Что получите:</strong> команда строит стратегию, упаковку, воронку, подготовку и переговоры.</p>
              </div>
              <ButtonLink href="/services" className="mt-8 border-white bg-white text-ink hover:border-white hover:bg-white/90">
                Узнать о сопровождении
              </ButtonLink>
            </article>
          </div>
        </Container>
      </section>

      <SalaryCalculator />
    </>
  );
}
