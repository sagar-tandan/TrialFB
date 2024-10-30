import React, { useContext, useEffect, useState } from "react";
import spark from "../UserAssets/spark.png";
import { AllContext } from "../../context";
import { Box } from "lucide-react";
import { useNavigate } from "react-router-dom";

const products = [
  {
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
    ],
  },
  {
    id: 2,
    image: "https://dummyimage.com/200x200/000/fff&text=Product+2",
    name: "Smartphone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",

    price: 699.99,
    cover: [
      "https://dummyimage.com/200x200/000/fff&text=Product+1",
      "https://dummyimage.com/200x200/000/fff&text=Product+1",
      "https://dummyimage.com/200x200/000/fff&text=Product+1",
    ],
  },
  {
    id: 3,
    image: "https://dummyimage.com/200x200/000/fff&text=Product+3",
    name: "Gaming Mouse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",
    price: 49.99,
    cover: [
      "https://dummyimage.com/200x200/000/fff&text=Product+1",
      "https://dummyimage.com/200x200/000/fff&text=Product+1",
      "https://dummyimage.com/200x200/000/fff&text=Product+1",
    ],
  },
  {
    id: 4,
    image: "https://dummyimage.com/200x200/000/fff&text=Product+3",
    name: "Gaming Mouse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",
    price: 49.99,
    cover: [
      "https://dummyimage.com/200x200/000/fff&text=Product+1",
      "https://dummyimage.com/200x200/000/fff&text=Product+1",
      "https://dummyimage.com/200x200/000/fff&text=Product+1",
    ],
  },
  {
    id: 5,
    image: "https://dummyimage.com/200x200/000/fff&text=Product+1",
    name: "Wireless Headphones",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",

    price: 99.99,
    cover: [
      "https://dummyimage.com/200x200/000/fff&text=Product+1",
      "https://dummyimage.com/200x200/000/fff&text=Product+1",
      "https://dummyimage.com/200x200/000/fff&text=Product+1",
    ],
  },
];

const AllProducts = () => {
  const { allProducts, setAllProducts } = useContext(AllContext);
  const { query } = useContext(AllContext);
  const { productDetails, setProductDetails } = useContext(AllContext);
  const navigate = useNavigate();

  useEffect(() => {
    setAllProducts(products);
  }, []);

  // Filter products based on query
  useEffect(() => {
    if (query?.trim() !== "") {
      const queryProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setAllProducts(queryProducts);
    } else {
      setAllProducts(products);
    }
  }, [query]);

  const showProductDetails = (productD) => {
    navigate(`/products/${productD.id}`);
  };

  return (
    <div className="w-full py-6 px-4 md:px-8 lg:px-16 flex flex-col gap-5 mt-24 mb-10 max-w-screen-2xl mx-auto">
      <div className="w-full flex items-center gap-1">
        <img className="w-7 h-7" src={spark} alt="" />
        <img className="w-4 h-4 opacity-60" src={spark} alt="" />
        <img className="w-2 h-2 opacity-30" src={spark} alt="" />
      </div>

      <h1 className="w-full text-2xl md:text-[32px] font-semibold leading-none">
        Discover all the Products
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 items-start md:items-center">
        <p className="max-w-6xl text-[#737373] font-medium text-sm md:text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </div>

      <div
        className={`w-full mt-6 relative ${
          allProducts?.length > 0
            ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
            : "flex"
        }`}
      >
        {allProducts?.length > 0 ? (
          allProducts.map((product, index) => (
            <div key={index} className="m-4">
              <div className="w-full p-3 md:p-5 flex flex-col gap-1 border-[2px] border-[#202020] rounded-md">
                <img
                  className="w-full rounded-md h-[250px] sm:h-[250px] object-cover"
                  src={product.image}
                  alt={product.name}
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
                  <span
                    onClick={(e) => showProductDetails(product)}
                    className="text-[14px] bg-purple-700 px-4 lg:px-8 py-2 md:py-3 rounded-md cursor-pointer hover:bg-purple-700 hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 text-center w-full sm:w-auto"
                  >
                    View Product Details
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="m-4 text-center text-[#999999] w-full flex flex-col items-center justify-center gap-3">
            <Box className="w-[100px] h-[100px]" strokeWidth="1px" />
            <p className="w-full font-semibold text-[18px]">
              No products found for "{query}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
