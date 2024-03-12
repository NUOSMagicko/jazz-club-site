import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Description from "./Description";
import mainBackground from "../assets/main_background.jpg";


const StyledHeroSection = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${mainBackground});
  background-size: cover; 
  background-position: center; 
  text-align: center;
  position: relative; 
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(
      0,
      0,
      0,
      0.5
    );
    z-index: 0;
  }
`;

const HeroSection = ({isMobileNavVisible}) => {
  return (
    <StyledHeroSection>
      <Title isMobileNavVisible={isMobileNavVisible} />
      <Description isMobileNavVisible={isMobileNavVisible}>
        Experience live jazz magic at Bangkok's Cotton Club! An evening with
        sensational Jazz Quartets awaits, transporting you through mesmerizing
        melodies.
      </Description>
      <Description isMobileNavVisible={isMobileNavVisible}>
        Immerse yourself in captivating tunes and the unique ambiance of the
        Cotton Club. Reserve now for a night of unforgettable entertainment.
      </Description>
    </StyledHeroSection>
  );
};

export default HeroSection;
