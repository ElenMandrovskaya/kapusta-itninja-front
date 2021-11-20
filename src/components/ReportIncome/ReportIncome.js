import React from 'react';
import { Route, NavLink, useRouteMatch } from 'react-router-dom';
import ReportIcon from '../ReportIcon/ReportIcon';
import ReportCategoryList from '../ReportCategoryList/ReportCategoryList';
import {
    ReportCostContainer,
    Title,
    ReportTitleListWrapper,
} from '../ReportCosts/ReportCosts.styled';
import MyChart from '../../components/Charts/Charts';
import ReportIncomeError from './ReportIncomeError';

function ReportIncome({ dateMonth, dateYears, categoriesIncome, hasError }) {
    const { path } = useRouteMatch();
    return (
        <div>
            <ReportTitleListWrapper>
                <ReportCostContainer>
                    <NavLink to={`/reports/costs`}>
                        <ReportIcon name="arrow-left" color="#000" size="10" />
                    </NavLink>
                    <Title>Доходы</Title>
                    <NavLink to={`/reports/costs`}>
                        <ReportIcon name="arrow-right" color="#000" size="10" />
                    </NavLink>
                </ReportCostContainer>
                {hasError && <ReportIncomeError />}
                {!hasError && categoriesIncome && (
                    <ReportCategoryList
                        categories={categoriesIncome}
                        dateMonth={dateMonth}
                        dateYears={dateYears}
                    />
                )}
            </ReportTitleListWrapper>
            {categoriesIncome && (
                <Route path={`${path}/:icon`}>
                    <MyChart categs={categoriesIncome} />
                </Route>
            )}
        </div>
    );
}

export default ReportIncome;
