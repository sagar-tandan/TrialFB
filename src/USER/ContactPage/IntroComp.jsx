import {
  Instagram,
  Mail,
  MapPin,
  MessageCircleMore,
  MoveUpRight,
  Phone,
} from "lucide-react";
import React, { useState } from "react";

const IntroComp = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[60px] ">
      <div className="w-full flex flex-col py-10 px-4 lg:px-16 lg:py-20 md:px-8 bg-gradient-to-r from-[#1f1f1f] via-[#141414] to-[#141414]">
        <div className="w-full flex flex-col max-w-screen-2xl mx-auto ">
          <h1 className="font-semibold md:text-[38px] text-[28px]">
            Get in Touch with AaraTech
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium text-[#737373] max-w-6xl">
            Welcome to PolyCraft's Contact Us page. We're here to assist you with
            any inquiries, requests, or feedback you may have. Whether you're
            looking to buy a product, or simply want to connect, we're just a
            message away. Reach out to us, and let's start a conversation.
          </p>
        </div>
      </div>

      <div className="w-full py-[6px] bg-[#191919]">
        <div className="w-full bg-[#141414] border-t-[2px] border-b-[2px] border-[#242424] p-3 sm:p-4">
          {/* Grid container */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-screen-2xl mx-auto">
            {/* Email */}
            <div className="relative group border-[2px] border-[#202020] flex flex-col items-center justify-center px-3 py-6 gap-4 rounded-md bg-[#1a1a1a] ">
              <div className="relative m-4">
                <div className="absolute -inset-4 bg-purple-500/20 rounded-full animate-pulse" />
                <div className="absolute -inset-2 bg-purple-500/30 rounded-full" />
                <Mail className="relative text-purple-500" strokeWidth={1.5} />
              </div>

              <h2 className="font-medium text-center text-sm sm:text-base transition-colors duration-300 ">
                sagarchhetry333@gmail.com
              </h2>

              <button
                onClick={() =>
                  (window.location.href = "mailto:sagarchhetry333@gmail.com")
                }
                className="absolute top-0 right-0 m-3 p-1 rounded-full transition-all duration-300 text-[#3e3e3e] hover:text-purple-400 hover:bg-purple-400/10 group-hover:text-purple-400"
              >
                <MoveUpRight
                  size={24}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              </button>
            </div>

            {/* PHONE */}
            <div className="relative group border-[2px] border-[#202020] flex flex-col items-center justify-center px-3 py-6 gap-4 rounded-md bg-[#1a1a1a] ">
              <div className="relative m-4">
                <div className="absolute -inset-4 bg-purple-500/20 rounded-full animate-pulse" />
                <div className="absolute -inset-2 bg-purple-500/30 rounded-full" />
                <Phone className="relative text-purple-500" strokeWidth={1.5} />
              </div>

              <h2 className="font-medium text-center text-sm sm:text-base transition-colors duration-300 ">
                +977- 9860788076
              </h2>

              <button
                onClick={() => (window.location.href = "tel:+9779860788076")}
                className="absolute top-0 right-0 m-3 p-1 rounded-full transition-all duration-300 text-[#3e3e3e] hover:text-purple-400 hover:bg-purple-400/10 group-hover:text-purple-400"
              >
                <MoveUpRight
                  size={24}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              </button>
            </div>

            {/* LOCATION */}
            <div className="relative group border-[2px] border-[#202020] flex flex-col items-center justify-center px-3 py-6 gap-4 rounded-md bg-[#1a1a1a] ">
              <div className="relative m-4">
                <div className="absolute -inset-4 bg-purple-500/20 rounded-full animate-pulse" />
                <div className="absolute -inset-2 bg-purple-500/30 rounded-full" />
                <MapPin
                  className="relative text-purple-500"
                  strokeWidth={1.5}
                />
              </div>

              <h2 className="font-medium text-center text-sm sm:text-base transition-colors duration-300 ">
                Kathmandu, Nepal
              </h2>

              <button
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/TxundXo2HrJLa32s7",
                    "_blank"
                  )
                }
                className="absolute top-0 right-0 m-3 p-1 rounded-full transition-all duration-300 text-[#3e3e3e] hover:text-purple-400 hover:bg-purple-400/10 group-hover:text-purple-400"
              >
                <MoveUpRight
                  size={24}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              </button>
            </div>

            {/* SOCIALS */}
            <div className="relative group border-[2px] border-[#202020] flex flex-col items-center justify-center px-3 py-6 gap-4 rounded-md bg-[#1a1a1a] ">
              <div className="relative m-4">
                <div className="absolute -inset-4 bg-purple-500/20 rounded-full animate-pulse" />
                <div className="absolute -inset-2 bg-purple-500/30 rounded-full" />
                <MessageCircleMore
                  className="relative text-purple-500"
                  strokeWidth={1.5}
                />
              </div>

              <h2 className="font-medium flex  text-center text-sm sm:text-base  ">
                WhatsApp
              </h2>

              <button
                onClick={() =>
                  window.open("https://wa.me/9779860788076", "_blank")
                }
                className="absolute top-0 right-0 m-3 p-1 rounded-full transition-all duration-300 text-[#3e3e3e] hover:text-purple-400 hover:bg-purple-400/10 group-hover:text-purple-400"
              >
                <MoveUpRight
                  size={24}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroComp;
