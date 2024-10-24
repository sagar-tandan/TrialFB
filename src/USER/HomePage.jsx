import React from "react";
import Header from "./Header";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-10 text-white bg-[#141414] font-urbanist">
      <Header />
      <div className="w-full max-w-screen-2xl flex flex-col gap-10 pl-16 pt-6 ">
        <div className="w-full flex gap-5 justify-center items-center">
          {/* Left section */}
          <div className="w-1/2">
            <p className="font-semibold text-[40px] leading-none uppercase">
              Lorem ipsum dolor sit amet{" "}
            </p>
            <p className="font-medium text-[25px]">
              lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="font-medium text-[16px] text-[#737373] my-3 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              sunt perferendis labore quo qui, dolorem distinctio porro amet
              numquam sint suscipit ex mollitia. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>

            {/* section for buttons */}
            <div className="w-full flex gap-5 my-10">
              <button className="px-5 border-[1px] rounded-md py-3 font-medium text-[14px] border-[#737373]">
                Learn more
              </button>

              <button className="px-5 rounded-md py-3 font-medium text-[14px] bg-purple-700 hover:bg-purple-800 transition-all duration-200 ease-in-out">
                Browse products
              </button>
            </div>

            <div className="w-full flex gap-5 my-10">
              <div className="px-6 border-[1px] rounded-md py-2 font-medium text-[14px] border-[#737373] flex flex-col bg-[#1a1a1a]">
                <span className="font-bold text-[24px]">200+</span>
                <span className="font-medium text-[18px] text-[#737373]">
                  Happy customers
                </span>
              </div>
              <div className="px-6 border-[1px] rounded-md py-2 font-medium text-[14px] border-[#737373] flex flex-col bg-[#1a1a1a]">
                <span className="font-bold text-[24px]">1K+</span>
                <span className="font-medium text-[18px] text-[#737373]">
                  Products for clients
                </span>
              </div>

              <div className="px-6 border-[1px] rounded-md py-2 font-medium text-[14px] border-[#737373] flex flex-col bg-[#1a1a1a]">
                <span className="font-bold text-[24px]">5+</span>
                <span className="font-medium text-[18px] text-[#737373]">
                  Years of experience
                </span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/2">
            <img
              className="w-full h-[600px] object-cover"
              src="https://images.unsplash.com/photo-1662943523548-373718f22124?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
