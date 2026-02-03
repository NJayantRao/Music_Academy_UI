"use client";
import React from "react";
import courseData from "@/data/music-courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedSection = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured,
  );
  return (
    <div>
      <div className="py-20 bg-background relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full bg-primary/5 blur-3xl -z-10" />

        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
        <div className="mt-16 mx-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-7xl mx-auto">
            {featuredCourses.map((course: Course) => {
              return (
                <div key={course.id} className="h-full">
                  <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full">
                    <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                      <h2 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
                        {course.title}
                      </h2>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow leading-relaxed">
                        {course.description}
                      </p>
                      <div className="mt-6">
                        <Link
                          href={`courses/${course.slug}`}
                          className="text-sm font-medium text-white bg-black dark:bg-white dark:text-black px-4 py-2 rounded-full hover:opacity-80 transition-opacity"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </BackgroundGradient>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link
            className="px-6 py-3 rounded-full border border-neutral-600 text-neutral-300 hover:bg-neutral-800 transition duration-300 font-medium"
            href={"/courses"}
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
