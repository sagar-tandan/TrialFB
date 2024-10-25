import React, { useState } from "react";
import spark from "../UserAssets/spark.png";
import { MoveLeft, MoveRight, Star } from "lucide-react";

const products = [
  {
    image: "https://dummyimage.com/200x200/000/fff&text=Client+1",
    name: "Sagar Tandan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",

    location: "Bargachhi, Dharan",
    header: "Exceptional Service",
    rating: 5,
  },
  {
    image: "https://dummyimage.com/200x200/000/fff&text=Client+1",
    name: "Sagar Tandan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",

    location: "Bargachhi, Dharan",
    header: "Exceptional Service",
    rating: 5,
  },
  {
    image: "https://dummyimage.com/200x200/000/fff&text=Client+1",
    name: "Sagar Tandan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",

    location: "Bargachhi, Dharan",
    header: "Exceptional Service",
    rating: 5,
  },
  //   {
  //     image: "https://dummyimage.com/200x200/000/fff&text=Product+4",
  //     name: "Smartwatch",
  //     description:
  //       "Fitness-focused smartwatch with heart rate monitoring and GPS.",
  //     price: 149.99,
  //   },
  //   {
  //     image: "https://dummyimage.com/200x200/000/fff&text=Product+5",
  //     name: "Bluetooth Speaker",
  //     description: "Portable waterproof Bluetooth speaker with 12-hour battery.",
  //     price: 59.99,
  //   },
  //   {
  //     image: "https://dummyimage.com/200x200/000/fff&text=Product+6",
  //     name: "Laptop",
  //     description: "14-inch ultrabook with Intel i7 processor and 16GB RAM.",
  //     price: 999.99,
  //   },
  //   {
  //     image: "https://dummyimage.com/200x200/000/fff&text=Product+7",
  //     name: "Tablet",
  //     description: "10-inch tablet with stylus support and 256GB storage.",
  //     price: 329.99,
  //   },
  //   {
  //     image: "https://dummyimage.com/200x200/000/fff&text=Product+8",
  //     name: "4K TV",
  //     description: "55-inch 4K Ultra HD Smart TV with HDR support.",
  //     price: 599.99,
  //   },
  //   {
  //     image: "https://dummyimage.com/200x200/000/fff&text=Product+9",
  //     name: "Electric Scooter",
  //     description: "Foldable electric scooter with a top speed of 25km/h.",
  //     price: 299.99,
  //   },
  //   {
  //     image: "https://dummyimage.com/200x200/000/fff&text=Product+10",
  //     name: "Coffee Maker",
  //     description: "Automatic coffee maker with programmable brewing options.",
  //     price: 79.99,
  //   },
];

const ClientReview = () => {
  return (
    <div className="w-full py-6 px-16 flex flex-col gap-5 my-10">
      <div className="w-full flex items-center gap-1">
        <img className="w-7 h-7" src={spark} alt="" />
        <img className="w-4 h-4 opacity-60" src={spark} alt="" />
        <img className="w-2 h-2 opacity-30" src={spark} alt="" />
      </div>
      <h1 className="w-full text-[32px] font-semibold leading-none">
        What Our Clients Say
      </h1>

      {/* Complementay section */}
      <div className="w-full flex justify-between gap-10 items-center">
        <p className="max-w-5xl text-[#737373] font-medium text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro
          facere magni odio dicta possimus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquid, reiciendis?
        </p>
        <button className="border-[2px] border-[#202020] rounded-md py-3 px-6 bg-[#1a1a1a] active:bg-[#1d1d1d] duration-100 transition-all ease-in-out">
          View All Testimonials
        </button>
      </div>

      {/* PRODUCTS */}

      <div className="w-full flex gap-5 mt-6">
        {products?.map((product, index) => (
          <div
            key={index}
            className="w-full p-8 flex flex-col gap-1 border-[2px] border-[#202020] rounded-md"
          >
            <div className="w-full flex gap-2">
              {Array.from({ length: product.rating }, (_, i) => (
                <span
                  key={i}
                  className="w-[35px] h-[35px] rounded-full border-[1px] border-[#262626] bg-[#1a1a1a] flex justify-center items-center p-1 text-yellow-600"
                >
                  <Star />
                </span>
              ))}
            </div>
            <h1 className="w-full text-[20px] font-semibold mt-5">
              {product.header}
            </h1>
            <p className="font-medium w-full text-[16px]">
              {product.description}
            </p>
            <div className="w-full flex gap-3 mt-4 items-center">
              <img
                className="w-[50px] h-[50px] rounded-full object-cover "
                src={product.image}
                alt=""
              />

              <div className="flex flex-col">
                <h1 className=" font-medium leading-none">{product.name}</h1>
                <h2 className="text-[#737373]">{product.location}</h2>
              </div>
            </div>
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

export default ClientReview;
