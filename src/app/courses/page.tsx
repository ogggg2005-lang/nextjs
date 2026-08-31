import SectionTitle from "../../components/SectionTitle";
import CourseCard from "../../components/CourseCard";
import type { Course } from "../../types/course";

const courses: Course[] = [
  {
    id: 1,
    title: "Web Technology",
    code: "10301231",
    credits: 3,
    isOpen: true,
  },
  {
    id: 2,
    title: "Data Structures",
    code: "10301232",
    credits: 3,
    isOpen: false,
  },
];

export default function CoursesPage() {
  return (
    <main>
      <SectionTitle />
      <section className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
}