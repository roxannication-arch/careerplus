import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CourseCard } from "@/components/CourseCard";
import { SectionHeader } from "@/components/SectionHeader";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Курсы",
  description: "Структурированные программы CareerPlus для самостоятельного выхода на международный рынок.",
  alternates: {
    canonical: "/courses"
  },
  openGraph: {
    title: "Курсы CareerPlus",
    description: "Программы для самостоятельного выхода на международный рынок труда."
  }
};

export default function CoursesPage() {
  return (
    <section className="hero-surface py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Обучение"
          title="Курсы"
          description="Структурированные программы для самостоятельного выхода на международный рынок."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
