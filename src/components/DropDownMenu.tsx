"use client";
import React from "react";
import { motion } from "framer-motion";

export const listofNavLinks = [{}];
const DropDownMenu = () => {
    return (
        <motion.div
            className="bg-white bg:backdrop-blur-lg backdrop-blur-3xl fixed w-full z-[100] left-0 bottom-0 inset-0 h-screen top-20"
            animate={{ y: 0 }}
            transition={{ stiffness: .1 }}
            exit={{ y: "-100%" }}
            initial={{ y: "-100%" }}
        >
            <div className="max-width flex h-[80vh] gap-5">
                <motion.ul
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0, x: -20 },
                        show: {
                            opacity: 1,
                            x: 0,
                            transition: { staggerChildren: 0.05 },
                        },
                    }}
                    className="-r-4 pr-8 py-12 w-1/3  font-mono cursor-pointer space-y-8 text-5xl font-semibold  justify-center flex flex-col h-full"
                >
                    <motion.li
                        variants={{
                            hidden: { x: 200, opacity: 0 },
                            show: { x: 0, opacity: 1 },
                        }}
                    >
                        Students
                    </motion.li>
                    <motion.li
                        variants={{
                            hidden: { x: -200, opacity: 0 },
                            show: { x: 0, opacity: 1 },
                        }}
                    >
                        Staff
                    </motion.li>
                    <motion.li
                        variants={{
                            hidden: { x: 200, opacity: 0 },
                            show: { x: 0, opacity: 1 },
                        }}
                    >
                        Undergraduates
                    </motion.li>
                    <motion.li
                        variants={{
                            hidden: { x: -200, opacity: 0 },
                            show: { x: 0, opacity: 1 },
                        }}
                    >
                        Other Links
                    </motion.li>
                </motion.ul>
                <div className="bg-black h-full w-[4px]"></div>
                <div className="p-6 w-2/3 flex h-full items-center">
                    {/* Content goes here */}
                    <div className="w-full space-y-6">
                        <h1 className="text-3xl font-medium text-neutral-600">
                            Student
                        </h1>
                        <ul className="divide-y-2  divide-slate-700  divide ">
                            <li className="p-4 py-6 text-xl  hover:text-blue-800 cursor-pointer">
                                Undergraduate
                            </li>
                            <li className="p-4 py-6 text-xl hover:text-blue-800 cursor-pointer">
                                Post Graduate
                            </li>
                            <li className="p-4 py-6 text-xl hover:text-blue-800 cursor-pointer">
                                avjd
                            </li>
                            <li className="p-4 py-6 text-xl hover:text-blue-800 cursor-pointer">
                                avjd
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default DropDownMenu;
