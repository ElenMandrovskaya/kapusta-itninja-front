import React from 'react';
import { Button, Div, H4, Span } from './MounthPicer.styled';
import 'moment/locale/ru';
import moment from 'moment';
import { ReportIcon } from '../ReportIcon/ReportIcon';

moment.locale('ru');
const MouthPicker = () => {
  let date = moment(new Date());

  let monthChangeHandler = e => {
    date = moment(date).add(-1, 'month').format();
    let date2 = moment(date).format('MMMM');
    console.log(date2);
  };

  let monthChangeHandlerRight = e => {
    date = moment(date).add(1, 'month').format();
    let date2 = moment(date).format('MMMM');
    console.log(date2);
  };

  return (
    <div>
      <H4>Текущий период:</H4>
      <Div>
        <Button type="button" onClick={monthChangeHandler}>
          <ReportIcon name="arrow-left" color="#000" size="10" />
        </Button>
        <Span>
          {date.format('MMMM')} {date.format('YYYY')}
        </Span>
        <Button type="button" onClick={monthChangeHandlerRight}>
          <ReportIcon name="arrow-right" color="#000" size="10" />
        </Button>
      </Div>
    </div>
  );
};

export default MouthPicker;
