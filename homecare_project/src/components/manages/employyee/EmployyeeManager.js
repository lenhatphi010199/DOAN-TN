import React from "react";
import {
  EmpContanier,
  EmpWrapper,
  EmpBanner,
  EmpImg,
  EmpContent,
} from "./ImpEmployyee";
import ImgBg from "../../../images/signin.jpg";
import Employyees from "./Employyees";

export default function EmployyeeManager() {
  return (
    <EmpContanier>
      <EmpWrapper>
        <EmpBanner>
          <EmpImg src={ImgBg} />
        </EmpBanner>
        <EmpContent>
          <Employyees />
        </EmpContent>
      </EmpWrapper>
    </EmpContanier>
  );
}
