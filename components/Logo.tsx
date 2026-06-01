import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 text-white" aria-label="CareerPlus home">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold">
        C+
      </span>
      <span className="text-base font-bold tracking-tight">CareerPlus</span>
    </Link>
  );
}
