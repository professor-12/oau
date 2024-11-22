import React from "react";
import SlideImage from "./SlideImage";
const HeroSection = () => {
    return (
        <div className="h-screen relative bg-[#F9FAFB] text-black">
            <div className="w-[88%] mx-auto relative  items-center  flex justify-between  gap-24">
                <div className="flex-1 space-y-4">
                    <h2 className="text-6xl font-semibold">Obafemi Awolowo University</h2>
                    <p className="text-[#1e293bb3] text-xl tracking-normal">
                        Obafemi Awolowo University (OAU) in Ile-Ife, Nigeria, was established in 1961-62 based on recommendations from a 1959 educational commission led by Sir Eric Ashby. The University’s Provisional Council was formally inaugurated on June 8, 1961, with Chief Rotimi Williams as chairman.</p>
                </div>

                <div className="overflow-hidden flex-1 pt-[calc(80px-10px)]  h-screen">
                    <SlideImage />
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
