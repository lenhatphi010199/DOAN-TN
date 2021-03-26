import styled, { css } from "styled-components/macro";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

export const HomeSection = styled.section`
  height: 100vh;
  max-height: 550px;
  position: relative;
  overflow: hidden;
`;

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const HomeSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
export const HomeSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
export const HomeImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  transition: 0.3s ease-in-out;
`;
export const HomeContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100%-100px);
  color: #fff;
  margin-left: 100px;

  h1 {
    font-size: clamp(2rem, 8vw, 3rem);
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
    transition: 1s ease-in-out;
  }
  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;
export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

export const SliderButton = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
export const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
  }
 
`;

export const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

export const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;