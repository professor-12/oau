import React from "react";
import Logo from "./Logo";

const Footer = () => {
    return <div className="border   text-black py-12 border-t">
        <div className="max-width flex justify-between">
            <div className="flex items-center gap-5">
                <Logo />
                <h1 className="text-4xl font-semibold tracking-widest">OAU</h1>
            </div>
            <ul>
                <li>Undergraduate</li>
            </ul>
            <ul>
                <li>Undergraduate</li>
            </ul>
        </div>
    </div>;
};

export default Footer;
