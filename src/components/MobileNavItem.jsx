import React from 'react'
import styled from "styled-components"

const StyledMobileNavItem = styled.a`
  color: #f8e604;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #f7f7f7; // Change as needed
  }
`;
const MobileNavItem = ({children, href}) => {
  return (
    <StyledMobileNavItem href={href}>{children}</StyledMobileNavItem>
  )
}

export default MobileNavItem