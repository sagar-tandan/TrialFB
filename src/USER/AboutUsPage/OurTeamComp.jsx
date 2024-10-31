// import React, { useState } from "react";
// import spark from "../UserAssets/spark.png";
// import { Send, Twitter, Mail, Share2 } from "lucide-react";

// const teams = [
//   {
//     name: "Dummy Name",
//     position: "Founder",
//     social: "",
//     twitter: "",
//     image:
//       "https://th.bing.com/th/id/OIP.iOJ3d7QnoKo7X0GrBQf97gHaHa?rs=1&pid=ImgDetMain",
//   },
//   {
//     name: "Dummy Name",
//     position: "Founder",
//     social: "",
//     twitter: "",
//     image:
//       "https://th.bing.com/th/id/R.c3f629e7df9342ced633b56b786ae9fb?rik=1Ap5UA9TkozyQg&pid=ImgRaw&r=0",
//   },
//   {
//     name: "Dummy Name",
//     position: "Founder",
//     social: "",
//     twitter: "",
//     image:
//       "https://th.bing.com/th/id/R.c3f629e7df9342ced633b56b786ae9fb?rik=1Ap5UA9TkozyQg&pid=ImgRaw&r=0",
//   },
//   {
//     name: "Dummy Name",
//     position: "Founder",
//     social: "",
//     twitter: "",
//     image:
//       "https://th.bing.com/th/id/R.c3f629e7df9342ced633b56b786ae9fb?rik=1Ap5UA9TkozyQg&pid=ImgRaw&r=0",
//   },
// ];

// const OurTeamComp = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isLiked, setIsLiked] = useState(false);
//   const [showSocial, setShowSocial] = useState(false);

//   const socialIcons = [
//     { icon: Twitter, color: "bg-blue-400" },
//     { icon: Mail, color: "bg-red-400" },
//     { icon: Share2, color: "bg-green-400" },
//   ];
//   return (
//     <div
//       id="team"
//       className="w-full max-w-screen-2xl flex flex-col gap-5 px-4 sm:px-6 md:px-8 lg:px-10 mx-auto pt-16 lg:pt-[90px]"
//     >
//       <div className="w-full flex flex-col gap-5 justify-center items-center relative">
//         {/* Top section */}
//         <div className="w-full text-left">
//           <div className="w-full flex items-center gap-1 mb-5">
//             <img className="w-7 h-7" src={spark} alt="" />
//             <img className="w-4 h-4 opacity-60" src={spark} alt="" />
//             <img className="w-2 h-2 opacity-30" src={spark} alt="" />
//           </div>

//           <h1 className="w-full text-2xl md:text-[32px] font-semibold">
//             Meet the AaraTech Team{" "}
//           </h1>
//           <p className="w-full font-medium text-[14px] sm:text-[15px] md:text-[16px] my-4 text-[#737373] max-w-6xl text-left">
//             Our story is one of continuous growth and evolution. We started as a
//             small team with big dreams, determined to create a great platform
//             that transcended the ordinary.
//           </p>
//         </div>

//         {/* Bottom Section */}
//         <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-6">
//           {teams.map((team, index) => (
//             // <div
//             //   key={index}
//             //   className="w-full border-[1px] border-[#242424] p-4 rounded-xl flex flex-col items-center justify-center"
//             // >
//             //   <div className="w-full h-[500px] lg:h-[290px] rounded-xl relative">
//             //     <img
//             //       className="w-full h-[500px] lg:h-[290px] rounded-xl object-cover"
//             //       src={team.image}
//             //       alt=""
//             //     />
//             //     <div className="absolute w-14 h-14 bg-purple-700 rounded-full flex justify-center items-center -bottom-5 right-[43%]">
//             //       <Twitter />
//             //     </div>
//             //   </div>

//             //   <h1 className="mt-8 w-full font-semibold text-[20px] text-center">
//             //     {team.name}
//             //   </h1>
//             //   <p className="font-medium text-[#999999]">{team.position}</p>
//             //   <div className="mt-4 border-[2px] border-[#242424] w-full rounded-full px-1 py-1 flex justify-between items-center">
//             //     <h1 className="px-2">Say Hello 👋</h1>
//             //     <span className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center">
//             //       <Send size={20} className="translate-y-[1px]" />
//             //     </span>
//             //   </div>
//             // </div>

//             <div className="w-72 bg-gray-900 rounded-xl p-4 flex flex-col items-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
//               {/* Profile Image Container */}
//               <div
//                 className="relative mb-4 group cursor-pointer"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 <div className="w-32 h-32 overflow-hidden rounded-xl">
//                   <img
//                     src={teams.image}
//                     alt="Profile"
//                     className={`w-full h-full object-cover transition-transform duration-500 ${
//                       isHovered ? "scale-110" : "scale-100"
//                     }`}
//                   />
//                   {/* Overlay on hover */}
//                   <div
//                     className={`absolute inset-0 bg-purple-600/30 transition-opacity duration-300 rounded-xl ${
//                       isHovered ? "opacity-100" : "opacity-0"
//                     }`}
//                   />
//                 </div>

//                 {/* Social Media Icon */}
//                 <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
//                   <button
//                     onClick={() => setShowSocial(!showSocial)}
//                     className="bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors duration-200 transform hover:scale-110 active:scale-95"
//                   >
//                     <svg
//                       viewBox="0 0 24 24"
//                       className="w-5 h-5 text-white"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                     >
//                       <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
//                     </svg>
//                   </button>
//                 </div>

//                 {/* Social Media Pop-up */}
//                 <div
//                   className={`absolute -right-2 top-0 transition-all duration-300 ${
//                     showSocial
//                       ? "opacity-100 translate-x-0"
//                       : "opacity-0 translate-x-4 pointer-events-none"
//                   }`}
//                 >
//                   <div className="flex flex-col gap-2">
//                     {socialIcons.map((social, index) => (
//                       <button
//                         key={index}
//                         className={`${social.color} p-2 rounded-full hover:scale-110 transition-transform duration-200 shadow-lg`}
//                       >
//                         <social.icon className="w-4 h-4 text-white" />
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Like Button */}
//               <button
//                 onClick={() => setIsLiked(!isLiked)}
//                 className="absolute top-4 right-4"
//               >
//                 <svg
//                   className={`w-6 h-6 transition-colors duration-300 ${
//                     isLiked ? "text-red-500 fill-current" : "text-gray-400"
//                   }`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   fill="none"
//                 >
//                   <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//                 </svg>
//               </button>

//               {/* Name and Role */}
//               <div className="text-center mb-4 transform hover:scale-105 transition-transform duration-200">
//                 <h3 className="text-white text-lg font-semibold">
//                   {teams.name || "Dummy Name"}
//                 </h3>
//                 <p className="text-gray-400 text-sm">
//                   {teams.position || "Founder"}
//                 </p>
//               </div>

//               {/* Action Button */}
//               <button className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-lg py-2 px-4 flex items-center justify-between group transition-all duration-300 hover:shadow-lg active:scale-95">
//                 <span className="flex items-center">
//                   <span className="group-hover:scale-105 transition-transform duration-200">
//                     Say Hello
//                   </span>
//                   <span className="ml-2 group-hover:rotate-12 transition-transform duration-200">
//                     👋
//                   </span>
//                 </span>
//                 <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurTeamComp;

import React, { useState } from "react";
import spark from "../UserAssets/spark.png";
import { Send, Twitter, Mail, Share2, Instagram, Facebook, Globe } from "lucide-react";

const teams = [
  {
    name: "Dummy Name",
    position: "Founder",
    facebook: "",
    twitter: "",
    instagram: "",
    image:
      "https://th.bing.com/th/id/OIP.iOJ3d7QnoKo7X0GrBQf97gHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "Dummy Name",
    position: "Founder",
    facebook: "",
    twitter: "",
    instagram: "",
    image:
      "https://th.bing.com/th/id/R.c3f629e7df9342ced633b56b786ae9fb?rik=1Ap5UA9TkozyQg&pid=ImgRaw&r=0",
  },
  {
    name: "Dummy Name",
    position: "Founder",
    facebook: "",
    twitter: "",
    instagram: "",
    image:
      "https://th.bing.com/th/id/R.c3f629e7df9342ced633b56b786ae9fb?rik=1Ap5UA9TkozyQg&pid=ImgRaw&r=0",
  },
  {
    name: "Dummy Name",
    position: "Founder",
    facebook: "",
    twitter: "",
    instagram: "",
    image:
      "https://th.bing.com/th/id/R.c3f629e7df9342ced633b56b786ae9fb?rik=1Ap5UA9TkozyQg&pid=ImgRaw&r=0",
  },
];

const OurTeamComp = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [showSocial, setShowSocial] = useState(-1);

  const socialIcons = [
    { icon: Twitter, color: "bg-blue-400" },
    { icon: Instagram, color: "bg-red-400" },
    { icon: Facebook, color: "bg-green-400" },
  ];

  return (
    <div
      id="team"
      className="w-full max-w-screen-2xl flex flex-col gap-5 px-4 sm:px-6 md:px-8 lg:px-10 mx-auto pt-16 lg:pt-[90px]"
    >
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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {teams.map((team, index) => (
            <div
              key={index}
              className="w-full border-[2px] border-[#242424] p-4 rounded-xl flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div
                className="relative mb-4 group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <div
                  onClick={() =>
                    showSocial === index
                      ? setShowSocial(-1)
                      : setShowSocial(index)
                  }
                  className="sm:w-full w-[310px] h-[270px] lg:h-[290px] rounded-xl overflow-hidden"
                >
                  <img
                    className={`w-full h-[270px] lg:h-[290px] rounded-xl object-cover transition-transform duration-500 ${
                      index === hoveredIndex ? "scale-110" : "scale-100"
                    }`}
                    src={team.image}
                    alt=""
                  />
                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-purple-600/30 transition-opacity duration-300 rounded-xl ${
                      index === hoveredIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Social Media Icon */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                  <button
                    onClick={() =>
                      showSocial === index
                        ? setShowSocial(-1)
                        : setShowSocial(index)
                    }
                    className="bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors duration-200 transform hover:scale-110 active:scale-95"
                  >
                    <Globe className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Social Media Pop-up */}
                <div
                  className={`absolute -left-2 sm:-left-3 top-0 transition-all duration-300 ${
                    index === showSocial
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    {socialIcons.map((social, idx) => (
                      <button
                        key={idx}
                        className={`${social.color} p-2 rounded-full hover:scale-110 transition-transform duration-200 shadow-lg`}
                      >
                        <social.icon className="w-4 h-4 text-white" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <h1 className=" w-full font-semibold text-[20px] text-center transform hover:scale-105 transition-transform duration-200">
                {team.name}
              </h1>
              <p className="font-medium text-[#999999]">{team.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeamComp;
