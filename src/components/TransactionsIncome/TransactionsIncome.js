import React from "react";
import TransactionMonthSummary from "../TransactionMonthSummary/TransactionMonthSummary";
import IncomeItem from "./IncomeItem";
import { Main, Table, TableHead, TableTitle, TableList } from "./TransactionsIncome.styled";
// import income from "../../data/income.json";

const TransactionsIncome = ({ transactions }) => {
  const sortedArray = [...transactions]
  //   const sortedArray = [...income].sort((prevIncome, nextIncome) => {
  //   const prevDateArr = prevIncome.date.split(".");
  //   const nextDateArr = nextIncome.date.split(".");
  //   return new Date(`${nextDateArr[1]}.${nextDateArr[0]}.${nextDateArr[2]}`) - new Date(`${prevDateArr[1]}.${prevDateArr[0]}.${prevDateArr[2]}`)
  // });
    //  console.log(type)
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
            {sortedArray.map(({date, description, amount, id, category}) => (
              <IncomeItem date={date} description={description} amount={amount} key={id} id={id} category={category}/>
            ))}
          </TableList>}
        </Table>

        <TransactionMonthSummary type="Incomes" />
      </Main>
  );
}

export default TransactionsIncome;