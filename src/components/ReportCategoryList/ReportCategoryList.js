import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { ReportCategoryItem } from '../ReportCategoryItem/ReportCategoryItem';
import { CategoryList } from './ReportCategoryList.styled';
import MyChart from '../../components/Charts/Charts';

export function ReportCategoryList({ catagories }) {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <CategoryList>
        {catagories.map(({ name, sum, icon }) => {
          return (
            <ReportCategoryItem key={icon} name={name} sum={sum} icon={icon} />
          );
        })}
      </CategoryList>

      <Route path={`${path}/:icon`}>
        <MyChart />
      </Route>
    </div>
  );
}
