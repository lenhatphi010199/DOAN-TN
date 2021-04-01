import React from "react";
import Signin from "../components/signin/Signin";
import ScrollToTop from "../components/ScrollToTop";
import GlobalStyle from "../globalStyle";

const SigninPage = () => {
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <Signin />
    </>
  );
};

export default SigninPage;
