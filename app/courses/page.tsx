type Course = {
  id: number;
  code: string;
  title: string;
  credits: number;
  isOpen: boolean;
};

const courses: Course[] = [
  {
    id: 1,
    code: "10301231",
    title: "Web Technology",
    credits: 3,
    isOpen: true,
  },
  {
    id: 2,
    code: "10301232",
    title: "Database Systems",
    credits: 3,
    isOpen: false,
  },
  {
    id: 3,
    code: "10301233",
    title: "Data Structures & Algorithms",
    credits: 4,
    isOpen: true,
  },
];

export default function CoursesPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-6 text-black dark:text-zinc-50">
        รายวิชาทั้งหมด
      </h1>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {courses.map((course) => (
          <article
            key={course.id}
            className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-2 text-left"
          >
            <h2 className="font-semibold text-lg text-black dark:text-zinc-50">
              {course.title}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              รหัสวิชา: {course.code}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {course.credits} หน่วยกิต
            </p>
            <p
              className={`text-sm font-medium ${
                course.isOpen ? "text-green-600 dark:text-green-400" : "text-red-500"
              }`}
            >
              {course.isOpen ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}