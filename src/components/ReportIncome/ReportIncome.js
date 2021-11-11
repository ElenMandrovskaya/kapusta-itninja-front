import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReportIcon } from '../ReportIcon/ReportIcon';
import { ReportCategoryList } from '../ReportCategoryList/ReportCategoryList';
import categories from '../../data/categoriesIncome.json';
import { ReportCostContainer, Title } from '../ReportCosts/ReportCosts.styled';

export function ReportIncome() {
  return (
    <div>
      <ReportCostContainer>
        {/* <NavLink to="/costs"> */}
        <ReportIcon name="arrow-left" color="#000" size="10" />
        {/* </NavLink> */}
        <Title>Доходы</Title>
        {/* <NavLink to="/costs"> */}
        <ReportIcon name="arrow-right" color="#000" size="10" />
        {/* </NavLink> */}
      </ReportCostContainer>
      <ReportCategoryList catagories={categories} />
    </div>
  );
}
