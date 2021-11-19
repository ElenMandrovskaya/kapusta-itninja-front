import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Balance from "../../components/Balance/Balance";
import GoBackHomeBtn from "../../components/GoBackHomeButton/GoBackHomeButton";
import MonthPicker from "../../components/MonthPicker/MonthPicker";
import StatisticAmounts from "../../components/StatisticAmounts/StatisticAmounts";
import Report from "../../components/Report/Report";
import { ReportsPageHeader } from "./ReportsPage.styled";
import { AppWrap } from "../../app/App.styled";
import "moment/locale/ru";
import moment from "moment";
import {
  getCategoriesByCosts,
  getCategoriesByIncome,
} from "../../api/reportsApi";
import * as authOperations from "../../redux/auth/auth-operations"

/* eslint-disable */
function ReportsPage() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  const [newDate, setNewDate] = useState(moment(new Date()));
  const [dateMonth, setDateMonth] = useState(moment(new Date()).format("MM"));
  const [dateYears, setDateYears] = useState(moment(new Date()).format("YYYY"));
  const [categoriesCosts, setCategoriesCosts] = useState([]);
  const [categoriesIncome, setCategoriesIncome] = useState([]);

  let monthChangeHandler = () => {
    setDateMonth(newDate.add(-1, "month").format("MM"));
    if (dateMonth === "01") {
      setDateYears(newDate.add("year").format("YYYY"));
    }
  };

  let monthChangeHandlerRight = () => {
    setDateMonth(newDate.add(1, "month").format("MM"));
    if (dateMonth === "12") {
      setDateYears(newDate.add("year").format("YYYY"));
    }
  };

  useEffect(() => {
    async function getCategories() {
      const costs = await getCategoriesByCosts(dateMonth, dateYears);
      setCategoriesCosts(costs);
      // console.log(costs);
      const income = await getCategoriesByIncome(dateMonth, dateYears);
      setCategoriesIncome(income);
    }
    getCategories();
  }, [dateMonth, dateYears]);

  return (
    <AppWrap>
      <ReportsPageHeader>
        <GoBackHomeBtn />
        <Balance />
        <MonthPicker
          monthChangeHandler={monthChangeHandler}
          monthChangeHandlerRight={monthChangeHandlerRight}
          dateMonth={dateMonth}
          dateYears={dateYears}
        />
      </ReportsPageHeader>
      <StatisticAmounts
        categoriesCosts={categoriesCosts.result}
        categoriesIncome={categoriesIncome.result}
      />
      <Report
        dateMonth={Number(dateMonth)}
        dateYears={Number(dateYears)}
        categoriesCosts={categoriesCosts.result}
        categoriesIncome={categoriesIncome.result}
      />
    </AppWrap>
  );
}

export default ReportsPage;
