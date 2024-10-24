import React, { useState } from "react";

const Header = () => {
  const [activetab, setActiveTab] = useState("home");
  return (
    <div className="w-full h-[60px] flex bg-[#1E1E1E] text-white px-14 items-center justify-center">
      <div className="w-full max-w-screen-2xl mx-auto flex justify-between">
        {/* LOGO  */}
        <div className="flex py-2">
          <img src="" alt="" />
          <span>LOGO</span>
        </div>
        <div className="flex gap-14 font-semibold py-2">
          <span className={`cursor-pointer`}>Home</span>
          <span className="cursor-pointer">Products</span>
          <span className="cursor-pointer">About Us</span>
        </div>

        <div className="bg-[#141414] px-6 py-2 rounded-md border-[1px] border-gray-800 font-semibold cursor-pointer hover:bg-purple-600 transition-all duration-200 ease-in-out">
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default Header;
