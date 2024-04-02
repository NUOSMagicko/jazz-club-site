import React from "react";
import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";

const FontImport = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&display=swap");
`;

const StyledTitle = styled.div`
  font-family: "Playfair Display", serif; /* Updated font family */
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 1.25rem;
  color: #f8e604;
  text-shadow: 0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.7);
  z-index: 1;
  &.hide {
    display: none;
  }
  @media (max-width: 768px) {
    font-size: 1.375rem;
  }
`;

const Title = ({ isMobileNavVisible }) => {
  return (
    <>
      <FontImport />
      <StyledTitle className={isMobileNavVisible ? "hide" : ""}>
        <TypeAnimation
          sequence={[
            "Cotton Club",
            1000,
            "",
            1000,
            "Bar and Restaurant ...",
            1000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
        />
      </StyledTitle>
    </>
  );
};

export default Title;
