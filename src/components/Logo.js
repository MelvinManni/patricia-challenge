import React from "react";
import styled from "styled-components";

const Logostyle = styled.img`
  width: ${({ width }) => width || "110px"};
`;

export default function Logo() {
  return <Logostyle src="/images/logo.svg" />;
}
