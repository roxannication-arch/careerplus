import { ButtonLink } from "./ButtonLink";
import type { Course } from "@/lib/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-secondary p-8">
      <div className="mb-5 inline-flex w-fit rounded-full border border-border px-3 py-1 text-xs text-muted">
        {course.format}
      </div>
      <h3 className="text-2xl font-semibold tracking-tight text-white">{course.title}</h3>
      <p className="mt-4 flex-1 text-base leading-7 text-muted">{course.description}</p>
      <div className="mt-6 grid gap-2 text-sm text-muted sm:grid-cols-3">
        <span>{course.duration}</span>
        <span>{course.format}</span>
        <span className="font-semibold text-white">{course.price}</span>
      </div>
      <ButtonLink href={course.href} className="mt-8 w-fit">
        Подробнее
      </ButtonLink>
    </article>
  );
}
