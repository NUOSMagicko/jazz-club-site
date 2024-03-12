import React, { useState } from "react";
import Logo from "./components/Logo";
import LgNavItemsContainer from "./components/LgNavItemsContainer";
import HamburgerIcon from "./components/HamburgerIcon";
import NavBar from "./components/NavBar";
import MobileNavMenu from "./components/MobileNavMenu";
import CloseIcon from "./components/CloseIcon";
import MobileNavItems from "./components/MobileNavItems";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

const ComingSoon = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  return (
    <>
      <NavBar>
        <Logo />
        <LgNavItemsContainer />
        <HamburgerIcon
          isMobileNavVisible={isMobileNavVisible}
          setIsMobileNavVisible={setIsMobileNavVisible}
        >
          ☰
        </HamburgerIcon>
      </NavBar>
      <MobileNavMenu isMobileNavVisible={isMobileNavVisible} >
        <CloseIcon setIsMobileNavVisible={setIsMobileNavVisible} />
        <MobileNavItems/>
      </MobileNavMenu>
      <HeroSection isMobileNavVisible={isMobileNavVisible} />
      <Footer/>
    </>
  );
};

export default ComingSoon;
