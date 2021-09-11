import React from "react";
import styled from "styled-components";
import Text from "./Typography";

const Wrapper = styled.div`
  border-radius: 24px;
  width: 100%;
  padding: 24px 24px 42px 24px;
  background: ${({ theme }) => theme.colors.white};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const DateHolder = styled.div`
  background: #f9fafc;
  border-radius: 8px;
  padding: 5px 10px;
`;

export default function RecentActivities() {
  return (
    <Wrapper>
      <Header>
        <Text>Recent Activity</Text>
        <Flex>
            <DateHolder>
                
            </DateHolder>
        </Flex>
      </Header>
    </Wrapper>
  );
}
