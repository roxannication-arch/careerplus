import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "border-accent bg-accent text-white hover:border-accent-hover hover:bg-accent-hover",
  secondary: "border-border bg-secondary text-white hover:border-accent hover:text-white",
  ghost: "border-border bg-transparent text-white hover:border-accent hover:text-white"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center rounded-full border px-8 py-3.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`;

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
