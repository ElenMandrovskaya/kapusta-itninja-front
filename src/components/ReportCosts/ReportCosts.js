import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReportIcon } from '../ReportIcon/ReportIcon';
import { ReportCategoryList } from '../ReportCategoryList/ReportCategoryList';
import categories from '../../data/catagoriesCosts.json';
import { ReportCostContainer, Title } from './ReportCosts.styled';

export function ReportCosts() {
  return (
    <div>
      <ReportCostContainer>
        {/* <NavLink to="/income"> */}
        <ReportIcon name="arrow-left" color="#000" size="10" />
        {/* </NavLink> */}
        <Title>Расходы</Title>
        {/* <NavLink to="/income"> */}
        <ReportIcon name="arrow-right" color="#000" size="10" />
        {/* </NavLink> */}
      </ReportCostContainer>
      <ReportCategoryList catagories={categories} />
    </div>
  );
}
