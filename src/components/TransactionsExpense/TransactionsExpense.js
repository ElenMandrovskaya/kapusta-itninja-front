import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import ExpenseItem from "./ExpenseItem";
import TransactionMonthSummary from "../TransactionMonthSummary/TransactionMonthSummary";
import { Main, Table, TableHead, TableDate, TableTitle, TableList } from "./TransactionsExpense.styled";
import * as transactionsOperations from "../../redux/transactions/transactions-ops";
import { getAllTransactions } from "../../redux/transactions/transactions-selectors";
import * as authOperations from "../../redux/auth/auth-operations"


const TransactionsExpense = () => {
    const transactions = useSelector(getAllTransactions);
    const selectedDate = useSelector(state => state.transactions.startDate);
    const dispatch = useDispatch();
    
    const selectedYear = selectedDate.getFullYear()
    const selectedMonth = selectedDate.getMonth() + 1

    useEffect(() => {
        dispatch(transactionsOperations.getExpTransactions())
      }, [dispatch]) 

    /* eslint-disable */
    let sortedTransactions = transactions.filter(({date}) => date.year == selectedYear)
                                            .filter(({date}) => date.month == selectedMonth)
                                            .sort((prev, next) => next.date.day - prev.date.day)
    

    const getCurrent = () => {
      dispatch(authOperations.getBalance())
      dispatch(transactionsOperations.getSummaryExp(selectedYear))
    }
  
  
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
                    category, 
                    value, 
                    typeTransaction, 
                    _id}) => (typeTransaction === "Expenses" && 
                      <ExpenseItem 
                          key={_id} 
                          date={`${date.day}.${date.month}.${date.year}`} 
                          description={description} 
                          value={value} 
                          category={category} 
                          typeTransaction={typeTransaction} 
                          id={_id} 
                          onDelete={async () => {
                            await dispatch(transactionsOperations.removeTransaction(_id))
                            getCurrent()
                          }}
                        />)
                )}
              </TableList>}
        </Table>

        <TransactionMonthSummary type='Expenses'/>
      </Main>
  );
}

export default TransactionsExpense;