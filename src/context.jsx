import { createContext, useContext, useState } from "react";
import { useTable } from "react-table/dist/react-table.development";

const AllContext = createContext();

const ContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [query, setQuery] = useState("");
  const [allProducts, setAllProducts] = useState();

  return (
    <AllContext.Provider
      value={{
        activeTab,
        setActiveTab,
        query,
        setQuery,
        allProducts,
        setAllProducts,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export { AllContext, ContextProvider };
