import styled from "@emotion/styled";

export const BalanceContainer = styled.div`
text-align: center;
background-color: var(--table-color); //временно
`;

export const BalanceTitle = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: var(--balance-text-color);
margin-bottom: 6px;
`;
export const BalanceAmount = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 125px;
height: 44px;
border: 2px solid #FFFFFF;
border-right: none;
border-radius: 22px 0px 0px 22px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 14px;
letter-spacing: 0.02em;
text-transform: uppercase;
color: var(--black-text-color);
`;
export const SubmitBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
border: 2px solid #FFFFFF;
border-radius: 0px 22px 22px 0px;
width: 125px;
height: 44px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
letter-spacing: 0.02em;
text-transform: uppercase;
color: var(--balance-text-color);
`;
export const BalanceWrap = styled.div`
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`;