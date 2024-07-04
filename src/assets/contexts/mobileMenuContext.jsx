import React, { useState, useContext, createContext } from "react";

export const MobileMenuContext = createContext();

export default function MobileMenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <MobileMenuContext.Provider
      value={{ isMenuOpen, setIsMenuOpen, toggleMenu }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
}

export const useMobileMenu = () => useContext(MobileMenuContext);
