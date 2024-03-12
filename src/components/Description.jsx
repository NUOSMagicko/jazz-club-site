import React from "react";
import styled from "styled-components";

const StyledDescription = styled.p`
  font-size: 1.125rem;
  color: #f8e604;
  text-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.7);
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
    font-size: 0.875rem;
  }
`;
const Description = ({ children , isMobileNavVisible }) => {
  return <StyledDescription className={isMobileNavVisible ? "hide" : ""} >{children}</StyledDescription>;
};

export default Description;
