import React from "react";
import { MoveUpRight } from "lucide-react";

import img12 from "../UserAssets/Clients/14.png";
import img11 from "../UserAssets/Clients/12.png";
import img10 from "../UserAssets/Clients/10.png";
import img9 from "../UserAssets/Clients/9.png";
import img8 from "../UserAssets/Clients/8.png";
import img7 from "../UserAssets/Clients/7.png";
import img6 from "../UserAssets/Clients/6.png";
import img5 from "../UserAssets/Clients/5.png";
import img4 from "../UserAssets/Clients/4.png";
import img3 from "../UserAssets/Clients/3.png";
import img2 from "../UserAssets/Clients/2.png";
import img1 from "../UserAssets/Clients/1.png";

const clientsCollection = [
  {
    name: "JCI Nepal",
    image: img1,
    link: "https://jcinepal.org.np/",
  },
  {
    name: "CAN Info Tech",
    image: img8,
    link: "https://can.org.np/",
  },

  {
    name: "GRIT Engineering",
    image: img3,
    link: "https://gritengineering.com.np/",
  },
  {
    name: "Voice of Nepal",
    image: img4,
    link: "https://www.facebook.com/TheVoiceofNepal.official/",
  },
  {
    name: "Biratnagar Metropolitian",
    image: img11,
    link: "https://biratnagarmun.gov.np/en",
  },
  {
    name: "Dharan Banker Club",
    image: img12,
    link: "https://www.facebook.com/dharanbankersclub/",
  },
  {
    name: "Agrobotics Nepal",
    image: img5,
    link: "https://www.linkedin.com/company/agrobotics-nepal/?originalSubdomain=np",
  },
  {
    name: "IOE Pulchowk Campus",
    image: img6,
    link: "https://pcampus.edu.np/",
  },
  {
    name: "Ime Life",
    image: img7,
    link: "https://imelifeinsurance.com/",
  },
  {
    name: "Techno Nepal",
    image: img2,
    link: "https://technonepal.com.np/",
  },
  {
    name: "Nepal Life",
    image: img9,
    link: "https://nepallife.com.np//",
  },
  {
    name: "Recent Air",
    image: img10,
    link: "https://www.recentair.com/",
  },
];

const Clients = () => {
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      id="client"
      className="w-full max-w-screen-2xl mx-auto py-[6px] bg-[#191919]"
    >
      <div className="w-full bg-[#141414] border-t-[2px] border-b-[2px] border-[#242424] p-3 sm:p-4">
        {/* Grid container */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {clientsCollection.map((client, index) => (
            <div
              onClick={() => {
                handleClick(client.link);
              }}
              className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group cursor-pointer"
            >
              <img
                className="w-[150px] h-[100px] object-cover transition-transform duration-300 group-hover:scale-105"
                src={client.image}
                alt={client.name}
                loading="lazy"
              />
              <span className="sm:group-hover:flex hidden bg-[#999999] font-medium px-3 py-1 rounded-[6px] text-white absolute -bottom-[14px] z-50 select-none ">
                {client.name}
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Clients;
