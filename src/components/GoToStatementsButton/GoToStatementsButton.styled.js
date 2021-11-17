import styled from '@emotion/styled';

export const Link = styled.div`
  display: flex;
  cursor: pointer;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  letter-spacing: 0.04em;

  color: rgba(82, 85, 95, 0.7);
`;
// export const Svg = styled.svg`
//   margin-left: 15px;
// `;
export const Img = styled.img`
  margin-left: 15px;
  width: 14px;
  height: 14px;
  @media screen and (max-width: 320px) {
    margin-bottom: 40px;
  }
`;
export const Span = styled.p`
  @media screen and (max-width: 320px) {
    margin-bottom: 40px;
  }
  &:hover {
    color: #555;
  }
  /* padding-left: 55px; */
`;
