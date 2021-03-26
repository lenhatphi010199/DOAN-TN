import React, { useState } from "react";
import logo from "../../images/logo_transparent.png";
import { animateScroll as scroll } from "react-scroll";
import FacebookLogin from "react-facebook-login";
import { useHistory } from "react-router-dom";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Img,
  IconLink,
  ImgBg,
} from "./ImpSignin";
import bg from "../../images/booking.jpg";
import SignForm from "./FormSign/SignForm";
import { SigninData } from "./SigninData";

const Signin = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // const [username, setUsername] = useState({
  //   value: SigninData.email,
  //   error: SigninData.error,
  // });
  // const [password, setPassword] = useState({
  //   value: SigninData.password,
  //   error: SigninData.error,
  // });
  const history = useHistory();
  const [error, setError] = useState("");

  const Login = (details) => {
    SigninData.forEach((item) => {
      if (details.email == item.email && details.password == item.password) {
        console.log("logged in");
        history.push("/");
      } else if (
        details.email != item.email ||
        details.password != item.password
      ) {
        setError("* Email or password is incorrect");
      }
    });
  };
  const Logout = () => {
    console.log("Logout");
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
            <SignForm Login={Login} Error={error} />
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;
