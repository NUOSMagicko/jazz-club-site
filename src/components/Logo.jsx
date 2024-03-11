// Logo.jsx
import React from 'react';
import styled from 'styled-components';
import logoImage from '../assets/jazzLogo.png'; // Adjust the path as needed

const StyledLogo = styled.img`
  color: white;
  height: 3.75rem; /* 60px */
  width: auto; // This will maintain the aspect ratio of the image
  margin-left: 1.25rem; /* 20px */
`;

const Logo = () => {
  return <StyledLogo src={logoImage} alt="NUOS Logo" />;
};

export default Logo;
