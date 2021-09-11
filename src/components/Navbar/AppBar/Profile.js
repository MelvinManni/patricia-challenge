import React from "react";
import styled from "styled-components";
import { FaBell, FaEllipsisV } from "react-icons/fa";
import Spacing from "../../../jss/Spacing";

const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  /* border-bottom: 1px solid #eff2f7; */
`;

const WrapperInner = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 35px 30px;
  height: 100%;
`;

const IconBtn = styled.button`
  border: 0;
  padding: ${({ bell }) => (bell ? "8px" : "0")};
  border-radius: ${({ bell }) => (bell ? "4px" : "0")};
  background: ${({ bell }) => (bell ? "white" : "transparent")};
  position: relative;
  width: max-content;
  height: max-content;
  color: #231f20;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:active {
    animation: 0.7s pulse 1 forwards;
  }
`;

const ActiveNotification = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.alert};
  position: absolute;
  top: 7px;
  right: 6px;
  border: 0.5px solid ${({ theme }) => theme.colors.white};
`;

const ProfileImageWrapper = styled.div`
  padding: 4px;
  border-radius: 6px;
  width: 28px;
  height: 28px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 6px;
`;

export default function ProfileHeader() {
  return (
    <Wrapper>
      <WrapperInner>
        <IconBtn bell>
          <FaBell />
          <ActiveNotification />
        </IconBtn>

        <Spacing ml={20} >
          <ProfileImageWrapper>
            <ProfileImage src="/images/profile.png" alt="profile picture" />
          </ProfileImageWrapper>
        </Spacing>

        <IconBtn>
          <FaEllipsisV />
        </IconBtn>
      </WrapperInner>
    </Wrapper>
  );
}
