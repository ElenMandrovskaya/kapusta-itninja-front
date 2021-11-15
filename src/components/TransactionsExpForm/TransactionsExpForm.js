import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import CategoryInput from "../CategoryInput/CategoryInput";
import { Form, Wrapper, FormInput, FormBtn, InputAmount, InputDesc, ButtonOrange, Button } from "./TransactionsExpForm.styled";

const TransactionsExpForm = ({onSubmit, type}) => {
    // const [transactions, setTransactions] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    // const [typeForm, setTypeForm] = useState("");

    const reset = () => {
    setStartDate(new Date());
    setCategory("");
    setDescription("");
     setAmount("");
    };

    // const handleChange = (evt) => {
    // const { name, value } = evt.currentTarget;
    // switch (name) {
    //   case "category":
    //     setCategory(value);
    //     break;

    //   case "description":
    //     setDescription(value);
    //     break;

    // case "amount":
    //     setAmount(value);
    //         break;
        
    //   default:
    //     return;
    // }
    // };
    
    // const onSubmit = ({ date, category, description, amount }) => {
    //     const newTransactons = {
    //         date,
    //         category,
    //         description,
    //         amount
    //     }
    //     setTransactions(newTransactons)
    // }
    
    const addExpense = (e) => {
        e.preventDefault();
        // setTypeForm(type);
    const date = [
      startDate.getDate(),
      startDate.getMonth() + 1,
      startDate.getFullYear(),
    ].join(".");
        onSubmit({type, date, description, category, amount });
        reset();
    };

    // console.log(type)
    return (
        <Form onSubmit={addExpense} type={type} >
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
                        type="expenses"
                        name="category"
                        categoryPick={category}
                        setCategory={setCategory}
                    />
                    <InputAmount
                        type="text"
                        name="amount"
                        placeholder="0,00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} 
                    />
                </FormInput>
                <FormBtn>
                    <ButtonOrange
                        type="submit"
                        onSubmit={addExpense}>
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

export default TransactionsExpForm;