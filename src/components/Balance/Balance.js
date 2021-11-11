import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineCursorClick, HiOutlineLightBulb } from "react-icons/hi";
import { getCurrentBalance } from '../../redux/balance/balance-selectors';
import * as balanceOperations from "../../redux/balance/balance-operations";
import { BalanceContainer, BalanceTitle, BalanceAmount, SubmitBtn, BalanceWrap, BalanceModal, BalanceText, BalanceNote } from "./Balance.styled";

export function Balance({}) {
    const [balance, setBalance] = useState("");
    const currentBalance = +useSelector(getCurrentBalance);
    const dispatch = useDispatch();

    const [balanceNote, setBalanceNote] = useState(true);
    const removeBalanceNote = () => { setBalanceNote(false) };

    const handleChange = (evt) => {
        const { value } = evt.currentTarget;
            setBalance(value);
        };
    const handleSubmit = (evt) => {
            evt.preventDefault();
            dispatch(balanceOperations.updBalance({ balance }))
         };

        //  console.log(balance)
    return (
        <BalanceContainer 
        onSubmit={handleSubmit}
        >
         <BalanceTitle>Баланс:</BalanceTitle>
            {currentBalance === 0 ? (
                <BalanceWrap>
                    <BalanceAmount 
                        name="balance"
                        type="text"
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder={`${currentBalance.toFixed(2)} UAH`}/>
                    <SubmitBtn type="submit">подтвердить</SubmitBtn>
                    {balanceNote && <BalanceModal onClick={removeBalanceNote}>
                    <BalanceText>Привет! Для начала работы внеси текущий баланс своего счета!</BalanceText>
                    <BalanceNote>Ты не можешь тратить деньги пока их у тебя нет 
                        <HiOutlineLightBulb style={{ fontSize: 16, marginLeft: 10 }}/>
                    </BalanceNote>
                    <HiOutlineCursorClick style={{ fontSize: 20, marginLeft: "80%" }}/>
                    </BalanceModal>}
                </BalanceWrap>
            ) : (
                <BalanceWrap>
                    <BalanceAmount 
                        name="balance"
                        type="text"
                        defaultValue={`${currentBalance.toFixed(2)} UAH`}
                        disabled/>
                    <SubmitBtn type="submit" disabled>подтвердить</SubmitBtn>
                </BalanceWrap>
         )}
         </BalanceContainer>
  )
}