import React from "react";
import styled from "styled-components";
import { navLinks } from "../../variables";
import Logo from "../Logo";
import HelpCenter from "./HelpCenter";
import NavItem from "./NavItem";

const SidebarWrapper = styled.div`
  width: 216px;
  min-height: max-content;
`;

const SideBarStyle = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-right: 1px solid #eff2f7;
  padding: 50px 0 40px 0;
  width: 216px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
`;

const SideBarInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const LinksWrapper = styled.div`
  margin: 100px 0;
  min-height: max-content;
  width: 100%;
  padding-right: 25px;
`;

export default function Sidebar({ children }) {
  return (
    <SidebarWrapper>
      <SideBarStyle>
        <SideBarInner>
          <Logo />

          <LinksWrapper>
            {navLinks.map((link) => (
              <NavItem icon={link.icon} text={link.name} path={link.path} />
            ))}
          </LinksWrapper>

          <HelpCenter />
        </SideBarInner>
      </SideBarStyle>
    </SidebarWrapper>
  );
}
