import React from "react";
import useModal from "../Modal/useModal";
import Modal from "../Modal/logoutModal";
import { useDispatch } from "react-redux";
import * as transactionsOps from "../../redux/transactions/transactions-ops";
import { Item, ItemDate, ItemDesc, ItemCategory, ItemSum, ItemBtn } from "./ExpenseItem.styled"

function ExpenseItem( {date, description, value, category, id} ) {
    const { isShowingModal, toggle } = useModal();
    const dispatch = useDispatch();
    const handleDelete = () => {
             dispatch(transactionsOps.removeTransaction(id))
    };

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
                toAgree={handleDelete}
                text={'Вы уверены?'}
                onClose={toggle} />}
        </Item>
    );
};

export default ExpenseItem;