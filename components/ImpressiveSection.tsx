"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicAcademyCollection = [
  {
    title: "Performance Training",
    description:
      "Develop stage confidence and expressive control through guided performance sessions that focus on presence, audience connection, and musical storytelling.",
  },
  {
    title: "Expert Mentorship",
    description:
      "Work closely with experienced musicians and industry mentors who provide personalized feedback, practical insights, and continuous guidance throughout your learning journey.",
  },
  {
    title: "Diverse Music Programs",
    description:
      "Choose from a broad range of thoughtfully designed courses covering vocals, instruments, music theory, and contemporary styles, suitable for beginners as well as advanced learners.",
  },
  {
    title: "Creative Growth",
    description:
      "Nurture your creative identity through composition, improvisation, and exploration, helping you discover and refine a sound that is uniquely your own.",
  },
  {
    title: "Modern Learning Experience",
    description:
      "Experience a balanced learning approach that blends classical musical foundations with modern techniques, interactive sessions, and real-world practice environments.",
  },
];

const ImpressiveSection = () => {
  return <StickyScroll content={musicAcademyCollection} />
};

export default ImpressiveSection;
