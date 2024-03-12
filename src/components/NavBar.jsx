import React from "react";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  box-sizing: border-box;
  width: 100%;
  padding: 1.25rem 0.625rem; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2); 
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  @media (max-width: 768px) {
    padding: 0.625rem 0.625rem; 
  }
`;

const NavBar = ({children}) => {
  return (
    <StyledNavBar>
      {children}
    </StyledNavBar>
  );
};

export default NavBar;
