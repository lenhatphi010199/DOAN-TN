import React, { useState, useEffect, useRef } from "react";
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
  NavbarContainer,
  Ul,
  Li,
  Account,
  MenuItem,
  DivDropdown,
  DivMenu,
  DivArrow,
} from "./ImpNav";
import { menuData } from "./MenuData";
import AuthService from "../../servicesApi/auth.services";

function Navbar({ toggle, home }) {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  //role
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  //Logout
  const logOut = () => {
    AuthService.logout();
  };

  //Dropdown
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  const [open, setOpen] = useState(false);

  //onClick Outsite
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(!open);
      }
    };

    if (open) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [open, dropdownRef]);

  const onClick = () => setOpen(!open);

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <Logo to="/" onClick={toggleHome}>
          <LogoImg src={LogoHC} />
        </Logo>
        <MenuBars onClick={toggle} />
        <NavMenu>
          {home
            ? menuData.map((item, index) => (
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
              ))
            : menuData.map((item) => (
                <NavMenuLinkr to={item.linkR}>{item.title}</NavMenuLinkr>
              ))}
        </NavMenu>
        {currentUser ? (
          <Ul>
            <Li>
              <Account
                onClick={onClick}
                style={{ color: open ? "#01bf71" : "#fff" }}
              >
                <i
                  class="fas fa-user-circle"
                  style={{ fontSize: "30px", marginRight: "5px" }}
                ></i>{" "}
                {currentUser.username}
              </Account>

              {open && (
                <DivDropdown style={{ height: menuHeight }} ref={dropdownRef}>
                  <DivMenu>
                    <MenuItem>Quản lý tài khoản</MenuItem>
                    <MenuItem>Lịch đặt</MenuItem>
                    <MenuItem>Gói combo</MenuItem>
                    {showAdminBoard && (
                      <DivMenu>
                        <MenuItem>Quản lý combo</MenuItem>
                        <MenuItem href="employyee">Quản lý nhân viên</MenuItem>
                        <MenuItem>Quản lý khách hàng</MenuItem>
                        <MenuItem>Quản lý lịch đặt</MenuItem>
                      </DivMenu>
                    )}
                    <MenuItem onClick={logOut} href="/">
                      <i
                        class="fas fa-sign-out-alt"
                        style={{ marginRight: "10px" }}
                      ></i>{" "}
                      Đăng xuất
                    </MenuItem>
                  </DivMenu>
                </DivDropdown>
              )}
            </Li>
          </Ul>
        ) : (
          <NavBtn>
            <Button to="/signin" primary="true">
              Đăng nhập
            </Button>
          </NavBtn>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
