import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import TransactionMonthSummary from "../TransactionMonthSummary/TransactionMonthSummary";
import { Main, Table, TableHead, TableTitle, TableList } from "./TransactionsExpense.styled";
import * as transactionsOperations from "../../redux/transactions/transactions-ops";

const TransactionsExpense = () => {

    const transactions = useSelector(state => state.transactions.items)
    const dispatch = useDispatch();
    useEffect(() => dispatch(transactionsOperations.getExpTransactions()), [dispatch]);

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
                {transactions.map(({date, description, category, value, typeTransaction, _id}) => 
                  (typeTransaction === "Expences" && <ExpenseItem key={_id} date={`${date.day}.${date.month}.${date.year}`} description={description} value={value} category={category} typeTransaction={typeTransaction} id={_id}/>)
                )}
              </TableList>}
        </Table>

        <TransactionMonthSummary type="Expenses" />
      </Main>
  );
}

export default TransactionsExpense;