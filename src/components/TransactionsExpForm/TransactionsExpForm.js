import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Calendar from "../Calendar/Calendar";
import CategoryInput from "../CategoryInput/CategoryInput";
import { Form, Wrapper, FormInput, FormBtn, InputAmount, InputDesc, ButtonOrange, Button } from "./TransactionsExpForm.styled";
// import { getContacts } from '../../redux/contacts/contacts-selectors';
import * as transactionstOperations from "../../redux/transactions/transactions-ops";

const TransactionsExpForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [typeTransaction, setTypeTransaction] = useState("");
    const dispatch = useDispatch();

    const reset = () => {
    setStartDate(new Date());
    setCategory("");
    setCategoryId("");
    setDescription("");
    setValue("");
    setTypeTransaction("");
    };
    
    const addExpense = (e) => {
        e.preventDefault();
    //     const date = [
    //   startDate.getDate(),
    //   startDate.getMonth() + 1,
    //   startDate.getFullYear(),
    // ].join(".");
    const date = {
        day: startDate.getDate(),
        month: startDate.getMonth() + 1,
        year: startDate.getFullYear()
    }
    // console.log(date.day)
        // onSubmit({typeTransaction, date, description, category, categoryId, value });
        dispatch(transactionstOperations.addExpTransaction({ typeTransaction, date, description, category, categoryId, value }))
        reset();
    };

    // console.log(reset)
    return (
        <Form onSubmit={addExpense} >
            <Wrapper>
                <Calendar
                    selectedDate={startDate}
                    handleChange={(date) => setStartDate(date)}                
                />
                <FormInput>
                    <InputDesc
                        type="text"
                        name="description"
                        placeholder="Описание товара"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <CategoryInput
                        type="Expenses"
                        name="category"
                        categoryPick={category}
                        setCategory={setCategory}
                        setCategoryId={setCategoryId}
                        setTypeTransaction={setTypeTransaction}
                    />
                    <InputAmount
                        type="text"
                        name="amount"
                        placeholder="0,00"
                        value={value}
                        onChange={(e) => setValue(e.target.value)} 
                    />
                </FormInput>
                <FormBtn>
                    <ButtonOrange
                        type="submit"
                        onSubmit={addExpense}>
                        Ввод
                    </ButtonOrange>
                    <Button
                        type="submit"
                        onClick={reset}
                    >
                        Очистить
                    </Button>         
                </FormBtn>
            </Wrapper>
        </Form>
    );
};

export default TransactionsExpForm;