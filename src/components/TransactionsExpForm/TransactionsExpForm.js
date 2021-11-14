import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import CategoryInput from "../CategoryInput/CategoryInput";
import { Form, Wrapper, FormInput, FormBtn, InputAmount, InputDesc, ButtonOrange, Button } from "./TransactionsExpForm.styled";

const TransactionsExpForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const reset = () => {
    setStartDate(new Date());
    setCategory("");
    setDescription("");
    setAmount("");
    };
    
    const addExpense = (e) => {
    e.preventDefault();
    const date = [
      startDate.getDate(),
      startDate.getMonth() + 1,
      startDate.getFullYear(),
    ].join(".");
    // const body = {
    //   type: "expense",
    //   date,
    //   amount: +amount,
    //   category,
    //   description,
    // };
        reset();
    };

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
                        placeholder="Описание товара"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <CategoryInput
                        type="expenses"
                        categoryPick={category}
                        setCategory={setCategory}
                    />
                    <InputAmount
                        type="text"
                        placeholder="0,00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} 
                    />
                </FormInput>
                <FormBtn>
                    <ButtonOrange
                        type="submit"
                        buttonHandler="">
                        Ввод
                    </ButtonOrange>
                    <Button
                        type="button">
                        Очистить
                    </Button>         
                </FormBtn>
            </Wrapper>
        </Form>
    );
};

export default TransactionsExpForm;