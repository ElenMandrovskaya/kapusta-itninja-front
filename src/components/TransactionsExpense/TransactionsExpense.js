import React from "react";
import ExpenseItem from "./ExpenseItem";
import TransactionMonthSummary from "../TransactionMonthSummary/TransactionMonthSummary";
import { Main, Table, TableHead, TableTitle, TableList } from "./TransactionsExpense.styled";
// import expense from "../../data/expense.json";

const TransactionsExpense = ({transactions}) => {
    const sortedArray = [...transactions]
    // .sort((prevExpense, nextExpense) => {
    // const prevDateArr = prevExpense.date.split(".");
    //   const nextDateArr = nextExpense.date.split(".");
    // return (
    //   new Date(`${nextDateArr[1]}.${nextDateArr[0]}.${nextDateArr[2]}`) -
    //   new Date(`${prevDateArr[1]}.${prevDateArr[0]}.${prevDateArr[2]}`)
    // );
    // });
    // console.log(sortedArray)
    return (
      <Main>
        <Table>
          <TableHead>
            <TableTitle>Дата</TableTitle>
            <TableTitle>Описание</TableTitle>
            <TableTitle>Категория</TableTitle>
            <TableTitle>Сумма</TableTitle>
            <TableTitle />
          </TableHead>

          {<TableList>
                {sortedArray.map(({date, description, category, value, typeTransaction}) => 
                  (typeTransaction === "Expenses" && <ExpenseItem date={date} description={description} value={value} category={category} typeTransaction={typeTransaction}/>)
                )}
              </TableList>}
        </Table>

        <TransactionMonthSummary type="Expenses" />
      </Main>
  );
}

export default TransactionsExpense;