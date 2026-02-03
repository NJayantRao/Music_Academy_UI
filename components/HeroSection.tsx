"use client";
import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";
import { motion } from "framer-motion";
import { AudioWave } from "./ui/audio-wave";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[45rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-black">
      {/* Cinematic Spotlights */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 opacity-80"
        fill="white"
      />
      <Spotlight
        className="-top-40 right-0 md:right-60 md:-top-20 opacity-40"
        fill="#8B5CF6" // Violet
      />

      {/* Audio Wave Background */}
      <AudioWave />

      <div className="p-4 relative z-10 w-full text-center">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Master the Art of Music
        </motion.h1>

        {/* Staggered Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto leading-relaxed"
        >
          Dive into immersive music programs designed to shape skill,
          confidence, and creativity. Whether you're just starting out or
          refining your craft, join us to turn passion into performance.
        </motion.p>

        {/* Pulsing CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <Link href={"/courses"}>
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Button
                borderRadius="1.75rem"
                className="bg-black/50 dark:bg-black/50 text-white border-neutral-200 dark:border-slate-800 font-semibold backdrop-blur-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-shadow duration-300"
              >
                Explore Courses
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default HeroSection;
