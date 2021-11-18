import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Div, Title, Span, Picker } from "./MonthPicker.styled";
import "moment/locale/ru";
import moment from "moment";
import ReportIcon from "../ReportIcon/ReportIcon";

const MonthPicker = ({
  monthChangeHandler,
  monthChangeHandlerRight,
  dateMonth,
  dateYears,
}) => {
  return (
    <Div>
      <Title>Текущий период:</Title>
      <Picker>
        <Button type="button" onClick={monthChangeHandler}>
          <NavLink to={`/reports/costs`}>
            <ReportIcon name="arrow-left" color="#000" size="10" />
          </NavLink>
        </Button>
        <Span>
          {moment(dateMonth).format("MMMM")} {dateYears}
        </Span>
        <Button type="button" onClick={monthChangeHandlerRight}>
          <NavLink to={`/reports/costs`}>
            <ReportIcon name="arrow-right" color="#000" size="10" />
          </NavLink>
        </Button>
      </Picker>
    </Div>
  );
};

export default MonthPicker;
