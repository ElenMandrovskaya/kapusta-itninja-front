import React from 'react';
import { Button, Div, Title, Span } from './MonthPicker.styled';
import 'moment/locale/ru';
import moment from 'moment';
import { ReportIcon } from '../ReportIcon/ReportIcon';

import { useState } from 'react';

const MonthPicker = () => {
  const [newDate, setNewDate] = useState(moment(new Date()));
  const [dateMonth, setDateMonth] = useState(moment(new Date()).format('MMMM'));
  const [dateYears, setDateYears] = useState(moment(new Date()).format('YYYY'));

  let monthChangeHandler = () => {
    setDateMonth(newDate.add(-1, 'month').format('MMMM'));

    if (dateMonth === 'январь') {
      setDateYears(newDate.add('year').format('YYYY'));
    }
  };

  let monthChangeHandlerRight = () => {
    setDateMonth(newDate.add(1, 'month').format('MMMM'));

    if (dateMonth === 'декабрь') {
      setDateYears(newDate.add('year').format('YYYY'));
    }
  };

  return (
    <div>
      <Title>Текущий период:</Title>
      <Div>
        <Button type="button" onClick={monthChangeHandler}>
          <ReportIcon name="arrow-left" color="#000" size="10" />
        </Button>
        <Span>
          {dateMonth} {dateYears}
        </Span>
        <Button type="button" onClick={monthChangeHandlerRight}>
          <ReportIcon name="arrow-right" color="#000" size="10" />
        </Button>
      </Div>
    </div>
  );
};

export default MonthPicker;
