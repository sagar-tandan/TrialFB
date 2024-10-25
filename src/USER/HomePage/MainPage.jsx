import React from "react";
import Header from "../Header";
import HeroSection from "./HeroSection";
import CLients from "./CLients";

const MainPage = () => {
  return (
    <div className="w-full flex flex-col text-white bg-[#141414] font-urbanist">
      <Header />
      <HeroSection />
      <CLients />
    </div>
  );
};

export default MainPage;
