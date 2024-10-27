import React from "react";
import spark from "../UserAssets/spark.png";

const AchievementComp = () => {
  return (
    <div className="w-full max-w-screen-2xl flex flex-col gap-5 px-4 sm:px-6 md:px-8 lg:px-10 pt-6 mx-auto mt-[90px]">
      <div className="w-full flex flex-col gap-5 justify-center items-center relative">
        {/* Left section */}
        <div className="w-full text-left">
          <div className="w-full flex items-center gap-1 mb-5">
            <img className="w-7 h-7" src={spark} alt="" />
            <img className="w-4 h-4 opacity-60" src={spark} alt="" />
            <img className="w-2 h-2 opacity-30" src={spark} alt="" />
          </div>

          <p className=" text-left font-semibold text-[28px] sm:text-[32px] md:text-[36px] leading-none uppercase lg:mt-0">
            Our Achievements{" "}
          </p>
          <p className="w-full font-medium text-[14px] sm:text-[15px] md:text-[16px] text-[#737373] my-4 lg:mx-0 text-left max-w-6xl">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a great platform
            that transcended the ordinary.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full flex gap-4 lg:gap-8 lg:flex-row flex-col">
          <div className="w-full flex bg-[#191919] p-1 rounded-[6px]">
            <div className="w-full flex flex-col gap-3 bg-[#141414] p-8 rounded-[5px]">
              <h1 className="text-[24px] font-semibold">
                5+ Years of Excellence
              </h1>
              <p className="font-medium text-[16px] text-[#999999]">
                With over 5 years in the industry, we've amassed a wealth of
                knowledge and experience.
              </p>
            </div>
          </div>

          <div className="w-full flex bg-[#191919] p-1 rounded-[6px]">
            <div className="w-full flex flex-col gap-3 bg-[#141414] p-8 rounded-[5px]">
              <h1 className="text-[24px] font-semibold">Happy Clients </h1>
              <p className="font-medium text-[16px] text-[#999999]">
                Our greatest achievement is the satisfaction of our clients.
                Their success stories fuel our passion for what we do.
              </p>
            </div>
          </div>

          <div className="w-full flex bg-[#191919] p-1 rounded-[6px]">
            <div className="w-full flex flex-col gap-3 bg-[#141414] p-8 rounded-[5px]">
              <h1 className="text-[24px] font-semibold">
                Industry Recognition
              </h1>
              <p className="font-medium text-[16px] text-[#999999]">
                We've earned the respect of our peers and industry leaders, with
                accolades and awards that reflect our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementComp;
