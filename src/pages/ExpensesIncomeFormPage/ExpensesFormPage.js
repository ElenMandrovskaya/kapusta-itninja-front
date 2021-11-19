import React from "react";
import GoBackHomeBtn from "../../components/GoBackHomeButton/GoBackHomeButton";
import TransactionsExpForm from "../../components/TransactionsExpForm/TransactionsExpForm"
import {Container} from "./ExpensesIncomeFormPage.styled"

const ExpensesFormPage = () => {
  // // const [transactions, setTransactions] = useState("");
  //   const onSubmit = ({typeTransaction, date, category, description, value, categoryId }) => {
  //       const newTransactons = {
  //           typeTransaction,
  //           date,
  //           description,
  //           category,
  //           value,
  //           categoryId
  //   }
  //       setTransactions((transactions) => [ newTransactons, ...transactions]);
  //   }
  return (
      <Container >
        <GoBackHomeBtn />
        <TransactionsExpForm />
      </Container>
  );
};

export default ExpensesFormPage;