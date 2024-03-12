import React from 'react'
import styled from 'styled-components';

const StyledCloseIcon = styled.div`
  font-size: 1.5rem;
  color: #f8e604;
  position: absolute;
  top: 1.25rem;
  right: 0.625rem;
  margin-right: 1.25rem;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    color: #f7f7f7;
    transform: translateY(
      -0.125rem
    );
  }
`;


const CloseIcon = ({setIsMobileNavVisible}) => {
  return (
    <StyledCloseIcon onClick={() => setIsMobileNavVisible(false)} >X</StyledCloseIcon>
  )
}

export default CloseIcon