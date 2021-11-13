import React from 'react';
import { Route } from 'react-router-dom';
import { Balance } from '../../components/Balance/Balance';
import GoBackHomeBtn from '../../components/GoBackHomeButton/GoBackHomeButton';
import MonthPicker from '../../components/MonthPicker/MonthPicker';
import StatisticAmounts from '../../components/StatisticAmounts/StatisticAmounts';
import MyChart from '../../components/Charts/Charts';
import { Report } from '../../components/Report/Report';

export function ReportsPage() {
  return (
    <div>
      <Balance />
      <GoBackHomeBtn />
      <MonthPicker />
      <StatisticAmounts />
      <Report />
      {/* <MyChart /> */}
    </div>
  );
}
