import React from 'react';
import { ReportIcon } from '../ReportIcon/ReportIcon';
import { ReportCategoryList } from '../ReportCategoryList/ReportCategoryList';
import categories from '../../data/catagoriesCosts.json';
import { ReportCostContainer, Title } from './ReportCosts.styled';

export function ReportCosts() {
  return (
    <div>
      <ReportCostContainer>
        <ReportIcon name="arrow-left" color="#000" size="10" />
        <Title>Расходы</Title>
        <ReportIcon name="arrow-right" color="#000" size="10" />
      </ReportCostContainer>
      <ReportCategoryList catagories={categories} />
    </div>
  );
}
