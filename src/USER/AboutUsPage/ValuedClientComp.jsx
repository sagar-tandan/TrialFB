import React, { useRef, useState } from "react";
import spark from "../UserAssets/spark.png";
import { MoveLeft, MoveRight } from "lucide-react";
import Slider from "react-slick";

const clients = [
  {
    year: "2016",
    review:
      "I recently collaborated with XYZ 3D Design to create a custom case for my product and several components for my air quality sensor. From the start, the team was highly professional and deeply involved in understanding the specific needs of my project.",
    name: "Alpha Solutions",
    link: "https://alphasolutions.com",
  },
  {
    year: "2016",
    review:
      "The team was highly professional and deeply involved in understanding the specific needs of my project.",
    name: "Beta Technologies",
    link: "https://betatechnologies.com",
  },
  {
    year: "2016",
    review:
      "I recently collaborated with XYZ 3D Design to create a custom case for my product and several components for my air quality sensor. From the start, the team was highly professional and deeply involved in understanding the specific needs of my project.",
    name: "Gamma Enterprises",
    link: "https://gammaenterprises.com",
  },
  {
    year: "2016",
    review:
      "I recently collaborated with XYZ 3D Design to create a custom case for my product and several components for my air quality sensor. From the start, the team was highly professional and deeply involved in understanding the specific needs of my project.",
    name: "Delta Innovations",
    link: "https://deltainnovations.com",
  },
  {
    year: "2016",
    review:
      "I recently collaborated with XYZ 3D Design to create a custom case for my product and several components for my air quality sensor. From the start, the team was highly professional and deeply involved in understanding the specific needs of my project.",
    name: "Epsilon Robotics",
    link: "https://epsilonrobotics.com",
  },
  {
    year: "2016",
    review:
      "I recently collaborated with XYZ 3D Design to create a custom case for my product and several components for my air quality sensor. From the start, the team was highly professional and deeply involved in understanding the specific needs of my project.",
    name: "Zeta Engineering",
    link: "https://zetaengineering.com",
  },
  {
    year: "2016",
    review:
      "I recently collaborated with XYZ 3D Design to create a custom case for my product and several components for my air quality sensor. From the start, the team was highly professional and deeply involved in understanding the specific needs of my project.",
    name: "Eta Industries",
    link: "https://etaindustries.com",
  },
  {
    year: "2016",
    review:
      "I recently collaborated with XYZ 3D Design to create a custom case for my product and several components for my air quality sensor. From the start, the team was highly professional and deeply involved in understanding the specific needs of my project.",
    name: "Theta Solutions",
    link: "https://thetasolutions.com",
  },
  {
    year: "2016",
    review:
      "I recently collaborated with XYZ 3D Design to create a custom case for my product and several components for my air quality sensor. From the start, the team was highly professional and deeply involved in understanding the specific needs of my project.",
    name: "Iota Ventures",
    link: "https://iotaventures.com",
  },
  {
    year: "2016",
    review:
      "I recently collaborated with XYZ 3D Design to create a custom case for my product and several components for my air quality sensor. From the start, the team was highly professional and deeply involved in understanding the specific needs of my project.",
    name: "Kappa Systems",
    link: "https://kappasystems.com",
  },
  {
    year: "2016",
    review:
      "I recently collaborated with XYZ 3D Design to create a custom case for my product and several components for my air quality sensor. From the start, the team was highly professional and deeply involved in understanding the specific needs of my project.",
    name: "Lambda Corp",
    link: "https://lambdacorp.com",
  },
  {
    year: "2016",
    review:
      "The team was highly professional and deeply involved in understanding the specific needs of my project.",
    name: "Mu Dynamics",
    link: "https://mudynamics.com",
  },
];

const ValuedClientComp = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalClients = clients.length;

  // Format the current slide number to always have 2 digits
  const formatSlideNumber = (number) => {
    return number.toString().padStart(2, "0");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      id="OurClients"
      className="w-full max-w-screen-2xl flex flex-col gap-5 px-4 sm:px-6 md:px-8 lg:px-10 mx-auto pt-16 lg:pt-[90px] mb-5"
    >
      <div className="w-full flex flex-col gap-5 justify-center items-center relative">
        {/* Left section */}
        <div className="w-full text-left">
          <div className="w-full flex items-center gap-1 mb-5">
            <img className="w-7 h-7" src={spark} alt="" />
            <img className="w-4 h-4 opacity-60" src={spark} alt="" />
            <img className="w-2 h-2 opacity-30" src={spark} alt="" />
          </div>

          <h1 className="w-full text-2xl md:text-[32px] font-semibold leading-none">
            Our Valued Clients
          </h1>
          <p className="w-full font-medium text-[14px] sm:text-[15px] md:text-[16px] text-[#737373] my-4 lg:mx-0 text-left max-w-6xl"></p>
        </div>

        <div className="w-full">
          <Slider {...settings} ref={sliderRef}>
            {clients.map((client, index) => (
              <div key={index} className="px-2">
                <div className="w-full bg-[#191919] p-[6px] rounded-lg">
                  <div className="w-full h-fit sm:h-[300px] p-4 sm:p-6 flex flex-col gap-3 bg-[#141414] rounded-md border-[1px] border-[#242424]">
                    {/* TOP */}
                    <div className="w-full flex justify-between">
                      <div className="flex flex-col">
                        <p className="text-[#999999] font-medium text-[14px] sm:text-[16px]">
                          Since {client.year}
                        </p>
                        <h1 className="font-semibold text-[18px] md:text-[22px]">
                          {client.name}
                        </h1>
                      </div>
                      <button
                        onClick={() => handleClick(client.link)}
                        className="px-3 sm:px-6 py-1 bg-[#191919] font-medium text-[14px] h-[40px] flex items-center justify-center rounded-md cursor-pointer hover:bg-purple-600 hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                      >
                        Visit Website
                      </button>
                    </div>

                    {/* Review Section */}
                    <div className="flex-1 w-full flex flex-col border-[1px] border-[#242424] font-medium rounded-lg p-3">
                      <p className="w-full text-[#999999]">What They Said 🤗</p>
                      <div className="mt-3 flex-1 overflow-y-auto">
                        <p className="font-light text-white">{client.review}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* <hr className="border-[1px] border-[#202020] mt-5" /> */}
        <div className="w-full bg-red-50 border-t-[1px] mt-5 border-[#202020]"></div>

        <div className="w-full flex justify-between items-center mb-16">
          <span className="text-base md:text-[18px] font-medium ">
            {formatSlideNumber(currentSlide + 1)}{" "}
            <span className="text-[#737373]">
              of {formatSlideNumber(totalClients)}
            </span>
          </span>

          <div className="flex gap-4 select-none">
            <span
              onClick={goToPrev}
              className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full border-[2px] border-[#202020] flex items-center justify-center cursor-pointer hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:text-purple-400"
            >
              <MoveLeft strokeWidth="1px" />
            </span>

            <span
              onClick={goToNext}
              className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full border-[2px] border-[#202020] flex items-center justify-center cursor-pointer hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:text-purple-400"
            >
              <MoveRight strokeWidth="1px" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuedClientComp;
