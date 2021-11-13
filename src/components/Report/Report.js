import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { ReportContainer } from './Report.styled';
import { ReportCosts } from '../ReportCosts/ReportCosts';
import { ReportIncome } from '../ReportIncome/ReportIncome';

export function Report() {
  const { url, path } = useRouteMatch();

  return (
    <ReportContainer>
      <Switch>
        <Route path={`/reports/costs`}>
          <ReportCosts />
        </Route>
        <Route path={`/reports/income`}>
          <ReportIncome />
        </Route>
        <Redirect to="/reports/costs" />
      </Switch>
    </ReportContainer>
  );
}
