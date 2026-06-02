import { ButtonLink } from "./ButtonLink";
import type { Course } from "@/lib/courses";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-ink/20 bg-white p-8">
      <div className="mb-5 inline-flex w-fit rounded-full border border-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-accent">
        {course.format}
      </div>
      <h3 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-ink">{course.title}</h3>
      <p className="mt-4 flex-1 text-base leading-7 text-muted">{course.description}</p>
      <div className="mt-7 grid gap-2 border-y border-ink/15 py-4 text-sm text-muted sm:grid-cols-3">
        <span>{course.duration}</span>
        <span>{course.format}</span>
        <span className="font-bold text-accent">{course.price}</span>
      </div>
      <ButtonLink href={course.href} className="mt-8 w-fit">
        Подробнее
      </ButtonLink>
    </article>
  );
}
