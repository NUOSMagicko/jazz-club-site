import React from 'react';
import styled from 'styled-components';

const StyledHamburgerIcon = styled.div`
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



const HamburgerIcon = ({ isMobileNavVisible, setIsMobileNavVisible }) => {
  return (
    <StyledHamburgerIcon
      className={isMobileNavVisible ? "hide" : ""}
      onClick={() => setIsMobileNavVisible(true)}
    >
      ☰
    </StyledHamburgerIcon>
  );
};

export default HamburgerIcon;