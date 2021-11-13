import styled from '@emotion/styled';
import arrowBack from '../../images/arrow-back.svg';

export const Title = styled.p`
  @media screen and (max-width: 320px) {
    display: none;
  }
`;
export const Img = styled.svg`
  background-image: url(${arrowBack});
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  /* width: 24px; */
  margin-right: 15px;
`;
export const Link = styled.a`
  cursor: pointer;
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;

  color: rgba(82, 85, 95, 0.7);
`;
