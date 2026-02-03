"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

const webinars = [
  {
    title: "Foundations of Music Theory",
    description:
      "Build a strong musical foundation by understanding scales, chords, rhythm, and harmony.",
    link: "foundations-of-music-theory",
  },
  {
    title: "Songwriting & Composition Masterclass",
    description:
      "Learn how to craft meaningful lyrics and melodies that connect with listeners.",
    link: "songwriting-composition-masterclass",
  },
  {
    title: "Instrument Technique & Practice Strategies",
    description:
      "Discover effective practice routines and advanced techniques to elevate your performance.",
    link: "instrument-technique-practice",
  },
  {
    title: "Introduction to Music Production",
    description:
      "Explore the basics of recording, mixing, and producing music using modern tools.",
    link: "introduction-to-music-production",
  },
  {
    title: "Stage Presence & Live Performance",
    description:
      "Learn how to engage your audience and perform with confidence on stage.",
    link: "stage-presence-live-performance",
  },
  {
    title: "Building Your Music Career Online",
    description:
      "Understand branding, social media, and digital platforms to grow your audience.",
    link: "building-your-music-career-online",
  },
];

const Webinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <HoverEffect items={webinars} />
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Webinars;
