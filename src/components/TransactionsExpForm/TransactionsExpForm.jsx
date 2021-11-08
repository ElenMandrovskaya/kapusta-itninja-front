import React from "react";
import Calendar from "../Calendar/Calendar";
import CategoryInput from "../CategoryInput/CategoryInput";
import { Form, Wrapper, FormInput, FormBtn, InputAmount, InputDesc, ButtonOrange, Button } from "./TransactionsExpForm.styled";

const TransactionsExpForm = () => {

    return (
        <Form >
            <Wrapper>
                <Calendar />
                <FormInput>
                    <InputDesc
                        type="text"
                        placeholder="Описание товара"
                    />
                    <CategoryInput
                        type="expenses"
                    />
                    <InputAmount
                        type="text"
                        placeholder="0,00"
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