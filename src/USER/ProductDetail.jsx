import React, { useContext, useEffect } from "react";
import { AllContext } from "../context";
import { useParams } from "react-router-dom";

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
];

const ProductDetail = () => {
  const { id } = useParams(); // Get the id from URL

  console.log(id);

  return <div>ProductDetail</div>;
};

export default ProductDetail;
