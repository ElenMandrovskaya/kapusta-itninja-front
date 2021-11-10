import React from "react";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import { DateContainer, Label } from "./Calendar.styled";

const Calendar = ({ selectedDate, handleChange }) => (
    <DateContainer>
        <Label htmlFor="datepicker" >
        </Label>
        <DatePicker
        className="datepicker"
        id="datepicker"
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd.MM.yyyy"
        name="date"
        fixedHeight
        />
  </DateContainer>
);

export default Calendar;