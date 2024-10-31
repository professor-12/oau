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
        <div className=" p-0 space-y-7 relative  bg-white  py-12 bg-no-repeat object-cover w-full">
            <Image src="/svg/Bg.svg" className="absolute -z-1" width={200} height={200} alt="" />
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
                                <div className="p-6 px-3">
                                    <h1 className="text-xl font-semibold">
                                        Under graduates
                                    </h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quas ducimus in voluptate, nemo quam magnam, nihil consequuntur quos dicta sapiente id, cupiditate eligendi obcaecati impedit ullam! Delectus, pariatur ipsum!</p>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SecondHeroSection;
