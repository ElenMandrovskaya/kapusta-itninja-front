import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { ReportContainer } from './Report.styled';
import ReportCosts from '../ReportCosts/ReportCosts';
import ReportIncome from '../ReportIncome/ReportIncome';

function Report({ dateMonth, dateYears }) {
  // const { url, path } = useRouteMatch();

  return (
    <ReportContainer>
      <Switch>
        <Route path={`/reports/costs`}>
          <ReportCosts dateMonth={dateMonth} dateYears={dateYears} />
        </Route>
        <Route path={`/reports/income`}>
          <ReportIncome dateMonth={dateMonth} dateYears={dateYears} />
        </Route>
        <Redirect to="/reports/costs" />
      </Switch>
    </ReportContainer>
  );
}

export default Report;
