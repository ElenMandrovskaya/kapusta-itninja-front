import React from "react";
import { useDispatch } from "react-redux";
import * as transactionsOps from "../../redux/transactions/transactions-ops";
import useModal from "../Modal/useModal";
import Modal from "../Modal/logoutModal";
import { Item, ItemDate, ItemDesc, ItemCategory, ItemSum, ItemBtn } from "./IncomeItem.styled"

const IncomeItem = ({ date, description, value, category, id }) => {
    const { isShowingModal, toggle } = useModal();
    const dispatch = useDispatch();

    return (
        <Item>
            <ItemDate>{date}</ItemDate>
            <ItemDesc>{description}</ItemDesc>
            <ItemCategory>{category}</ItemCategory>
            <ItemSum>+{value} грн.</ItemSum>
            <ItemBtn
                type="button"
                onClick={()=>toggle()}
            />
            {isShowingModal && <Modal
                toAgree={() => dispatch(transactionsOps.removeTransaction(id))}
                text={"Вы уверены?"}
                onClose={toggle} />}
        </Item>
    );
};

export default IncomeItem;