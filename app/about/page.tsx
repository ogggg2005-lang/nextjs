export default function AboutPage() {
  const topics: string[] = [
    "HTML",
    "CSS",
    "TypeScript",
    "Next.js",
  ];

  return (
    <main className="p-8 max-w-3xl mx-auto font-sans space-y-6">
      <h1 className="text-2xl font-bold text-black dark:text-zinc-50">
        เกี่ยวกับเรา (About Us)
      </h1>

      <section className="space-y-2 border-t border-zinc-200 dark:border-zinc-800 pt-4">
        <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
          กลุ่มผู้ใช้งาน
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          เว็บไซต์นี้เหมาะสำหรับนักศึกษาและผู้ที่สนใจด้านวิทยาการคอมพิวเตอร์ ที่ต้องการพัฒนาทักษะ Data Structures, Algorithms, และ Software Development ตาม Roadmap ตั้งแต่พื้นฐานจนถึงระดับทำงานจริง
        </p>
      </section>

      <section className="space-y-2 border-t border-zinc-200 dark:border-zinc-800 pt-4">
        <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
          หัวข้อการเรียนรู้
        </h2>
        <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}