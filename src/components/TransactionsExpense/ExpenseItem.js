import React from "react";
import useModal from "../Modal/useModal";
import Modal from "../Modal/logoutModal";
import { Item, ItemDate, ItemDesc, ItemCategory, ItemSum, ItemBtn } from "./ExpenseItem.styled"


function ExpenseItem( {date, description, value, category, onDelete} ) {

    const { isShowingModal, toggle } = useModal();

    return (
        <Item>
            <ItemDate>{date}</ItemDate>
            <ItemDesc>{description}</ItemDesc>
            <ItemCategory>{category}</ItemCategory>
            <ItemSum>-{value} грн.</ItemSum>
            <ItemBtn
                type="button"
                onClick={()=>toggle()}
            />
            {isShowingModal && <Modal
                toAgree={onDelete}
                text={'Вы уверены?'}
                onClose={toggle} 
                />}
        </Item>
    );
};

export default ExpenseItem;