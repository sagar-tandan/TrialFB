import React, { useEffect } from "react";
import FrequentlyAskedQuestion from "../HomePage/FrequentlyAskedQuestion";
import Footer from "../Footer";
import ProductDetailChild from "./ProductDetailChild.jsx";

const ParentProductDetail = () => {
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full flex flex-col text-white bg-[#141414] font-urbanist">
      {/* <ProductHeader /> */}
      <ProductDetailChild />
      <FrequentlyAskedQuestion />
      <hr className="border-[#202020] border-[1px]" />
      <Footer />
    </div>
  );
};

export default ParentProductDetail;
