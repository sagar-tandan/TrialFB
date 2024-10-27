import React from "react";
import spark from "../UserAssets/spark.png";
import { Send, Twitter } from "lucide-react";

const teams = [
  {
    name: "Dummy Name",
    position: "Founder",
    social: "",
    twitter: "",
    image:
      "https://th.bing.com/th/id/OIP.iOJ3d7QnoKo7X0GrBQf97gHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "Dummy Name",
    position: "Founder",
    social: "",
    twitter: "",
    image:
      "https://th.bing.com/th/id/R.c3f629e7df9342ced633b56b786ae9fb?rik=1Ap5UA9TkozyQg&pid=ImgRaw&r=0",
  },
  {
    name: "Dummy Name",
    position: "Founder",
    social: "",
    twitter: "",
    image:
      "https://th.bing.com/th/id/R.c3f629e7df9342ced633b56b786ae9fb?rik=1Ap5UA9TkozyQg&pid=ImgRaw&r=0",
  },
  {
    name: "Dummy Name",
    position: "Founder",
    social: "",
    twitter: "",
    image:
      "https://th.bing.com/th/id/R.c3f629e7df9342ced633b56b786ae9fb?rik=1Ap5UA9TkozyQg&pid=ImgRaw&r=0",
  },
];

const OurTeamComp = () => {
  return (
    <div className="w-full max-w-screen-2xl flex flex-col gap-5 px-4 sm:px-6 md:px-8 lg:px-10 pt-6 mx-auto mt-[90px]">
      <div className="w-full flex flex-col gap-5 justify-center items-center relative">
        {/* Top section */}
        <div className="w-full text-left">
          <div className="w-full flex items-center gap-1 mb-5">
            <img className="w-7 h-7" src={spark} alt="" />
            <img className="w-4 h-4 opacity-60" src={spark} alt="" />
            <img className="w-2 h-2 opacity-30" src={spark} alt="" />
          </div>

          <h1 className="w-full text-2xl md:text-[32px] font-semibold">
            Meet the AaraTech Team{" "}
          </h1>
          <p className="w-full font-medium text-[14px] sm:text-[15px] md:text-[16px] my-4 text-[#737373] max-w-6xl text-left">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a great platform
            that transcended the ordinary.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-6">
          {teams.map((team, index) => (
            <div
              key={index}
              className="w-full border-[1px] border-[#242424] p-4 rounded-xl flex flex-col items-center justify-center"
            >
              <div className="w-full h-[500px] lg:h-[290px] rounded-xl relative">
                <img
                  className="w-full h-[500px] lg:h-[290px] rounded-xl object-cover"
                  src={team.image}
                  alt=""
                />
                <div className="absolute w-14 h-14 bg-purple-700 rounded-full flex justify-center items-center -bottom-5 right-[43%]">
                  <Twitter />
                </div>
              </div>

              <h1 className="mt-8 w-full font-semibold text-[20px] text-center">
                {team.name}
              </h1>
              <p className="font-medium text-[#999999]">{team.position}</p>
              <div className="mt-4 border-[2px] border-[#242424] w-full rounded-full px-1 py-1 flex justify-between items-center">
                <h1 className="px-2">Say Hello 👋</h1>
                <span className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center">
                  <Send size={20} className="translate-y-[1px]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeamComp;
