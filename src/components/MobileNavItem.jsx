import React from 'react'
import styled from "styled-components"

const StyledMobileNavItem = styled.a`
  color: #A7C7E7;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #f7f7f7; 
  }
`;
const MobileNavItem = ({children, href}) => {
  return (
    <StyledMobileNavItem href={href}>{children}</StyledMobileNavItem>
  )
}

export default MobileNavItem