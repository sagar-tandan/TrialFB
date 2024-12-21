import React from "react";
import spark from "../UserAssets/spark.png";
import Lines from "../UserAssets/Lines";
import journey from "../UserAssets/journey.webp";

const JourneyComp = () => {
  return (
    <div className="w-full max-w-screen-2xl flex flex-col gap-5 px-4 sm:px-6 md:px-8 lg:px-10 pt-6 mx-auto mt-[90px]">
      <div className="w-full flex flex-col-reverse lg:flex-row gap-5 lg:gap-16 justify-center items-center relative">
        {/* Left section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="w-full flex items-center gap-1 mb-5">
            <img className="w-7 h-7" src={spark} alt="" />
            <img className="w-4 h-4 opacity-60" src={spark} alt="" />
            <img className="w-2 h-2 opacity-30" src={spark} alt="" />
          </div>

          <p className=" text-left font-semibold text-[28px] sm:text-[32px] md:text-[36px] leading-none uppercase lg:mt-0">
            Our Journey
          </p>
          <p className="w-full font-medium text-[14px] sm:text-[15px] md:text-[16px] text-[#737373] my-4 lg:max-w-xl lg:mx-0 text-left">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary. Over the years, we've
            expanded our reach, forged valuable partnerships, and gained the
            trust of countless clients.
          </p>

          <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 my-6 sm:my-10">
            <div className="px-4 sm:px-6 border-[1px] rounded-md py-2 font-medium text-[14px] border-[#737373] flex flex-col bg-[#1a1a1a]">
              <span className="font-bold text-[20px] sm:text-[24px]">200+</span>
              <span className="font-medium text-[16px] sm:text-[18px] text-[#737373]">
                Happy customers
              </span>
            </div>
            <div className="px-4 sm:px-6 border-[1px] rounded-md py-2 font-medium text-[14px] border-[#737373] flex flex-col bg-[#1a1a1a]">
              <span className="font-bold text-[20px] sm:text-[24px]">1K+</span>
              <span className="font-medium text-[16px] sm:text-[18px] text-[#737373]">
                Products for clients
              </span>
            </div>

            <div className="px-4 sm:px-6 border-[1px] rounded-md py-2 font-medium text-[14px] border-[#737373] flex flex-col bg-[#1a1a1a] col-span-2 lg:col-span-1">
              <span className="font-bold text-[20px] sm:text-[24px]">5+</span>
              <span className="font-medium text-[16px] sm:text-[18px] text-[#737373]">
                Years of experience
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 mt-0 flex relative h-[250px] sm:h-[400px] border-[1px] rounded-lg border-[#202020]">
          <img
            className="rounded-md w-full object-cover"
            src={journey}
            alt=""
          />
          <div className="w-full absolute top-0 left-0 right-0 bottom-0 h-full overflow-hidden rounded-md z-10">
            <Lines />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyComp;
