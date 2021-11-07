import styled from "@emotion/styled";

export const BalanceContainer = styled.div`
text-align: center;
background-color: var(--table-color); //временно
@media screen and (min-width: 768px) {
display: flex;
justify-content: center;
align-items: center;
width: 369px;
margin: 0 auto;
padding-left: 35px;
}
`;

export const BalanceTitle = styled.p`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: var(--balance-text-color);
margin-bottom: 6px;
@media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;
export const BalanceAmount = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 125px;
height: 44px;
border: 2px solid #FFFFFF;
border-radius: 22px 0px 0px 22px;
font-weight: bold;
font-size: 12px;
line-height: 14px;
letter-spacing: 0.02em;
text-transform: uppercase;
color: var(--black-text-color);
@media screen and (max-width: 767px) {
    border-right: none;
}
@media screen and (min-width: 768px) {
    border-radius: 16px;
    margin-right: 15px;
}
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
font-size: 12px;
line-height: 14px;
letter-spacing: 0.02em;
text-transform: uppercase;
color: var(--balance-text-color);
&:hover {
  background-color: var(--accent-color);
  color: white;
}
&:focus {
  background-color: var(--accent-color);
  color: white;
}

@media screen and (min-width: 768px) {
    border-radius: 16px;
  }

`;
export const BalanceWrap = styled.div`
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
@media screen and (min-width: 768px) {
margin: 0;
margin-left: 21px;
justify-content: space-between;
  }

`;