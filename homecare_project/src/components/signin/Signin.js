import React, { useState } from "react";
import logo from "../../images/logo_transparent.png";
import { animateScroll as scroll } from "react-scroll";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Img,
  IconLink,
  ImgBg,
} from "./ImpSignin";
import bg from "../../images/signin.jpg";
import SignForm from "./FormSign/SignForm";

const Signin = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon>
            <ImgBg src={bg}></ImgBg>
            <IconLink to="/" onClick={toggleHome}>
              <Img src={logo} />
            </IconLink>
          </Icon>
          <FormContent>
            <SignForm />
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
