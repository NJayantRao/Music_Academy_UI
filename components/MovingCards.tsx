"use client"

import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote:
      "Joining this academy completely transformed my understanding of music. The instructors don’t just teach notes—they teach emotion, discipline, and confidence. I now perform with clarity and joy.",
    name: "Ananya Sharma",
    title: "Piano Student",
  },
  {
    quote:
      "The vocal training here helped me discover my true range and control. The personalized feedback and stage exposure pushed me beyond what I thought I was capable of.",
    name: "Rohit Mehta",
    title: "Vocal Music Student",
  },
  {
    quote:
      "From music theory to live performance, every class feels purposeful. The learning environment is inspiring, supportive, and deeply professional.",
    name: "Sneha Iyer",
    title: "Carnatic Music Student",
  },
  {
    quote:
      "As a beginner guitarist, I was nervous at first—but the mentors made learning simple and exciting. Within months, I was confidently playing complete compositions.",
    name: "Arjun Verma",
    title: "Guitar Student",
  },
  {
    quote:
      "This academy doesn’t just train musicians—it builds artists. The discipline, creativity, and exposure I gained here shaped my musical journey profoundly.",
    name: "Kavya Nair",
    title: "Advanced Violin Student",
  },
];

const MovingCards = () => {
  return (
   <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
     <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
     <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
     <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
     <div className="w-full max-w-6xl">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
        />
        </div>
        </div>
    </div>
  )
}

export default MovingCards