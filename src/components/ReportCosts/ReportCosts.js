import React from 'react';
import { Route, NavLink, useRouteMatch } from 'react-router-dom';
import ReportIcon from '../ReportIcon/ReportIcon';
import ReportCategoryList from '../ReportCategoryList/ReportCategoryList';
import {
  ReportCostContainer,
  Title,
  ReportTitleListWrapper,
} from './ReportCosts.styled';
import MyChart from '../../components/Charts/Charts';

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
        {categoriesCosts && (
          <ReportCategoryList
            categories={categoriesCosts}
            dateMonth={dateMonth}
            dateYears={dateYears}
          />
        )}
      </ReportTitleListWrapper>

      {categoriesCosts && (
        <Route path={`${path}/:icon`}>
          <MyChart categs={categoriesCosts} />
        </Route>
      )}
    </div>
  );
}

export default ReportCosts;
