import React from 'react';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import Balance from '../../components/Balance/Balance';
import GoBackHomeBtn from '../../components/GoBackHomeButton/GoBackHomeButton';
import MonthPicker from '../../components/MonthPicker/MonthPicker';
import StatisticAmounts from '../../components/StatisticAmounts/StatisticAmounts';
import MyChart from '../../components/Charts/Charts';
import Report from '../../components/Report/Report';
import { ReportsPageHeader } from './ReportsPage.styled';
import { AppWrap } from '../../app/App.styled';
import 'moment/locale/ru';
import moment from 'moment';

function ReportsPage() {
  const [newDate, setNewDate] = useState(moment(new Date()));
  const [dateMonth, setDateMonth] = useState(moment(new Date()).format('MM'));
  const [dateYears, setDateYears] = useState(moment(new Date()).format('YYYY'));

  let monthChangeHandler = () => {
    setDateMonth(newDate.add(-1, 'month').format('MM'));
    if (dateMonth === '01') {
      setDateYears(newDate.add('year').format('YYYY'));
    }
  };

  let monthChangeHandlerRight = () => {
    setDateMonth(newDate.add(1, 'month').format('MM'));
    if (dateMonth === '12') {
      setDateYears(newDate.add('year').format('YYYY'));
    }
  };
  return (
    <AppWrap>
      <ReportsPageHeader>
        <GoBackHomeBtn />
        <MonthPicker
          monthChangeHandler={monthChangeHandler}
          monthChangeHandlerRight={monthChangeHandlerRight}
          dateMonth={dateMonth}
          dateYears={dateYears}
        />
        <Balance />
      </ReportsPageHeader>
      <StatisticAmounts />
      <Report dateMonth={Number(dateMonth)} dateYears={Number(dateYears)} />
      {/* <MyChart /> */}
    </AppWrap>
  );
}

export default ReportsPage;
