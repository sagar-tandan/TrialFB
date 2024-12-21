import React from "react";
import spark from "../UserAssets/spark.png";

const WorkFlowComp = () => {
  return (
    <div id="workflow" className="w-full max-w-screen-2xl flex flex-col gap-5 px-4 sm:px-6 md:px-8 lg:px-10 mx-auto pt-16 lg:pt-[90px]">
      <div className="w-full flex flex-col gap-5 justify-center items-center relative">
        {/* Left section */}
        <div className="w-full text-left">
          <div className="w-full flex items-center gap-1 mb-5">
            <img className="w-7 h-7" src={spark} alt="" />
            <img className="w-4 h-4 opacity-60" src={spark} alt="" />
            <img className="w-2 h-2 opacity-30" src={spark} alt="" />
          </div>

          <h1 className="w-full text-2xl md:text-[32px] font-semibold leading-none">
            Navigating the PolyCraft Experience
          </h1>
          <p className="w-full font-medium text-[14px] sm:text-[15px] md:text-[16px] text-[#737373] my-4 lg:mx-0 text-left max-w-6xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            expedita veritatis. Ex enim debitis neque optio, pariatur tempora
            ipsum! Deleniti deserunt ex illo?
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full flex flex-col gap-4 lg:gap-8">
          <div className="w-full flex gap-4 lg:gap-8 lg:flex-row flex-col">
            <div className="w-full flex flex-col">
              <div className="w-full border-l-[1px] border-[#703bf7] px-3 py-2 font-medium">
                Step 01
              </div>
              <div className="w-full bg-gradient-to-br from-[#703bf7] via-[#242424] to-[#242424] via-20% to-20% p-[1px] flex rounded-bl-lg rounded-br-lg rounded-tr-lg">
                <div className="w-full h-full bg-gradient-to-br from-[#2e1f54] via-[#141414] to-[#141414] via-15% to-15% flex flex-col gap-2 p-8 rounded-bl-lg rounded-br-lg rounded-tr-lg">
                  <h1 className="text-[20px] font-semibold">Consulting</h1>
                  <p className="font-medium text-[16px] text-[#999999]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col">
              <div className="w-full border-l-[1px] border-[#703bf7] px-3 py-2 font-medium">
                Step 02
              </div>
              <div className="w-full bg-gradient-to-br from-[#703bf7] via-[#242424] to-[#242424] via-20% to-20% p-[1px] flex rounded-bl-lg rounded-br-lg rounded-tr-lg">
                <div className="w-full h-full bg-gradient-to-br from-[#2e1f54] via-[#141414] to-[#141414] via-15% to-15% flex flex-col gap-2 p-8 rounded-bl-lg rounded-br-lg rounded-tr-lg">
                  <h1 className="text-[20px] font-semibold">Design</h1>
                  <p className="font-medium text-[16px] text-[#999999]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col">
              <div className="w-full border-l-[1px] border-[#703bf7] px-3 py-2 font-medium">
                Step 03
              </div>
              <div className="w-full bg-gradient-to-br from-[#703bf7] via-[#242424] to-[#242424] via-20% to-20% p-[1px] flex rounded-bl-lg rounded-br-lg rounded-tr-lg">
                <div className="w-full h-full bg-gradient-to-br from-[#2e1f54] via-[#141414] to-[#141414] via-15% to-15% flex flex-col gap-2 p-8 rounded-bl-lg rounded-br-lg rounded-tr-lg">
                  <h1 className="text-[20px] font-semibold">
                    Prototype 3D Printing
                  </h1>
                  <p className="font-medium text-[16px] text-[#999999]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex gap-4 lg:gap-8 lg:flex-row flex-col">
            <div className="w-full flex flex-col">
              <div className="w-full border-l-[1px] border-[#703bf7] px-3 py-2 font-medium ">
                Step 04
              </div>
              <div className="w-full bg-gradient-to-br from-[#703bf7] via-[#242424] to-[#242424] via-20% to-20% p-[1px] flex rounded-bl-lg rounded-br-lg rounded-tr-lg">
                <div className="w-full h-full bg-gradient-to-br from-[#2e1f54] via-[#141414] to-[#141414] via-15% to-15% flex flex-col gap-2 p-8 rounded-bl-lg rounded-br-lg rounded-tr-lg">
                  <h1 className="text-[20px] font-semibold">
                    Iterative Refinement
                  </h1>
                  <p className="font-medium text-[16px] text-[#999999]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col">
              <div className="w-full border-l-[1px] border-[#703bf7] px-3 py-2 font-medium">
                Step 05
              </div>
              <div className="w-full bg-gradient-to-br from-[#703bf7] via-[#242424] to-[#242424] via-20% to-20% p-[1px] flex rounded-bl-lg rounded-br-lg rounded-tr-lg">
                <div className="w-full h-full bg-gradient-to-br from-[#2e1f54] via-[#141414] to-[#141414] via-15% to-15% flex flex-col gap-2 p-8 rounded-bl-lg rounded-br-lg rounded-tr-lg">
                  <h1 className="text-[20px] font-semibold">Final Product</h1>
                  <p className="font-medium text-[16px] text-[#999999]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* JUST FOR RESPONSIVENESS */}
            <div className="w-full flex flex-col"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlowComp;
