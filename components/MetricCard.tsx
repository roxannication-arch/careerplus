export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.75rem] border border-ink/20 bg-white p-6">
      <div className="text-4xl font-extrabold tracking-tight text-accent">{value}</div>
      <p className="mt-3 text-sm font-medium leading-6 text-muted">{label}</p>
    </div>
  );
}
