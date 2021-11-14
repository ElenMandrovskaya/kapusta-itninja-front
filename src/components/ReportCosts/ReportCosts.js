import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ReportIcon from '../ReportIcon/ReportIcon';
import ReportCategoryList from '../ReportCategoryList/ReportCategoryList';
// import categories from '../../data/catagoriesCosts.json';
import { ReportCostContainer, Title } from './ReportCosts.styled';
import { getCategoriesByCosts } from '../../api/reportsApi';

function ReportCosts() {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    getCategoriesByCosts(11, 2021).then(resp => setCategories(resp.result));
  }, []);

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
      <ReportCategoryList categories={categories} />
    </div>
  );
}

export default ReportCosts;
