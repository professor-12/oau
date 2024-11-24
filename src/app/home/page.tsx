// import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import News from "@/components/News";
import SecondHeroSection from "@/components/SecondHeroSection";
import Stats from "@/components/Stats";
import React from "react";

const Home = () => {

      return (
            <div className="">
                  <div
                        aria-hidden
                        className="w-[25rem] h-[25rem] bg-gradient-to-br from-transparent to-indigo-600 via-violet-00 blur-[150px] absolute top-40 left-0"
                  ></div>
                  <HeroSection />
                  <SecondHeroSection />
                  <Stats />
                  <div className="h-[30rem] relative  bg-no-repeat bg-cover bg-[url('/oduduwa.jpg')] bg-center brightness-90 bg-red-400">
                        <h1 className="text-[20rem] text-center font-extrabold text-white/50 text-balance tracking-[2rem]">OAU</h1>
                  </div>
                  <News />
                  <FAQ />
                  <Footer />
            </div>
      );
};

export default Home;
