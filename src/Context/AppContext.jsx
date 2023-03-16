import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [hide, setHide] = useState(true);
  const [open, isOpen] = useState(false);

  const toggleHide = () => {
    setHide(!hide);
  };
  const setIsOpen = () => {
    isOpen(!open);
  };

  const value = {
    hide,
    toggleHide,
    open,
    setIsOpen,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
