import React, { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export const useNav = () => useContext(NavContext);

export const NavProvider = ({ children }) => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  return (
    <NavContext.Provider value={{ isMobileNavVisible, setIsMobileNavVisible }}>
      {children}
    </NavContext.Provider>
  );
};
