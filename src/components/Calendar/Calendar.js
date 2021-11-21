import React from "react";
import DatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import { DateContainer, Label } from "./Calendar.styled";
// import { IoCalendarOutline } from "react-icons/io5";

const Calendar = ({ selectedDate, handleChange, maxDate }) => (
    <DateContainer>
        <Label htmlFor="datepicker" >
            {/* <IoCalendarOutline /> */}
        </Label>
        <DatePicker
        className="datepicker"
        id="datepicker"
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd.MM.yyyy"
            name="date"
            maxDate={maxDate}
        fixedHeight
        />
  </DateContainer>
);

export default Calendar;