import React, {useEffect} from "react";
import useModal from "../Modal/useModal";
import Modal from "../Modal/logoutModal";
import { useDispatch } from "react-redux";

import * as authOperations from "../../redux/auth//auth-operations";
import { Item, ItemDate, ItemDesc, ItemCategory, ItemSum, ItemBtn } from "./ExpenseItem.styled"


function ExpenseItem( {date, description, value, category, onDelete} ) {

    const { isShowingModal, toggle } = useModal();
    const dispatch = useDispatch();

    // const handleDelete = () => {
    //          dispatch(transactionsOps.removeTransaction(id));
    //         //  setTimeout(() => {dispatch(authOperations.getBalance())}, 500)
    //         //  dispatch(authOperations.getBalance())
    // };
    // useEffect(() => {
    //     dispatch(authOperations.getBalance());
    //   }, [dispatch]);   


    return (
        <Item>
            <ItemDate>{date}</ItemDate>
            <ItemDesc>{description}</ItemDesc>
            <ItemCategory>{category}</ItemCategory>
            <ItemSum>-{value} грн.</ItemSum>
            <ItemBtn
                type="button"
                // onClick={onDelete}
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