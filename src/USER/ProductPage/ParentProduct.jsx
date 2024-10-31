import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import SearchProduct from "./SearchProduct";
import AllProducts from "./AllProducts";

const ParentProduct = () => {
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="searchProduct" className="w-full flex flex-col text-white bg-[#141414] font-urbanist">
      {/* <Header /> */}
      <SearchProduct />
      <AllProducts />
      <hr className="border-[#202020] border-[1px]" />
      <Footer />
    </div>
  );
};

export default ParentProduct;
