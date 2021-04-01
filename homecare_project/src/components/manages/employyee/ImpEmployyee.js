import styled from "styled-components";

export const EmpContanier = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: block;
  position: absolute;
  min-width: 50%;
`;

export const EmpWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* overflow: auto; */
  position: relative;
  background-color: #bdbdbd;
  min-width: 800px;
`;

export const EmpBanner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  min-width: 800px;
`;

export const EmpImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  min-width: 800px;
`;

export const EmpContent = styled.div`
  margin-top: 100px;
  width: 100%;
  z-index: 10;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 800px;
`;
