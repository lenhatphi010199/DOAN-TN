import styled from "styled-components";

export const BookingContainer = styled.div`
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
`;
export const BookingWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
`;
export const BookingBanner = styled.div`
  width: 100%;
  max-height: 200px;
`;
export const BookingImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;
export const BookingContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 35px;
  width: calc(100%-100px);
`;
export const ContentH1 = styled.h1`
  margin-top: 90px;
  font-family: "Mulish";
  font-weight: 900;
  line-height: 50px;
  letter-spacing: 0.4em !important;
  text-transform: uppercase;
  color: #ffffff;  
`;
