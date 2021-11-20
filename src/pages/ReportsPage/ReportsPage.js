import React from 'react';
import { useState, useEffect } from 'react';
import Balance from '../../components/Balance/Balance';
import GoBackHomeBtn from '../../components/GoBackHomeButton/GoBackHomeButton';
import MonthPicker from '../../components/MonthPicker/MonthPicker';
import StatisticAmounts from '../../components/StatisticAmounts/StatisticAmounts';
import Report from '../../components/Report/Report';
import { ReportsPageHeader, ReportsPageForMobile } from './ReportsPage.styled';
import { AppWrap } from '../../app/App.styled';
import 'moment/locale/ru';
import moment from 'moment';
import { getCategoriesByCosts, getCategoriesByIncome } from '../../api/reportsApi';

/* eslint-disable */
function ReportsPage() {
    const [newDate, setNewDate] = useState(moment(new Date()));
    const [dateMonth, setDateMonth] = useState(moment(new Date()).format('MM'));
    const [dateYears, setDateYears] = useState(moment(new Date()).format('YYYY'));
    const [categoriesCosts, setCategoriesCosts] = useState([]);
    const [categoriesIncome, setCategoriesIncome] = useState([]);
    const [hasError, setHasError] = useState(false);

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

    useEffect(() => {
        async function getCategories() {
            try {
                const costs = await getCategoriesByCosts(dateMonth, dateYears);
                setCategoriesCosts(costs);
                const income = await getCategoriesByIncome(dateMonth, dateYears);
                setCategoriesIncome(income);
                setHasError(false);
            } catch (error) {
                setHasError(true);
            }
        }
        getCategories();
    }, [dateMonth, dateYears]);

    return (
        <AppWrap>
            <ReportsPageHeader>
                <GoBackHomeBtn text="Вернуться на главную" />
                <ReportsPageForMobile>
                    <Balance />
                    <MonthPicker
                        monthChangeHandler={monthChangeHandler}
                        monthChangeHandlerRight={monthChangeHandlerRight}
                        dateMonth={dateMonth}
                        dateYears={dateYears}
                    />
                </ReportsPageForMobile>
            </ReportsPageHeader>
            <StatisticAmounts
                categoriesCosts={categoriesCosts.result}
                categoriesIncome={categoriesIncome.result}
                hasError={hasError}
            />
            <Report
                dateMonth={Number(dateMonth)}
                dateYears={Number(dateYears)}
                categoriesCosts={categoriesCosts.result}
                categoriesIncome={categoriesIncome.result}
                hasError={hasError}
            />
        </AppWrap>
    );
}

export default ReportsPage;
