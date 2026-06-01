export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-secondary p-6">
      <div className="text-3xl font-semibold tracking-tight text-white">{value}</div>
      <p className="mt-2 text-sm leading-6 text-muted">{label}</p>
    </div>
  );
}
