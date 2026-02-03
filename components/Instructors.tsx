"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const colors = [
  "#EC4899", // hot pink spotlight
  "#8B5CF6", // neon purple
  "#22D3EE", // stage cyan
  "#F59E0B", // warm amber light
  "#10B981", // energy green
];

const instructors = [
  {
    id: 1,
    name: "Arjun Mehta",
    designation: "Piano Instructor",
    image:
      "https://images.unsplash.com/photo-1653055645127-54ec96add7b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwaW1hZ2VzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Neha Iyer",
    designation: "Vocal Music Coach",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Cody Scott",
    designation: "Guitar & Music Theory Instructor",
    image:
      "https://images.unsplash.com/photo-1620000617482-821324eb9a14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Ananya Rao",
    designation: "Carnatic Music Specialist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Vikram Singh",
    designation: "Tabla & Percussion Instructor",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    name: "Kavya Nair",
    designation: "Violin & Performance Coach",
    image:
      "https://images.unsplash.com/photo-1653379672421-40c464f335e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjB3b21lbiUyMGluZGlhbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const WavyBg = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground
        colors={colors}
        waveWidth={30}
        backgroundFill="black"
        blur={8}
        speed="slow"
        waveOpacity={0.5}
      >
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default WavyBg;
