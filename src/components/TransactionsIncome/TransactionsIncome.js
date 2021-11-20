import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import TransactionMonthSummary from "../TransactionMonthSummary/TransactionMonthSummary";
import IncomeItem from "./IncomeItem";
import { Main, Table, TableHead, TableTitle, TableList } from "./TransactionsIncome.styled";
import * as transactionsOperations from "../../redux/transactions/transactions-ops";
import { getAllTransactions } from "../../redux/transactions/transactions-selectors";

const TransactionsIncome = () => {
    const transactions = useSelector(getAllTransactions)
    const dispatch = useDispatch();
    useEffect(() => dispatch(transactionsOperations.getExpTransactions()), [dispatch]);
    // console.log(transactions)
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
            {transactions && transactions.map(({ date, description, value, _id, category, typeTransaction }) =>
            (typeTransaction === "Incomes" && <IncomeItem key={_id} date={`${date.day}.${date.month}.${date.year}`} description={description} value={value} category={category} typeTransaction={typeTransaction} id={_id}/>)
            )}
          </TableList>}
        </Table>

        <TransactionMonthSummary type="Incomes" />
      </Main>
  );
}

export default TransactionsIncome;