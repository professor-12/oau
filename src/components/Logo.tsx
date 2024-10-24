import Image from "next/image";
import React from "react";

const Logo = () => {
    return (
        <div className="flex items-center gap-4">
            <Image src={"/oaulogo.png"} alt="Oau Logo" width={70} height={70} />
            <h1 className="tracking-wider font-light  text-lg font-[family-name:var(--font-roboto-slab)]">
                Obafemi Awolowo University
            </h1>
        </div>
    );
};

export default Logo;
