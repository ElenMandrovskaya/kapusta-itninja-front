import styled from '@emotion/styled';

export const Title = styled.p`
    @media screen and (min-width: 768px) {
        margin-right: 20px;
    }

    margin-right: 15px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.04em;
    color: #52555f;
`;
export const ProfitSpan = styled.span`
    @media screen and (min-width: 768px) {
        display: inline;
        margin-left: 15px;
        margin-top: 0;
    }
    display: block;
    margin-top: 5px;
    color: #407946;
`;
export const CostSpan = styled.span`
    @media screen and (min-width: 768px) {
        display: inline;
        margin-left: 15px;
        margin-top: 0;
    }

    display: block;
    margin-top: 5px;
    color: #e53935;
`;
export const Vl = styled.div`
    @media screen and (min-width: 768px) {
        height: 36px;
        margin-right: 20px;
    }

    border-left: 1px solid #e0e5eb;
    margin-right: 10px;
    height: 71px;
`;
export const Div = styled.div`
    @media screen and (min-width: 768px) {
        height: 50px;
        box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
        border-radius: 30px;
        margin-bottom: 30px;
    }

    display: flex;
    margin-bottom: 40px;
    height: 85px;
    box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #ffffff;
    margin-top: 30px;
`;
