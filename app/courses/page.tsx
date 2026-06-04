import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CourseCard } from "@/components/CourseCard";
import { SectionHeader } from "@/components/SectionHeader";
import { courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Курсы для самостоятельного поиска",
  description: "Курсы CareerPlus для самостоятельного выхода на международный рынок.",
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
    <section className="hero-surface border-b border-ink/15 py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Обучение"
          title="Курсы"
          description="Программы для тех, кто хочет идти на международный рынок сам, но не наугад. Метод, шаблоны, чек-листы."
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
