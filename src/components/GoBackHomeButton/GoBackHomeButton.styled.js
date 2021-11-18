import styled from "@emotion/styled";
import arrowBack from "../../images/arrow-back.svg";

export const Title = styled.p`
  @media screen and (max-width: 320px) {
    display: none;
  }
  &:hover {
    color: #555;
  }
`;
export const Img = styled.svg`
  background-image: url(${arrowBack});
  width: 18px;
  height: 12px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  text-align: center;

  /* display: block; */
  margin-right: 15px;
`;
