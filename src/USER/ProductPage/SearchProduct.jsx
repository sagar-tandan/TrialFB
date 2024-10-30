import React, { useContext } from "react";
import { AllContext } from "../../context";
import { Search } from "lucide-react";

const SearchProduct = () => {
  const { query, setQuery } = useContext(AllContext);
  const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[60px] relative">
      <div className="w-full flex flex-col py-10 px-4 lg:px-16 lg:py-20 md:px-8 bg-gradient-to-r from-[#1f1f1f] via-[#141414] to-[#141414] border-l-0 border-r-0 border-t-[2px] border-b-[2px] border-[#242424] mt-1">
        <div className="w-full flex flex-col max-w-screen-2xl mx-auto ">
          <h1 className="font-semibold md:text-[38px] text-[28px]">
            Find Your Dream Product
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium text-[#737373] max-w-6xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="w-[90%] lg:w-full lg:max-w-4xl bg-[#1f1f1f] p-[6px] mt-6 md:mt-4 lg:absolute -bottom-8 rounded-t-lg flex items-center justify-center">
        <div className="w-full bg-[#141414] py-2 px-3 rounded-t-md flex items-center justify-between border-[2px] border-[#242424]">
          <input
            className="outline-none bg-transparent placeholder-[#666666] w-[83%]"
            type="text"
            placeholder="Search for a Product"
            name="Product"
            value={query}
            id="Product"
            onChange={handleChange}
          />
          <span className="w-[17%] flex gap-2 justify-center items-center bg-purple-700 select-none px-4 py-[8px] sm:py-[10px] rounded-md cursor-pointer">
            <Search className="w-4 h-4" />
            <h1 className="font-medium text-[14px] hidden sm:flex">
              Find Product
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
