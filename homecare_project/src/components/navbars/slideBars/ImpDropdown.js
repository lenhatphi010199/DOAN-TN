import styled, { css } from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const DropdowContainer = styled.div`
  color: #fff;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.5s ease;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const DropdownWrap = styled.div`
  margin-top: 50px;
`;

export const DropdowMenu = styled.div`
  margin-top: 60px;
`;

export const DropdowLinkCss = css`
  color: #fff;
  padding: 20px;
  font-size: 1.2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  border-radius: 50px;
  &:hover {
    font-weight: 500;
    transition: all 0.3s ease-in-out;
    transform: translateY(-2px);
    background: #01bf71;
    text-decoration: none;
    color: #fff;
  }
`;

export const DropdowLink = styled(LinkS)`
  ${DropdowLinkCss}
`;

export const DropdowLinkr = styled(LinkR)`
  ${DropdowLinkCss};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
