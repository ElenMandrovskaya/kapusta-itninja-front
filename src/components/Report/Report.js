import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ReportContainer } from './Report.styled';
// import { ReportCosts } from '../ReportCosts/ReportCosts';
// import { ReportIncome } from '../ReportIncome/ReportIncome';
import { ReportCostsPage } from '../../pages/ReportCostsPage';
import { ReportIncomePage } from '../../pages/ReportIncomePage';

export function Report() {
  return (
    <ReportContainer>
      {/* <Switch> */}
      <Route path="/costs">
        <ReportCostsPage />
      </Route>
      {/* <Route path="/income"> */}
      {/* <ReportIncomePage /> */}
      {/* </Route> */}
      {/* </Switch> */}
    </ReportContainer>
  );
}
