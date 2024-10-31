import React from "react";
import spark from "../UserAssets/spark.png";
import { GraduationCap, HeartHandshake, Sparkles, Users } from "lucide-react";
import PulseIcon from "./PulseIcon";

const ValueComp = () => {
  return (
    <div className="w-full max-w-screen-2xl flex flex-col gap-5 px-4 sm:px-6 md:px-8 lg:px-10 pt-6 mx-auto mt-5 lg:mt-[90px]">
      <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-16 justify-center items-center relative">
        {/* Left section */}
        <div className="w-full lg:w-[35%] text-left">
          <div className="w-full flex items-center gap-1 mb-5">
            <img className="w-7 h-7" src={spark} alt="" />
            <img className="w-4 h-4 opacity-60" src={spark} alt="" />
            <img className="w-2 h-2 opacity-30" src={spark} alt="" />
          </div>

          <h1 className="w-full text-2xl md:text-[32px] font-semibold leading-none">
            Our Values
          </h1>
          <p className="w-full font-medium text-[14px] sm:text-[15px] md:text-[16px] text-[#737373] my-4 lg:max-w-xl lg:mx-0 text-left">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a great platform
            that transcended the ordinary.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[65%] mt-0 flex rounded-xl bg-[#191919] p-2">
          <div className="w-full bg-[#141414] border-[1px] border-[#242424] flex flex-col rounded-lg p-4 sm:p-12">
            <div className="w-full gap-4 sm:gap-8 flex sm:flex-row flex-col">
              <div className="w-full flex flex-col gap-3 border-[#262626] sm:border-r-[1px]">
                <div className="w-full flex items-center gap-3">
                  <PulseIcon icon={Sparkles} />
                  <h1 className="font-semibold text-[20px]">Trust</h1>
                </div>
                <p className="px-2 text-[16px] font-medium text-[#999999]">
                  Trust is the cornerstone of every successful real estate
                  transaction.
                </p>
              </div>

              <hr className="w-full border-t-[1px] border-[#262626] sm:hidden" />

              <div className="w-full flex flex-col gap-3 ">
                <div className="w-full flex items-center gap-3">
                  <PulseIcon icon={GraduationCap} />
                  <h1 className="font-semibold text-[20px]">Excellence</h1>
                </div>
                <p className="px-2 text-[16px] font-medium text-[#999999]">
                  We set the bar high for ourselves. From the properties we list
                  to the services we provide.
                </p>
              </div>
            </div>
            <hr className="w-full border-t-[1px] border-[#262626] my-6" />
            <div className="w-full gap-4 sm:gap-8 flex sm:flex-row flex-col">
              <div className="w-full flex flex-col gap-3 border-[#262626] sm:border-r-[1px]">
                <div className="w-full flex items-center gap-3">
                  <PulseIcon icon={Users} />
                  <h1 className="font-semibold text-[20px]">Client-Centric</h1>
                </div>
                <p className="px-2 text-[16px] font-medium text-[#999999]">
                  Your dreams and needs are at the center of our universe. We
                  listen, understand.
                </p>
              </div>
              <hr className="w-full border-t-[1px] border-[#262626] sm:hidden" />

              <div className="w-full flex flex-col gap-3 ">
                <div className="w-full flex items-center gap-3">
                  <PulseIcon icon={HeartHandshake} />
                  <h1 className="font-semibold text-[20px]">Our Commitment</h1>
                </div>
                <p className="px-2 text-[16px] font-medium text-[#999999]">
                  We are dedicated to providing you with the highest level of
                  service, professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueComp;
