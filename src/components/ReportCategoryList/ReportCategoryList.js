import React from 'react';
import { ReportCategoryItem } from '../ReportCategoryItem/ReportCategoryItem';
import { CategoryList } from './ReportCategoryList.styled';

export function ReportCategoryList({ catagories }) {
  return (
    <CategoryList>
      {catagories.map(({ name, sum, icon }) => {
        return (
          <ReportCategoryItem key={icon} name={name} sum={sum} icon={icon} />
        );
      })}
    </CategoryList>
  );
}
