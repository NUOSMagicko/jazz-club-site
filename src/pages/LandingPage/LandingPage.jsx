import React, { useState } from "react";
import { useNav } from "../../context/NavContext";
import NavBar from "../../components/NavBar";
import Logo from "../../components/Logo";
import LgNavItemsContainer from "../../components/LgNavItemsContainer";
import HamburgerIcon from "../../components/HamburgerIcon";
import MobileNavMenu from "../../components/MobileNavMenu";
import CloseIcon from "../../components/CloseIcon";
import MobileNavItems from "../../components/MobileNavItems";
import HeroSection from "../../components/HeroSection";
import Footer from "../../components/Footer";
// import NavBar from "../components/NavBar";
// import Logo from "../components/Logo";
// import LgNavItemsContainer from "../components/LgNavItemsContainer";
// import HamburgerIcon from "../components/HamburgerIcon";
// import MobileNavMenu from "../components/MobileNavMenu";
// import CloseIcon from "../components/CloseIcon";
// import MobileNavItems from "../components/MobileNavItems";
// import HeroSection from "../components/HeroSection";
// import Footer from "../components/Footer";
// import { useNav } from "../context/NavContext";

const LandingPage = () => {
const { isMobileNavVisible, setIsMobileNavVisible } = useNav();
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

export default LandingPage;
