import React, {useState} from 'react';
import { BalanceContainer, BalanceTitle, BalanceAmount, SubmitBtn, BalanceWrap, BalanceModal, BalanceText, BalanceNote } from "./Balance.styled";

export function Balance({value}) {
    const [balanceModalOpen, setTBalanceModalOpen] = useState(true);
    const removeBalanceModal = () => { setTBalanceModalOpen(false) };
    return (
        <BalanceContainer>
         <BalanceTitle>Баланс:</BalanceTitle>
         <BalanceWrap>
            <BalanceAmount 
                name="balance"
                type="text"
                defaultValue={value}/>
            <SubmitBtn type="submit">подтвердить</SubmitBtn>
            <BalanceModal onClick={removeBalanceModal}>
             <BalanceText>Привет! Для начала работы внеси текущий баланс своего счета!</BalanceText>
             <BalanceNote>Ты не можешь тратить деньги пока их у тебя нет :)</BalanceNote>
         </BalanceModal>
         </BalanceWrap>
         </BalanceContainer>
  )
}