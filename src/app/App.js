import React from 'react';
import { Container } from './App.styled';
import { Test } from '../components/Test/Test';
import StatementBtn from '../components/GoToStatementsButton/GoToStatementsButton.jsx';
import GoBackHomeBtn from '../components/GoBackHomeButton/GoBackHomeButton';
import MouthPicker from '../components/MonthPicker/MounthPicker';
import StatisticAmounts from '../components/StatisticAmounts/StatisticAmounts.jsx';

export default function App() {
  return (
    <Container>
      <Test />
      <GoBackHomeBtn />
      <StatementBtn />
      <MouthPicker />
      <StatisticAmounts />
    </Container>
  );
}
