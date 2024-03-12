import React from 'react';
import styled from 'styled-components';

const StyledHamburgerIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #f8e604;
  padding: 0.3125rem;
  transition: transform 0.3s;
  &:hover {
    color: #f7f7f7;
    transform: translateY(
      -2px
    );
  }
  @media (max-width: 768px) {
    display: block;
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