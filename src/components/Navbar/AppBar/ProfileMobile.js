import React from "react";
import styled from "styled-components";
import { FaBell, FaEllipsisV } from "react-icons/fa";
import Spacing from "../../../jss/Spacing";
import { IconBtn } from "./Profile";
import { Flex } from "../../RecentActivities";
import Text from "../../Typography";

const Wrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.breakpoint.queryUp("lg")} {
    display: none;
  }
`;

const WrapperInner = styled.div`
  padding: ${({ open }) => (open ? "20px 10px" : "0px")};
  background-color: #f9fafc;
  border-radius: 6px;
  position: absolute;
  right: 0;
  overflow: hidden;
  height: ${({ open }) => (open ? "120px" : "-0px")};
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

export default function MobileProfileHeader() {
  const [open, setOpen] = React.useState(false);
  return (
    <Wrapper>
      <IconBtn onClick={() => setOpen((prev) => !prev)}>
        <FaEllipsisV />
      </IconBtn>

      <WrapperInner open={open}>
        <Flex>
          <IconBtn bg="white">
            <FaBell />
            <ActiveNotification />
          </IconBtn>
          <Text ml={3}>Notification</Text>
        </Flex>
        <Spacing mt={20}>
          <Flex>
            <ProfileImageWrapper>
              <ProfileImage src="/images/profile.png" alt="profile picture" />
            </ProfileImageWrapper>
            <Text ml={3}>Profile</Text>
          </Flex>
        </Spacing>
      </WrapperInner>
    </Wrapper>
  );
}
