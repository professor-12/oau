"use client";
// import Image from "next/image";

// import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useTextAnimation from "@/hooks/useTextAnimation";
import { listofWords } from "@/constants";

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: -200 },
        visible: { opacity: 1, y: 0 },
    };

    const text = useTextAnimation(listofWords, 5000);
    const { scrollY } = useScroll();
    const x = useTransform(scrollY, [0, 400], [1, 0.01]);

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="max-width    gap-6">
                <div className="text-center  space-y-8 font-[family-name:var(--font-inter-var)] w-full">
                    <motion.h1 className="lg:text-6xl text-5xl xl:text-7xl font-[family-name:var(--font-inter-var)]  text-[#0F172A]  font-semibold">
                        <motion.span className="font-[family-name:var(--font-inter-var)]">
                            Obafemi Awolowo{" "}
                        </motion.span>
                        <motion.span className="">
                            University
                        </motion.span>
                    </motion.h1>
                    <p className="md:text-lg  mt-4 text-slate-800/70 text-balance">
                        Obafemi Awolowo University (OAU) in Ile-Ife, Nigeria, was established in 1961-62 based on recommendations from a 1959 educational commission led by Sir Eric Ashby. The University’s Provisional Council was formally inaugurated on June 8, 1961, with Chief Rotimi Williams as chairman.
                    </p>

                    <div className="flex  space-y-3 justify-center items-center p-5 rounded-xl bg-indigo-700/60 border-indigo-700/10 border  h-[17rem]">
                        <motion.p
                            style={{ scaleX: x }}
                            className="lg:text-[3.5rem] xl:text-[4.6rem] text-5xl max-md:flex flex-col space-x-2  lg:space-x-5 text-center font-semibold"
                        >
                            {text.split(" ").map((word, index) => {
                                return (
                                    <motion.span
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className=""
                                        key={index + word}
                                    >
                                        {word.split("").map((text) => {
                                            return (
                                                <motion.span
                                                    className="font-[family-name:var(--font-abril)] text-white/70"
                                                    key={text}
                                                    variants={itemVariants}
                                                >
                                                    {text}
                                                </motion.span>
                                            );
                                        })}
                                    </motion.span>
                                );
                            })}
                        </motion.p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
