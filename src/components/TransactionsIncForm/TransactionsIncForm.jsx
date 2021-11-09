import React from "react";
import Calendar from "../Calendar/Calendar";
import CategoryInput from "../CategoryInput/CategoryInput";
import { Form, Wrapper, FormInput, FormBtn, InputAmount, InputDesc, ButtonOrange,Button } from "./TransactionsIncForm.styled";

const TransactionsIncForm = () => {

    return (
        <Form >
            <Wrapper>
                <Calendar />
                <FormInput>
                    <InputDesc
                        type="text"
                        placeholder="Описание дохода"
                    />
                    <CategoryInput
                        type="income"
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

export default TransactionsIncForm;