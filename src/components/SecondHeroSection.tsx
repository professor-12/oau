"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { studyAtOau } from "@/constants";
import Link from "next/link";



const SecondHeroSection = () => {
    return (
        <div className=" p-0 space-y-7 relative  bg-white  py-[6rem] bg-no-repeat object-cover w-full">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 200 }}
                transition={{ duration: 0.5 }}
                className="text-center text-slate-700 font-[family-name:var(--font-quicksand)] text-3xl md:text-5xl mb-4 font-bold"
            >
                Studying at OAU
            </motion.h1>
            <motion.div className="max-width">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >

                    {studyAtOau.map(({ body, image, title, link }, index) => {
                        return (
                            <Link className="inline-block" href={link} key={index}>
                                <motion.div
                                    className="border hover:scale-105 duration-500 transition-all cursor-pointer rounded-xl overflow-hidden"
                                >
                                    <div className="relative">
                                        <Image
                                            src={image}
                                            className="object-cover w-full aspect-video"
                                            alt=""
                                            width={500}

                                            height={500}
                                        />
                                    </div>
                                    <div className="p-7 px-4">
                                        <h1 className="text-xl text-slate-800 font-semibold">
                                            {title}
                                        </h1>
                                        <p className="text-sm max-md:text-xs">{body}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SecondHeroSection;
