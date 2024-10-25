import React from "react";
import Header from "../Header";
import HeroSection from "./HeroSection";
import CLients from "./CLients";
import FeaturedProducts from "./FeaturedProducts";
import ClientReview from "./ClientReview";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";
import Footer from "../Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainPage = () => {
  return (
    <div className="w-full flex flex-col text-white bg-[#141414] font-urbanist">
      <Header />
      <HeroSection />
      <CLients />
      <FeaturedProducts />
      <ClientReview />
      <FrequentlyAskedQuestion />
      <hr className="border-[#202020] border-[1px]" />
      <Footer />
    </div>
  );
};

export default MainPage;
