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

    return (
        <div className=" p-0 space-y-7 relative  bg-white  py-[6rem] bg-no-repeat object-cover w-full">
            <Image src="/svg/Bg.svg" className="absolute -z-1" width={200} height={200} alt="" />
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 200 }}
                transition={{ duration: 0.5 }}
                className="text-center text-slate-700 font-[family-name:var(--font-quicksand)] text-5xl mb-4 font-semibold"
            >
                Studying at OAU
            </motion.h1>
            <motion.div className="max-width">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid gap-6 lg:grid-cols-3"
                >
                    {studyAtOau.map(({ body, image, title }, index) => {
                        return (
                            <motion.div
                                whileInView={{ y: [-100, 0], opacity: [0, 1], transition: { duration: .3 } }}

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
                                <div className="p-7 px-4">
                                    <h1 className="text-xl text-slate-800 font-semibold">
                                        {title}
                                    </h1>
                                    <p className="text-sm">{body}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SecondHeroSection;
