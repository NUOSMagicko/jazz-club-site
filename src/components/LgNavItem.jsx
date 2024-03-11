import React from 'react';
import styled from 'styled-components';

const StyledLgNavItem = styled.a`
  color: #f8e604;
  text-decoration: none;
  font-size: 1.125rem;
  cursor: pointer;

  &:hover {
    color: #f7f7f7;
  }
`;

const LgNavItem = ({ href, children }) => {
  return <StyledLgNavItem href={href}>{children}</StyledLgNavItem>;
};

export default LgNavItem;