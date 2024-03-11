import React from 'react'
import styled from 'styled-components';

const StyledCloseIcon = styled.div`
  font-size: 1.5rem; /* 24px */
  color: #f8e604;
  position: absolute;
  top: 1.25rem; /* 20px */
  right: 0.625rem; /* 10px */
  margin-right: 1.25rem; /* 20px */
  cursor: pointer;
  // Add shadow for elevated effect
  // Optional: add a transition for a smooth effect when interacting
  transition: transform 0.3s;

  &:hover {
    color: #f7f7f7;
    transform: translateY(
      -0.125rem
    ); // Slightly raise the icon on hover for more depth
  }
`;


const CloseIcon = ({setIsMobileNavVisible}) => {
  return (
    <StyledCloseIcon onClick={() => setIsMobileNavVisible(false)} >X</StyledCloseIcon>
  )
}

export default CloseIcon