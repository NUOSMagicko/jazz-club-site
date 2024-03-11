// src/ComingSoon.js
import React, { useState } from "react";
import styled from "styled-components";
// At the top of your ComingSoon.js file
import mainBackground from "./assets/main_background.jpg";
import { TypeAnimation } from "react-type-animation";
import logoImage from "./assets/jazzLogo.png";
import Logo from "./components/Logo";
import LgNavItem from "./components/LgNavItem";
import LgNavItemsContainer from "./components/LgNavItemsContainer";
import HamburgerIcon from "./components/HamburgerIcon";
import NavBar from "./components/NavBar";
import MobileNavMenu from "./components/MobileNavMenu";
import CloseIcon from "./components/CloseIcon";
import MobileNavItems from "./components/MobileNavItems";
import Description from "./components/Description";
import Title from "./components/Title";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

const Icon = styled.span`
  color: #f8e604; // The specified yellow color
  margin-right: 0.5rem; // 8px converted to rem
`;

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
