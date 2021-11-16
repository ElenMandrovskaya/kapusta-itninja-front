import React from 'react';
import { NavLink } from 'react-router-dom';
import ReportIcon from '../ReportIcon/ReportIcon';
import ReportCategoryList from '../ReportCategoryList/ReportCategoryList';
import { ReportCostContainer, Title } from './ReportCosts.styled';

function ReportCosts({ dateMonth, dateYears, categoriesCosts }) {
  return (
    <div>
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
    </div>
  );
}

export default ReportCosts;
