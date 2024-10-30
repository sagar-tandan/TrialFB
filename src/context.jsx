import { createContext, useContext, useEffect, useState } from "react";
import { useTable } from "react-table/dist/react-table.development";

const AllContext = createContext();

const ContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [search, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState();
  const [productDetails, setProductDetails] = useState([]);



  return (
    <AllContext.Provider
      value={{
        activeTab,
        setActiveTab,
        search,
        setQuery,
        allProducts,
        setAllProducts,
        productDetails,
        setProductDetails,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export { AllContext, ContextProvider };
