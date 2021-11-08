import React from 'react';
import { BgGrey, Container } from './App.styled';
// import { Test } from '../components/Test/Test';
import { Balance } from '../components/Balance/Balance';
import user from '../data/user.json';
import StatementBtn from '../components/GoToStatementsButton/GoToStatementsButton.jsx';
import GoBackHomeBtn from '../components/GoBackHomeButton/GoBackHomeButton';
import MouthPicker from '../components/MonthPicker/MounthPicker';
import StatisticAmounts from '../components/StatisticAmounts/StatisticAmounts.jsx';
import MyChart from '../components/Charts/Charts';
import TransactionsExpForm from '../components/TransactionsExpForm/TransactionsExpForm';
import TransactionsExpenses from '../components/TransactionsExpense/TransactionsExpense';
import TransactionsIncForm from '../components/TransactionsIncForm/TransactionsIncForm';
import TransactionsIncome from '../components/TransactionsIncome/TransactionsIncome';
import {Report} from '../components/Report/Report';

export default function App() {
  return (
    <BgGrey>
    <Container>
      {/* <Test /> */}
      <Balance value={user.balance} />
      <GoBackHomeBtn />
      <StatementBtn />
      <MouthPicker />
      <StatisticAmounts />
      <Report />
      <MyChart />
      <TransactionsExpForm />
      <TransactionsExpenses />
      <TransactionsIncForm />
      <TransactionsIncome />
    </Container>
    </BgGrey>
  );
}
