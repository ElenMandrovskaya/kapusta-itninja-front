import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import ReportCategoryItem from "../ReportCategoryItem/ReportCategoryItem";
import { CategoryList } from "./ReportCategoryList.styled";
import MyChart from "../../components/Charts/Charts";

function ReportCategoryList({ categories }) {
  const { path } = useRouteMatch();

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

      {categories && (
        <Route path={`${path}/:icon`}>
          <MyChart categs={categories} />
        </Route>
      )}
    </div>
  );
}

export default ReportCategoryList;
