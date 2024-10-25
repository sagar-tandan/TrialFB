// import React from "react";
// import hero from "../UserAssets/hero.webp";

// const HeroSection = () => {
//   const text = "CONSULT• DESIGN • PROTOTYPE • REFINE • DEVELOP • ";
//   const characters = text.split("");
//   const totalChars = characters.length;
//   return (
//     <div className="w-full max-w-screen-2xl flex flex-col gap-10 pl-16 pt-6 mx-auto mt-[90px]">
//       <div className="w-full flex gap-5 justify-center items-center relative ">
//         {/* Left section */}
//         <div className="w-1/2">
//           <p className="font-semibold text-[36px] leading-none uppercase">
//             Welcome To Aara Technology
//           </p>
//           <p className="font-medium text-[25px] mt-1">
//             where innovation meets execution{" "}
//           </p>
//           <p className="font-medium text-[16px] text-[#737373] my-4 max-w-xl">
//             Bring your ideas to life with precision 3D modeling and printing.
//             Whether for art, engineering, or personal projects, we turn your
//             imagination into reality—one layer at a time.
//           </p>

//           {/* section for buttons */}
//           <div className="w-full flex gap-5 my-12">
//             <button className="px-5 border-[1px] rounded-md py-3 font-medium text-[14px] border-[#737373]">
//               Learn more
//             </button>

//             <button className="px-5 rounded-md py-3 font-medium text-[14px] bg-purple-700 hover:bg-purple-800 transition-all duration-200 ease-in-out">
//               Browse products
//             </button>
//           </div>

//           <div className="w-full flex gap-5 my-10">
//             <div className="px-6 border-[1px] rounded-md py-2 font-medium text-[14px] border-[#737373] flex flex-col bg-[#1a1a1a]">
//               <span className="font-bold text-[24px]">200+</span>
//               <span className="font-medium text-[18px] text-[#737373]">
//                 Happy customers
//               </span>
//             </div>
//             <div className="px-6 border-[1px] rounded-md py-2 font-medium text-[14px] border-[#737373] flex flex-col bg-[#1a1a1a]">
//               <span className="font-bold text-[24px]">1K+</span>
//               <span className="font-medium text-[18px] text-[#737373]">
//                 Products for clients
//               </span>
//             </div>

//             <div className="px-6 border-[1px] rounded-md py-2 font-medium text-[14px] border-[#737373] flex flex-col bg-[#1a1a1a]">
//               <span className="font-bold text-[24px]">5+</span>
//               <span className="font-medium text-[18px] text-[#737373]">
//                 Years of experience
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-1/2">
//           <img
//             className="w-full h-[600px] object-fill rounded-tl-md rounded-bl-sm"
//             src={hero}
//             alt="hero logo"
//           />
//         </div>

//         <div className="w-[150px] h-[150px] border-[1px] border-[#717171] bg-[#141414] absolute top-12 m-6 rounded-full flex items-center justify-center">
//           <div className="w-[75px] h-[75px] rounded-full bg-none border-[1px] border-[#717171]"></div>
//           {/* Rotating text container
//           <div className="absolute w-[85%] h-[85%] animate-[spin_10s_linear_infinite]">
//             {characters.map((char, i) => {
//               const rotation = (i * 360) / totalChars;
//               return (
//                 <div
//                   key={i}
//                   className="absolute w-full h-full p-4"
//                   style={{
//                     transform: `rotate(${rotation}deg)`,
//                   }}
//                 >
//                   <span
//                     className={`absolute left-1/2 -translate-x-1/2 -top-1 text-xs font-medium ${
//                       i === 0 ? "text-purple-600 " : ""
//                     }text-gray-200`}
//                   >
//                     {char}
//                   </span>
//                 </div>
//               );
//             })} */}
//           {/* </div> */}
//           <div className="absolute w-[85%] h-[85%] animate-[spin_10s_linear_infinite]">
//             {characters.map((char, i) => {
//               const rotation = (i * 360) / totalChars;
//               const isPurple = i < "CONSULT".length;

//               return (
//                 <div
//                   key={i}
//                   className="absolute w-full h-full p-4"
//                   style={{
//                     transform: `rotate(${rotation}deg)`,
//                   }}
//                 >
//                   <span
//                     className={`absolute left-1/2 -translate-x-1/2 -top-1 text-xs font-medium ${
//                       isPurple ? "text-purple-500" : "text-gray-200"
//                     }`}
//                   >
//                     {char}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";
import hero from "../UserAssets/hero.webp";

const HeroSection = () => {
  const text = "CONSULT• DESIGN • PROTOTYPE • REFINE • DEVELOP • ";
  const characters = text.split("");
  const totalChars = characters.length;
  return (
    <div className="w-full max-w-screen-2xl flex flex-col gap-5 px-4 sm:px-6 md:px-8 lg:pl-16 pt-6 mx-auto mt-[90px]">
      <div className="w-full flex flex-col-reverse lg:flex-row gap-5 justify-center items-center relative">
        {/* Left section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="font-semibold text-[28px] sm:text-[32px] md:text-[36px] leading-none uppercase mt-10 lg:mt-0">
            Welcome To Aara Technology
          </p>
          <p className="font-medium text-[20px] sm:text-[22px] md:text-[25px] mt-1">
            where innovation meets execution{" "}
          </p>
          <p className="font-medium text-[14px] sm:text-[15px] md:text-[16px] text-[#737373] my-4 max-w-xl mx-auto lg:mx-0">
            Bring your ideas to life with precision 3D modeling and printing.
            Whether for art, engineering, or personal projects, we turn your
            imagination into reality—one layer at a time.
          </p>

          {/* section for buttons */}
          <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-5 my-8 sm:my-12 justify-center lg:justify-start">
            <button className="px-5 border-[1px] rounded-md py-3 font-medium text-[14px] border-[#737373] w-full lg:w-auto">
              Learn more
            </button>

            <button className="px-5 rounded-md py-3 font-medium text-[14px] bg-purple-700 hover:bg-purple-700 ease-in-out w-full lg:w-auto hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              Browse products
            </button>
          </div>

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
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <img
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover lg:object-fill rounded-md lg:rounded-tl-md lg:rounded-bl-sm"
            src={hero}
            alt="hero logo"
          />
        </div>

        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] border-[1px] border-[#717171] bg-[#141414] absolute bottom-[55%]  sm:bottom-[50%] md:bottom-[45%] left-0 lg:top-12 lg:left-[44%] m-6 rounded-full flex items-center justify-center">
          <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] rounded-full bg-none border-[1px] border-[#717171]"></div>
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
                    className={`absolute left-1/2 -translate-x-1/2 -top-1 text-[8px] md:text-xs md:font-medium font-light ${
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
