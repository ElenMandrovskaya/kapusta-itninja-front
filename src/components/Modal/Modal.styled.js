import styled from "@emotion/styled";
import img from "../../images/close.svg";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 101; 
  backdrop-filter: blur(5px);
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 194px;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  border-radius: 30px;
  background-color: #fff;
  @media screen and (max-width: 767px) {
  width: 280px;
  height: 174px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  background-color: inherit;
  outline: none;
  border: none;
`;

export const CloseIcon = styled.svg`
background-image: url(${img});
background-repeat: no-repeat;
`;

export const TextContent = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  color: rgba(82, 85, 95, 0.7);
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const BtnContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 265px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const Button = styled.button`
  width: 125px;
  height: 44px;
  border-radius: 16px;
  background-color: #fff;
  text-align: center;
  display: inline-block;
  border: 2px solid var(--table-color);
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  line-height: 14px;
  font-style: normal;
  font-weight: 700;
  transition: background-color 300ms linear;
  color: var(--main-text-color);
  &:hover,
  &:focus {
    background-color: var(--accent-color);
    border: 0;
    color: #fff;
  }
`;