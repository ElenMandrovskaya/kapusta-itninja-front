import React from 'react';
import { BalanceContainer, BalanceTitle, BalanceAmount, SubmitBtn, BalanceWrap } from "./Balance.styled";

export function Balance({value}) {
    return (
        <BalanceContainer>
         <BalanceTitle>Баланс:</BalanceTitle>
         <BalanceWrap>
            <BalanceAmount>{value} UAH</BalanceAmount>
            <SubmitBtn>подтвердить</SubmitBtn>
         </BalanceWrap>
         </BalanceContainer>
  )
}