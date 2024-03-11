import React from "react";
import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";


const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 1.25rem;
  color: #f8e604; // Ensure text color is set to white for contrast
  text-shadow: 0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.7); // Add this line
  z-index: 1;
  &.hide {
    display: none;
  }
  @media (max-width: 768px) {
    // Adjust for mobile devices
    font-size: 1.375rem; // Reduce padding on smaller screens
  }
`;

const Title = ({ isMobileNavVisible }) => {
  return (
    <StyledTitle className={isMobileNavVisible ? "hide" : ""}>
      <TypeAnimation
        sequence={[
          "The Cotton Club", // Text 1
          1000, // Pause after Text 1
          "", // Clear Text 1
          1000, // Pause before showing Text 2 (adjust this value as needed)
          "relaunching soon ...", // Text 2
          1000, // Pause after Text 2 (adjust or remove this based on your preference)
        ]}
        wrapper="span" // Wrap text in a span (this is default)
        cursor={true} // Show cursor
        repeat={Infinity} // Repeat animation
      />
    </StyledTitle>
  );
};

export default Title;
