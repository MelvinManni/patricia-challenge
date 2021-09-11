import React from "react";
import styled from "styled-components";
import { GridCol, GridContainer } from "../jss/FlexGrid";

const Wrapper = styled.div`
  background: #f9fafc;
  border-radius: 24px;
  width: 100%;
  padding: 24px;
`;

const CardGridcontainer = styled(GridContainer)`
  padding: 0;
`;

const CardGridCol = styled(GridCol)`
  padding: 0;
`;

export default function CardDetails() {
  return (
    <Wrapper>
      <CardGridcontainer>
        <GridCol col={12} md={8}></GridCol>

        <GridCol col={12} md={4}></GridCol>
      </CardGridcontainer>
    </Wrapper>
  );
}
