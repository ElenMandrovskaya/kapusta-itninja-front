import React, {useEffect} from "react";
import useModal from "../Modal/useModal";
import Modal from "../Modal/logoutModal";
import { useDispatch, useSelector } from "react-redux";
import * as transactionsOps from "../../redux/transactions/transactions-ops";
import { Item, ItemDate, ItemDesc, ItemCategory, ItemSum, ItemBtn } from "./ExpenseItem.styled"
// import { authSelectors } from "../../redux/auth/auth-selectors"
import * as authOperations from "../../redux/auth/auth-operations"

function ExpenseItem( {date, description, value, category, id} ) {

    const { isShowingModal, toggle } = useModal();
    const dispatch = useDispatch();

    const handleDelete = () => {
             dispatch(transactionsOps.removeTransaction(id));
            //  setTimeout(() => {dispatch(authOperations.getBalance())}, 500)
            //  dispatch(authOperations.getBalance())
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
                onClose={toggle} 
                />}
        </Item>
    );
};

export default ExpenseItem;