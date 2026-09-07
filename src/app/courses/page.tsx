import SectionTitle from "../../components/SectionTitle";
import CourseExplorer from "../../components/CourseExplorer";
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
  {
    id: 3,
    title: "Computer Networks",
    code: "10301233",
    credits: 3,
    isOpen: true,
  },
  {
    id: 4,
    title: "Database Systems",
    code: "10301234",
    credits: 3,
    isOpen: true,
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-12">
      <SectionTitle />
      <CourseExplorer courses={courses} />
    </main>
  );
}