import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ReportIcon from '../ReportIcon/ReportIcon';
import ReportCategoryList from '../ReportCategoryList/ReportCategoryList';
// import categories from '../../data/categoriesIncome.json';
import { getCategoriesByIncome } from '../../api/reportsApi';
import { ReportCostContainer, Title } from '../ReportCosts/ReportCosts.styled';

function ReportIncome({ dateMonth, dateYears }) {
  const [categories, setCategories] = useState([]);
  // console.log(dateMonth, dateYears);

  useEffect(() => {
    getCategoriesByIncome(dateMonth, dateYears).then(resp =>
      setCategories(resp.result),
    );
  }, [dateMonth, dateYears]);

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
        categories={categories}
        dateMonth={dateMonth}
        dateYears={dateYears}
      />
    </div>
  );
}

export default ReportIncome;
