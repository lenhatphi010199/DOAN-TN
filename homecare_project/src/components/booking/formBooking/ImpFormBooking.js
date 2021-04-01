import styled from "styled-components";

export const Bookingform = styled.div`
  position: relative;
  padding: 30px 200px 0px 200px;
  box-sizing: border-box;
  min-width: 650px;
  min-height: 650px;
  @media screen and (max-width: 1050px) {
    padding: 30px 80px 0px 80px;
  }
  @media screen and (max-width: 768px) {
    padding: 30px 80px 0px 80px;
  }
`;
export const Form = styled.form`
  background: #fff;
  max-width: 1200px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 70px;
  padding: 20px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  background: rgba(255, 255, 255, 0.8);
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;
export const DivHT = styled.div`
  margin: 1rem 3rem 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;
`;
export const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.2;
  padding: 0 0 0;
  font-family: "Mulish";
  &:after {
    content: "*";
    margin-left: 5px;
    color: red;
  }
`;

export const FormLabelNone = styled.label`
  display: block;
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.2;
  font-family: "Mulish";
  padding: 0 0 0;
`;
export const FormInput = styled.input`
  border: transparent;
  border: none;
  border-bottom: 1px solid #000;
  padding: 0.25rem 0;
  font-size: 1.2rem;
  height: 2rem;
  width: 100%;
  display: inline-block;
  text-align: start;
  cursor: text;
  transition: 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  border-radius: 2px;
  max-width: 100%;
  outline: 0;
  font-family: "Mulish";
  background: rgba(255, 255, 255, 0.02);
`;
export const DivSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const DivCity = styled.div`
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;
export const DivDistrict = styled.div`
  padding-left: 50px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`;
export const SelectCT = styled.select`
  background: rgba(255, 255, 255, 0.02);
  border: transparent;
  border: none;
  border-bottom: 1px solid #000;
  padding: 0.25rem 0;
  font-size: 1.1rem;
  height: 2rem;
  width: 100%;
  display: inline-block;
  cursor: auto;
  transition: 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  border-radius: 2px;
  max-width: 100%;
  outline: 0;
  font-family: "Mulish";
`;

export const DivBooking = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormButton = styled.button`
  cursor: pointer;
  text-align: center;
  background: red;
  padding: 10px;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: "cambria";
  font-size: 24px;
  transition: all 0.3s ease-in-out;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-2px);
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 90px;
  resize: none;
  border: 1px solid #585858;
  font-family: "Mulish";
  background: rgba(255, 255, 255, 0.2);
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 10px;
  text-align: start;
  appearance: auto;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

export const Option = styled.option`
  font-family: "Mulish";
`;

export const DivUi = styled.div`
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);
  transition-property: all, margin;
  font-family: tahoma;
  font-size: 13px;
  padding: 0;
  margin: 0;
  color: #808080;
  box-sizing: border-box;
`;
