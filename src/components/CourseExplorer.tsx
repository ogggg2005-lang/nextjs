"use client"; 
 
import { useState, type ChangeEvent } from "react"; 
import type { Course } from "@/types/course"; 
import CourseCard from "./CourseCard";
 
type CourseExplorerProps = { 
  courses: Course[]; 
}; 
 
export default function CourseExplorer({ courses }: CourseExplorerProps) { 
  const [keyword, setKeyword] = useState(""); 
  const filteredCourses = courses.filter((course) => {
    const searchText = `${course.title} ${course.code}`.toLowerCase();
    return searchText.includes(keyword.toLowerCase());
  });
 
  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) { 
    setKeyword(event.target.value); 
  } 
 
  return ( 
    <div className="space-y-6">
      <input 
        type="search" 
        aria-label="ค้นหารายวิชา" 
        value={keyword} 
        onChange={handleKeywordChange} 
        placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา" 
        className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
      />

      {filteredCourses.length > 0 ? (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </section>
      ) : (
        <p className="py-8 text-center text-zinc-600 dark:text-zinc-400">
          ไม่พบรายวิชาที่ค้นหา
        </p>
      )}
    </div>
  ); 
} 