import React from 'react';
import { NavLink } from 'react-router-dom';
import ReportIcon from '../ReportIcon/ReportIcon';
import ReportCategoryList from '../ReportCategoryList/ReportCategoryList';
import { ReportCostContainer, Title } from '../ReportCosts/ReportCosts.styled';

function ReportIncome({ dateMonth, dateYears, categoriesIncome }) {
  return (
    <div>
      <ReportCostContainer>
        <NavLink to={`/reports/costs`}>
          <ReportIcon name="arrow-left" color="#000" size="10" />
        </NavLink>
        <Title>Доходы</Title>
        <NavLink to={`/reports/costs`}>
          <ReportIcon name="arrow-right" color="#000" size="10" />
        </NavLink>
      </ReportCostContainer>
      <ReportCategoryList
        categories={categoriesIncome}
        dateMonth={dateMonth}
        dateYears={dateYears}
      />
    </div>
  );
}

export default ReportIncome;
