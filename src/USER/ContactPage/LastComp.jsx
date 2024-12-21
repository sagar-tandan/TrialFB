import React from "react";
import Lines from "../UserAssets/Lines";
import spark from "../UserAssets/spark.png";

const LastComp = () => {
  return (
    <div className="w-full py-6 px-4 md:px-8 lg:px-16 flex flex-col gap-5 mt-5 mb-20 max-w-screen-2xl mx-auto">
      <div className="w-full mx-auto text-white border-[2px] border-[#232323] rounded-md flex relative">
        <div className="w-full absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
          <Lines />
        </div>
        {/* <div className="absolute top-0 bottom-0 right-0 left-0 p-3 sm:p-6 md:p-10"> */}
        <div className="p-6 sm:p-8 md:p-10 z-10">
          {/* TOP DIV */}
          <div className="w-full grid grid-cols-2 gap-3 sm:gap-5">
            <img
              className="w-full h-[70px] sm:h-[160px] object-cover rounded-md sm:rounded-lg"
              src="https://storage.googleapis.com/enty/14bdfe49-2353-4403-9a80-24a9fbb08655.jpg"
              alt=""
            />
            <img
              className="w-full h-[70px] sm:h-[160px] object-cover rounded-md sm:rounded-lg"
              src="https://th.bing.com/th/id/OIP.iUsyL3n453RjYkrHnrZXgwHaE8?w=3000&h=2000&rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>

          {/* SECOND DIV */}
          <div className="w-full grid grid-cols-2 gap-3 sm:gap-5 mt-3 sm:mt-5 ">
            <img
              className="w-full h-[70px] sm:h-[160px] object-cover rounded-md sm:rounded-lg"
              src="https://img.pikbest.com/origin/10/49/76/24IpIkbEsTAjc.jpg!bw700"
              alt=""
            />
            <div className="w-full grid grid-cols-2 gap-3 sm:gap-5">
              <img
                className="w-full h-[70px] sm:h-[160px] object-cover rounded-md sm:rounded-lg"
                src="https://th.bing.com/th/id/OIP.VJhXPttKTngngQdaY335eAHaE7?w=1000&h=665&rs=1&pid=ImgDetMain"
                alt=""
              />
              <img
                className="w-full h-[70px] sm:h-[160px] object-cover rounded-md sm:rounded-lg"
                src="https://th.bing.com/th/id/OIP.00iwURy0c7-lW_h1DfJHsgHaDt?w=1200&h=600&rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>
          </div>

          {/* LAST DIV */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex items-center gap-1">
                <img className="w-7 h-7" src={spark} alt="" />
                <img className="w-4 h-4 opacity-60" src={spark} alt="" />
                <img className="w-2 h-2 opacity-30" src={spark} alt="" />
              </div>

              <h1 className="w-full text-2xl md:text-[32px] font-semibold">
                Explore PolyCraft's World
              </h1>
              <p className=" text-[#737373] font-medium text-sm md:text-[16px]">
                Step inside the world of PolyCraft, where professionalism meets
                warmth, and expertise meets passion. Our gallery offers a
                glimpse into our team and workspaces, inviting you to get to
                know us better.
              </p>
            </div>

            <img
              className="w-full h-[120px] sm:h-[160px] object-cover rounded-md lg:rounded-lg"
              src="https://storage.googleapis.com/enty/14bdfe49-2353-4403-9a80-24a9fbb08655.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastComp;
