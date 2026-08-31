import type { Course } from "../types/course";

type CourseCardProps = {
  course: Course;
  description?: string;
};

export default function CourseCard({
  course,
  description,
}: CourseCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            {course.code}
          </span>
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
              course.isOpen
                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400"
                : "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400"
            }`}
          >
            {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
          </span>
        </div>

        <h2 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {course.title}
        </h2>

        {description && (
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        <span>หน่วยกิต</span>
        <span className="font-medium text-zinc-900 dark:text-zinc-100">
          {course.credits} หน่วยกิต
        </span>
      </div>
    </article>
  );
}