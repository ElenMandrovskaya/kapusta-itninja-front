import React from 'react';
import { Route, NavLink, useRouteMatch, Switch, Redirect } from 'react-router-dom';
import ReportIcon from '../ReportIcon/ReportIcon';
import ReportCategoryList from '../ReportCategoryList/ReportCategoryList';
import { ReportCostContainer, Title, ReportTitleListWrapper } from './ReportCosts.styled';
import MyChart from '../../components/Charts/Charts';
import ReportCostError from './ReportCostError';

function ReportCosts({ dateMonth, dateYears, categoriesCosts }) {
    const { path } = useRouteMatch();
    return (
        <div>
            <ReportTitleListWrapper>
                <ReportCostContainer>
                    <NavLink to={`/reports/income`}>
                        <ReportIcon name="arrow-left" color="#000" size="10" />
                    </NavLink>
                    <Title>Расходы</Title>
                    <NavLink to={`/reports/income`}>
                        <ReportIcon name="arrow-right" color="#000" size="10" />
                    </NavLink>
                </ReportCostContainer>
                {categoriesCosts?.length === 0 && <ReportCostError />}
                {categoriesCosts?.length > 0 && (
                    <ReportCategoryList
                        categories={categoriesCosts}
                        dateMonth={dateMonth}
                        dateYears={dateYears}
                    />
                )}
            </ReportTitleListWrapper>
            {categoriesCosts?.length > 0 && (
                <Switch>
                    <Route path={`${path}/:icon`}>
                        <MyChart categs={categoriesCosts} />
                    </Route>
                    <Redirect to="/reports/costs/products" />
                </Switch>
            )}
        </div>
    );
}

export default ReportCosts;
