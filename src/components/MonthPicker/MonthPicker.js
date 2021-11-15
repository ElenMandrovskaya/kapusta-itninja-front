import React from 'react';
import { Button, Div, Title, Span, Picker } from './MonthPicker.styled';
import 'moment/locale/ru';
import moment from 'moment';
import ReportIcon from '../ReportIcon/ReportIcon';

// import { useState } from 'react';

const MonthPicker = ({
  monthChangeHandler,
  monthChangeHandlerRight,
  dateMonth,
  dateYears,
}) => {
  // const [newDate, setNewDate] = useState(moment(new Date()));
  // const [dateMonth, setDateMonth] = useState(moment(new Date()).format('MM'));
  // const [dateYears, setDateYears] = useState(moment(new Date()).format('YYYY'));

  // let monthChangeHandler = () => {
  //   setDateMonth(newDate.add(-1, 'month').format('MM'));

  //   if (dateMonth === '01') {
  //     setDateYears(newDate.add('year').format('YYYY'));
  //   }
  // };

  // let monthChangeHandlerRight = () => {
  //   setDateMonth(newDate.add(1, 'month').format('MM'));

  //   if (dateMonth === '12') {
  //     setDateYears(newDate.add('year').format('YYYY'));
  //   }
  // };

  return (
    <Div>
      <Title>Текущий период:</Title>
      <Picker>
        <Button type="button" onClick={monthChangeHandler}>
          <ReportIcon name="arrow-left" color="#000" size="10" />
        </Button>
        <Span>
          {moment(dateMonth).format('MMMM')} {dateYears}
        </Span>
        <Button type="button" onClick={monthChangeHandlerRight}>
          <ReportIcon name="arrow-right" color="#000" size="10" />
        </Button>
      </Picker>
    </Div>
  );
};

export default MonthPicker;
``;
