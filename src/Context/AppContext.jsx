import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [hide, setHide] = useState(true);
  const toggleHide = () => {
    setHide(!hide);
  };

  const value = {
    hide,
    toggleHide,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
