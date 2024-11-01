import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircleMore,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../ADMIN/assets/logo.svg";

const Footer = () => {
  const nav = useNavigate();

  const navigate = () => {
    nav("/api/adminLogin");
  };
  return (
    <footer className="w-full  text-[#737373] pt-10 mx-auto ">
      <div className="w-full flex flex-col gap-10 ">
        <div className="w-full mx-auto flex justify-between gap-10 lg:gap-20 items-start lg:flex-row flex-col px-4 md:px-8 lg:px-16 max-w-screen-2xl">
          {/* Logo Section */}
          <div className="flex flex-col max-w-sm">
            <div className="flex gap-2">
              <img src={logo} alt="" />
            </div>
            <h1 className="mt-3">where innovation meets execution</h1>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 gap-6 sm:gap-0 sm:grid-cols-4 w-full justify-between">
            {/* Column 1 */}
            <div>
              <h3 className="text-gray-200 text-lg font-semibold mb-4">Home</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#hero" className="hover:text-white">
                    Hero Section
                  </a>
                </li>
                <li>
                  <a href="#client" className="hover:text-white">
                    Clients
                  </a>
                </li>
                <li>
                  <a href="#FeaturedProducts" className="hover:text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#review" className="hover:text-white">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-gray-200 text-lg font-semibold mb-4">
                About Us
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#journey" className="hover:text-white">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#workflow" className="hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-white">
                    Our Team
                  </a>
                </li>

                <li>
                  <a href="#OurClients" className="hover:text-white">
                    Our Clients
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-gray-200 text-lg font-semibold mb-4">
                Products
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#searchProduct" className="hover:text-white">
                    Find Product
                  </a>
                </li>
                <li>
                  <a href="#discover" className="hover:text-white">
                    Discover Product
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-gray-200 text-lg font-semibold mb-4">
                Contact Us
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#info" className="hover:text-white">
                    Contact Information
                  </a>
                </li>
                <li>
                  <a href="#form" className="hover:text-white">
                    Contact Form
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#1a1a1a] py-3 items-center ">
          <div className="flex flex-col-reverse gap-5 sm:gap-0 sm:flex-row sm:justify-between mx-auto items-center max-w-screen-2xl px-4 md:px-8 lg:px-16 ">
            <span className="text-white">
              &copy; 2023{" "}
              <span onDoubleClick={() => navigate()}>AaraTech.</span> All Rights
              Reserved.
            </span>
            {/* Social media handles */}
            <div className="flex gap-3">
              <span
                onClick={() => {
                  window.open("https://www.facebook.com/AARATECH3D/", "_blank");
                }}
                className="w-[40px] h-[40px] bg-[#141414] rounded-full flex justify-center text-white items-center cursor-pointer border-[2px] border-[#737373] hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:text-purple-400"
              >
                <Facebook />
              </span>
              <span
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/aaratech3d/",
                    "_blank"
                  );
                }}
                className="w-[40px] h-[40px] bg-[#141414] rounded-full flex justify-center text-white items-center cursor-pointer border-[2px] border-[#737373] hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:text-purple-400"
              >
                <Instagram />
              </span>
              <span
                onClick={() => {
                  window.open("https://wa.me/9779817396487", "_blank");
                }}
                className="w-[40px] h-[40px] bg-[#141414] rounded-full flex justify-center text-white items-center cursor-pointer border-[2px] border-[#737373] hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:text-purple-400"
              >
                <MessageCircleMore />
              </span>
              <span
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/aaratech3d/",
                    "_blank"
                  );
                }}
                className="w-[40px] h-[40px] bg-[#141414] rounded-full flex justify-center text-white items-center cursor-pointer border-[2px] border-[#737373] hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:text-purple-400"
              >
                <Linkedin />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
