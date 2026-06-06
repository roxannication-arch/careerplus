"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { site } from "@/lib/site";

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(site.consultationFormspree, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      window.location.href = site.consultationWhop;
    } catch {
      setStatus("error");
    }
  }

  return (
    <form id="consultation-form" onSubmit={handleSubmit} className="rounded-[2rem] border border-ink/20 bg-white p-6 md:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">Анкета консультации</p>
      <div className="mt-8 grid gap-5">
        <label className="grid gap-2 text-sm font-medium text-ink">
          Имя *
          <input required name="name" className="rounded-2xl border border-ink/20 bg-page px-4 py-3 text-sm outline-none focus:border-accent" placeholder="Как к вам обращаться" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Email *
          <input required type="email" name="email" className="rounded-2xl border border-ink/20 bg-page px-4 py-3 text-sm outline-none focus:border-accent" placeholder="Куда отправить подтверждение" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Telegram или WhatsApp
          <input name="messenger" className="rounded-2xl border border-ink/20 bg-page px-4 py-3 text-sm outline-none focus:border-accent" placeholder="@username или номер" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Профессия / должность *
          <input required name="profession" className="rounded-2xl border border-ink/20 bg-page px-4 py-3 text-sm outline-none focus:border-accent" placeholder="Например: Product Manager, Data Analyst" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          На какой рынок целитесь? *
          <input required name="target_market" className="rounded-2xl border border-ink/20 bg-page px-4 py-3 text-sm outline-none focus:border-accent" placeholder="US, UK, remote, EU..." />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Сколько уже ищете работу за рубежом?
          <select name="search_duration" className="rounded-2xl border border-ink/20 bg-page px-4 py-3 text-sm outline-none focus:border-accent">
            <option value="">Выберите вариант</option>
            <option>Только начинаю</option>
            <option>До 1 месяца</option>
            <option>1–3 месяца</option>
            <option>3–6 месяцев</option>
            <option>Больше 6 месяцев</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          С чем главная сложность сейчас?
          <textarea name="main_challenge" rows={5} className="rounded-2xl border border-ink/20 bg-page px-4 py-3 text-sm outline-none focus:border-accent" placeholder="Например: не понимаю рынок, нет ответов, сложно с интервью..." />
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-fit items-center justify-center rounded-full border border-accent bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-hover hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Отправляем..." : "Продолжить к оплате →"}
        </button>
        <p className="text-sm leading-6 text-muted">
          После заполнения анкеты вы попадёте на страницу оплаты. После оплаты сразу откроется выбор времени для звонка.
          Ссылка также придёт на вашу почту.
        </p>
        {status === "error" ? (
          <p className="rounded-2xl border border-accent/40 bg-accent/10 p-4 text-sm text-ink">
            Что-то пошло не так, попробуйте ещё раз.
          </p>
        ) : null}
      </div>
    </form>
  );
}
