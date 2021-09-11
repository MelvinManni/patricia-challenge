import React from "react";
import styled from "styled-components";
import CardHolder from "./CardHolder";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ActiveDisplay = styled.div`
  margin-right: 29px;
`;

const BluredSection = styled.div`
  filter: blur(4px);
  cursor: pointer;
  flex: 1;
`;

const BlurredCardWrapper = styled.div`
  position: relative;
  &:nth-child(2) {
    right: -10px;
  }
  &:nth-child(3) {
    right: -20px;
  }
`;

export default function Display({ activeIndex, data }) {
  const renderBlured = (count) => {
    const length = data?.length;
    const nextIndex = Number(activeIndex) + Number(count);

    if (Number(count) >= length) {
      return false;
    }

    if (nextIndex < length) {
      return data[nextIndex];
    } else if (Number(activeIndex) !== 0 && nextIndex + 1 === length) {
      return data[0];
    } else {
      return data[0 + Number(count)];
    }
  };

  return (
    <Wrapper>
      <ActiveDisplay>
        <CardHolder
          name={data[activeIndex].name}
          balance={data[activeIndex].balance}
          cvv={data[activeIndex].cvv}
          number={data[activeIndex].number}
          expiry={data[activeIndex].expiry}
          variant={data[activeIndex].variant}
        />
      </ActiveDisplay>
      <BluredSection>
        {renderBlured(1) && (
          <BlurredCardWrapper>
            <CardHolder
              name={renderBlured(1).name}
              balance={renderBlured(1).balance}
              cvv={renderBlured(1).cvv}
              number={renderBlured(1).number}
              expiry={renderBlured(1).expiry}
              variant={renderBlured(1).variant}
            />
          </BlurredCardWrapper>
        )}
        {renderBlured(2) && (
          <BlurredCardWrapper>
            <CardHolder
              name={renderBlured(2).name}
              balance={renderBlured(2).balance}
              cvv={renderBlured(2).cvv}
              number={renderBlured(2).number}
              expiry={renderBlured(2).expiry}
              variant={renderBlured(2).variant}
            />
          </BlurredCardWrapper>
        )}
        {renderBlured(3) && (
          <BlurredCardWrapper>
            <CardHolder
              name={renderBlured(3).name}
              balance={renderBlured(3).balance}
              cvv={renderBlured(3).cvv}
              number={renderBlured(3).number}
              expiry={renderBlured(3).expiry}
              variant={renderBlured(3).variant}
            />
          </BlurredCardWrapper>
        )}
      </BluredSection>
    </Wrapper>
  );
}
