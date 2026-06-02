"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

type Market = "us" | "uk" | "eu" | "remote";
type Result = "qualified" | "needs-prep" | "course-first";

type AnswerState = {
  market?: Market;
  authorization?: string;
  experience?: string;
  readiness?: string;
  profession?: string;
  years?: string;
  english?: string;
};

const markets: Array<{ value: Market; label: string; hint: string }> = [
  { value: "us", label: "США", hint: "US roles, remote or relocation" },
  { value: "uk", label: "UK", hint: "британский рынок и global teams" },
  { value: "eu", label: "EU", hint: "Европа и распределённые команды" },
  { value: "remote", label: "Удалёнка", hint: "зарубежная компания без переезда" }
];

const steps = [
  "Рынок",
  "Право на работу",
  "Опыт",
  "Готовность",
  "Профессия",
  "Стаж",
  "Английский"
];

function getResult(answers: AnswerState): Result {
  if (answers.english === "basic") {
    return "course-first";
  }

  if (answers.readiness === "later" || answers.experience === "none") {
    return "needs-prep";
  }

  return "qualified";
}

export function openConsultationQuiz(market?: Market) {
  window.dispatchEvent(
    new CustomEvent("careerplus:open-consultation-quiz", {
      detail: { market }
    })
  );
}

export function ConsultationButton({
  children,
  market,
  variant = "primary",
  className = ""
}: {
  children: ReactNode;
  market?: Market;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const variants = {
    primary: "border-accent bg-accent text-white hover:border-accent-hover hover:bg-accent-hover",
    secondary: "border-ink/20 bg-white text-ink hover:border-accent hover:text-ink",
    ghost: "border-ink/20 bg-transparent text-ink hover:border-accent hover:text-ink"
  };

  return (
    <button
      type="button"
      onClick={() => openConsultationQuiz(market)}
      className={`inline-flex items-center justify-center rounded-full border px-8 py-3.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export function ConsultationQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    function handleOpen(event: Event) {
      const customEvent = event as CustomEvent<{ market?: Market }>;
      setAnswers(customEvent.detail?.market ? { market: customEvent.detail.market } : {});
      setStep(customEvent.detail?.market ? 1 : 0);
      setResult(null);
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }

    window.addEventListener("careerplus:open-consultation-quiz", handleOpen);
    return () => window.removeEventListener("careerplus:open-consultation-quiz", handleOpen);
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const progress = useMemo(() => {
    if (result) {
      return 100;
    }
    return Math.round(((step + 1) / steps.length) * 100);
  }, [result, step]);

  function close() {
    setIsOpen(false);
    document.body.style.overflow = "";
  }

  function answer(key: keyof AnswerState, value: string) {
    const next = { ...answers, [key]: value };
    setAnswers(next);

    if (step >= steps.length - 1) {
      setResult(getResult(next));
    } else {
      setStep((current) => current + 1);
    }
  }

  function back() {
    if (result) {
      setResult(null);
      setStep(steps.length - 1);
      return;
    }

    setStep((current) => Math.max(0, current - 1));
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-page/80 px-4 py-6 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label="Квиз перед консультацией"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          close();
        }
      }}
    >
      <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-ink/20 bg-white p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Квиз перед консультацией
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Поймём, какой формат вам подходит
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/20 text-xl text-muted transition-colors hover:text-ink"
            aria-label="Закрыть квиз"
          >
            ×
          </button>
        </div>

        <div className="mt-6 h-1.5 rounded-full bg-page">
          <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${progress}%` }} />
        </div>

        <div className="mt-8">
          {result ? (
            <QuizResult result={result} close={close} />
          ) : (
            <QuizStep step={step} answers={answers} answer={answer} />
          )}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={back}
            className="text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            Назад
          </button>
          <p className="text-xs text-muted">{result ? "Результат" : `Шаг ${step + 1} из ${steps.length}`}</p>
        </div>
      </div>
    </div>
  );
}

function QuizStep({
  step,
  answers,
  answer
}: {
  step: number;
  answers: AnswerState;
  answer: (key: keyof AnswerState, value: string) => void;
}) {
  if (step === 0) {
    return (
      <div>
        <h3 className="text-xl font-semibold text-ink">На какой рынок вы смотрите?</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {markets.map((market) => (
            <button
              key={market.value}
              type="button"
              onClick={() => answer("market", market.value)}
              className="rounded-2xl border border-ink/20 bg-soft/80 p-5 text-left transition-colors hover:border-accent"
            >
              <span className="text-base font-semibold text-ink">{market.label}</span>
              <span className="mt-2 block text-sm leading-6 text-muted">{market.hint}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <ChoiceStep
        title={
          answers.market === "us"
            ? "Есть ли у вас право работать в США?"
            : answers.market === "uk"
              ? "Есть ли у вас право работать в UK?"
              : "Есть ли у вас ограничения по контракту или релокации?"
        }
        options={[
          ["yes", "Да / вопрос уже решён"],
          ["need-help", "Нужно понять варианты"],
          ["no", "Пока нет, но хочу оценить путь"]
        ]}
        onSelect={(value) => answer("authorization", value)}
      />
    );
  }

  if (step === 2) {
    return (
      <ChoiceStep
        title="Есть ли у вас уже профессия и коммерческий опыт?"
        options={[
          ["strong", "Да, 3+ года опыта"],
          ["some", "Да, 1-3 года опыта"],
          ["none", "Пока нет, я начинаю с нуля"]
        ]}
        onSelect={(value) => answer("experience", value)}
      />
    );
  }

  if (step === 3) {
    return (
      <ChoiceStep
        title="Когда вы готовы начинать поиск?"
        options={[
          ["now", "Сейчас или в ближайший месяц"],
          ["quarter", "В ближайшие 2-3 месяца"],
          ["later", "Позже, пока собираю информацию"]
        ]}
        onSelect={(value) => answer("readiness", value)}
      />
    );
  }

  if (step === 4) {
    return <TextStep title="Какая у вас профессия?" onSubmit={(value) => answer("profession", value)} />;
  }

  if (step === 5) {
    return (
      <ChoiceStep
        title="Сколько опыта в этой сфере?"
        options={[
          ["1-2", "1-2 года"],
          ["3-5", "3-5 лет"],
          ["6+", "6+ лет"]
        ]}
        onSelect={(value) => answer("years", value)}
      />
    );
  }

  return (
    <ChoiceStep
      title="Какой у вас английский?"
      options={[
        ["advanced", "Уверенный разговорный / C1"],
        ["working", "Рабочий B1-B2, могу проходить интервью"],
        ["basic", "Пока сложно говорить на интервью"]
      ]}
      onSelect={(value) => answer("english", value)}
    />
  );
}

function ChoiceStep({
  title,
  options,
  onSelect
}: {
  title: string;
  options: Array<[string, string]>;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <div className="mt-5 grid gap-3">
        {options.map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => onSelect(value)}
            className="rounded-2xl border border-ink/20 bg-soft/80 p-5 text-left text-sm font-medium text-ink transition-colors hover:border-accent"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function TextStep({ title, onSubmit }: { title: string; onSubmit: (value: string) => void }) {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(value.trim() || "Не указано");
      }}
    >
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="mt-5 w-full rounded-2xl border border-ink/20 bg-page px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent"
        placeholder="Например: Product Manager, Developer, Marketing Lead"
      />
      <button
        type="submit"
        className="mt-5 inline-flex rounded-full border border-accent bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-hover hover:bg-accent-hover"
      >
        Далее
      </button>
    </form>
  );
}

function QuizResult({ result, close }: { result: Result; close: () => void }) {
  if (result === "qualified") {
    return (
      <div>
        <div className="text-4xl">✓</div>
        <h3 className="mt-4 text-2xl font-semibold text-ink">Похоже, вам подходит консультация.</h3>
        <p className="mt-4 text-sm leading-7 text-muted">
          На звонке разберём профиль, рынок и реалистичный маршрут. Запись идёт через Calendly.
        </p>
        <a
          href={site.calendly}
          target="_blank"
          rel="noreferrer"
          onClick={close}
          className="mt-7 inline-flex rounded-full border border-accent bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-hover hover:bg-accent-hover"
        >
          Записаться в Calendly →
        </a>
      </div>
    );
  }

  if (result === "course-first") {
    return (
      <div>
        <div className="text-4xl">→</div>
        <h3 className="mt-4 text-2xl font-semibold text-ink">Сначала лучше усилить подготовку.</h3>
        <p className="mt-4 text-sm leading-7 text-muted">
          Для международного рынка нужен рабочий английский. Курс поможет понять воронку и подготовить материалы,
          а затем можно вернуться к консультации.
        </p>
        <a
          href="/courses/work-abroad"
          onClick={close}
          className="mt-7 inline-flex rounded-full border border-accent bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-hover hover:bg-accent-hover"
        >
          Смотреть курс
        </a>
      </div>
    );
  }

  return (
    <div>
      <div className="text-4xl">↗</div>
      <h3 className="mt-4 text-2xl font-semibold text-ink">Можно начать с диагностики.</h3>
      <p className="mt-4 text-sm leading-7 text-muted">
        Если вы пока выбираете рынок или срок, консультация поможет понять, что реалистично и какой формат поддержки
        нужен.
      </p>
      <a
        href={site.calendly}
        target="_blank"
        rel="noreferrer"
        onClick={close}
        className="mt-7 inline-flex rounded-full border border-accent bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-hover hover:bg-accent-hover"
      >
        Записаться в Calendly →
      </a>
    </div>
  );
}
