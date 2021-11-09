import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentBalance } from '../../redux/balance/balance-selectors';
import * as balanceOperations from "../../redux/balance/balance-operations";
import { BalanceContainer, BalanceTitle, BalanceAmount, SubmitBtn, BalanceWrap, BalanceModal, BalanceText, BalanceNote } from "./Balance.styled";

export function Balance({}) {
    const [balance, setBalance] = useState("");
    const currentBalance = useSelector(getCurrentBalance);
    const dispatch = useDispatch();

    const [balanceModalOpen, setTBalanceModalOpen] = useState(true);
    const removeBalanceModal = () => { setTBalanceModalOpen(false) };
    
    const handleChange = (evt) => {
        const { value } = evt.currentTarget;
            setBalance(value);
        };
    const handleSubmit = (evt) => {
            evt.preventDefault();
            dispatch(balanceOperations.updBalance({ balance }))
         };

         
    return (
        <BalanceContainer 
        onSubmit={handleSubmit}
        >
         <BalanceTitle>Баланс:</BalanceTitle>
            {currentBalance === "0" ? (
                <BalanceWrap>
                    <BalanceAmount 
                        name="balance"
                        type="text"
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="Введите сумму"/>
                    <SubmitBtn type="submit">подтвердить</SubmitBtn>
                    {/* <BalanceModal onClick={removeBalanceModal}>
                    <BalanceText>Привет! Для начала работы внеси текущий баланс своего счета!</BalanceText>
                    <BalanceNote>Ты не можешь тратить деньги пока их у тебя нет 😊</BalanceNote>
                    </BalanceModal> */}
                </BalanceWrap>
            ) : (
                <BalanceWrap>
                    <BalanceAmount 
                        name="balance"
                        type="text"
                        defaultValue={currentBalance}/>
                    <SubmitBtn type="submit" disabled>подтвердить</SubmitBtn>
                </BalanceWrap>
         )}
         </BalanceContainer>
  )
}