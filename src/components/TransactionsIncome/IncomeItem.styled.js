import styled from "@emotion/styled";
import img from "../../images/delete.svg";

export const Item = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 85px 100px 100px 30px;
  align-items: center;
  background: #fff;
  color: #52555f;
  border-bottom: 1px solid #f5f6fb;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.04em;
  height: 50px;
  padding: 0 10px;
  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

    @media screen and (max-width: 767px) {
    &:nth-child(1) {
      grid-row: 2 / 4;
    }

    &:nth-child(2) {
      font-size: 14px;
      font-weight: 700;
    }

    &:nth-child(3) {
      grid-row: 2 / 4;
    }

    &:nth-child(4) {
      grid-row: 1 / 4;
      font-size: 12px;
      font-weight: 700;
    }

    &:nth-child(5) {
      grid-row: 1 / 4;
    }
  }

    @media screen and (min-width: 768px) {
    display: grid;
    align-items: center;
    height: 38px;
    grid-template-columns: 120px 196px 140px 100px 50px;
    font-size: 12px;
    line-height: 14px;
    padding: 0 8px;
    border-bottom: 2px solid #f4f6fb;

    & span {
      padding: 0px 13px 0px 0px;
    }
  }

    @media screen and (min-width: 1280px) {
    grid-template-columns: 170px 248px 164px 116px 50px;

    & span {
      padding: 0px 25px 0px 0px;
    }
  }
`;

export const ItemDate = styled.span``;
export const ItemDesc = styled.span``;
export const ItemCategory = styled.span``;
export const ItemSum = styled.span`
  font-weight: 700;
  color: var(--green-text-color);
`;

export const ItemBtn = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 20px;
    border: none;
    background-color: inherit;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    &:hover {
      background-color: #f5f6fb;
    }
`;