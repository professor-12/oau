import React from "react";
import Logo from "./Logo";

const Header = () => {
    return (
        <div className="bg-white/30 sticky top-0 backdrop-blur-xl border border-white/10 drop-shadow-lg text-black">
            <div className="max-width justify-between flex items-center">
                <Logo />
                <div>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        className="cursor-pointer"
                        viewBox="0 0 24 24"
                        height="2em"
                        width="2em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Header;
