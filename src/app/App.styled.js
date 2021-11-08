import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;

@media screen and (min-width: 320px) {
    max-width: 320px;
    padding: 0 19px;
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