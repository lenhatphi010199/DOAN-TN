import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#fff" : "#010606")};
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  font-weight: 550;
  &:hover {
    text-decoration: none;
    color: #010606;
    transform: translateY(-2px);
    background: ${({ primary }) => (primary ? "#81F7F3" : "#E0F8E0")};
  }
`;
