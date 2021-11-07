import styled from '@emotion/styled';

export const Div = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  border: 1px solid transparent;

  background: none;
`;
export const Svg = styled.svg`
  /* margin-top: 10px; */
  fill: #ff751d;

  /* border: 2px solid #ff751d; */
`;

export const SvgLeft = styled.svg`
  /* composes: Svg; */
  top: 10%;
  fill: #ff751d;
  transform: rotate(180deg);
`;
export const H4 = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  text-align: center;
  letter-spacing: 0.04em;

  color: rgba(82, 85, 95, 0.7);
`;
export const Span = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  /* display: flex;
  align-items: center;
  text-align: center; */
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #000000;
`;
