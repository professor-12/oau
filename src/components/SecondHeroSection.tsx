"use client";
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SecondHeroSection = () => {
    const { scrollYProgress } = useScroll();
    const value = useTransform(
        scrollYProgress,
        [0, 0.5, 0.8, 1],
        [0.8, 1, 1, 0.8]
    );
    return (
        <div className=" p-0 space-y-7  bg-white  py-12 bg-no-repeat object-cover w-full">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 200 }}
                transition={{ duration: 0.4 }}
                className="text-center text-slate-700 font-[family-name:var(--font-quicksand)] text-5xl mb-4 font-semibold "
            >
                Study at OAU
            </motion.h1>
            <motion.div style={{ scaleX: value }} className="max-width">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid gap-6 lg:grid-cols-3"
                >
                    {new Array(3).fill(null).map((_, index) => {
                        return (
                            <div
                                key={index}
                                className="shadow border hover:scale-105 duration-500 transition-all cursor-default rounded-lg"
                            >
                                <div>
                                    <Image
                                        src="/image.png"
                                        className=""
                                        alt=""
                                        width={600}
                                        height={600}
                                    />
                                </div>
                                <h1 className="text-xl p-6 px-3">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing{" "}
                                </h1>
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SecondHeroSection;
