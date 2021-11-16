import React, { useState, useEffect } from "react";
import {
    CategoryContainer, Input, CategoryList,
    CategoryItem, CategoryLabel, RadioButton, ArrowDown, ArrowUp
} from "./CategoryInput.styled";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { getCategoriesByExpense, getCategoriesByIncome } from "../../api/categoriesApi";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

const CategoryInput = ({ type, categoryPick, setCategory, setCategoryId}) => {
    const [isCategories, setIsCategories] = useState(false);
    const [categories, setCategories] = useState("");
    const [typeTransaction, setTypeTransaction] = useState("");

    useEffect(() => {   
        async function getCategory() {
            try {
                const listExp = await getCategoriesByExpense();
                setCategories(listExp)
                if (type === 'Incomes') {
                const listInc = await getCategoriesByIncome();
                setCategories(listInc)    
                }
            } catch (error) {
                // toast.warning(error.message)
            }
        } getCategory()}, []);

    const handleClick = () => {
    setIsCategories(!isCategories);
    };

    const handleCategoryClick = (e) => {
    setCategory(e.currentTarget.value);
    setCategoryId(e.currentTarget.id);
    setTypeTransaction(e.currentTarget.name)
    console.log(e.currentTarget)
    handleClick();
    };
    // console.log(typeTransaction)
    return (
        <CategoryContainer>
            <Input
                id="category_input"
                autoComplete="off"
                type="text"
                readOnly
                value={categoryPick}                
                placeholder={
                type === "Expenses" ? "Категория товара" : "Категория дохода"
                }
                onClick={handleClick}
                onFocus={handleClick}            
            />
            {!isCategories || (
                <CategoryList>
                    {type === "Expenses"
                        ? categories.map(({_id, name}) => (
                            <CategoryItem key={_id}>
                                <CategoryLabel tabIndex={0}>
                                    <RadioButton
                                        onClick={handleCategoryClick}
                                        hidden
                                        value={name}
                                        id={_id}
                                        readOnly
                                        type="radio"
                                        name={type}
                                    />
                                    {name}
                                </CategoryLabel>
                            </CategoryItem>
                        ))
                        : categories.map(({_id, name}) => (
                            <CategoryItem key={_id}>
                                <CategoryLabel tabIndex={0}>
                                    <RadioButton
                                        onClick={handleCategoryClick}
                                        hidden
                                        value={name}
                                        id={_id}
                                        readOnly
                                        type="radio"
                                        name={type}                            
                                    />
                                    {name}
                                </CategoryLabel>
                            </CategoryItem>
                        ))}
                </CategoryList>
            )}
            {!isCategories ? (
                <ArrowDown
                onClick={handleClick}
                onFocus={handleClick}
                id="arrow"
                >
                    <IoIosArrowDown
                        color="#C7CCDC"
                        width="12px"
                        height="8"
                    />
                </ArrowDown>
            ) : (
                <ArrowUp
                onClick={handleClick}
                onFocus={handleClick}
                id="arrow"
                >
                    <IoIosArrowUp
                        color="#C7CCDC"
                        width="12px"
                        height="8"                            
                    />
                </ArrowUp>
            )}
        </CategoryContainer>
    );
};

export default CategoryInput;