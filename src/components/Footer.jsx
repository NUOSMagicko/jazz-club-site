import React from "react";
import styled from "styled-components";
import Description from "./Description";
import { FaEnvelope, FaPhone } from "react-icons/fa";


const StyledFooter = styled.nav`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  color: #f8e604;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  @media (max-width: 768px) {
    padding: 0.625rem 0.625rem;
  }
`;

const Icon = styled.span`
  color: #A7C7E7;
  margin-right: 0.5rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        {" "}
        {/* <Description>Blue Elektra's Gmail </Description> */}
        <Description>
          <Icon>
            <FaEnvelope />
          </Icon>
          info@nuosmagicko.com
        </Description>
      </div>
      <div>
        {" "}
        {/* <Description>Blue Elektra's Phone </Description> */}
        <Description>
          <Icon>
            <FaPhone />
          </Icon>
          02-207-8681
        </Description>
      </div>
    </StyledFooter>
  );
};

export default Footer;
