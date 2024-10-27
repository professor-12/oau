import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import SecondHeroSection from "@/components/SecondHeroSection";
import React from "react";

const Home = () => {
    return (
        <div className="bg-gradient-to-tr py-10 from-[#6c8bce] via-violet-500 to-blue-600">
            <div
                aria-hidden
                className="w-[20rem] h-[20rem] bg-gradient-to-br from-transparent to-indigo-600 via-violet-00 blur-[100px] absolute top-20 left-0"
            ></div>
            <HeroSection />
            <SecondHeroSection />
            <AboutUs />
        </div>
    );
};

export default Home;
