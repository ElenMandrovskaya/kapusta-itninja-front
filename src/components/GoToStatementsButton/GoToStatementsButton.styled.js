import styled from '@emotion/styled';

export const Img = styled.img`
  margin-left: 15px;
  width: 14px;
  height: 14px;
  @media screen and (max-width: 320px) {
    margin-bottom: 40px;
  }
`;
export const Span = styled.p`
  transition: all linear 0.3s;
  &:hover {
    color: #555;
  }
  @media screen and (max-width: 320px) {
    margin-bottom: 40px;
  }
`;
