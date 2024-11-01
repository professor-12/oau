"use client";
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const studyAtOau = [
    {
        image: "", title: "Undergraduate Admissions", body: "Whatever you want from your University experience, you will find it at Obafemi Awolowo University.Learn more about our Undergraduate Program."
    },
    {
        image: "", title: "Graduate Admissions", body: "Ready to prepare for professional life, boost your career, push yourself to new frontiers of knowledge by enrolling in any of our Postgraduate Programs."

    },
    {
        image: "", title: "Continuing Education", body: "We strive to reach out to diverse populations and varying student profiles with challenging, and rewarding programs to enhance employability and professionalism."
    },

]
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
                    {studyAtOau.map(({ body, image, title }, index) => {
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
                                        {title}
                                    </h1>
                                    <p>{body}</p>
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
