import React from "react";
import ExpenseItem from "./ExpenseItem";
import TransactionMonthSummary from "../TransactionMonthSummary/TransactionMonthSummary";
import { Main, Table, TableHead, TableTitle, TableList } from "./TransactionsExpense.styled";

const TransactionsExpense = () => {
    
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

          <TableList>
                    <ExpenseItem />
          </TableList>
        </Table>

        <TransactionMonthSummary type="Expenses" />
      </Main>
  );
}

export default TransactionsExpense;