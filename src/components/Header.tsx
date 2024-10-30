import React from "react";
import Logo from "./Logo";
import { Menu, Notification } from "@/app/lib/svgs";

const Header = () => {
    return (
        <div className="bg-white/20   z-[9999] fixed  right-0 left-0 top-0 backdrop-blur-lg border border-slate-500/20 drop-shadow-lg text-black">
            <div className="max-width justify-between flex items-center">
                <Logo />
                <div className="flex items-center gap-6">
                    <div className="" title="menu">
                        <Menu />
                    </div>
                    <div
                        title="notification"
                        className="relative cursor-pointer"
                    >
                        <Notification />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
