"use client";

import { useState, type ChangeEvent } from "react";
import type { Course } from "@/types/course";
import CourseCard from "./CourseCard";

type CourseExplorerProps = {
    courses: Course[];
};

export default function CourseExplorer({ courses }: CourseExplorerProps) {
    const [keyword, setKeyword] = useState("");

    function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
        setKeyword(event.target.value);
    }

    const searchText = keyword.trim().toLowerCase();
    // เก็บผลการค้นหาไว้ที่ตัวแปรใหม่
    const visibleCourses = courses.filter(
        (course) =>
            //ค้นหาตามชื่อวิชา หรือ รหัสวิชา
            course.title.toLowerCase().includes(searchText) ||
            course.code.includes(searchText),
    );

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

            {visibleCourses.length > 0 ? (
                <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {visibleCourses.map((course) => (
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