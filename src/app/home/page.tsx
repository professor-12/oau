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

                  <HeroSection />
                  <SecondHeroSection />
                  <Stats />
                  <div className="h-[20rem] max-sm:hidden lg:h-[30rem] flex items-center justify-center bg-fixed relative  bg-no-repeat bg-cover bg-[url('/oduduwa.jpg')] bg-center brightness-90 bg-red-400">
                  </div>
                  <News />
                  <FAQ />
                  <Footer />
            </div>
      );
};

export default Home;
