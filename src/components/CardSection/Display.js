import React from "react";
import styled from "styled-components";
import { IconWrap } from "../Navbar/AppBar/Toggle";
import CardHolder from "./CardHolder";
import { GrNext } from "react-icons/gr";

const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
`;

const ActiveDisplay = styled.div`
  margin-right: 29px;
  position: relative;
`;

const BluredSection = styled.div`
  filter: blur(4px);
  cursor: pointer;
  flex: 1;
  position: relative !important;
  display: flex;
  ${({ theme }) => theme.breakpoint.queryDown("md")} {
    display: none;
  }
  min-height: 100%;
  overflow: hidden;
`;

const BlurredCardWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;
  &:nth-child(2) {
    left: 20px;
    z-index: 90;
  }
  &:nth-child(3) {
    left: 40px;
    z-index: 80;
  }
`;

const NextCardBtn = styled(IconWrap)`
  background: ${({ theme }) => theme.colors.grey};
  box-shadow: 0px 0px 3px 0px rgba(129, 127, 143, 0.75);
  position: absolute;
  right: -50px;
  top: 44%;
  z-index: 10000000;
  ${({ theme }) => theme.breakpoint.queryUp("md")} {
    display: none;
  }
  ${({ theme }) => theme.breakpoint.queryDown("md")} {
    display: flex;
  }
`;

export default function Display({ activeIndex, data, activeIndexhandler }) {
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
        <NextCardBtn onClick={activeIndexhandler} >
          <GrNext />
        </NextCardBtn>
        <CardHolder
          active
          name={data[activeIndex]?.name}
          balance={data[activeIndex]?.balance}
          cvv={data[activeIndex]?.cvv}
          number={data[activeIndex]?.number}
          expiry={data[activeIndex]?.expiry}
          variant={data[activeIndex]?.variant}
        />
      </ActiveDisplay>
      <BluredSection onClick={activeIndexhandler}>
        {renderBlured(1) && (
          <BlurredCardWrapper>
            <CardHolder
              name={renderBlured(1)?.name}
              balance={renderBlured(1)?.balance}
              cvv={renderBlured(1)?.cvv}
              number={renderBlured(1)?.number}
              expiry={renderBlured(1)?.expiry}
              variant={renderBlured(1)?.variant}
            />
          </BlurredCardWrapper>
        )}
        {renderBlured(2) && (
          <BlurredCardWrapper>
            <CardHolder
              name={renderBlured(2)?.name}
              balance={renderBlured(2)?.balance}
              cvv={renderBlured(2)?.cvv}
              number={renderBlured(2)?.number}
              expiry={renderBlured(2)?.expiry}
              variant={renderBlured(2)?.variant}
            />
          </BlurredCardWrapper>
        )}
        {renderBlured(3) && (
          <BlurredCardWrapper>
            <CardHolder
              name={renderBlured(3)?.name}
              balance={renderBlured(3)?.balance}
              cvv={renderBlured(3)?.cvv}
              number={renderBlured(3)?.number}
              expiry={renderBlured(3)?.expiry}
              variant={renderBlured(3)?.variant}
            />
          </BlurredCardWrapper>
        )}
      </BluredSection>
    </Wrapper>
  );
}
