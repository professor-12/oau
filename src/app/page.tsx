import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SecondHeroSection from "@/components/SecondHeroSection";
import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
    return redirect("/home")
    return (
        <div className="">
            <div
                aria-hidden
                className="w-[25rem] h-[25rem] bg-gradient-to-br from-transparent to-indigo-600 via-violet-00 blur-[150px] absolute top-40 left-0"
            ></div>
            <HeroSection />
            <SecondHeroSection />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Home;
