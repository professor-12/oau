import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
    return (
        <div className="flex items-center gap-4">
            <Link href={"/home"}>
                <Image src={"/oaulogo.png"} alt="Oau Logo" width={60} height={60} />
            </Link>
        </div>
    );
};

export default Logo;
