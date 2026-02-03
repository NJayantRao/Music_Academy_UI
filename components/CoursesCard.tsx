"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import courseData from "@/data/music-courses.json";
import Image from "next/image";

const CoursesCard = () => {
  return (
    <div className="min-h-screen bg-background py-12 pt-36 relative">
      <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white relative z-10">
        All courses ({courseData.courses.length})
      </h1>
      <div className="flex flex-wrap gap-8 justify-center max-w-7xl mx-auto px-4 relative z-10">
        {courseData.courses.map((course) => {
          return (
            <CardContainer key={course.id} className="inter-var">
              <CardBody className="bg-zinc-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-violet-500/[0.1] dark:bg-zinc-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-3xl p-8 border hover:border-violet-500/40 transition-colors duration-500">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-neutral-600 dark:text-white font-sans tracking-tight"
                >
                  {course.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-4 dark:text-neutral-400 leading-relaxed tracking-wide"
                >
                  {course.description}
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={5}
                  rotateZ={-2}
                  className="w-full mt-8"
                >
                  <Image
                    src={course.image}
                    height="1000"
                    width="1000"
                    className="h-64 w-full object-cover rounded-2xl group-hover/card:shadow-xl shadow-black/50"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-12">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-6 py-3 rounded-full text-xs font-semibold dark:text-white hover:text-violet-400 transition-colors uppercase tracking-widest cursor-pointer"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-8 py-3 rounded-full bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-violet-500 hover:text-white dark:hover:bg-violet-500 dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-violet-500/20 cursor-pointer"
                  >
                    Enroll Now
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesCard;
