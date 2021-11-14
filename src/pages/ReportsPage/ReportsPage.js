import React from 'react';
import { Route } from 'react-router-dom';
import Balance from '../../components/Balance/Balance';
import GoBackHomeBtn from '../../components/GoBackHomeButton/GoBackHomeButton';
import MonthPicker from '../../components/MonthPicker/MonthPicker';
import StatisticAmounts from '../../components/StatisticAmounts/StatisticAmounts';
import MyChart from '../../components/Charts/Charts';
import Report from '../../components/Report/Report'
import { ReportsPageHeader } from './ReportsPage.styled';
import { AppWrap } from '../../app/App.styled'

export default function ReportsPage() {
  return (
    <AppWrap>
      <Balance />
      <ReportsPageHeader>
        <GoBackHomeBtn />
        <GoBackHomeBtn />
        {/* <MonthPicker /> */}
      </ReportsPageHeader>
      <StatisticAmounts />
      {/* <Report /> */}
      <MyChart />
    </AppWrap>
  )
}
