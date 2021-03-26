import React from "react";
import { FaIcons } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-right: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Slidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <Container isOpen={isOpen} onClick={toggle}>
        <Nav>
          <NavIcon>
            <FaIcons.FaBars />
          </NavIcon>
        </Nav>
      </Container>
    </>
  );
};

export default Slidebar;
