import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;

  @media (min-width: 320px) and (max-width: 767px) {
    max-width: 320px;
    padding: 0 19px;
    margin-top: -70px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 52px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 110px;
  }
`;

export const BgGrey = styled.div`
  position: fixed;
  z-index: -1;
  background-color: var(--table-color);
  width: 100%;
  height: 50%;
  border-radius: 0 0 0 180px;
  @media screen and (min-width: 768px) {
    height: 50%;
  }
  @media screen and (min-width: 1280px) {
    height: 68%;
  }
`;
export const AppWrap = styled.div``;

export const BalannceTab = styled.div`
  margin-bottom: 10px;
  display: grid;

  grid-template-columns: 6fr 1fr;

  justify-items: end;

  margin-top: 40px;
  @media screen and (max-width: 320px) {
    display: inline-flex;
    flex-direction: column-reverse;
    margin-bottom: 40px;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 6fr 2fr;
    margin-bottom: 60px;
  }
`;
