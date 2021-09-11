import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Flex } from "../RecentActivities";
import { ImageIcon } from "../SVG";
import Text from "../Typography";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.breakpoint.queryDown("sm")} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    >div:first-child {
      margin-bottom: 24px;
    }
  }
`;

const IconWrapper = styled.div`
  height: 40px;
  width: 40px;
  background: #def5f2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

export default function Header() {
  return (
    <Wrapper>
      <Flex>
        <IconWrapper>
          <ImageIcon />
        </IconWrapper>

        <div>
          <Text color="greyBlack" fontSize={20} fontWeight={600}>
            Virtual Card
          </Text>
          <Text>Lorem Ipsum dolor sit amet</Text>
        </div>
      </Flex>

      <Button>Create New Card</Button>
    </Wrapper>
  );
}
