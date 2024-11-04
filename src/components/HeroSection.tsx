"use client";
// import Image from "next/image";

// import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useTextAnimation, { listofWords } from "@/hooks/useTextAnimation";

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

    const text = useTextAnimation(listofWords, 7000);
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [1, 0.1]);
    console.log(scrollYProgress);
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="max-width    gap-6">
                <div className="text-center  space-y-8 font-[family-name:var(--font-inter-var)] w-full">
                    <motion.h1 className="text-7xl font-[family-name:var(--font-inter-var)]  text-[#0F172A]  font-semibold">
                        <motion.span className="font-[family-name:var(--font-inter-var)]">
                            Obafemi Awolowo{" "}
                        </motion.span>
                        <motion.span className="">
                            University
                        </motion.span>
                    </motion.h1>
                    <p className=" text-lg mt-4 text-slate-800/70">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem illum iure officia debitis accusantium
                        exceptu
                    </p>

                    <div className="flex  space-y-3 justify-center items-center p-5 rounded-xl bg-indigo-700/60 border-indigo-700/10 border  h-[17rem]">
                        <motion.p
                            style={{ scaleX: x }}
                            className="lg:text-[4.6rem] space-x-2 text-xl lg:space-x-5 text-center font-semibold"
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
                        {/* <span className="text-[6rem] text-center font-semibold">
                            Great Ife
                        </span> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
