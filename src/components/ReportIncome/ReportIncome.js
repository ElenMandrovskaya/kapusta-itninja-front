import React from 'react';
import { ReportIcon } from '../ReportIcon/ReportIcon';
import { ReportCategoryList } from '../ReportCategoryList/ReportCategoryList';
import categories from '../../data/categoriesIncome.json';
import { ReportCostContainer, Title } from '../ReportCosts/ReportCosts.styled';

export function ReportIncome() {
  return (
    <div>
      <ReportCostContainer>
        <ReportIcon name="arrow-left" color="#000" size="10" />
        <Title>Доходы</Title>
        <ReportIcon name="arrow-right" color="#000" size="10" />
      </ReportCostContainer>
      <ReportCategoryList catagories={categories} />
    </div>
  );
}
