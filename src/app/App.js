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
import {Report} from '../components/Report/Report';
import { LogoUnAuth } from '../components/MainLogoUnAuth/MainLogo';

export default function App() {
  return (
    <BgGrey>
      <LogoUnAuth />
    <Container>
      {/* <Test />
      <Balance value={user.balance} />
      <GoBackHomeBtn />
      <StatementBtn />
      <MouthPicker />
      <StatisticAmounts />
      <Report />
      <MyChart /> */}
    </Container>
    </BgGrey>
  );
}
