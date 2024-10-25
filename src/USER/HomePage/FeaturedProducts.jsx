import React from "react";
import spark from "../UserAssets/spark.png";

const FeaturedProducts = () => {
  return (
    <div className="w-full py-6 px-16 flex flex-col gap-5 mt-10">
      <div className="w-full flex items-center gap-1">
        <img className="w-7 h-7" src={spark} alt="" />
        <img className="w-4 h-4 opacity-60" src={spark} alt="" />
        <img className="w-2 h-2 opacity-30" src={spark} alt="" />
      </div>
      <h1 className="w-full text-[32px] font-semibold leading-none">
        Featured Products
      </h1>

      {/* Complementay section */}
      <div className="w-full flex justify-between gap-10 items-center">
        <p className="max-w-5xl text-[#737373] font-medium text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro
          facere magni odio dicta possimus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquid, reiciendis?
        </p>
        <button className="border-[2px] border-[#202020] rounded-md py-3 px-6 bg-[#1a1a1a] active:bg-[#1d1d1d] duration-100 transition-all ease-in-out">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
