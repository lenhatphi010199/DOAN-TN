import styled, { css } from "styled-components/macro";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import Bars from "../../images/bars.svg";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  transition: 0.5s ease-in-out;
  color: #fff;
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
    transition: 0.3s;
    text-decoration: none;
    color: #fff;
  }
  &:active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const Logo = styled(LinkR)`
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(LinkS)`
  ${NavLink}
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  /* &:active {
    border-bottom: 3px solid #01bf71;
  } */
`;

export const NavMenuLinkr = styled(LinkR)`
  ${NavLink}
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
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
