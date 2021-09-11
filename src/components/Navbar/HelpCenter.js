import React from "react";
import styled from "styled-components";
import Text from "../Typography";

const Wrapper = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-top: auto;
  cursor: pointer;
  &:hover > div {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s ease all;
  }
  &:hover p {
    color: ${({ theme }) => theme.colors.primary};
    transition: 0.3s ease all;
  }
`;

 const IconWrapper = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  margin-right: 17px;
  background: #c0ccda;
  mix-blend-mode: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 13px;
`;
export default function HelpCenter() {
  return (
    <Wrapper href="https://www.mypatricia.co/resources/help-centre" target="_blank" >
      <IconWrapper>?</IconWrapper>
      <Text>Help Center</Text>
    </Wrapper>
  );
}
