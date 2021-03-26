import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 500px;
  width: 90%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 15px;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 860px;
  }

  @media screen and (max-width: 1000px) {
    height: 450px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  margin-top: 60px;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: flex-start;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'co1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const ColumnLeft = styled.div`
  padding: 0 15px;
  grid-area: col1;
`;

export const ColumnRight = styled.div`
  padding: 0 15px;
  grid-area: col2;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#0f7f8fa" : "#010606")};
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 860px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 0 10px 10px;
  padding-right: 0;
`;
