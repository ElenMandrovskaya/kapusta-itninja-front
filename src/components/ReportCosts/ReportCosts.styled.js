import styled from '@emotion/styled';

export const ReportTitleListWrapper = styled.div`
  @media screen and (min-width: 768px) {
    padding: 20px 21px 30px 32px;
    background-color: #ffffff;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1280px) {
    width: 1060px;
  }
`;

export const ReportCostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export const Title = styled.p`
  padding: 5px 25px;
  margin-bottom: 20px;

  color: var(--black-text-color);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.143;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;
