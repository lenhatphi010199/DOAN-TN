import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SlidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #e1e9fc;
  font-size: 18px;
  text-decoration: none;
  padding: 20px;
  list-style: none;
  height: 60px;
  color: #fff;
  cursor: pointer;
  transition: 0.2 ease-in-out;

  &:hover {
    border-left: 4px solid #01bf71;
    cursor: pointer;
    color: #01bf71;
  }
`;

const SlidebarLabel = styled.span`
  margin-left: 15px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 50px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #632ced;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SlidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SlidebarLabel>{item.title}</SlidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SlidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SlidebarLabel>{item.title}</SlidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
