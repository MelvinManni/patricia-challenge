import React from "react";
import styled from "styled-components";
import ProfileHeader from "../Navbar/AppBar/Profile";
import Toggle from "../Navbar/AppBar/Toggle";

import Sidebar from "../Navbar/Sidebar";
import { GridCol, GridContainer } from "../../jss/FlexGrid";

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
`;

const LayoutGridcontainer = styled(GridContainer)`
  padding: 0;
`;

export default function PageLayout() {
  return (
    <LayoutWrapper>
      <Sidebar/>
      <ContentSection>
        <LayoutGridcontainer>
          <AppBar col={12} md={7}>
            <Toggle />
          </AppBar>
          <AppBar col={12} md={5}>
            <ProfileHeader />
          </AppBar>
        </LayoutGridcontainer>
      </ContentSection>
    </LayoutWrapper>
  );
}
