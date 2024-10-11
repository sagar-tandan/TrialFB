import React, { useState } from "react";
import {
  LayoutDashboard,
  Box,
  Table,
  Star,
  FileQuestion,
  ShieldQuestion,
} from "lucide-react";
import AddProducts from "./Components/AddProducts";
import DataTable from "./Table";
import AddReviews from "./Components/AddReviews";
import AddFAQ from "./Components/AddFAQ";
import Dashboard from "./Components/Dashboard";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("active") || "dashboard"
  );

  const setActiveFunction = (active) => {
    localStorage.setItem("active", active);
    setActiveTab(localStorage.getItem("active"));
  };

  return (
    <div className="w-full max-w-screen-2xl  flex gap-10 text-gray-800">
      <div className="w-[250px]  bg-purple-100 h-screen flex flex-col  fixed">
        <div
          onClick={() => setActiveFunction("dashboard")}
          className={`w-full flex py-3 px-6 gap-2 mt-5 cursor-pointer hover:bg-purple-200 hover:text-purple-800 group transition-all duration-200 ease-in-out ${
            activeTab == "dashboard" ? "text-purple-800 bg-purple-200" : ""
          }`}
        >
          <LayoutDashboard className="w-6 h-6 " />
          <span className="font-medium">Dashboard</span>
        </div>

        <div
          onClick={() => setActiveFunction("product")}
          className={`w-full flex py-3 px-6 gap-2 cursor-pointer hover:bg-purple-200 hover:text-purple-800 group transition-all duration-200 ease-in-out ${
            activeTab == "product" ? "text-purple-800 bg-purple-200" : ""
          }`}
        >
          <Box className="w-6 h-6 " />
          <span className="font-medium">Add Products</span>
        </div>

        <div
          onClick={() => setActiveFunction("review")}
          className={`w-full flex py-3 px-6 gap-2 cursor-pointer hover:bg-purple-200 hover:text-purple-800 group transition-all duration-200 ease-in-out ${
            activeTab == "review" ? "text-purple-800 bg-purple-200" : ""
          }`}
        >
          <Star className="w-6 h-6 " />
          <span className="font-medium">Add Testimonials</span>
        </div>

        <div
          onClick={() => setActiveFunction("faq")}
          className={`w-full flex py-3 px-6 gap-2 cursor-pointer hover:bg-purple-200 hover:text-purple-800 group transition-all duration-200 ease-in-out ${
            activeTab == "faq" ? "text-purple-800 bg-purple-200" : ""
          }`}
        >
          <ShieldQuestion className="w-6 h-6 " />
          <span className="font-medium">Add FAQ</span>
        </div>
      </div>

      <div className="w-full  h-[30px] ml-[250px]">
        {activeTab == "product" ? (
          <AddProducts />
        ) : activeTab == "review" ? (
          <AddReviews />
        ) : activeTab == "faq" ? (
          <AddFAQ />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
};

export default AdminPage;
