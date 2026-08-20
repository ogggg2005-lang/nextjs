import Image from "next/image";

type Course = {
  id: number;
  code: string;
  title: string;
  credits: number;
  isOpen: boolean;
};

export default function Home() {
  const siteName: string = "DevSkill Path";
  const description: string = "เส้นทางการเรียนรู้และฝึกทักษะการเขียนโปรแกรมสำหรับสายวิทยาการคอมพิวเตอร์";
  const isOpen: boolean = true;

  const topics: string[] = [
    "HTML",
    "CSS",
    "TypeScript",
    "Next.js",
  ];

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

  const courseCount: number = courses.length;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left my-8 w-full">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {siteName}
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {description}
          </p>

          <div className="w-full bg-zinc-100 dark:bg-zinc-900 p-4 rounded-md space-y-1">
            <p className="text-zinc-800 dark:text-zinc-200">
              จำนวนรายวิชา: {courseCount}
            </p>
            <p className="text-zinc-800 dark:text-zinc-200">
              สถานะระบบ: {isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}
            </p>
          </div>

          <section className="w-full border-t border-zinc-200 dark:border-zinc-800 pt-4 mt-2">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-zinc-50">
              รายวิชาทั้งหมด
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {courses.map((course) => (
                <article
                  key={course.id}
                  className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-2 text-left"
                >
                  <h3 className="font-semibold text-lg text-black dark:text-zinc-50">
                    {course.title}
                  </h3>
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
            </div>
          </section>

          <section className="w-full border-t border-zinc-200 dark:border-zinc-800 pt-4 mt-2">
            <h2 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">
              หัวข้อการเรียนรู้
            </h2>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
              {topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </section>

          <section className="w-full border-t border-zinc-200 dark:border-zinc-800 pt-4 mt-2">
            <h2 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">
              กลุ่มผู้ใช้งาน
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              เว็บไซต์นี้เหมาะสำหรับนักศึกษาและผู้ที่สนใจด้านวิทยาการคอมพิวเตอร์ ที่ต้องการพัฒนาทักษะ Data Structures, Algorithms, และ Software Development ตาม Roadmap ตั้งแต่พื้นฐานจนถึงระดับทำงานจริง
            </p>
          </section>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}