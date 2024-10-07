import { createContext, useContext, useState } from "react";
import { useTable } from "react-table/dist/react-table.development";

const AllContext = createContext();

const ContextProvider = ({ children }) => {
  const [allData, setAllData] = useState({
    filter: "",
  });

  return (
    <AllContext.Provider value={{ allData, setAllData }}>
      {children}
    </AllContext.Provider>
  );
};

export { AllContext, ContextProvider };
