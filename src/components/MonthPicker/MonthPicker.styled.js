import styled from '@emotion/styled';

export const Div = styled.div`
    @media screen and (min-width: 768px) {
        margin-bottom: 0;
    }
    margin-bottom: 30px;
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
    @media screen and (min-width: 768px) {
        text-align: right;
        margin-right: 15px;
    }

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 1.167;
    margin-bottom: 5px;
    letter-spacing: 0.04em;
    color: rgba(82, 85, 95, 0.7);
    text-align: center;
`;
export const Span = styled.span`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 1.143;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--black-text-color);
`;
export const Picker = styled.div`
    @media screen and (min-width: 768px) {
        margin-left: 45px;
    }
    @media screen and (min-width: 1280px) {
        margin-left: 100px;
    }
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 135px;
    margin: 0 auto;
`;
