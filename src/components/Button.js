import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  width: max-content;
  height: max-content;
  background: ${({ theme, bg, variant }) =>
    variant === "outline" ? "transparent" : theme.colors[bg] || theme.colors.secondary};
  padding: 7px 15px;
  border: ${({ theme, bg, variant }) =>
    variant !== "outline" ? "0px" : `1px solid ${theme.colors[bg] || theme.colors.secondary}`};
  border-radius: 8px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: ${({ theme, bg, variant, color }) =>
    variant === "outline"
      ? theme.colors[bg] || theme.colors.secondary
      : color
      ? theme.colors[color]
      : theme.colors.black};
  cursor: pointer;
  &:active {
    animation: 0.3s pulse 1 forwards;
  }
`;

export default function Button({ variant, color, bg, children, ...rest }) {
  return (
    <ButtonStyles variant={variant} bg={bg} color={color} {...rest}>
      {children}
    </ButtonStyles>
  );
}
