import React from "react";
import GoBackHomeBtn from "../../components/GoBackHomeButton/GoBackHomeButton";
import TransactionsExpForm from "../../components/TransactionsExpForm/TransactionsExpForm"
import {Container} from "./ExpensesIncomeFormPage.styled"

const ExpensesFormPage = () => {
  return (
      <Container >
        <GoBackHomeBtn />
        <TransactionsExpForm />
      </Container>
  );
};

export default ExpensesFormPage;