import React from 'react';
import useModal from "../Modal/useModal";
import Modal from "../Modal/logoutModal";
import { Item, ItemDate, ItemDesc, ItemCategory, ItemSum, ItemBtn } from "./IncomeItem.styled"

const IncomeItem = ({ date, description, amount, id, category, typeTransaction }) => {
    const { isShowingModal, toggle } = useModal();
    
    return (
        <Item>
            <ItemDate>{date}</ItemDate>
            <ItemDesc>{description}</ItemDesc>
            <ItemCategory>{category}</ItemCategory>
            <ItemSum>+{amount} грн.</ItemSum>
            <ItemBtn
                type="button"
                onClick={()=>toggle()}
            />
            {isShowingModal && <Modal text={'Вы уверены?'} onClose={toggle} />}
        </Item>
    );
};

export default IncomeItem;