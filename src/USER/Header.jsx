import React, { useContext, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AllContext } from "../context";
import logo from "../ADMIN/assets/logo.svg";

const Header = () => {
  const { activeTab, setActiveTab } = useContext(AllContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setActiveTab(localStorage.getItem("activeTabUser"));
  }, [activeTab]);

  useEffect(() => {
    const latestActiveTab = localStorage.getItem("activeTabUser");
    if (latestActiveTab === "about") {
      navigate("/aboutus");
    } else if (latestActiveTab === "products") {
      navigate("/products");
    } else if (latestActiveTab === "contact") {
      navigate("/contact");
    } else if (latestActiveTab === "home") {
      navigate("/");
    }
  }, []);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "about", label: "About Us" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const gotoContact = () => {
    setActiveTab("contact");
    localStorage.setItem("activeTabUser", "contact");
    navigate("/contact");
  };

  const gotoTab = (path) => {
    setActiveTab(path);

    if (path === "home") {
      navigate("/");
      localStorage.setItem("activeTabUser", "home");
    } else if (path === "products") {
      navigate("/products");
      localStorage.setItem("activeTabUser", "products");
    } else {
      navigate("/aboutus");
      localStorage.setItem("activeTabUser", "about");
    }
  };

  return (
    <header className="w-full font-medium text-[17px] h-16 bg-[#191919] text-white fixed z-50  transition-colors duration-300 mb-20">
      <div className="w-full h-full max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center transform transition-transform duration-300 hover:scale-[102%]">
          <img
            onClick={() => {
              localStorage.setItem("activeTabUser", "home");
              navigate("/");
            }}
            className="cursor-pointer"
            src={logo}
            alt="aaratech"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 lg:gap-14 font-medium">
          {menuItems.map((item) => (
            <span
              key={item.id}
              className={`cursor-pointer relative group transition-colors duration-300 ${
                activeTab === item.id ? "text-purple-500" : ""
              }`}
              onClick={() => gotoTab(item.id)}
            >
              {item.label}
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
            </span>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block ">
          <button
            onClick={() => gotoContact()}
            className={`bg-[#141414] px-6 py-2 rounded-md border border-zinc-700 hover:bg-purple-600 hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 ${
              activeTab === "contact" ? "bg-purple-600" : ""
            }`}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X
              size={24}
              className="transition-transform duration-300 rotate-0 hover:rotate-90"
            />
          ) : (
            <Menu
              size={24}
              className="transition-transform duration-300 hover:scale-110"
            />
          )}
        </button>
      </div>

      {/* Mobile Menu with slide and fade transition */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-[#1E1E1E] border-t border-zinc-800 transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4 space-y-4">
          {menuItems.map((item) => (
            <span
              key={item.id}
              className={`cursor-pointer transform transition-all duration-300 hover:translate-x-2 ${
                activeTab === item.id
                  ? "text-purple-500"
                  : "hover:text-purple-400"
              }`}
              onClick={() => {
                gotoTab(item.id);
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </span>
          ))}
          <button
            onClick={() => gotoContact()}
            className={`bg-[#141414] px-6 py-2 rounded-md border border-zinc-700 hover:bg-purple-600 hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 ${
              activeTab === "contact" ? "bg-purple-600" : ""
            }`}
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
