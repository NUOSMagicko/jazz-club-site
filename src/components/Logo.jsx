import React from 'react';
import styled from 'styled-components';
import logoImage from '../assets/jazzLogo.png'; 

const StyledLogo = styled.img`
  color: white;
  height: 3.75rem; 
  width: auto; 
  margin-left: 1.25rem;
`;

const Logo = () => {
  return <StyledLogo src={logoImage} alt="NUOS Logo" />;
};

export default Logo;
