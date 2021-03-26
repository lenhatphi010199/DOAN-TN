import React, { useState } from "react";
import { Button } from "../Button";
import { animateScroll as scroll } from "react-scroll";
import LogoHC from "../../images/logo_transparent.png";
import {
  Nav,
  Logo,
  MenuBars,
  NavMenu,
  NavMenuLinks,
  NavMenuLinkr,
  NavBtn,
  LogoImg,
} from "./ImpNav";
import { menuData } from "./MenuData";
import { SigninData } from "../signin/SigninData";

function Navbar({ toggle }) {
  const [background, setBackground] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setBackground(true);
      
    } else {
      setBackground(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleLogout = async () => {
    try {
      window.location.href = "/";
    } catch (error) {
      window.location.href = "/";
    }
  };

  const adminRouter = (role) => {
    SigninData.forEach((element) => {
      if (role == element.role) {
        setIsAdmin(true);
        return (
          <>
            <NavBtn>
              <Button to="/" onClick={handleLogout} primary="true">
                Logout
              </Button>
            </NavBtn>
          </>
        );
      }
    });
  };

  const role = ["admin"];

  return (
    <Nav style={{ background: background ? "#1C1C1C" : "transparent" }}>
      <Logo to="/" onClick={toggleHome}>
        <LogoImg src={LogoHC} />
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks
            to={item.link}
            key={index}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
          >
            {item.title}
          </NavMenuLinks>
        ))}
        <NavMenuLinkr to="/signup">Signup</NavMenuLinkr>
        <NavMenuLinkr to="/booking">Booking</NavMenuLinkr>
      </NavMenu>
      {isAdmin ? (
        adminRouter(SigninData.find("admin"))
      ) : (
        <NavBtn>
          <Button to="/signin" primary="true">
            Signin
          </Button>
        </NavBtn>
      )}
    </Nav>
  );
}

export default Navbar;
