import React from 'react';
import styled from 'styled-components';

const StyledMobileNavMenu = styled.div`
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

const MobileNavMenu = ({ isMobileNavVisible , children }) => {
  return (
    <StyledMobileNavMenu
      className={isMobileNavVisible ? "open" : ""}
    >
      {children}
    </StyledMobileNavMenu>
  );
};

export default MobileNavMenu;