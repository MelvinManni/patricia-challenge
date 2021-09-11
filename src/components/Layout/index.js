import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import ProfileHeader from "../Navbar/AppBar/Profile";
import Toggle from "../Navbar/AppBar/Toggle";

import Sidebar from "../Navbar/Sidebar";
import { GridCol, GridContainer } from "../../jss/FlexGrid";
import RecentActivities from "../RecentActivities";
import Spacing from "../../jss/Spacing";

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
`;

const ContentSection = styled.main`
  flex: 1;
`;

const AppBar = styled(GridCol)`
  padding-left: 0;
  padding-right: 0;
  background: ${({ background }) => background};
  ${({ theme }) => theme.breakpoint.queryUp("md")} {
    min-height: 100vh;
  }
`;

const LayoutGridcontainer = styled(GridContainer)`
  padding: 0;
`;

export default function PageLayout() {
  const [showMenu, setShowMenu] = React.useState(false);
  const [slidIn, setSlidIn] = React.useState(false);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setSlidIn(false);
      }
    });
  }, []);

  return (
    <LayoutWrapper>
      <Sidebar slidIn={slidIn} showMenu={showMenu} setShowMenu={setShowMenu} />
      <ContentSection>
        <LayoutGridcontainer>
          <AppBar col={12} md={7}>
            <Toggle slidIn={slidIn} setSlidIn={setSlidIn} setShowMenu={setShowMenu} showMenu={showMenu} />
          </AppBar>
          <AppBar background="#f9fafc" col={12} md={5}>
            <ProfileHeader />
            <Spacing my={24} ml={24} mr={32}>
              <RecentActivities />
            </Spacing>
          </AppBar>
        </LayoutGridcontainer>
      </ContentSection>
    </LayoutWrapper>
  );
}