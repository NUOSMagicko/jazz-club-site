import React from "react";
import styled from "styled-components";

const FontImport = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&display=swap");
`;

const StyledDescription = styled.p`
  font-family: "Playfair Display", serif; /* Updated font family */
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
