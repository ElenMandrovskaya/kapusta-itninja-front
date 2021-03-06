import styled from "@emotion/styled";

export const Summary = styled.div`
  width: 230px;
  height: 278px;
  background-color: #f5f6fb;
  border-radius: 21px 21px 20px 0;
  margin-bottom:60px;
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    height: 300px;
  }
`;
export const Title = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 230px;
    height: 38px;
    background: #f5f6fb;
    border-bottom: 1px solid #fff;
    border-radius: 20px 20px 0 0;
`;
export const SummaryList = styled.ul`
  text-align: center;
  list-style: none;

<<<<<<< HEAD
    & ::nth-of-type(6) {
=======
    /* & :nth-child(6) {
>>>>>>> bedb7111e17afdfd5aa63a1cf6786d3fab93a78f
    border-radius: 0 0 20px 0;
  } */
`;

export const SummaryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 230px;
  height: 38px;
  background: #f5f6fb;
  border: 1px solid #FFF;

    & span {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #52555f;
    padding: 0 22px 0 22px;
  }
`;