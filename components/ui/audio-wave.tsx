"use client";
import { motion } from "framer-motion";
import React from "react";

export const AudioWave = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none overflow-hidden">
            <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[100vw] h-[200px] border-t border-indigo-500/20 rounded-[100%]"
                        style={{ top: `${50 + i * 5}%` }}
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, 1, 0],
                            scaleY: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5,
                        }}
                    />
                ))}

                {/* Horizontal "Frequency" lines */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`freq-${i}`}
                        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
                        style={{ top: `${40 + i * 10}%` }}
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                            scaleX: [0.9, 1.1, 0.9],
                        }}
                        transition={{
                            duration: 8 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
