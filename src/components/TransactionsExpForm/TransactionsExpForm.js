import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import CategoryInput from "../CategoryInput/CategoryInput";
import { Form, Wrapper, FormInput, FormBtn, InputAmount, InputDesc, ButtonOrange, Button } from "./TransactionsExpForm.styled";

const TransactionsExpForm = ({onSubmit}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [categoryId, setCategoryId] = useState('');
    const [typeTransaction, setTypeTransaction] = useState('');

    const reset = () => {
    setStartDate(new Date());
    setCategory("");
    setCategoryId('');
    setDescription("");
    setValue("");
    setTypeTransaction('');
    };
    
    const addExpense = (e) => {
        e.preventDefault();
        const date = [
      startDate.getDate(),
      startDate.getMonth() + 1,
      startDate.getFullYear(),
    ].join(".");
        onSubmit({typeTransaction, date, description, category, categoryId, value });
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