import React from "react";
import FrequentlyAskedQuestion from "../HomePage/FrequentlyAskedQuestion";
import Footer from "../Footer";
import ProductDetailChild from "./ProductDetailChild.jsx";

const ParentProductDetail = () => {
  return (
    <div className="w-full flex flex-col text-white bg-[#141414] font-urbanist">
      <ProductDetailChild />
      <FrequentlyAskedQuestion />
      <hr className="border-[#202020] border-[1px]" />
      <Footer />
    </div>
  );
};

export default ParentProductDetail;
