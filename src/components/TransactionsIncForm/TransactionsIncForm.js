import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import * as transactionsOps from "../../redux/transactions/transactions-ops";
import Calendar from "../Calendar/Calendar";
import CategoryInput from "../CategoryInput/CategoryInput";
import { Form, Wrapper, FormInput, FormBtn, InputAmount, InputDesc, ButtonOrange,Button } from "./TransactionsIncForm.styled";

const TransactionsIncForm = ({ onSubmit }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [categoryId, setCategoryId] = useState('');
    const [typeTransaction, setTypeTransaction] = useState('');
    // const dispatch = useDispatch();

    const reset = () => {
    setStartDate(new Date());
    setCategory("");
    setCategoryId('');
    setDescription("");
    setValue("");
    setTypeTransaction('');
    };
    
    const addIncome = (e) => {
    e.preventDefault();
    const date = [
      startDate.getDate(),
      startDate.getMonth() + 1,
      startDate.getFullYear(),
        ].join(".");
    // const body = {
    //   type: "income",
    //   date,
    //   amount: +amount,
    //   categoryId,
    //   description,
    // };
    // dispatch(transactionsOps.addTransaction(body));
        onSubmit({typeTransaction, date, description, category, categoryId, value });

        reset();
        // goToTransactions();
    };
console.log(addIncome)
    return (
        <Form onSubmit={addIncome} >
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
                        type="Incomes"
                        name="category"
                        categoryPick={category}
                        setCategory={setCategory}
                        setCategoryId={setCategoryId}
                        setTypeTransaction={setTypeTransaction}
                    />
                    <InputAmount
                        type="text"
                        placeholder="0,00"
                        value={value}
                        onChange={(e) => setValue(e.target.value)} 
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

export default TransactionsIncForm;