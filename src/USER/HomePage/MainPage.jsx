import React from "react";
import Header from "../Header";
import HeroSection from "./HeroSection";
import CLients from "./CLients";
import FeaturedProducts from "./FeaturedProducts";
import ClientReview from "./ClientReview";

const MainPage = () => {
  return (
    <div className="w-full flex flex-col text-white bg-[#141414] font-urbanist">
      <Header />
      <HeroSection />
      <CLients />
      <FeaturedProducts />
      <ClientReview />
    </div>
  );
};

export default MainPage;
