import styled from "@emotion/styled";
import img from "../../images/calendar.svg"

export const DateContainer = styled.div`
  display: flex;
  align-items: center;

    @media screen and (max-width: 767px) {
    margin: 0 auto;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 33px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 23px;
  }
`;
export const Label = styled.label`
  cursor: pointer;
  width: 25px;
  height: 20px;
  background-image: url(${img});
`;