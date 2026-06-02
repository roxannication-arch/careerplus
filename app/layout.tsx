import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ConsultationQuiz } from "@/components/ConsultationQuiz";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "CareerPlus — работа за рубежом для профессионалов",
    template: "%s | CareerPlus"
  },
  description:
    "CareerPlus помогает русскоязычным специалистам выходить на международный рынок труда под ключ или через структурированные курсы.",
  keywords: [
    "CareerPlus",
    "работа за рубежом",
    "международный рынок труда",
    "digital specialists",
    "career consulting"
  ],
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
      en: "/en"
    }
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: site.url,
    siteName: site.name,
    title: "CareerPlus — работа за рубежом для профессионалов",
    description:
      "Под ключ или через структурированные курсы: выход на международный рынок труда для русскоязычных специалистов.",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "CareerPlus"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CareerPlus — работа за рубежом для профессионалов",
    description: "Сопровождение и курсы для выхода на международный рынок труда.",
    images: ["/og.svg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ConsultationQuiz />
      </body>
    </html>
  );
}
