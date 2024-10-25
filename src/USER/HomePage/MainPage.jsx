import React from "react";
import Header from "../Header";
import HeroSection from "./HeroSection";
import CLients from "./CLients";
import FeaturedProducts from "./FeaturedProducts";
import ClientReview from "./ClientReview";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";

const MainPage = () => {
  return (
    <div className="w-full flex flex-col text-white bg-[#141414] font-urbanist">
      <Header />
      <HeroSection />
      <CLients />
      <FeaturedProducts />
      <ClientReview />
      <FrequentlyAskedQuestion />
    </div>
  );
};

export default MainPage;
