import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 text-ink" aria-label="CareerPlus home">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent bg-accent text-sm font-bold text-white">
        C+
      </span>
      <span className="text-base font-extrabold uppercase tracking-tight">CareerPlus</span>
    </Link>
  );
}
