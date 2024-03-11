import React from "react";
import styled from "styled-components";
import LgNavItem from "./LgNavItem";

const StyledLgNavItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LgNavItemsContainer = ({ children }) => {
  return (
    <StyledLgNavItemsContainer>
      <LgNavItem href="#home">Home</LgNavItem>
      <LgNavItem href="#about">About</LgNavItem>
      <LgNavItem href="#services">Services</LgNavItem>
      <LgNavItem href="#contact">Contact</LgNavItem>
    </StyledLgNavItemsContainer>
  );
};

export default LgNavItemsContainer;
