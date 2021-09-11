import React from "react";
import styled from "styled-components";
import Text from "./Typography";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
`;

const Image = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 8px;
  margin-right: 16px;
`;

const SpaceFlex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
`;

export default function ActivityRow({ icon, title, time, price }) {
  return (
    <Wrapper>
      <Image src={icon} alt={title} />
      <SpaceFlex>
        <div>
          <Text color="greyDark">{title}</Text>
          <Text fontSize={12}>{time}</Text>
        </div>
        <Text>${price}</Text>
      </SpaceFlex>
    </Wrapper>
  );
}
