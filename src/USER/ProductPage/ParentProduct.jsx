import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import SearchProduct from "./SearchProduct";
import AllProducts from "./AllProducts";

const ParentProduct = () => {
  return (
    <div className="w-full flex flex-col text-white bg-[#141414] font-urbanist">
      <Header />
      <SearchProduct />
      <AllProducts />
      <hr className="border-[#202020] border-[1px]" />
      <Footer />
    </div>
  );
};

export default ParentProduct;
