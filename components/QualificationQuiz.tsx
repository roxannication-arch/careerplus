"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

type Country = "США" | "UK";
type Answers = {
  country?: Country;
  livesThere?: "yes" | "relocation";
  workAuth?: "yes" | "no";
  readiness?: "now" | "soon" | "watching";
  profession?: string;
  experience?: "local" | "international" | "none";
  english?: "native" | "working" | "speaking" | "basic";
};

const totalSteps = 7;

function countryLabel(country?: Country) {
  return country ?? "стране";
}

function authExamples(country?: Country) {
  return country === "UK" ? "ILR, Skilled Worker и др." : "Green Card, EAD, H-1B и др.";
}

function isQualified(answers: Answers) {
  return answers.workAuth === "yes" && answers.readiness !== "watching";
}

function notQualifiedByReadiness(answers: Answers) {
  return answers.readiness === "watching";
}

export function openQualificationQuiz() {
  window.dispatchEvent(new Event("careerplus:open-qualification-quiz"));
}

export function QualificationButton({
  children,
  className = "",
  variant = "primary"
}: {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const variants = {
    primary: "border-accent bg-accent text-white hover:border-accent-hover hover:bg-accent-hover",
    secondary: "border-ink/20 bg-white text-ink hover:border-accent hover:text-ink",
    ghost: "border-ink/20 bg-transparent text-ink hover:border-accent hover:text-ink"
  };

  return (
    <button
      type="button"
      onClick={openQualificationQuiz}
      className={`inline-flex items-center justify-center rounded-full border px-8 py-3.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export function QualificationQuiz() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [profession, setProfession] = useState("");
  const [result, setResult] = useState<"qualified" | "not-qualified" | null>(null);

  useEffect(() => {
    function handleOpen() {
      setOpen(true);
      setStep(1);
      setAnswers({});
      setProfession("");
      setResult(null);
      document.body.style.overflow = "hidden";
    }

    window.addEventListener("careerplus:open-qualification-quiz", handleOpen);
    return () => window.removeEventListener("careerplus:open-qualification-quiz", handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  const progress = useMemo(() => Array.from({ length: totalSteps }, (_, index) => index < step), [step]);

  function close() {
    setOpen(false);
    document.body.style.overflow = "";
  }

  function answer(next: Partial<Answers>) {
    const updated = { ...answers, ...next };
    setAnswers(updated);

    if (step === totalSteps) {
      setResult(isQualified(updated) ? "qualified" : "not-qualified");
      return;
    }

    setStep((current) => current + 1);
  }

  function continueProfession() {
    answer({ profession: profession.trim() || "Не указано" });
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/45 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Квалификационный квиз"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-ink/15 bg-page p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Квалификация</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {result ? "Результат" : "Прежде чем записаться, давайте проверим, подходим ли мы друг другу"}
            </h2>
            {!result ? (
              <p className="mt-3 text-sm leading-6 text-muted">
                7 коротких вопросов. Меньше минуты. Без этого мы не сможем понять, можем ли реально помочь.
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={close}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-white text-xl text-muted transition-colors hover:text-ink"
            aria-label="Закрыть квиз"
          >
            ×
          </button>
        </div>

        {!result ? (
          <div className="mt-7 grid grid-cols-7 gap-2" aria-label={`Шаг ${step} из ${totalSteps}`}>
            {progress.map((active, index) => (
              <div key={index} className={`h-1.5 rounded-full ${active ? "bg-accent" : "bg-ink/10"}`} />
            ))}
          </div>
        ) : null}

        <div className="mt-8">
          {result === "qualified" ? (
            <QualifiedResult />
          ) : result === "not-qualified" ? (
            <NotQualifiedResult watching={notQualifiedByReadiness(answers)} />
          ) : (
            <QuizStep
              step={step}
              answers={answers}
              profession={profession}
              setProfession={setProfession}
              answer={answer}
              continueProfession={continueProfession}
            />
          )}
        </div>

        {!result ? (
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep((current) => Math.max(1, current - 1))}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              Назад
            </button>
            <p className="text-xs text-muted">
              Шаг {step} из {totalSteps} · {countryLabel(answers.country)}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function QuizStep({
  step,
  answers,
  profession,
  setProfession,
  answer,
  continueProfession
}: {
  step: number;
  answers: Answers;
  profession: string;
  setProfession: (value: string) => void;
  answer: (next: Partial<Answers>) => void;
  continueProfession: () => void;
}) {
  const country = countryLabel(answers.country);

  if (step === 1) {
    return (
      <ChoiceStep
        title="В какой стране планируете работу?"
        options={[
          ["США", "США"],
          ["UK", "UK"]
        ]}
        onSelect={(value) => answer({ country: value as Country })}
      />
    );
  }

  if (step === 2) {
    return (
      <ChoiceStep
        title={`Вы сейчас живёте в ${country}?`}
        options={[
          ["yes", "Да"],
          ["relocation", "Нет — планирую переезд"]
        ]}
        onSelect={(value) => answer({ livesThere: value as Answers["livesThere"] })}
      />
    );
  }

  if (step === 3) {
    return (
      <ChoiceStep
        title={`У вас есть разрешение на работу в ${country}?`}
        options={[
          ["yes", `Да (${authExamples(answers.country)})`],
          ["no", "Нет"]
        ]}
        onSelect={(value) => answer({ workAuth: value as Answers["workAuth"] })}
      />
    );
  }

  if (step === 4) {
    return (
      <ChoiceStep
        title="Готовы начать поиск работы в ближайшие несколько месяцев?"
        options={[
          ["now", "Да, готов(а) прямо сейчас"],
          ["soon", "В течение 1–3 месяцев"],
          ["watching", "Пока просто смотрю"]
        ]}
        onSelect={(value) => answer({ readiness: value as Answers["readiness"] })}
      />
    );
  }

  if (step === 5) {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          continueProfession();
        }}
      >
        <h3 className="text-2xl font-semibold text-ink">Кем вы работаете?</h3>
        <input
          value={profession}
          onChange={(event) => setProfession(event.target.value)}
          className="mt-5 w-full rounded-2xl border border-ink/20 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-accent"
          placeholder="Например: Senior Developer, Product Manager, Data Analyst..."
        />
        <button
          type="submit"
          className="mt-5 inline-flex rounded-full border border-accent bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-hover hover:bg-accent-hover"
        >
          Продолжить
        </button>
      </form>
    );
  }

  if (step === 6) {
    return (
      <ChoiceStep
        title={`Есть ли у вас опыт работы в ${country} или международный?`}
        options={[
          ["local", `Да, есть опыт в ${country}`],
          ["international", "Нет, но есть международный опыт"],
          ["none", "Только локальный опыт"]
        ]}
        onSelect={(value) => answer({ experience: value as Answers["experience"] })}
      />
    );
  }

  return (
    <ChoiceStep
      title="Как бы вы описали свой уровень английского?"
      options={[
        ["native", "Свободный / Близкий к носителю"],
        ["working", "Уверенный рабочий уровень"],
        ["speaking", "Разговорный"],
        ["basic", "Базовый"]
      ]}
      onSelect={(value) => answer({ english: value as Answers["english"] })}
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
      <h3 className="text-2xl font-semibold text-ink">{title}</h3>
      <div className="mt-5 grid gap-3">
        {options.map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => onSelect(value)}
            className="rounded-2xl border border-ink/20 bg-white p-5 text-left text-sm font-medium text-ink transition-colors hover:border-accent"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function QualifiedResult() {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-ink">Похоже, мы можем работать вместе.</h3>
      <p className="mt-4 text-base leading-7 text-muted">
        По вашим ответам мы подходим под формат сопровождения. На бесплатной консультации разберём вашу ситуацию,
        рынок и покажем, что реально, а что нет.
      </p>
      <a
        href={site.calendlyFree}
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex rounded-full border border-accent bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-hover hover:bg-accent-hover"
      >
        Записаться на бесплатный звонок
      </a>
    </div>
  );
}

function NotQualifiedResult({ watching }: { watching: boolean }) {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-ink">
        {watching ? "Похоже, вы пока в стадии разведки." : "Сопровождение под ключ пока не подойдёт."}
      </h3>
      <p className="mt-4 text-base leading-7 text-muted">
        {watching
          ? "Это нормально. Под ключ мы берём тех, кто готов начать поиск в ближайшие месяцы — это работа на 3–6 месяцев плотного процесса. Если пока просто смотрите — есть варианты помягче."
          : "Мы работаем с теми, у кого уже есть право работать в США или UK. Если разрешения пока нет — поиск работы через спонсорство визы это отдельная история, и мы с ней не помогаем. Но есть два варианта, как мы можем быть полезны."}
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        <ResultCard
          eyebrow="$79"
          title="Пройти курс"
          body="Метод выхода на международный рынок самостоятельно. 8 уроков, доступ навсегда."
          href={site.whop.course}
          cta="Смотреть курс"
        />
        <ResultCard
          eyebrow="$100"
          title="Записаться на консультацию"
          body="Час разбора вашей ситуации со мной лично. Что реально, что нет, куда двигаться."
          href={site.consultationWhop}
          cta="Записаться"
        />
      </div>
    </div>
  );
}

function ResultCard({
  eyebrow,
  title,
  body,
  href,
  cta
}: {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="rounded-2xl border border-ink/20 bg-white p-6">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h4 className="mt-3 text-xl font-semibold text-ink">{title}</h4>
      <p className="mt-3 text-sm leading-6 text-muted">{body}</p>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="mt-5 inline-flex rounded-full border border-accent bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent-hover hover:bg-accent-hover"
      >
        {cta}
      </a>
    </div>
  );
}
