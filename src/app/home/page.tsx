// import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
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
                  <div className="h-[30rem] bg-no-repeat bg-cover bg-[url('/oduduwa.jpg')] bg-center  -skew-y-1 bg-red-400"></div>
                  <FAQ />
                  <Footer />
            </div>
      );
};

export default Home;
