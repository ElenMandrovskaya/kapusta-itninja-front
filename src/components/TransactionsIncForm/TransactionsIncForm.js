import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import CategoryInput from "../CategoryInput/CategoryInput";
import { Form, Wrapper, FormInput, FormBtn, InputAmount, InputDesc, ButtonOrange,Button } from "./TransactionsIncForm.styled";

const TransactionsIncForm = ({ onSubmit, type }) => {
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
    
    const addIncome = (e) => {
    e.preventDefault();
    const date = [
      startDate.getDate(),
      startDate.getMonth() + 1,
      startDate.getFullYear(),
    ].join(".");
        onSubmit({type, date, description, category, amount })
        reset();
    };

    return (
        <Form onSubmit={addIncome} type={type}>
            <Wrapper>
                <Calendar
                    selectedDate={startDate}
                    handleChange={(date) => setStartDate(date)}
                />
                <FormInput>
                    <InputDesc
                        type="text"
                        placeholder="Описание дохода"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <CategoryInput
                        type="income"
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
                        onSubmit={addIncome}
                    >
                        Ввод
                    </ButtonOrange>
                    <Button
                        type="button"
                        onSubmit={reset}
                    >
                        Очистить
                    </Button>
                </FormBtn>
            </Wrapper>
        </Form>
    );
};

export default TransactionsIncForm;