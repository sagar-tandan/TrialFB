import { collection, getDocs } from "firebase/firestore";
import { Box, ShieldQuestion, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { db } from "../../Config";

const Dashboard = () => {
  const [allData, setAllData] = useState({
    product: "",
    review: "",
    faq: "",
  });
  const fetchAllDataCount = async () => {
    const product = await getDocs(collection(db, "products"));
    const review = await getDocs(collection(db, "Testimonials"));
    const faq = await getDocs(collection(db, "FAQ"));
    setAllData({
      product: product.size,
      review: review.size,
      faq: faq.size,
    });
  };

  useEffect(() => {
    fetchAllDataCount();
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col relative pt-10">
      <div className="w-full flex gap-6 px-6">
        <div className="w-full flex bg-purple-100 py-5 px-3 gap-4 items-center rounded-md hover:-translate-y-4 hover:bg-purple-200 transition-all duration-300 ease-in-out">
          <Box className="w-10 h-10 text-blue-500" />
          <div className="w-full flex flex-col">
            <span>Total Products</span>
            <span className="text-xl text-black font-semibold">
              {allData?.product}
            </span>
          </div>
        </div>

        <div className="w-full flex bg-purple-100 py-5 px-3 gap-4 items-center rounded-md hover:-translate-y-4 hover:bg-purple-200 transition-all duration-300 ease-in-out">
          <Star className="w-10 h-10 text-orange-400" />
          <div className="w-full flex flex-col">
            <span>Total Reviews</span>
            <span className="text-xl text-black font-semibold">
              {allData?.review}
            </span>
          </div>
        </div>

        <div className="w-full flex bg-purple-100 py-5 px-3 gap-4 items-center rounded-md hover:-translate-y-4 hover:bg-purple-200 transition-all duration-300 ease-in-out">
          <ShieldQuestion className="w-10 h-10 text-green-500" />
          <div className="w-full flex flex-col">
            <span>Active FAQ</span>
            <span className="text-xl text-black font-semibold">
              {allData?.faq}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
