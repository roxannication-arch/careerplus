import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Консультация за $100",
  description: "Час с Роксаной: разбор карьерной ситуации, честная оценка и план следующих шагов.",
  alternates: {
    canonical: "/consultation"
  }
};

const forWhom = [
  "Думаете про международный рынок, но не уверены, куда двигаться",
  "Уже что-то делаете самостоятельно, но застряли в одном из этапов",
  "Не готовы пока к сопровождению под ключ — нужен честный взгляд со стороны",
  "Хотите конкретный план следующих шагов, а не общие советы"
];

const inside = [
  "Разбор вашей текущей ситуации — профессия, рынок, опыт, контекст",
  "Честная оценка: где вы и что реально с этим делать",
  "Конкретный план следующих 3 шагов",
  "Ответы на ваши вопросы"
];

const notInside = [
  "Это не аудит резюме — это разговор о стратегии",
  "Это не обучение — за час у вас не появится новый навык",
  "Это не гарантия оффера — это направление, не результат"
];

const steps = [
  {
    title: "Оплата",
    body: "$100 через защищённый платёж. Никаких подписок, разовая оплата."
  },
  {
    title: "Выбор времени",
    body: "Сразу после оплаты откроется страница с моим календарём. Выбираете удобный слот."
  },
  {
    title: "Час разговора",
    body: "По видео в выбранное время. Запись разговора пришлю после — пересмотрите, если что-то забудете."
  }
];

function PaidConsultationButton({ className = "" }: { className?: string }) {
  return (
    <div>
      <ButtonLink href={site.consultationWhop} className={className}>
        Записаться за $100
      </ButtonLink>
      <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
        После оплаты сразу откроется страница выбора времени для звонка. Ссылка также придёт на вашу почту.
      </p>
    </div>
  );
}

export default function ConsultationPage() {
  return (
    <>
      <section className="hero-surface border-b border-ink/15 py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-accent">КОНСУЛЬТАЦИЯ · $100 · 1 ЧАС</p>
            <h1 className="text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink md:text-7xl">
              Час со мной — разобрать вашу карьерную ситуацию
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
              Не сопровождение под ключ, а час разговора со мной лично. Где вы сейчас, что реально с этим делать,
              какой план действий. Прямой разбор без сахара.
            </p>
            <div className="mt-8">
              <PaidConsultationButton />
            </div>
          </div>
          <div className="rounded-[2rem] border border-ink/20 bg-white p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Как это работает</p>
            <div className="mt-6 grid gap-4">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-ink/20 bg-page p-5">
                  <p className="text-sm font-semibold text-accent">0{index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader title="Когда это подходит" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {forWhom.map((item) => (
              <div key={item} className="rounded-2xl border border-ink/20 bg-white p-6 text-sm leading-6 text-muted">
                <span className="mr-2 text-accent">✓</span>{item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-ink/15 bg-soft/70 py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader title="Что внутри часа" />
            <div className="mt-8 grid gap-3">
              {inside.map((item, index) => (
                <div key={item} className="rounded-2xl border border-ink/20 bg-white p-5">
                  <p className="text-sm font-semibold text-accent">0{index + 1}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader title="Чего внутри часа нет" />
            <div className="mt-8 grid gap-3">
              {notInside.map((item) => (
                <div key={item} className="rounded-2xl border border-ink/20 bg-white p-5 text-sm leading-6 text-muted">
                  <span className="mr-2 text-accent">×</span>{item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-accent bg-accent p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">Готовы поговорить?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85">
            Час — не так много времени, но достаточно, чтобы получить честный план и сэкономить месяцы движения не туда.
          </p>
          <div className="mt-8 flex justify-center">
            <PaidConsultationButton className="border-white bg-white text-ink hover:border-white hover:bg-white/90" />
          </div>
        </div>
      </section>
    </>
  );
}
