import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled button with z-index of 1, burlywood background, and rounded borders
const StyledButton = styled.button`
  z-index: 1;
  background-color: #f8e604; // Setting the background color
  border-radius: 8px; // Making borders rounded
  border: none; // Removing default border
  padding: 8px 16px; // Adding some padding for better visuals
  cursor: pointer; // Change cursor to pointer on hover
  transition: background-color 0.3s ease; // Smooth transition for background color on hover
  &.hide {
    display: none;
  }
  &:hover {
    background-color: #deb887; // Slightly darker shade of burlywood for hover effect
  }
`;

function NavigationButton({ path , children , isMobileNavVisible }) {
  let navigate = useNavigate();

  const goToCoffeeMenu = () => {
    console.log("pressed");
    navigate(path);
  };

  return (
    <StyledButton className={isMobileNavVisible ? "hide" : ""} onClick={goToCoffeeMenu}>{children}</StyledButton>
  );
}

export default NavigationButton;
