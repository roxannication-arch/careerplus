export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details key={item.question} className="group rounded-2xl border border-border bg-secondary p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-white">
            {item.question}
            <span className="text-accent transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 text-sm leading-6 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
