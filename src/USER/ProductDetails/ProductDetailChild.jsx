import { div, img, span } from "framer-motion/client";
import { MoveLeft, MoveRight, Zap } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

const products = {
  id: 1,
  image: "https://dummyimage.com/200x200/000/fff&text=Product+1",
  name: "Wireless Headphones",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",

  price: 99.99,
  cover: [
    "https://dummyimage.com/200x200/000/fff&text=Product+1",
    "https://dummyimage.com/200x200/000/fff&text=Product+1",
    "https://dummyimage.com/200x200/000/fff&text=Product+1",
    "https://dummyimage.com/200x200/000/fff&text=Product+1",
    "https://dummyimage.com/200x200/000/fff&text=Product+1",
  ],
  keyFeatures: [
    "Wireless Headphones",
    "Wireless HeadphonesWireless Headphones",
    "Wireless HeadphonesWireless Headphones",
    "Master suite with a spa-inspired bathroom and ocean-facing balcony",
    "Master suite with a spa-inspired bathroom and ocean-facing balcony",
  ],
};

const ProductDetailChild = () => {
  const { id } = useParams(); // Get the id from URL

  console.log(id);

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalProducts = products.length;

  // Format the current slide number to always have 2 digits
  const formatSlideNumber = (number) => {
    return number.toString().padStart(2, "0");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
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

  return (
    <div className="w-full py-6 px-4 md:px-8 lg:px-16 flex flex-col gap-5 my-10 max-w-screen-2xl mx-auto">
      {/* TITLE */}
      <div className="w-full flex flex-col sm:justify-between sm:flex-row">
        <h1 className="font-semibold text-[24px]">{products.name}</h1>
        <span className="flex md:flex-col justify-start sm:justify-center items-center gap-3 md:gap-0">
          <h1 className="font-medium text-[16px] text-[#999999]">Price</h1>
          <p className="font-semibold text-[20px]">Rs. {products.price}</p>
        </span>
      </div>

      <div className="w-full border-[2px] border-[#242424] rounded-lg  p-4 bg-[#191919]">
        <div className="w-full my-2">
          <Slider ref={sliderRef} {...settings}>
            {products.cover?.map((product, index) => (
              <div key={index} className="px-2">
                <img
                  className="w-full rounded-md h-[250px] sm:h-[350px] object-cover"
                  src={product}
                  alt=""
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="w-full p-2 flex items-center justify-center">
          <div className="w-[250px] p-[6px] bg-[#141414] rounded-full flex justify-between items-center">
            <span
              onClick={() => goToPrev()}
              className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full border-[2px] border-[#202020] flex items-center justify-center cursor-pointer hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:text-purple-400"
            >
              <MoveLeft />
            </span>
            {Array(products.cover.length)
              .fill()
              .map((_, index) => (
                <span
                  key={index}
                  className={`w-[20px] h-[5px] rounded-full ${
                    currentSlide === index ? "bg-purple-500" : "bg-[#242424]"
                  } mx-1`}
                ></span>
              ))}

            <span
              onClick={() => goToNext()}
              className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full border-[2px] border-[#202020] flex items-center justify-center cursor-pointer hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:text-purple-400"
            >
              <MoveRight />
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 border-2 border-[#242424] rounded-md p-4 md:p-8 flex flex-col gap-2 md:h-fit">
          <h1 className="w-full font-semibold text-[20px]">Description</h1>
          <p className="text-[16px] font-medium text-[#999999]">
            {products.description}
          </p>
        </div>

        <div className="w-full md:w-1/2 border-2 border-[#242424] rounded-md p-4 md:p-8 flex flex-col gap-2">
          <h1 className="w-full font-semibold text-[20px]">Key Features</h1>

          {products.keyFeatures?.map((feature, index) => (
            <span
              key={index}
              className="text-[16px] font-medium text-[#999999] my-1 w-full border-l-2 py-2 px-3 bg-gradient-to-r from-[#191919] to-[#141414] border-[#5931bc] flex items-center gap-3"
            >
              <Zap className="text-white flex-shrink-0" />
              <p className="break-words">{feature}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailChild;