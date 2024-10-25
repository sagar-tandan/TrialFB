import React, { useState } from "react";
import spark from "../UserAssets/spark.png";
import { MoveLeft, MoveRight, Star } from "lucide-react";

const products = [
  {
    question: "What types of services do you offer?",
    answer:
      "Lorem, ipsum dolor sit ame amet?",
  },
  {
    question: "Can you help with the design of my 3D model?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ea. Voluptatum cum nesciunt sequi rerum corporis consequuntur eos voluptates amet?",
  },
  {
    question:
      "How much will the services cost akram bakram hjlksacnlnk haschoiahjcpoais AICJPOJSADOCJ ?",
    answer:
      "Lorem, ipsum dolor sit amet , ipsum dolor sit amet, ipsum dolor sit amet, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ea. Voluptatum cum nesciunt sequi rerum corporis consequuntur eos voluptates amet?",
  },
];

const FrequentlyAskedQuestion = () => {
  return (
    <div className="w-full py-6 px-16 flex flex-col gap-5 my-10">
      <div className="w-full flex items-center gap-1">
        <img className="w-7 h-7" src={spark} alt="" />
        <img className="w-4 h-4 opacity-60" src={spark} alt="" />
        <img className="w-2 h-2 opacity-30" src={spark} alt="" />
      </div>
      <h1 className="w-full text-[32px] font-semibold leading-none">
        Frequently Asked Questions{" "}
      </h1>

      {/* Complementay section */}
      <div className="w-full flex justify-between gap-10 items-center">
        <p className="max-w-5xl text-[#737373] font-medium text-[16px]">
          Find answers to common questions about AaraTech services, and the
          making process. We're here to provide clarity and assist you every
          step of the way.
        </p>
        <button className="border-[2px] border-[#202020] rounded-md py-3 px-6 bg-[#1a1a1a] active:bg-[#1d1d1d] duration-100 transition-all ease-in-out">
          View All FAQs
        </button>
      </div>

      {/* PRODUCTS */}

      <div className="w-full flex gap-5 mt-6">
        {products?.map((product, index) => (
          <div
            key={index}
            className="w-full p-8 flex flex-col gap-1 border-[2px] border-[#202020] rounded-md"
          >
            <h1 className="w-full text-[20px] font-semibold mt-5 max-w-sm h-[65px]">
              {product.question?.length > 60
                ? product.question.slice(0, 60) + "..."
                : product.question}
            </h1>
            <p className="font-medium w-full text-[16px] text-[#737373]">
              {product.answer?.length > 150
                ? product.answer.slice(0, 150) + "..."
                : product.answer}
            </p>
          </div>
        ))}
      </div>

      <hr className="border-[1px] border-[#202020] mt-5" />

      <div className="w-full flex justify-between items-center">
        <span className="text-[18px] font-medium">
          01 <span className="text-[#737373]">of 10</span>
        </span>

        <div className="flex gap-4">
          <span className="w-[40px] h-[40px] rounded-full border-[2px] border-[#202020] flex items-center justify-center hover:bg-[#1a1a1a] cursor-pointer transition-all ease-in-out duration-300">
            <MoveLeft strokeWidth="1px" />
          </span>

          <span className="w-[40px] h-[40px] rounded-full border-[2px] border-[#202020] flex items-center justify-center hover:bg-[#1a1a1a] cursor-pointer transition-all ease-in-out duration-300">
            <MoveRight strokeWidth="1px" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
