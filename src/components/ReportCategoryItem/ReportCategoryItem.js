import React from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom';
import ReportIcon from '../ReportIcon/ReportIcon';
import { CategoryItem, Text } from './ReportCategoryItem.styled';

function ReportCategoryItem({ name, sum, icon }) {
    const { url } = useRouteMatch();

    return (
        <CategoryItem>
            <NavLink to={`${url}/${icon}`} activeClassName="active">
                <Text>{sum}.00</Text>
                <ReportIcon name={icon} color="#071F41" size="56" />
                <Text>{name}</Text>
            </NavLink>
        </CategoryItem>
    );
}

export default ReportCategoryItem;
