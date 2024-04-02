import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Description from "./Description";
import mainBackground from "../assets/images/main_background.jpg";
import NavigationButton from "./NavigationButton";


const StyledHeroSection = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background-image: url(${mainBackground}); */
  background-size: cover; 
  background-position: center; 
  text-align: center;
  /* position: relative; 
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
  } */
`;

const HeroSection = ({isMobileNavVisible}) => {
  return (
    <StyledHeroSection>
      <Title isMobileNavVisible={isMobileNavVisible} />
      <Description isMobileNavVisible={isMobileNavVisible}>
  Discover Cotton Club's culinary innovation amidst a neon glow. Our menu transforms dining into a sensory journey.
</Description>
<NavigationButton isMobileNavVisible={isMobileNavVisible} path={"eveningmenu"}>View Evening Menu</NavigationButton>
    </StyledHeroSection>
  );
};

export default HeroSection;
