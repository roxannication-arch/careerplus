"use client";

import { useMemo, useState } from "react";
import { ConsultationButton } from "./ConsultationQuiz";

type Market = "us" | "uk" | "eu" | "remote";

const marketLabels: Record<Market, string> = {
  us: "США",
  uk: "UK",
  eu: "EU",
  remote: "Remote"
};

const currency: Record<Market, string> = {
  us: "$",
  uk: "£",
  eu: "€",
  remote: "$"
};

const salaryBands = [
  {
    keywords: ["product", "продукт", "pm", "project", "проект"],
    us: [95000, 135000, 180000],
    uk: [65000, 90000, 120000],
    eu: [60000, 85000, 115000],
    remote: [75000, 115000, 160000],
    insight: "Product/Project роли растут в цене, когда опыт упакован через impact, метрики и ownership."
  },
  {
    keywords: ["developer", "engineer", "разработ", "software", "frontend", "backend", "devops"],
    us: [110000, 155000, 220000],
    uk: [70000, 100000, 145000],
    eu: [65000, 95000, 135000],
    remote: [85000, 130000, 190000],
    insight: "Для engineering-ролей критичны стек, seniority, system design и понятное описание production-impact."
  },
  {
    keywords: ["marketing", "маркет", "growth", "content", "brand"],
    us: [75000, 115000, 165000],
    uk: [52000, 78000, 110000],
    eu: [50000, 72000, 105000],
    remote: [60000, 95000, 140000],
    insight: "Маркетинг сильнее продаётся через цифры: CAC, LTV, pipeline, revenue influence и market expansion."
  },
  {
    keywords: ["design", "designer", "ux", "ui", "дизайн"],
    us: [85000, 125000, 175000],
    uk: [55000, 82000, 115000],
    eu: [52000, 78000, 110000],
    remote: [65000, 105000, 150000],
    insight: "Для дизайнеров важны не только визуалы, а продуктовые кейсы: research, conversion, adoption, retention."
  },
  {
    keywords: ["analyst", "analytics", "data", "аналит"],
    us: [80000, 120000, 170000],
    uk: [55000, 85000, 120000],
    eu: [52000, 80000, 115000],
    remote: [65000, 100000, 145000],
    insight: "Аналитиков лучше оценивают, когда SQL/BI/experiments привязаны к решениям бизнеса."
  }
] as const;

function formatMoney(value: number, market: Market) {
  return `${currency[market]}${Math.round(value).toLocaleString("en-US")}`;
}

function getBand(profession: string, market: Market, experience: number) {
  const normalized = profession.toLowerCase();
  const match = salaryBands.find((band) => band.keywords.some((keyword) => normalized.includes(keyword)));
  const band = match ?? salaryBands[1];
  const values = band[market];
  const multiplier = experience >= 8 ? 1.18 : experience >= 5 ? 1.08 : experience <= 2 ? 0.82 : 1;

  return {
    low: values[0] * multiplier,
    mid: values[1] * multiplier,
    high: values[2] * multiplier,
    insight: band.insight
  };
}

export function SalaryCalculator() {
  const [profession, setProfession] = useState("");
  const [salary, setSalary] = useState(80000);
  const [experience, setExperience] = useState(4);
  const [months, setMonths] = useState(3);
  const [market, setMarket] = useState<Market>("us");
  const [hasCalculated, setHasCalculated] = useState(false);

  const result = useMemo(() => getBand(profession || "software engineer", market, experience), [profession, market, experience]);
  const gap = result.mid - salary;
  const monthlySalary = salary / 12;
  const searchCost = monthlySalary * 4;
  const alreadyLost = monthlySalary * months;

  return (
    <section id="salary-calculator" className="border-y border-ink/20 bg-soft/70 py-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Калькулятор зарплаты
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Сколько вы должны зарабатывать на самом деле?
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Введите данные — покажем ориентир по рынку и разницу между текущим уровнем и международной вилкой.
              Это не оффер и не гарантия, а быстрый способ увидеть порядок цифр.
            </p>
          </div>

          <div className="rounded-[2rem] border border-ink/20 bg-white p-6 md:p-8">
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-medium text-ink">
                Ваша должность
                <input
                  value={profession}
                  onChange={(event) => setProfession(event.target.value)}
                  className="rounded-2xl border border-ink/20 bg-page px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent"
                  placeholder="например: Product Manager, Developer, Marketing Lead"
                />
              </label>

              <div>
                <p className="text-sm font-medium text-ink">Целевой рынок</p>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {(Object.keys(marketLabels) as Market[]).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setMarket(item)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                        market === item
                          ? "border-accent bg-accent text-white"
                          : "border-ink/20 bg-page text-muted hover:text-ink"
                      }`}
                    >
                      {marketLabels[item]}
                    </button>
                  ))}
                </div>
              </div>

              <Range
                label="Текущая зарплата ($ / год)"
                min={30000}
                max={250000}
                step={5000}
                value={salary}
                display={`$${salary.toLocaleString("en-US")}`}
                onChange={setSalary}
              />
              <Range
                label="Опыт работы"
                min={1}
                max={15}
                step={1}
                value={experience}
                display={`${experience} ${experience === 1 ? "год" : experience < 5 ? "года" : "лет"}`}
                onChange={setExperience}
              />
              <Range
                label="Сколько месяцев вы уже ищете самостоятельно"
                min={0}
                max={12}
                step={1}
                value={months}
                display={months === 0 ? "Только начал(а)" : `${months} мес.`}
                onChange={setMonths}
              />

              <button
                type="button"
                onClick={() => setHasCalculated(true)}
                className="inline-flex w-full items-center justify-center rounded-full border border-accent bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-hover hover:bg-accent-hover"
              >
                Узнать рыночную ставку →
              </button>

              {hasCalculated ? (
                <div className="grid gap-4">
                  <ResultCard
                    label="Ваша рыночная ставка"
                    value={formatMoney(result.mid, market)}
                    detail={`Диапазон: ${formatMoney(result.low, market)} - ${formatMoney(result.high, market)} · ${marketLabels[market]}`}
                  />
                  <ResultCard
                    label="Вы недополучаете"
                    value={gap > 0 ? `+${formatMoney(gap, market)}/yr` : "На рыночном уровне"}
                    detail={
                      gap > 0
                        ? `${formatMoney(gap / 12, market)} дополнительно в месяц при правильном оффере`
                        : "Верхний диапазон всё равно достижим через более точный рынок и позиционирование"
                    }
                  />
                  <ResultCard
                    label="Стоимость самостоятельного поиска"
                    value={formatMoney(searchCost, market)}
                    detail="6 месяцев поиска в одиночку против примерно 2 месяцев с системным сопровождением"
                  />
                  {months > 0 ? (
                    <ResultCard
                      label="Уже потеряно за время поиска"
                      value={formatMoney(alreadyLost, market)}
                      detail={`${months} мес. поиска × ваша месячная зарплата`}
                    />
                  ) : null}
                  <p className="rounded-2xl border border-ink/20 bg-soft/80 p-4 text-sm leading-6 text-muted">
                    {result.insight}
                  </p>
                  <ConsultationButton className="w-full">Выйти на рыночный уровень →</ConsultationButton>
                </div>
              ) : (
                <div className="rounded-2xl border border-ink/20 bg-soft/80 p-6 text-center text-sm text-muted">
                  Заполните данные — покажем вашу рыночную ставку
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Range({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="grid gap-3 text-sm font-medium text-ink">
      <span className="flex items-center justify-between gap-4">
        {label}
        <span className="text-accent">{display}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="accent-accent"
      />
    </label>
  );
}

function ResultCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-ink/20 bg-soft/80 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
      <div className="mt-2 text-3xl font-semibold tracking-tight text-ink">{value}</div>
      <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
    </div>
  );
}
