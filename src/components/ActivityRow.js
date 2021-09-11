import React from "react";
import styled from "styled-components";
import { Flex } from "./RecentActivities";
import Text from "./Typography";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;


const Image = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 8px;
  margin-right: 16px;
`;

export default function ActivityRow({ icon, title, time, price }) {
  return (
    <Wrapper>
      <Flex>
        <Image src={icon} alt={title} />
        <div>
          <Text color="greyDark">{title}</Text>
          <Text fontSize={12}>
            {time}
          </Text>
        </div>
      </Flex>
      <Text>${price}</Text>
    </Wrapper>
  );
}
