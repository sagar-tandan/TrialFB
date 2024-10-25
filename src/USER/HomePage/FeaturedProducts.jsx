import React, { useRef, useState } from "react";
import spark from "../UserAssets/spark.png";
import { MoveLeft, MoveRight } from "lucide-react";
import Slider from "react-slick";

const products = [
  {
    image: "https://dummyimage.com/200x200/000/fff&text=Product+1",
    name: "Wireless Headphones",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",

    price: 99.99,
  },
  {
    image: "https://dummyimage.com/200x200/000/fff&text=Product+2",
    name: "Smartphone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",

    price: 699.99,
  },
  {
    image: "https://dummyimage.com/200x200/000/fff&text=Product+3",
    name: "Gaming Mouse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",
    price: 49.99,
  },
  {
    image: "https://dummyimage.com/200x200/000/fff&text=Product+3",
    name: "Gaming Mouse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",
    price: 49.99,
  },
  {
    image: "https://dummyimage.com/200x200/000/fff&text=Product+1",
    name: "Wireless Headphones",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",

    price: 99.99,
  },
];

const FeaturedProducts = () => {
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

  return (
    <div className="w-full py-6 px-4 md:px-8 lg:px-16 flex flex-col gap-5 my-10 max-w-screen-2xl mx-auto">
      <div className="w-full flex items-center gap-1">
        <img className="w-7 h-7" src={spark} alt="" />
        <img className="w-4 h-4 opacity-60" src={spark} alt="" />
        <img className="w-2 h-2 opacity-30" src={spark} alt="" />
      </div>

      <h1 className="w-full text-2xl md:text-[32px] font-semibold leading-none">
        Featured Products
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 items-start md:items-center">
        <p className="max-w-5xl text-[#737373] font-medium text-sm md:text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro
          facere magni odio dicta possimus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquid, reiciendis?
        </p>
        <button className="border-[2px] border-[#202020] rounded-md py-2 md:py-3 px-4 md:px-6 bg-[#1a1a1a] active:bg-[#1d1d1d] duration-100 transition-all ease-in-out whitespace-nowrap">
          View All Products
        </button>
      </div>

      <div className="w-full mt-6">
        <Slider ref={sliderRef} {...settings}>
          {products?.map((product, index) => (
            <div key={index} className="px-2">
              <div className="w-full p-3 md:p-5 flex flex-col gap-1 border-[2px] border-[#202020] rounded-md">
                <img
                  className="w-full rounded-md h-[250px] sm:h-[250px] object-cover"
                  src={product.image}
                  alt=""
                />
                <h1 className="w-full text-base md:text-[18px] font-semibold mt-3">
                  {product.name}
                </h1>
                <p className="font-medium text-[#737373] w-full text-sm md:text-base line-clamp-3">
                  {product.description}
                </p>
                <div className="w-full flex flex-col sm:flex-row justify-between mt-4 items-start sm:items-center gap-3">
                  <span className="flex flex-col gap-1">
                    <h1 className="text-[#737373] text-sm">Price</h1>
                    <h2 className="font-semibold text-base md:text-[18px]">
                      Rs. {product.price}
                    </h2>
                  </span>

                  <span className="text-[14px] bg-purple-700 px-4 md:px-8 py-2 md:py-3 rounded-md cursor-pointer hover:bg-purple-800 transition-all duration-200 ease-in-out text-center w-full sm:w-auto">
                    View Products Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <hr className="border-[1px] border-[#202020] mt-5" />

      <div className="w-full flex justify-between items-center">
        <span className="text-base md:text-[18px] font-medium ">
          {formatSlideNumber(currentSlide + 1)}{" "}
          <span className="text-[#737373]">
            of {formatSlideNumber(totalProducts)}
          </span>
        </span>

        <div className="flex gap-4 select-none">
          <span
            onClick={goToPrev}
            className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full border-[2px] border-[#202020] flex items-center justify-center hover:bg-[#1a1a1a] cursor-pointer transition-all ease-in-out duration-300"
          >
            <MoveLeft strokeWidth="1px" />
          </span>

          <span
            onClick={goToNext}
            className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full border-[2px] border-[#202020] flex items-center justify-center hover:bg-[#1a1a1a] cursor-pointer transition-all ease-in-out duration-300"
          >
            <MoveRight strokeWidth="1px" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
