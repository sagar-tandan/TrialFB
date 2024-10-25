import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();

  const navigate = () => {
    nav("/api/adminLogin");
  };
  return (
    <footer className="w-full text-[#737373] pt-10">
      <div className="w-full flex flex-col gap-10">
        <div className="w-full container mx-auto flex justify-between gap-20 items-start">
          {/* Logo Section */}
          <div className="flex flex-col max-w-sm">
            <div className="flex gap-2">
              <img src="" alt="" />
              <h1>Logo</h1>
            </div>
            <h1>where innovation meets execution</h1>
          </div>

          {/* Links Sections */}
          <div className="flex w-full justify-between">
            {/* Column 1 */}
            <div>
              <h3 className="text-gray-200 text-lg font-semibold mb-4">Home</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Hero Section
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Clients
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ's
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
                  <a href="#" className="hover:text-white">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Our Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Our Clients
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-gray-200 text-lg font-semibold mb-4">
                Properties
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Categories
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
                  <a href="#" className="hover:text-white">
                    Contact Form
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Our Offices
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#1a1a1a] py-3 items-center">
          <div className="container flex justify-between mx-auto items-center">
            <span className="text-white">
              &copy; 2023{" "}
              <span onDoubleClick={() => navigate()}>AaraTech.</span> All Rights
              Reserved.
            </span>
            {/* Social media handles */}
            <div className="flex gap-2">
              <span className="w-[40px] h-[40px] bg-[#141414] rounded-full flex justify-center text-white items-center cursor-pointer hover:bg-blue-600 transition-all ease-in-out duration-300">
                <Facebook />
              </span>
              <span className="w-[40px] h-[40px] bg-[#141414] rounded-full flex justify-center text-white items-center cursor-pointer hover:bg-rose-700 transition-all ease-in-out duration-300">
                <Instagram />
              </span>
              <span className="w-[40px] h-[40px] bg-[#141414] rounded-full flex justify-center text-white items-center cursor-pointer hover:bg-sky-500 transition-all ease-in-out duration-300">
                <Twitter />
              </span>
              <span className="w-[40px] h-[40px] bg-[#141414] rounded-full flex justify-center text-white items-center cursor-pointer hover:bg-red-600 transition-all ease-in-out duration-300">
                <Youtube />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
