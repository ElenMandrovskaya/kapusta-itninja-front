import styled from '@emotion/styled';

export const Div = styled.div`
  @media screen and (max-width: 320px) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 225px;
  }
`;
export const Button = styled.button`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border: 1px solid transparent;

  background: none;
`;

export const Title = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 5px;
  text-align: center;
  letter-spacing: 0.04em;

  color: rgba(82, 85, 95, 0.7);
`;
export const Span = styled.span`
  min-width: 96px;
  margin-right: 15px;
  margin-left: 15px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #000000;
`;
export const Picker = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 135px;
`;
