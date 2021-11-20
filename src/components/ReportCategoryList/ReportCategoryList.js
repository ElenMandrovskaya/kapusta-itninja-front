import React from 'react';
import ReportCategoryItem from '../ReportCategoryItem/ReportCategoryItem';
import { CategoryList } from './ReportCategoryList.styled';

function ReportCategoryList({ categories }) {
    return (
        <div>
            <CategoryList>
                {categories.map(({ category, total, icon }) => {
                    return (
                        <ReportCategoryItem key={icon} name={category} sum={total} icon={icon} />
                    );
                })}
            </CategoryList>
        </div>
    );
}

export default ReportCategoryList;
