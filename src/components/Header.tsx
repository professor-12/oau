"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { Menu, Notification } from "@/app/lib/svgs";
import DropDownMenu from "./DropDownMenu";

const navlinks = [
    {
        title: "Students",
        links: [
            { name: "Undergraduates", url: "", },
            { name: "Post graduates", url: "" },
            { name: "Executive MBA", url: "" },
        ],
    },
    {
        title: "Staff",
        links: [
            {
                name: "Staff Login",
                url: "",
            },
            { name: "Bursary", url: "" },

        ],
    },
];

const Header = () => {
    const [selected, setSelected] = useState<null | number>(null);
    return (
        <div className="bg-white/20   z-[9999] fixed  right-0 left-0 top-0 backdrop-blur-lg border border-slate-500/20 drop-shadow-lg text-black">
            <div className="max-width justify-between flex items-center">
                <div className="flex items-center gap-12">
                    <Logo />
                </div>
                <div className="flex items-center gap-8">
                    <div onMouseLeave={() => setSelected(null)} className="flex gap-12 items-center text-lg relative">
                        <Bridge />
                        {
                            navlinks.map(({ links, title }, indx) => (

                                <p onMouseEnter={() => { setSelected(indx) }} key={title} className="text-gray-600 flex items-center gap-3 cursor-pointer">
                                    <span>{title}</span>
                                    <svg
                                        className={`${selected === indx ? "" : "rotate-180"} duration-200 transition-all`}
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 256 256"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
                                    </svg>
                                </p>))
                        }
                        <AnimatePresence mode="wait">
                            {selected !== null &&
                                <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 12, opacity: 0 }} exit={{ y: 12, opacity: 0 }} className="absolute top-[calc(100%_+_2rem)]    p-4 text-center bg-neutral-100 border flex flex-col rounded-lg space-y-4 ">
                                    {
                                        navlinks[selected].title &&
                                        <motion.div exit={{ x: 12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex flex-col text-sm gap-3">
                                            {
                                                navlinks[selected]?.links?.map(({ name }) => {
                                                    return <span className="cursor-pointer" key={name}>{name}</span>
                                                })
                                            }
                                        </motion.div>
                                    }
                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;



const Bridge = () => {
    return <span aria-hidden className="absolute  w-full h-[2rem] top-[100%]"></span>
}