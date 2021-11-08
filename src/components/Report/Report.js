import React from 'react';
import { ReportContainer } from './Report.styled';
import { ReportCosts } from '../ReportCosts/ReportCosts';
import { ReportIncome } from '../ReportIncome/ReportIncome';

export function Report() {
  return (
    <ReportContainer>
      <ReportCosts />
      <ReportIncome />
    </ReportContainer>
  );
}
