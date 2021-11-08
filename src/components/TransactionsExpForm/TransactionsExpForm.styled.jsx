import styled from "@emotion/styled";
import img from "../../images/calculator.svg"

export const Form = styled.form`
display: flex;
`;

export const Icon = styled.svg`

`;

export const Wrapper = styled.div`
display: flex;
`;
export const FormInput = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  margin-right: 30px;
  
  &::after {
    position: absolute;
    content: "";
    right: 14px;
    bottom: 13px;
    width: 20px;
    height: 20px;
    color: #f5f6fb;
  background-image: url(${img});
  }
`;
export const FormBtn = styled.div`
 width: 272px;
  display: flex;
  justify-content: space-between;
`;
export const InputAmount = styled.input`
  position: relative;
  border: 2px solid #f5f6fb;
  border-radius: 0px 16px 16px 0px;
  outline: none;
  padding-left: 21px;
`;
export const InputDesc = styled.input`
  border: 2px solid #f5f6fb;
  border-radius: 16px 0px 0px 0px;
  outline: none;
  padding-left: 20px;
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

export const ButtonOrange = styled.button`
  width: 125px;
  height: 44px;
  border-radius: 16px;
  background-color: var(--accent-color);
  text-align: center;
  display: inline-block;
  border: 0;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 12px;
  line-height: 14px;
  font-style: normal;
  font-weight: 700;
  color: #fff;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #fff;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
  }
`;