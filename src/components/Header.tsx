"use client";
import React, { useEffect, useRef, useState } from "react";
import { animate, AnimatePresence, motion, useAnimate } from "framer-motion";
import Logo from "./Logo";
import { Menu, Notification } from "@/app/lib/svgs";
import DropDownMenu from "./DropDownMenu";
import Link from "next/link";
import MobileNavMenu from "./MobileNavMenu";

export const navlinks = [
    {
        title: "Students",
        links: [
            { name: "Undergraduate", url: "/login/undergraduate", },
            { name: "Post graduate", url: "/login/postgraduate" },
            { name: "Executive MBA", url: "/login/mbalogin" },
        ],
    },
    {
        title: "Staff",
        links: [
            {
                name: "Staff Login",
                url: "/login/staff",
            },
            { name: "Bursary", url: "bursary" },

        ],
    },
    {
        title: "Quick Links",
        links: [
            {
                name: "FAQ",
                url: "/home/#faq",
            },
            { name: "Transcript", url: "/login/undergradaute" },
            {
                name: "Diploma",
                url: "http://eportal.oauife.edu.ng/advertnformlgsdiploma.pdf",
            },
            {
                name: "Change of course form",
                url: "http://eportal.oauife.edu.ng/ChangeOfCourseForm2021.pdf",
            },
            {
                name: "Computer Training",
                url: "http://eportal.oauife.edu.ng/ChangeOfCourseForm2021.pdf",
            },
            {
                name: "Medical Services",
                url: "/health-center",
            },
            {
                name: "Fill PG Starter form",
                url: "http://eportal.oauife.edu.ng/ChangeOfCourseForm2021.pdf",
            },

        ],
    },
] as const;

const Header = () => {
    const [x, setX] = useState(null) as any
    const handleHoverEffectDropDown = (index: number, e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
        const leftPositionofWrappingDiv = document.getElementById("wrapperdiv")!?.getBoundingClientRect().left
        setSelected(index)
        const dropDown = document.getElementById(`${index}rect`)!?.getBoundingClientRect().left
        setX(dropDown - leftPositionofWrappingDiv)
    }

    const [selected, setSelected] = useState<null | number>(null);
    return (
        <div className="bg-white/20   z-[9999] fixed  right-0 left-0 top-0 backdrop-blur-lg border border-slate-500/20 drop-shadow-lg text-black">
            <div className="max-width justify-between flex items-center">
                <div className="">
                    <Logo />
                </div>
                <MobileNavMenu />
                <div className="flex max-md:hidden items-center gap-8">
                    <div id="wrapperdiv" onMouseLeave={() => setSelected(null)} className="flex gap-12 items-center  text-lg relative">
                        <Bridge />
                        {
                            navlinks.map(({ links, title }, indx) => (

                                <p id={indx + "rect"} onMouseEnter={(e) => handleHoverEffectDropDown(indx, e)} key={title} className="text-gray-600 flex items-center gap-3 cursor-pointer">
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
                                <motion.div style={{ x, translateX: "-50%" }} id="d" animate={{ y: 0, opacity: 1 }} initial={{ y: 12, opacity: 0 }} exit={{ y: 12, opacity: 0 }} className="absolute transition-all duration-300  left-12 top-[calc(100%_+_2rem)] mx-auto max-w-full  p-4 text-center bg-neutral-100 border flex flex-col rounded-lg space-y-4 ">
                                    {
                                        navlinks[selected].title &&
                                        <motion.div exit={{ x: 12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex flex-col text-sm gap-3">
                                            {
                                                navlinks[selected]?.links?.map(({ name, url }) => {
                                                    return <Link href={url}>
                                                        <span className="cursor-pointer hover:text-slate-500" key={name}>
                                                            {name}
                                                        </span>
                                                    </Link>
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
        </div >
    );
};

export default Header;



const Bridge = () => {
    return <span aria-hidden className="absolute  w-full h-[2rem] top-[100%]"></span>
}