import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { ReportIcon } from '../ReportIcon/ReportIcon';
import { ReportCategoryList } from '../ReportCategoryList/ReportCategoryList';
import categories from '../../data/categoriesIncome.json';
import { ReportCostContainer, Title } from '../ReportCosts/ReportCosts.styled';

export function ReportIncome() {
  const { url, path } = useRouteMatch();

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
      <ReportCategoryList catagories={categories} />
    </div>
  );
}
