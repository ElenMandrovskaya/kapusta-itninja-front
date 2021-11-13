import React from 'react';
import { BgGrey, Container } from './App.styled';
// import { Header } from '../components/Header/Header';
// import { Balance } from '../components/Balance/Balance';
import StatementBtn from '../components/GoToStatementsButton/GoToStatementsButton.jsx';
import GoBackHomeBtn from '../components/GoBackHomeButton/GoBackHomeButton';
import MonthPicker from '../components/MonthPicker/MonthPicker';
import StatisticAmounts from '../components/StatisticAmounts/StatisticAmounts.jsx';
import MyChart from '../components/Charts/Charts';
import TransactionPage from '../pages/TransactionsPage/TransactionsPage';
import { Report } from '../components/Report/Report';
import { BgUnAuth } from '../components/BgUnAuth/BgUnAuth';
import { BgAuth } from '../components/BgAuth//BgAuth';
// import RegistrationPage from '../pages/RegistrationPage';
// import { LogoutModal } from '../components/LogoutModal/LogoutModal';
import { ReportsPage } from '../pages/ReportsPage/ReportsPage';


export default function App() {
  return (
    <div>
      <BgGrey />
      <Header />
      {/* <RegistrationPage /> */}
      {/* <BgAuth /> */}
      {/* <BgUnAuth />   */}
      <Container>
        {/* <Balance />  */}
        <TransactionPage />
        <ReportsPage />
        {/* <Report /> */}
        {/* <MyChart /> */}
      </Container>
    </div>
  );
}
