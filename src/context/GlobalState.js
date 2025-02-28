import React, { createContext, useContext, useState, useMemo, useCallback } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [investments, setInvestments] = useState([
    { id: 1, name: "Real Estate Fund", risk: "Medium", returns: 8 },
    { id: 2, name: "Tech Startup Equity", risk: "High", returns: 15 },
    { id: 3, name: "Government Bonds", risk: "Low", returns: 3 },
    { id: 4, name: "Crypto Portfolio", risk: "High", returns: 20 },
  ]);

  const memoizedInvestments = useMemo(() => investments, [investments]);
  const updateUser = useCallback((userData) => setUser(userData), []);

  return (
    <GlobalContext.Provider value={{ user, updateUser, investments: memoizedInvestments, setInvestments }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
