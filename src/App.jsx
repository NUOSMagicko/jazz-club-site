// src/ComingSoon.js
import React, { useState } from "react";
import styled from "styled-components";
// At the top of your ComingSoon.js file
import mainBackground from "./assets/main_background.jpg";
import { TypeAnimation } from "react-type-animation";
import logoImage from "./assets/jazzLogo.png";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Importing Gmail and Phone icons

const Container = styled.div`
  box-sizing: border-box;
  max-width: 100%; // Instead of width, ensures it doesn't exceed viewport width
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${mainBackground}); // Add this line
  background-size: cover; // Cover the entire page
  background-position: center; // Center the background image  color: white;
  text-align: center;
  position: relative; // Make sure this line is added
  &:before {
    // Add this block
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(
      0,
      0,
      0,
      0.5
    ); // Adjust the color and opacity to your liking
    z-index: 0;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 1.25rem;
  color: #f8e604; // Ensure text color is set to white for contrast
  text-shadow: 0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.7); // Add this line
  z-index: 1;
  &.hide {
    display: none;
  }
  @media (max-width: 768px) {
    // Adjust for mobile devices
    font-size: 1.375rem; // Reduce padding on smaller screens
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #f8e604; // Ensure text color is set to white for contrast
  text-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.7); // Add this line
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0.9375rem;
  margin-right: 0.9375rem;
  &.hide {
    display: none;
  }
  @media (max-width: 768px) {
    // Adjust for mobile devices
    font-size: 0.875rem; // Reduce padding on smaller screens
  }
`;

const NavBar = styled.nav`
  box-sizing: border-box;
  width: 100%;
  padding: 1.25rem 0.625rem; /* 20px 10px */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2); // Faint transparent background
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  @media (max-width: 768px) {
    // Adjust for mobile devices
    padding: 0.625rem 0.625rem; /* 10px 10px */
  }
`;

const Logo = styled.img`
  /* font-size: 24px; */
  color: white;
  height: 3.75rem; /* 60px */
  width: auto; // This will maintain the aspect ratio of the image
  margin-left: 1.25rem; /* 20px */
`;

const LgNavItems = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%; // Adjust based on your needs
  @media (max-width: 768px) {
    // Adjust for mobile devices
    display: none; // Reduce padding on smaller screens
  }
`;

const LgNavItem = styled.a`
  color: #f8e604;
  text-decoration: none;
  font-size: 1.125rem; // 18px converted to rem
  cursor: pointer;
  &:hover {
    color: #f7f7f7; // Change as needed
  }
`;


const HamburgerIcon = styled.div`
  display: none; // Hidden by default
  font-size: 1.5rem; /* 24px */
  cursor: pointer;
  color: #f8e604;
  padding: 0.3125rem; /* 5px */
  transition: transform 0.3s;
  &:hover {
    color: #f7f7f7;
    transform: translateY(
      -2px
    ); // Slightly raise the icon on hover for more depth
  }
  @media (max-width: 768px) {
    display: block; // Only show on mobile devices
  }
  &.hide {
    display: none;
  }
`;

const MobileNavMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4); // Semi-transparent black background
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px; // Space for the close icon
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 5;
  &.open {
    transform: translateX(0);
  }
`;

const MobileNavItems = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%; // Adjust based on your needs
  @media (min-width: 768px) {
    // Adjust for mobile devices
    display: none; // Reduce padding on smaller screens
  }
`;

const MobileNavItem = styled.a`
  color: #f8e604;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #f7f7f7; // Change as needed
  }
`;

const CloseIcon = styled.div`
  font-size: 1.5rem; /* 24px */
  color: #f8e604;
  position: absolute;
  top: 1.25rem; /* 20px */
  right: 0.625rem; /* 10px */
  margin-right: 1.25rem; /* 20px */
  cursor: pointer;
  // Add shadow for elevated effect
  // Optional: add a transition for a smooth effect when interacting
  transition: transform 0.3s;

  &:hover {
    color: #f7f7f7;
    transform: translateY(
      -0.125rem
    ); // Slightly raise the icon on hover for more depth
  }
`;

const Footer = styled.nav`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  color: #f8e604;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2); // Faint transparent background
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  @media (max-width: 768px) {
    // Adjust for mobile devices
    padding: 0.625rem 0.625rem; // 10px 10px converted to rem
  }
`;


const Icon = styled.span`
  color: #f8e604; // The specified yellow color
  margin-right: 0.5rem; // 8px converted to rem
`;

const ComingSoon = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  return (
    <>
      <NavBar>
        <Logo src={logoImage} alt="NUOS Logo" />
        <LgNavItems>
          <LgNavItem href="#home">Home</LgNavItem>
          <LgNavItem href="#about">About</LgNavItem>
          <LgNavItem href="#services">Services</LgNavItem>
          <LgNavItem href="#contact">Contact</LgNavItem>
        </LgNavItems>
        <HamburgerIcon
          className={isMobileNavVisible ? "hide" : ""}
          onClick={() => setIsMobileNavVisible(true)}
        >
          ☰
        </HamburgerIcon>
      </NavBar>
      <MobileNavMenu className={isMobileNavVisible ? "open" : ""}>
        <CloseIcon onClick={() => setIsMobileNavVisible(false)}>X</CloseIcon>
        <MobileNavItems>
          <MobileNavItem href="#home">Home</MobileNavItem>
          <MobileNavItem href="#about">About</MobileNavItem>
          <MobileNavItem href="#services">Services</MobileNavItem>
          <MobileNavItem href="#contact">Contact</MobileNavItem>
        </MobileNavItems>
      </MobileNavMenu>
      <Container>
        <Title className={isMobileNavVisible ? "hide" : ""}>
          <TypeAnimation
            sequence={[
              "The Cotton Club", // Text 1
              1000, // Pause after Text 1
              "", // Clear Text 1
              1000, // Pause before showing Text 2 (adjust this value as needed)
              "relaunching soon ...", // Text 2
              1000, // Pause after Text 2 (adjust or remove this based on your preference)
            ]}
            wrapper="span" // Wrap text in a span (this is default)
            cursor={true} // Show cursor
            repeat={Infinity} // Repeat animation
          />
        </Title>
        <Description className={isMobileNavVisible ? "hide" : ""}>
          Experience live jazz magic at Bangkok's Cotton Club! An evening with
          sensational Jazz Quartets awaits, transporting you through mesmerizing
          melodies.
        </Description>
        <Description className={isMobileNavVisible ? "hide" : ""}>
          Immerse yourself in captivating tunes and the unique ambiance of the
          Cotton Club. Reserve now for a night of unforgettable entertainment.
        </Description>
      </Container>
      s
      <Footer>
        <div>
          {" "}
          <Description>Cotton Club's Gmail </Description>
          <Description>
            <Icon>
              <FaEnvelope />
            </Icon>
            info@nuosmagicko.com
          </Description>
        </div>
        {/* <Description>NUOS Gmail : info@nuosmagicko.com</Description> */}
        <div>
          {" "}
          <Description>Cotton Club's Phone </Description>
          <Description>
            <Icon>
              <FaPhone />
            </Icon>
            +66922430157
          </Description>
        </div>
      </Footer>
    </>
  );
};

export default ComingSoon;
