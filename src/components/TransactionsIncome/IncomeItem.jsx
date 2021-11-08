import React from 'react';
import { Item, ItemDate, ItemDesc, ItemCategory, ItemSum, ItemBtn } from "./IncomeItem.styled"

const IncomeItem = () => {
    return (
        <Item>
            <ItemDate>дата</ItemDate>
            <ItemDesc>описание</ItemDesc>
            <ItemCategory>категория</ItemCategory>
            <ItemSum> +  грн.</ItemSum>
            <ItemBtn type="button" />
        </Item>
    );
};

export default IncomeItem;