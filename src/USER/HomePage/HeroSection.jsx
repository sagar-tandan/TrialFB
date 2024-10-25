import React from "react";
import hero from "../UserAssets/hero.webp";

const HeroSection = () => {
  const text = "CONSULT• DESIGN • PROTOTYPE • REFINE • DEVELOP • ";
  const characters = text.split("");
  const totalChars = characters.length;
  return (
    <div className="w-full max-w-screen-2xl flex flex-col gap-10 pl-16 pt-6 mx-auto mt-[90px]">
      <div className="w-full flex gap-5 justify-center items-center relative ">
        {/* Left section */}
        <div className="w-1/2">
          <p className="font-semibold text-[36px] leading-none uppercase">
            Welcome To Aara Technology
          </p>
          <p className="font-medium text-[25px] mt-1">
            where innovation meets execution{" "}
          </p>
          <p className="font-medium text-[16px] text-[#737373] my-4 max-w-xl">
            Bring your ideas to life with precision 3D modeling and printing.
            Whether for art, engineering, or personal projects, we turn your
            imagination into reality—one layer at a time.
          </p>

          {/* section for buttons */}
          <div className="w-full flex gap-5 my-12">
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
            className="w-full h-[600px] object-fill rounded-tl-md rounded-bl-sm"
            src={hero}
            alt="hero logo"
          />
        </div>

        <div className="w-[150px] h-[150px] border-[1px] border-[#717171] bg-[#141414] absolute top-12 m-6 rounded-full flex items-center justify-center">
          <div className="w-[75px] h-[75px] rounded-full bg-none border-[1px] border-[#717171]"></div>
          {/* Rotating text container
          <div className="absolute w-[85%] h-[85%] animate-[spin_10s_linear_infinite]">
            {characters.map((char, i) => {
              const rotation = (i * 360) / totalChars;
              return (
                <div
                  key={i}
                  className="absolute w-full h-full p-4"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                  }}
                >
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -top-1 text-xs font-medium ${
                      i === 0 ? "text-purple-600 " : ""
                    }text-gray-200`}
                  >
                    {char}
                  </span>
                </div>
              );
            })} */}
          {/* </div> */}
          <div className="absolute w-[85%] h-[85%] animate-[spin_10s_linear_infinite]">
            {characters.map((char, i) => {
              const rotation = (i * 360) / totalChars;
              const isPurple = i < "CONSULT".length;

              return (
                <div
                  key={i}
                  className="absolute w-full h-full p-4"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                  }}
                >
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -top-1 text-xs font-medium ${
                      isPurple ? "text-purple-500" : "text-gray-200"
                    }`}
                  >
                    {char}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
