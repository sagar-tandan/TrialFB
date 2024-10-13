import { collection, getDocs } from "firebase/firestore";
import { Box, Eye, ShieldQuestion, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { db } from "../../Config";
import dashboard from "../assets/dash.svg";

const Dashboard = () => {
  const [allData, setAllData] = useState({
    product: "0",
    review: "0",
    faq: "0",
  });

  const fetchProductCount = async () => {
    if (localStorage.getItem("productData")) {
      const productData = JSON.parse(localStorage.getItem("productData"));
      setAllData((prev) => ({ ...prev, product: productData.length }));
    } else {
      const product = await getDocs(collection(db, "products"));
      setAllData((prev) => ({ ...prev, product: product.size }));
    }
  };
  const fetchReviewCount = async () => {
    if (localStorage.getItem("reviewData")) {
      const reviewData = JSON.parse(localStorage.getItem("reviewData"));
      setAllData((prev) => ({ ...prev, review: reviewData.length }));
    } else {
      const review = await getDocs(collection(db, "Testimonials"));
      setAllData((prev) => ({ ...prev, review: review.size }));
    }
  };
  const fetchFaqCount = async () => {
    if (localStorage.getItem("faqsData")) {
      const faqsData = JSON.parse(localStorage.getItem("faqsData"));
      setAllData((prev) => ({ ...prev, faq: faqsData.length }));
    } else {
      const faq = await getDocs(collection(db, "FAQ"));
      setAllData((prev) => ({ ...prev, faq: faq.size }));
    }
  };

  // Function to fetch data from Firebase
  const fetchAllDataCount = async () => {
    try {
      await fetchProductCount();
      await fetchReviewCount();
      await fetchFaqCount();
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchAllDataCount();
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col relative pt-10">
      <div className="w-full flex px-5 mt-3">
        <div className="w-full flex bg-purple-200 px-6 py-9 gap-4 items-center rounded-md relative">
          <div className="w-full flex flex-col">
            <span className="font-semibold text-2xl">Hi, User</span>
            <span className="text-black">
              Ready to start you day with something exciting!!
            </span>
          </div>
          <img
            className="absolute top-[-50px] w-[250px] h-[250px] right-[-10px]"
            src={dashboard}
            alt=""
          />
        </div>
      </div>

      <h1 className="px-6 mt-9 mb-5 font-semibold text-[#616161] text-[16px]">
        Overview
      </h1>

      <div className="w-full flex gap-6 px-6">
        <div className="w-full flex bg-yellow-400 py-3 px-3 gap-10 text-white items-center rounded-md hover:-translate-y-3 hover:bg-yellow-500 transition-all duration-300 ease-in-out">
          <div className="flex w-[50px] h-[50px] rounded-md items-center justify-center backdrop-blur-sm bg-white/30">
            <Box className="w-9 h-9" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-xl font-semibold">{allData?.product}</span>
            <span>Total Products</span>
          </div>
        </div>

        <div className="w-full flex bg-[#631774] py-3 px-3 gap-10 text-white items-center rounded-md hover:-translate-y-3 hover:bg-[#581a65] transition-all duration-300 ease-in-out">
          <div className="flex w-[50px] h-[50px] rounded-md items-center justify-center backdrop-blur-sm bg-white/30">
            <Star className="w-9 h-9" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-xl font-semibold">{allData?.review}</span>
            <span>Total Reviews</span>
          </div>
        </div>

        <div className="w-full flex bg-[#ff017e] py-3 px-3 gap-10 text-white items-center rounded-md hover:-translate-y-3 hover:bg-[#b32a6e] transition-all duration-300 ease-in-out">
          <div className="flex w-[50px] h-[50px] rounded-md items-center justify-center backdrop-blur-sm bg-white/30">
            <ShieldQuestion className="w-9 h-9" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-xl font-semibold">{allData?.faq}</span>
            <span>Active FAQ</span>
          </div>
        </div>

        <div className="w-full flex bg-[#b700f4] py-3 px-3 gap-10 text-white items-center rounded-md hover:-translate-y-3 hover:bg-[#9d2fc2] transition-all duration-300 ease-in-out">
          <div className="flex w-[50px] h-[50px] rounded-md items-center justify-center backdrop-blur-sm bg-white/30">
            <Eye className="w-9 h-9" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-xl font-semibold">20</span>
            <span>Site Visits</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
