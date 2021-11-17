import styled from '@emotion/styled';

export const Title = styled.p`
  @media screen and (max-width: 320px) {
    /* display: block; */
    margin-right: 15px;
  }
  margin-right: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height */

  letter-spacing: 0.04em;

  color: #52555f;
`;
export const ProfitSpan = styled.span`
  @media screen and (max-width: 320px) {
    display: block;
    margin-top: 5px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
  color: #e53935;
`;
export const CostSpan = styled.span`
  @media screen and (max-width: 320px) {
    display: block;
    margin-top: 5px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
  color: #407946;
`;
export const Vl = styled.div`
  @media screen and (max-width: 320px) {
    margin-right: 10px;
    height: 71px;
  }

  border-left: 1px solid #e0e5eb;
  height: 36px;
  margin-right: 20px;
`;
export const Div = styled.div`
  @media screen and (max-width: 320px) {
    margin-bottom: 40px;
    height: 85px;
    box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
    border-radius: 20px;
  }
  display: flex;

  align-items: center;
  justify-content: center;

  height: 50px;

  text-align: center;

  background: #ffffff;

  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
