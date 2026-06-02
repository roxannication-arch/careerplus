import type { Metadata } from "next";
import { ConsultationButton } from "@/components/ConsultationQuiz";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Кейсы клиентов",
  description: "Истории клиентов CareerPlus: исходная ситуация, что сделали и к какому результату пришли.",
  alternates: {
    canonical: "/cases"
  }
};

const cases = [
  {
    name: "Product Manager, анонимно",
    market: "EU remote",
    before: "Опыт в локальной IT-компании, резюме на русском стандарте, отклики без ответов.",
    work: "Переписали позиционирование, собрали LinkedIn под поиск, выделили 40 target-компаний и запустили referral outreach.",
    after: "6 интервью за 8 недель и оффер в европейский B2B SaaS с remote-first форматом."
  },
  {
    name: "UX/UI Designer, анонимно",
    market: "UK / global startups",
    before: "Сильное портфолио, но кейсы были описаны через визуал, а не бизнес-результат.",
    work: "Пересобрали 3 ключевых кейса, адаптировали CV под ATS и подготовили ответы для design interview.",
    after: "Перешла в международную продуктовую команду с оплатой в валюте."
  },
  {
    name: "QA Engineer, анонимно",
    market: "US timezone remote",
    before: "Боязнь интервью на английском и непонимание, где искать компании без relocation requirement.",
    work: "Сузили рынок, подготовили английские stories, настроили регулярную воронку откликов и warm outreach.",
    after: "Получил контрактную роль в распределённой команде и продолжил поиск full-time оффера."
  }
];

export default function CasesPage() {
  return (
    <>
      <section className="hero-surface border-b border-ink/15 py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Кейсы"
            title="Истории клиентов по шагам"
            description="Формат: было X, сделали Y, стало Z. Часть кейсов анонимизирована, чтобы сохранить приватность клиентов."
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6">
            {cases.map((item) => (
              <article key={item.name} className="rounded-2xl border border-ink/20 bg-white p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-accent">{item.market}</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{item.name}</h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-ink/20 text-sm font-semibold text-ink">
                    C+
                  </div>
                </div>
                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-2xl border border-ink/20 bg-soft/80 p-5">
                    <h3 className="text-sm font-semibold text-ink">Было</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.before}</p>
                  </div>
                  <div className="rounded-2xl border border-ink/20 bg-soft/80 p-5">
                    <h3 className="text-sm font-semibold text-ink">Сделали</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.work}</p>
                  </div>
                  <div className="rounded-2xl border border-ink/20 bg-soft/80 p-5">
                    <h3 className="text-sm font-semibold text-ink">Стало</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.after}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <ConsultationButton>Обсудить похожую цель</ConsultationButton>
          </div>
        </Container>
      </section>
    </>
  );
}
