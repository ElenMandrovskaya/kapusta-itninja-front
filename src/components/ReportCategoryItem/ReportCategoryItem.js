import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import ReportIcon from '../ReportIcon/ReportIcon';
import { CategoryItem, Text, NavLinkElem } from './ReportCategoryItem.styled';

function ReportCategoryItem({ name, sum, icon }) {
  const { url, path } = useRouteMatch();

  return (
    <CategoryItem>
      <NavLinkElem to={`${url}/${icon}`}>
        <Text>{sum}.00</Text>
        <ReportIcon name={icon} color="#071F41" size="56" />
        <Text>{name}</Text>
      </NavLinkElem>
    </CategoryItem>
  );
}

export default ReportCategoryItem;
