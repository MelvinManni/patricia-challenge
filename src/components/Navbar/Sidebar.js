import React from "react";
import styled from "styled-components";
import { navLinks } from "../../variables";
import Logo from "../Logo";
import HelpCenter from "./HelpCenter";
import NavItem from "./NavItem";
import { IconWrap } from "./AppBar/Toggle";
import { RiCloseLine } from "react-icons/ri";
import LogoInitial from "../LogoInitial";

const SidebarWrapper = styled.div`
  width: ${({ slidIn }) => (slidIn ? "80px" : "216px")};
  min-height: max-content;
  ${({ theme }) => theme.breakpoint.queryDown("md")} {
    width: 0;
  }
`;

const SideBarStyle = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-right: 1px solid #eff2f7;
  padding: 50px 0 40px 0;
  position: fixed;
  width: ${({ slidIn }) => (slidIn ? "80px" : "216px")};
  left: 0;
  top: 0;
  bottom: 0;
  transition: 0.4s ease all;
  ${({ theme }) => theme.breakpoint.queryDown("md")} {
    width: 216px;
    left: ${({ showMobileMenu }) => (showMobileMenu ? "0px" : "-300px")};
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 3000;
  }
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
  ${({ theme }) => theme.breakpoint.queryDown("md")} {
    margin: 80px 0 50px 0;
  }
`;

const CloseMenu = styled(IconWrap)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGrey};
  box-shadow: 0px 0px 3px 0px rgba(129, 127, 143, 0.75);
  position: absolute;
  right: -5px;
  top: 10px;
  ${({ theme }) => theme.breakpoint.queryUp("md")} {
    display: none;
  }
  ${({ theme }) => theme.breakpoint.queryDown("md")} {
    display: flex;
  }
`;

export default function Sidebar({ showMenu, setShowMenu, slidIn }) {
  return (
    <SidebarWrapper slidIn={slidIn}>
      <SideBarStyle slidIn={slidIn} showMobileMenu={showMenu}>
        <SideBarInner>
          <CloseMenu onClick={() => setShowMenu(!showMenu)}>
            <RiCloseLine />
          </CloseMenu>

          {/* Logo */}
          {slidIn ? <LogoInitial /> : <Logo />}

          <LinksWrapper>
            {navLinks.map((link, index) => (
              <NavItem minimized={slidIn} icon={link.icon} text={link.name} path={link.path} key={index.toString}/>
            ))}
          </LinksWrapper>

          <HelpCenter minimized={slidIn} />
        </SideBarInner>
      </SideBarStyle>
    </SidebarWrapper>
  );
}
