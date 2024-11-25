import React from "react";
import SlideImage, { SlideImageMobile } from "./SlideImage";
const HeroSection = () => {
    return (
        <div className="md:h-screen relative bg-[#F9FAFB] text-black">
            <div className=" relative  max-lg:pt-[8rem]  max-md:pt-[calc(6rem)] items-center  lg:flex justify-between  gap-24">
                <div className="flex-1 w-[88%] mx-auto space-y-4">
                    <h2 className="md:text-6xl text-4xl font-semibold max-md:text-center">Obafemi Awolowo University</h2>
                    <p className="text-[#1e293bb3]  md:text-xl tracking-normal">
                        Obafemi Awolowo University (OAU) in Ile-Ife, Nigeria, was established in 1961-62 based on recommendations from a 1959 educational commission led by Sir Eric Ashby. The University’s Provisional Council was formally inaugurated on June 8, 1961, with Chief Rotimi Williams as chairman.</p>
                </div>

                <div className="overflow-hidden w-full flex-1 pt-[calc(80px-10px)]  md:h-screen">
                    <SlideImage />
                    <SlideImageMobile />
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
