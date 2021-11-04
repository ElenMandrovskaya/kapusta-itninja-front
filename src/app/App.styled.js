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