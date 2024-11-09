import React from "react";
import Logo from "./Logo";
import { footerLink } from "@/constants";
import Link from "next/link";

const Footer = () => {
    return <div className="border   text-black py-12 border-t">
        <div className="max-width max-md:flex-col gap-12 flex-wrap max-md:justify-center max-md:items-center max-md:text-center  flex md:justify-between">
            <div>
                <Logo />
            </div>
            {
                footerLink.map(({ children, title }) => {
                    return (
                        <ul key={title}>
                            <span className="text-xl mb-4 block">
                                {title}
                            </span>
                            <ul className="space-y-3">

                                {children.map(({ links, name }, index) => {
                                    return (

                                        <Link className="block text-slate-600 hover:text-blue-700" key={`${links}-${name}-${index}`} href={links}>
                                            <li className="text-sm" >{name}</li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        </ul>
                    )
                })
            }

        </div>
    </div>;
};

export default Footer;
