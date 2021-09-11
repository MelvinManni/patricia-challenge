import React from "react";
import styled from "styled-components";
import Text from "../Typography";

const NavItemWrapper = styled.a`
  width: 100%;
  padding: ${({ minimized }) => (minimized ? "15px 15px 15px 15px" : "15px 15px 15px 50px")};
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 0 24px 24px 0;
  text-decoration: none;
  transition: 0.3s ease all;
  background: ${({ active, theme }) => (active ? theme.colors.secondaryLight : theme.colors.white)};
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryLight};
  }

  &:hover rect,
  &:hover circle,
  &:hover path,
  &:hover p {
    fill: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transition: 0.3s ease all;
  }
`;

export default function NavItem({ icon: Icon, text, path, minimized }) {
  return (
    <NavItemWrapper minimized={minimized} href={path}>
      <Icon /> {!minimized && <Text ml={20}>{text}</Text>}
    </NavItemWrapper>
  );
}
