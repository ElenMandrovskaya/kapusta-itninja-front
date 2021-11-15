import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ReportIcon from '../ReportIcon/ReportIcon';
import ReportCategoryList from '../ReportCategoryList/ReportCategoryList';
// import categories from '../../data/catagoriesCosts.json';
import { ReportCostContainer, Title } from './ReportCosts.styled';
import { getCategoriesByCosts } from '../../api/reportsApi';

function ReportCosts({ dateMonth, dateYears }) {
  const [categories, setCategories] = useState([]);
  // console.log(dateMonth, dateYears);
  // console.log(categories);

  useEffect(() => {
    getCategoriesByCosts(dateMonth, dateYears).then(resp =>
      setCategories(resp.result),
    );
  }, [dateMonth, dateYears]);

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
      {categories && (
        <ReportCategoryList
          categories={categories}
          dateMonth={dateMonth}
          dateYears={dateYears}
        />
      )}
    </div>
  );
}

export default ReportCosts;
