import React, {useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getBalance } from '../../redux/balance/balance-operations';
// import * as balanceOperations from "../../redux/balance/balance-operations";
import { BalanceContainer, BalanceTitle, BalanceAmount, SubmitBtn, BalanceWrap, BalanceModal, BalanceText, BalanceNote } from "./Balance.styled";

export function Balance({}) {
    const [balance, setBalance] = useState("");
    const [balanceModalOpen, setTBalanceModalOpen] = useState(true);
    const removeBalanceModal = () => { setTBalanceModalOpen(false) };

    const dispatch = useDispatch();
    const currentBalance = useSelector(getBalance);

    // const handleChange = (evt) => {
    //     const { value } = evt.currentTarget;
    //         setBalance(value);
    //     };
    // const handleSubmit = (evt) => {
    //         evt.preventDefault();
    //         dispatch(balanceOperations.addBalance({ balance }))
    //      };
    return (
        <BalanceContainer 
        // onSubmit={handleSubmit}
        >
         <BalanceTitle>Баланс:</BalanceTitle>
         <BalanceWrap>
            <BalanceAmount 
                name="balance"
                type="text"
                // defaultValue={`00.00`}
                value={balance}
                // onChange={handleChange}
                />
            <SubmitBtn type="submit">подтвердить</SubmitBtn>
            {/* <BalanceModal onClick={removeBalanceModal}>
             <BalanceText>Привет! Для начала работы внеси текущий баланс своего счета!</BalanceText>
             <BalanceNote>Ты не можешь тратить деньги пока их у тебя нет 😊</BalanceNote>
         </BalanceModal> */}
         </BalanceWrap>
         </BalanceContainer>
  )
}