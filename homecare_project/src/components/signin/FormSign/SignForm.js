import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

import {
  Form,
  FormH1,
  FormLabel,
  FormButton,
  ButtonLink,
  FormInput,
  Or,
  LinkForgot,
  OrDiv,
  FormLinkDiv,
  FormButtonLinkFb,
  FormButtonLinkGm,
  FormButtonLinkSu,
  ErrorP
} from "./ImpSignForm";

function SignForm({ Login, Error }) {

  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);  
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <FormH1>Sign in to your account</FormH1>
        <FormLinkDiv>
          <FormButtonLinkFb>
            <ButtonLink href="/" target="_blank" aria-label="Facebook">
              <FaGoogle style={{ marginRight: "5px" }} /> CONTINUE WITH FACEBOOK
            </ButtonLink>
          </FormButtonLinkFb>
          <FormButtonLinkGm>
            <ButtonLink href="/" target="_blank" aria-label="Gmail">
              <FaGoogle style={{ marginRight: "5px" }} /> CONTINUE WITH GMAIL
            </ButtonLink>
          </FormButtonLinkGm>
        </FormLinkDiv>
        <OrDiv>
          <Or>OR</Or>
        </OrDiv>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          id="email"
          type="email"
          name="email"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
          required
        />       
        <FormLabel htmlFor="for">Password</FormLabel>
        <FormInput
          id="password"
          type="password"
          name="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
          required
        />
        <ErrorP>{Error}</ErrorP>
        <LinkForgot>Forgot your password?</LinkForgot>
        <FormButton type="submit">Login</FormButton>
        <OrDiv />
        <FormH1>Don't have an account?</FormH1>
        <FormButtonLinkSu>
          <ButtonLink to="/signup">SIGN UP FOR HOMECARE</ButtonLink>
        </FormButtonLinkSu>
      </Form>
    </>
  );
}

export default SignForm;
