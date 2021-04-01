import React, { useState, useRef } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import {
  FormLogin,
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
  ErrorP,
  Line,
} from "./ImpSignForm";
import { useHistory } from "react-router-dom";
import AuthServices from "../../../servicesApi/auth.services";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = (value) => {
  if (!value) {
    return <div role="alert">this field is required!</div>;
  }
};

function SignForm(props) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef();
  const checkBtn = useRef();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthServices.login(username, password).then(
        () => {
          history.push("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.dada &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setLoading(false);
          setMessage("Tài khoản hoặc mật khẩu không đúng!");
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <FormLogin onSubmit={handleSubmit} ref={form}>
        <FormH1>Đăng nhập vào tài khoản của bạn</FormH1>
        <FormLinkDiv>
          <FormButtonLinkFb>
            <ButtonLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook style={{ marginRight: "5px" }} />
              TIẾP TỤC VỚI FACEBOOK
            </ButtonLink>
          </FormButtonLinkFb>
          <FormButtonLinkGm>
            <ButtonLink href="/" target="_blank" aria-label="Gmail">
              <FaGoogle style={{ marginRight: "5px" }} /> TIẾP TỤC VỚI GMAIL
            </ButtonLink>
          </FormButtonLinkGm>
        </FormLinkDiv>
        <Line>
          <OrDiv />
          <Or>OR</Or>
          <OrDiv />
        </Line>
        <FormLabel htmlFor="email">Tài khoản</FormLabel>
        <FormInput
          id="userName"
          type="text"
          value={username}
          onChange={onChangeUsername}
          validations={[required]}
          required
        />
        <FormLabel htmlFor="for">Mật khẩu</FormLabel>
        <FormInput
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          validations={[required]}
          required
        />
        {message && (
          <div>
            <div role="alert">
              <ErrorP>{message}</ErrorP>
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
        <LinkForgot>Quên mật khẩu?</LinkForgot>
        <FormButton type="submit" disabled={loading}>
          {loading && <span></span>}
          <span style={{ fontFamily: "Mulish" }}>Đăng nhập</span>
        </FormButton>
        <OrDiv />
        <FormH1>Bạn chưa có tài khoản?</FormH1>
        <FormButtonLinkSu>
          <ButtonLink to="/signup">ĐĂNG KÍ HOMECARE</ButtonLink>
        </FormButtonLinkSu>
      </FormLogin>
    </>
  );
}

export default SignForm;
