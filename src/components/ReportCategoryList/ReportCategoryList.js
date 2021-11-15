import React from 'react';
import { useState, useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import ReportCategoryItem from '../ReportCategoryItem/ReportCategoryItem';
import { CategoryList } from './ReportCategoryList.styled';
import MyChart from '../../components/Charts/Charts';
import {
  getCategoriesByIncome,
  getCategoriesByCosts,
} from '../../api/reportsApi';

function ReportCategoryList({ categories, dateMonth, dateYears }) {
  const { url, path } = useRouteMatch();
  const [categs, setCategs] = useState([]);
  // console.log(categs);

  useEffect(() => {
    getCategoriesByCosts(dateMonth, dateYears).then(resp =>
      setCategs(resp.result),
    );
  }, []);
  useEffect(() => {
    getCategoriesByIncome(dateMonth, dateYears).then(resp =>
      setCategs(resp.result),
    );
  }, []);

  console.log(categs);

  return (
    <div>
      <CategoryList>
        {categories.map(({ category, total, icon }) => {
          return (
            <ReportCategoryItem
              key={icon}
              name={category}
              sum={total}
              icon={icon}
            />
          );
        })}
      </CategoryList>

      <Route path={`${path}/:icon`}>
        <MyChart categs={categs} />
      </Route>
    </div>
  );
}

export default ReportCategoryList;
