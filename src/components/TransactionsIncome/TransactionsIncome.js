import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import TransactionMonthSummary from "../TransactionMonthSummary/TransactionMonthSummary";
import IncomeItem from "./IncomeItem";
import { Main, Table, TableHead, TableDate, TableTitle, TableList } from "./TransactionsIncome.styled";
import * as transactionsOperations from "../../redux/transactions/transactions-ops";
import { getAllTransactions } from "../../redux/transactions/transactions-selectors";
import * as authOperations from "../../redux/auth/auth-operations"

const TransactionsIncome = () => {
    const transactions = useSelector(getAllTransactions)
    const dispatch = useDispatch();
    useEffect(() => dispatch(transactionsOperations.getIncTransactions()), [dispatch]);
    const selectedDate = useSelector(state => state.transactions.startDate)

    const selectedYear = selectedDate.getFullYear()
    const selectedMonth = selectedDate.getMonth() + 1
    
    /* eslint-disable */
    let sortedTransactions = transactions.filter(({date}) => date.year == selectedYear)
                                            .filter(({date}) => date.month == selectedMonth)
                                            .sort((prev, next) => next.date.day - prev.date.day)

    const getBalance = () => {
      dispatch(authOperations.getBalance())}
                                            
    return (
      <Main>
        <Table>
          <TableHead>
            <TableDate>Дата</TableDate>
            <TableTitle>Описание</TableTitle>
            <TableTitle>Категория</TableTitle>
            <TableTitle>Сумма</TableTitle>
            <TableTitle />
          </TableHead>

          {<TableList>
            {transactions && sortedTransactions.map(({ 
                    date, 
                    description, 
                    value, 
                    _id, 
                    category, 
                    typeTransaction }) =>(typeTransaction === "Incomes" && 
                        <IncomeItem 
                            key={_id} 
                            date={`${date.day}.${date.month}.${date.year}`} 
                            description={description} 
                            value={value} 
                            category={category} 
                            typeTransaction={typeTransaction} 
                            id={_id}
                            onDelete={async () => {
                              await dispatch(transactionsOperations.removeTransaction(_id))
                              getBalance()
                            }}/>)
                        )}
                      </TableList>}
        </Table>

        <TransactionMonthSummary type="Incomes" />
      </Main>
  );
}

export default TransactionsIncome;