import type { Metadata } from "next";
import { SalaryCalculator } from "@/components/SalaryCalculator";

export const metadata: Metadata = {
  title: "Калькулятор зарплаты",
  description: "Оцените ориентир по международному рынку и разницу между текущим уровнем и целевой вилкой.",
  alternates: {
    canonical: "/calculator"
  }
};

export default function CalculatorPage() {
  return <SalaryCalculator />;
}
