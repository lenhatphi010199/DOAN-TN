import React from "react";
import { menuData } from "../MenuData";
import { Button } from "../../Button";
import {
  DropdowContainer,
  Icon,
  CloseIcon,
  DropdownWrap,
  DropdowMenu,
  DropdowLink,
  DropdowLinkr,
  BtnWrap,
} from "./ImpDropdown";

const Dropdow = ({ isOpen, toggle }) => {
  return (
    <DropdowContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrap>
        <DropdowMenu>
          {menuData.map((item, index) => (
            <DropdowLink
              to={item.link}
              key={index}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              exact="true"
              onClick={toggle}
            >
              {item.title}
            </DropdowLink>
          ))}
          <DropdowLinkr
            to="/signup"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            exact="true"
            onClick={toggle}
          >
            Sign UP
          </DropdowLinkr>
        </DropdowMenu>
      </DropdownWrap>
      <BtnWrap>
        <Button primary="true" round="true" big="true" to="/signin">
          Contact us
        </Button>
      </BtnWrap>
    </DropdowContainer>
  );
};

export default Dropdow;
