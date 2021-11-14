import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { ReportContainer } from './Report.styled';
import ReportCosts from '../ReportCosts/ReportCosts';
import ReportIncome from '../ReportIncome/ReportIncome';

export default function Report() {
  const { url, path } = useRouteMatch();
console.log(path)
  return (
    <ReportContainer>
      <Switch>
        <Route path={`${path}/costs`}>
          <ReportCosts />
        </Route>
        <Route path={`${path}income`}>
          <ReportIncome />
        </Route>
        <Redirect to="/reports/costs" />
      </Switch>
    </ReportContainer>
  );
}
