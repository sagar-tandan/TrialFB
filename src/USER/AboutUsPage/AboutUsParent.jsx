import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import JourneyComp from "./JourneyComp";
import ValueComp from "./ValueComp";
import AchievementComp from "./AchievementComp";
import WorkFlowComp from "./WorkFlowComp";
import OurTeamComp from "./OurTeamComp";
import ValuedClientComp from "./ValuedClientComp";

const AboutUsParent = () => {
  return (
    <div className="w-full flex flex-col text-white bg-[#141414] font-urbanist">
      <Header />
      <JourneyComp />
      <ValueComp />
      <AchievementComp />
      <WorkFlowComp />
      <OurTeamComp />
      <ValuedClientComp />
      <hr className="border-[#202020] border-[1px]" />
      <Footer />
    </div>
  );
};

export default AboutUsParent;
