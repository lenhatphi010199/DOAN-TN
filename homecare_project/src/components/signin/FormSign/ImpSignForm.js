import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Form from "react-validation/build/form";

export const FormLogin = styled(Form)`
  background: rgba(255, 255, 255, 0.04);
  max-width: 600px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 50px;
  padding: 20px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
  @media screen and (max-height: 660px) {
    margin-bottom: 50px;
  }
  @media screen and (max-height: 1024px) {
    margin-bottom: 25px;
    margin-top: 25px;
  }
`;

export const FormH1 = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin: 0px 0px;
  padding: 15px 0px;
  padding-top: 0px;
  font-family: "Mulish";
`;

export const FormLabel = styled.label`
  color: #fff;
  margin-bottom: 5px;
  font-family: "Mulish";
`;

export const FormButton = styled.button`
  cursor: pointer;
  text-align: center;
  background: #01bf71;
  border: none;
  border-radius: 50px;
  color: #fff;
  font-family: "cambria";
  font-size: 24px;
  transition: all 0.3s ease-in-out;
  padding: 10px;
  font-family: "Mulish";
  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.04);
  }
  &:focus {
    outline: none !important;
    outline-offset: none !important;
  }
`;

export const FormButtonLink = css`
  text-align: center;
  border: none;
  border-radius: 50px;
  color: #fff;
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;
  font-family: "Mulish";
  &:hover {
    transform: translateY(-2px);
  }
`;

export const ButtonLink = styled(Link)`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Mulish";
  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

export const FormInput = styled.input`
  padding: 10px 10px;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  font-family: "Mulish";
  font-size: 20px;
`;

export const Or = styled.strong`
  background: rgba(255, 255, 255, 0);
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 0 20px;
  text-transform: uppercase;
  font-family: "Mulish";
`;

export const LinkForgot = styled(Link)`
  margin-bottom: 15px;
  color: #fff;
  transition: all 0.3s ease-in-out;
  font-family: "Mulish";
  &:hover {
    color: #01bf71;
  }
`;
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const OrDiv = styled.div`
  display: flex;
  border: 0.03125rem solid #dbdbdb;
  -webkit-flex: 1;
  margin: 25px 0px;
`;
export const FormLinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormButtonLinkFb = styled.div`
  ${FormButtonLink};
  background: #4c69ba;
  padding: 10px;
  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }
`;

export const FormButtonLinkGm = styled.div`
  ${FormButtonLink};
  background: #adadad;
  padding: 10px;
  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }
`;

export const FormButtonLinkSu = styled.div`
  ${FormButtonLink};
  background: #01bf71;
  padding: 10px;
  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }
`;

export const ErrorP = styled.p`
  color: red;
  font-style: italic;
  font-size: 1rem;
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: "Mulish";
  &:active {
    transform: translateY(-2px);
    text-decoration: dashed;
  }
`;
