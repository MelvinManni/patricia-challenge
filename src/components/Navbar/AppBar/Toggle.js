import React from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight, FaBars } from "react-icons/fa";
import Text from "../../Typography";

const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  border-bottom: 1px solid #eff2f7;
`;

const WrapperInner = styled.div`
  display: flex;
  align-items: center;
  padding: 35px 30px;
`;

export const IconWrap = styled.button`
  border-radius: 50%;
  margin-right: 17px;
  mix-blend-mode: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 13px;
  background: ${({ theme }) => theme.colors.greyDark};
  width: 24px;
  height: 24px;
  border: 0;
  cursor: pointer;
  &:active {
    animation: 0.7s pulse 1 forwards;
  }
  ${({ theme }) => theme.breakpoint.queryDown("md")} {
    display: none;
  }
`;

const MobileMenu = styled(IconWrap)`
  ${({ theme }) => theme.breakpoint.queryUp("md")} {
    display: none;
  }
  ${({ theme }) => theme.breakpoint.queryDown("md")} {
    display: flex;
  }
`;

export default function Toggle({ showMenu, setShowMenu, slidIn, setSlidIn }) {
  return (
    <Wrapper>
      <WrapperInner>
        <IconWrap onClick={() => setSlidIn(!slidIn)}>
          {!slidIn ? <FaArrowLeft color="#FFf" /> : <FaArrowRight color="#FFf" />}
        </IconWrap>

        <MobileMenu onClick={() => setShowMenu(!showMenu)}>
          <FaBars color="#FFf" />
        </MobileMenu>
        <Text fontWeight={600} fontSize={32}>
          Cards
        </Text>
      </WrapperInner>
    </Wrapper>
  );
}
