import styled, { css } from "styled-components/macro";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import Bars from "../../images/bars.svg";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  transition: 0.5s ease-in-out;
  color: #fff;
  background: ${({ scrollNav }) => (scrollNav ? "#1C1C1C" : "transparent")};
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-weight: 550;
  &:hover {
    transform: translateY(-2px);
    text-decoration: none;
    color: #fff;
  }
`;
export const Logo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-200%, 60%);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(LinkS)`
  ${NavLink}
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavMenuLinkr = styled(LinkR)`
  ${NavLink}
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  height: 80px;
  width: 160px;
`;

export const NavAc = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  margin-top: 13px;
  height: var(--nav-size);
  background-color: var(--bg);
  padding: 0 1rem;
  border-bottom: var(--border);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  margin-top: 8px;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Li = styled.li`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Account = styled.a`
  width: var(--button-size);
  height: var(--button-size);
  border-radius: 5px;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
  color: #fff;
  &:hover {
    color: #01bf71 !important;
  }
`;

export const MenuItem = styled.a`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 1rem;
  color: #fff;
  border-bottom: 1px solid #01bf71;
  &:hover {
    background-color: #01bf71;
    text-decoration: none;
    color: #fff;
  }
`;

export const DivDropdown = styled.div`
  position: absolute;
  top: 53px;
  width: 200px;
  background-color: #1c1c1c;
  border: none;
  border-radius: 10px;
  border: 1px solid #01bf71;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:after {
    top:-14px;
    left: auto;
    border: 7px solid transparent;
    border-bottom: 7px solid #1c1c1c;
    position: absolute;
    display:block;
    background:red transparent;
    content: "";
  }
`;

export const DivMenu = styled.div`
  width: 100%;
  color: white;
`;