import styled from "@emotion/styled";

export const Summary = styled.div`
  width: 230px;
  height: 278px;
`;
export const Title = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 230px;
    height: 38px;
    background: #f5f6fb;
    border: 1px solid #fff;
    border-radius: 20px 20px 0 0;
`;
export const SummaryList = styled.ul`
  text-align: center;
  list-style: none;

    & :nth-child(6) {
    border-radius: 0 0 20px 0;
  }
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