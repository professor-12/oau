"use client";
// import Image from "next/image";

// import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import useTextAnimation, { listofWords } from "@/hooks/useTextAnimation";

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Delay between each child animation
                // when: "beforeChildren", // Start animating children after parent is visible
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: -200 },
        visible: { opacity: 1, y: 0 },
    };

    const text = useTextAnimation(listofWords);
    return (
        <div className="h-screen  bg-gradient-to-tr from-[#6c8bce] via-violet-500 to-blue-600">
            <div className="w-[20rem] h-[20rem] bg-gradient-to-br from-transparent to-indigo-600 via-violet-00 blur-[100px] absolute top-20 left-0"></div>
            <div className="max-width py-12   gap-6">
                <div className="text-center  space-y-6 font-[family-name:var(--font-inter)] w-full">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1] }}
                        className="text-7xl  text-white font-semibold"
                    >
                        Obafemi Awolowo{" "}
                        <span className="text-[white] block ">University</span>
                    </motion.h1>
                    <p className="text-white text-lg mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem illum iure officia debitis accusantium
                        excepturi modi ea exercitationem veritatis. Dolorum,
                        deleniti? Id dolor aperiam voluptatum quis itaque porro
                        beatae eos.
                    </p>

                    <div className="flex  space-y-3 justify-center items-center p-5 rounded-xl bg-indigo-700/30 border-indigo-300/40 border  h-[20rem]">
                        <motion.p className="lg:text-[4.6rem] space-x-2 text-xl lg:space-x-5 text-center font-semibold">
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
                                                    className="font-[fontName:var('--font-abril')] text-white/70"
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
