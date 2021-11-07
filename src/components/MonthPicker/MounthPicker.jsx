import React from 'react';
import { Button, Div, H4, Span, Svg, SvgLeft } from './MounthPicer.styled';
import 'moment/locale/ru';
import moment from 'moment';
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
          <Svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.62,2.99 C16.13,2.5 15.34,2.5 14.85,2.99 L6.54,11.3 C6.15,11.69 6.15,12.32 6.54,12.71 L14.85,21.02 C15.34,21.51 16.13,21.51 16.62,21.02 C17.11,20.53 17.11,19.74 16.62,19.25 L9.38,12 L16.63,4.75 C17.11,4.27 17.11,3.47 16.62,2.99 Z"
              // id="🔹-Icon-Color"
              fill="#ff751d"
            ></path>
          </Svg>
        </Button>
        <Span>
          {date.format('MMMM')} {date.format('YYYY')}
        </Span>
        <Button type="button" onClick={monthChangeHandlerRight}>
          <SvgLeft
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.62,2.99 C16.13,2.5 15.34,2.5 14.85,2.99 L6.54,11.3 C6.15,11.69 6.15,12.32 6.54,12.71 L14.85,21.02 C15.34,21.51 16.13,21.51 16.62,21.02 C17.11,20.53 17.11,19.74 16.62,19.25 L9.38,12 L16.63,4.75 C17.11,4.27 17.11,3.47 16.62,2.99 Z"
              fill="#ff751d"
            ></path>
          </SvgLeft>
        </Button>
      </Div>
    </div>
  );
};

export default MouthPicker;
