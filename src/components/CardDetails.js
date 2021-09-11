import React from "react";
import styled from "styled-components";
import { GridCol, GridContainer } from "../jss/FlexGrid";
import Text from "./Typography";

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

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default function CardDetails() {
  return (
    <Wrapper>
      <CardGridcontainer>
        <CardGridCol col={12} md={8}>
          <DetailsRow>
              <Text fontSize={16} >Card Balance:</Text>
              <Text fontSize={16} color="primary" ></Text>
          </DetailsRow>
          <DetailsRow>
              <Text fontSize={16} >Name:</Text>
              <Text fontSize={16} color="greyDark" ></Text>
          </DetailsRow>
          <DetailsRow>
              <Text fontSize={16} >Card Status:</Text>
              <Text fontSize={16} color="greyDark" ></Text>
          </DetailsRow>
          <DetailsRow>
              <Text fontSize={16} >Billing Address:</Text>
              <Text fontSize={16} color="greyDark" ></Text>
          </DetailsRow>
          <DetailsRow>
              <Text fontSize={16} >Date Created:</Text>
              <Text fontSize={16} color="greyDark" ></Text>
          </DetailsRow>
        </CardGridCol>

        <CardGridCol col={12} md={4}></CardGridCol>
      </CardGridcontainer>
    </Wrapper>
  );
}
