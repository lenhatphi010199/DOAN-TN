import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: block;
  box-sizing: border-box;
  min-height: 150px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: auto;
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;




export const IconLink = styled(Link)`
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;



export const ImgBg = styled.img`
  width: 100%;
  height: 150%;
  position: absolute;
`;

export const Img = styled.img`
  height: 100px;
  width: 200px;
  position:relative;
`;