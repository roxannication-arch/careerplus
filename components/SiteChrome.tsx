"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { ConsultationQuiz } from "./ConsultationQuiz";
import { Footer } from "./Footer";
import { Header } from "./Header";

const standaloneRoutes = new Set(["/courses/work-abroad"]);

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isStandalone = standaloneRoutes.has(pathname);

  return (
    <>
      {isStandalone ? null : <Header />}
      <main>{children}</main>
      {isStandalone ? null : <Footer />}
      {isStandalone ? null : <ConsultationQuiz />}
    </>
  );
}
