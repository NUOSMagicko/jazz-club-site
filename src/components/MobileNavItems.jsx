import React from "react";
import styled from "styled-components";
import MobileNavItem from "./MobileNavItem";

const StyledMobileNavItems = styled.div`
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

const MobileNavItems = () => {
  return (
    <StyledMobileNavItems>
      <MobileNavItem href="#home">Home</MobileNavItem>
      <MobileNavItem href="#about">About</MobileNavItem>
      <MobileNavItem href="#services">Services</MobileNavItem>
      <MobileNavItem href="#contact">Contact</MobileNavItem>
    </StyledMobileNavItems>
  );
};

export default MobileNavItems;
