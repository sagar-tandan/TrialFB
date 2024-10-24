import React from "react";
import Header from "../Header";
import HeroSection from "./HeroSection";

const MainPage = () => {
  return (
    <div className="w-full flex flex-col gap-10 text-white bg-[#141414] font-urbanist">
      <Header />
      <HeroSection />
    </div>
  );
};

export default MainPage;
